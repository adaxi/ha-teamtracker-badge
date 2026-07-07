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
        handleAction(this, this.hass, this._config, action);
    }

    static getConfigElement() {
        return document.createElement("teamtracker-badge-editor");
    }

    static getStubConfig() {
        return { entity: "" };
    }

}
