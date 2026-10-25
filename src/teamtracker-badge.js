import { handleAction, hasAction } from "custom-card-helpers";
import { LitElement, css } from "lit";
import { Translator } from "./localize/translator.js";
import { renderBye } from './render-bye.js';
import { renderMissingConfig, renderMissingObj, renderStateInvalid, renderStateUnavailable } from './render-error.js';
import { renderIn } from './render-in.js';
import { renderNotFound } from './render-not-found.js';
import { renderPost } from './render-post.js';
import { renderPre } from './render-pre.js';
import { initCardData, setDefaults, setStartInfo } from './set-defaults.js';
import { setSportData } from './set-sports.js';
import { cardStyles } from './styles.js';


export class TeamTrackerBadge extends LitElement {

    static get properties() {
        return {
            hass: {},
            _config: {},
        };
    }

    static get styles() {
        return css`
            ${cardStyles}
        `;
    }

    setConfig(config) {
        this._config = config;
        this._unsubscribeTemplates();
    }

    connectedCallback() {
        super.connectedCallback();
        this._subscribeTemplates();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._unsubscribeTemplates();
    }

    updated() {
        this._subscribeTemplates();
    }

    getCardSize() {
        return 1;
    }

    render() {
        var o = {};
        var c = {};

        if (!this.hass || !this._config) {
            return renderMissingConfig();
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return renderMissingObj(this._config.entity);
        }
        if (stateObj.state == 'unavailable') {
            return renderStateUnavailable(this._config.entity);
        }

        o.homeSide = String(this._config.home_side).toUpperCase();
        o.darkMode = this.hass.themes.darkMode;

        var team = 1;
        var oppo = 2;
        if (((o.homeSide == "RIGHT") && (stateObj.attributes.team_homeaway == "home")) ||
            ((o.homeSide == "LEFT") && (stateObj.attributes.opponent_homeaway == "home"))) {
            team = 2;
            oppo = 1;
        }

        var lang = this.hass.selectedLanguage || this.hass.language || navigator.language || "en"
        var time_format = "language";
        try {
            time_format = this.hass.locale["time_format"] || "language";
        }
        catch (e) {
            time_format = "language"
        }
        var t = new Translator(lang);

        var sport = stateObj.attributes.sport || "default";
        if (t.translate(sport + ".startTerm") == "{"+ sport + ".startTerm" + "}") {
            sport = "default";
        }

        var server_time_zone = null;
        if (this.hass.locale.time_zone == "server") {
            server_time_zone = this.hass.config.time_zone;
        }

        initCardData(c);
        setStartInfo(c, stateObj, t, lang, time_format, server_time_zone);
        setDefaults(t, lang, stateObj, c, o, team, oppo);
        setSportData(sport, stateObj, c, team, oppo);

        switch (stateObj.state) {
            case 'PRE':
                return renderPre(c);
            case 'IN':
                return renderIn(c);
            case 'POST':
                return renderPost(c);
            case 'BYE':
                return renderBye(c);
            case 'NOT_FOUND':
                return renderNotFound(c);
            default:
                return renderStateInvalid(c);
        }
    }

    firstUpdated() {
        const badge = this.shadowRoot.querySelector('.badge');
        if (badge) {
            this._bindActions(badge);
        }
    }

    // Lightweight gesture recognizer mirroring Home Assistant's action-handler
    // semantics: hold/double-tap are only detected when configured, and a tap
    // always resolves (defaulting to more-info via handleAction).
    _bindActions(el) {
        el.style.cursor = 'pointer';
        let holdTimer;
        let tapTimer;
        let held = false;

        el.addEventListener('pointerdown', () => {
            held = false;
            if (hasAction(this._config.hold_action)) {
                holdTimer = setTimeout(() => {
                    held = true;
                    this._runAction('hold');
                }, 500);
            }
        });
        el.addEventListener('pointercancel', () => {
            clearTimeout(holdTimer);
            held = false;
        });
        el.addEventListener('pointerup', () => {
            clearTimeout(holdTimer);
            if (held) {
                return;
            }
            if (!hasAction(this._config.double_tap_action)) {
                this._runAction('tap');
                return;
            }
            if (tapTimer) {
                clearTimeout(tapTimer);
                tapTimer = undefined;
                this._runAction('double_tap');
            } else {
                tapTimer = setTimeout(() => {
                    tapTimer = undefined;
                    this._runAction('tap');
                }, 250);
            }
        });
    }

    _runAction(action) {
        const key = `${action}_action`;
        const config = { ...this._config };
        if (config[key]) {
            config[key] = this._resolveTemplates(config[key]);
        }
        handleAction(this, this.hass, config, action);
    }

    // Action string fields may contain Jinja templates (e.g. url_path:
    // "{{ state_attr(entity, 'event_url') }}"). They are rendered by Home
    // Assistant ahead of time through render_template subscriptions, so the
    // result is available synchronously when the action fires (opening a URL
    // after an async round-trip would be treated as a popup by browsers).
    _subscribeTemplates() {
        if (this._templateUnsubs || !this.isConnected || !this.hass?.connection || !this._config) {
            return;
        }
        this._templateUnsubs = [];
        this._templateResults = {};
        const templates = new Set();
        ["tap_action", "hold_action", "double_tap_action"].forEach((key) =>
            this._collectTemplates(this._config[key], templates)
        );
        templates.forEach((template) => {
            const unsub = this.hass.connection.subscribeMessage(
                (msg) => {
                    if (msg.result !== undefined) {
                        this._templateResults[template] = String(msg.result);
                    }
                },
                {
                    type: "render_template",
                    template,
                    variables: { entity: this._config.entity },
                }
            );
            unsub.catch((err) => console.warn("teamtracker-badge: template error", template, err));
            this._templateUnsubs.push(unsub);
        });
    }

    _unsubscribeTemplates() {
        if (!this._templateUnsubs) {
            return;
        }
        this._templateUnsubs.forEach((unsub) => unsub.then((fn) => fn()).catch(() => {}));
        this._templateUnsubs = undefined;
        this._templateResults = {};
    }

    _isTemplate(value) {
        return typeof value === 'string' && (value.includes('{{') || value.includes('{%'));
    }

    _collectTemplates(value, templates) {
        if (this._isTemplate(value)) {
            templates.add(value);
        } else if (value && typeof value === 'object') {
            Object.values(value).forEach((v) => this._collectTemplates(v, templates));
        }
    }

    _resolveTemplates(value) {
        if (this._isTemplate(value)) {
            return this._templateResults?.[value] ?? '';
        }
        if (Array.isArray(value)) {
            return value.map((v) => this._resolveTemplates(v));
        }
        if (value && typeof value === 'object') {
            return Object.fromEntries(
                Object.entries(value).map(([k, v]) => [k, this._resolveTemplates(v)])
            );
        }
        return value;
    }

    static getConfigElement() {
        return document.createElement("teamtracker-badge-editor");
    }

    static getStubConfig() {
        return { entity: "" };
    }

}
