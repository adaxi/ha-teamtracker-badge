import { html, LitElement } from "lit";


export class TeamTrackerBadgeEditor extends LitElement {

    static get properties() {
        return {
            _config: { type: Object },
            hass: { type: Object },
        };
    }

    setConfig(config) {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this._config = config;
    }

    configChanged(newConfig) {
        const event = new Event("config-changed", {
            bubbles: true,
            composed: true,
        });
        event.detail = { config: newConfig };
        this.dispatchEvent(event);
    }

    render() {
        if (!this.hass || !this._config) {
            return html``;
        }

        return html`
        <div>
            <h4>Team</h4>
            <ha-selector
                .value=${this._config.entity ?? ''}
                .selector=${{
                    entity: {
                        filter: { integration: 'teamtracker' }
                    }
                }}
                .hass=${this.hass}
                @value-changed=${(e) => {
                    const newConfig = { ...this._config, entity: e.detail.value };
                    this.configChanged(newConfig);
                    this.requestUpdate();
                }}
            ></ha-selector>
            <h4>Settings</h4>
            <ha-selector
                label="Home Side"
                .value=${this._config.home_side || 'team'}
                .selector=${{
                    select: {
                        mode: 'dropdown',
                        options: [
                            { value: 'team',  label: 'Team on Left' },
                            { value: 'left',  label: 'Home on Left' },
                            { value: 'right', label: 'Home on Right' },
                        ]
                    }
                }}
                @value-changed=${(e) => {
                    const val = e.detail.value === 'team' ? '' : e.detail.value;
                    const newConfig = { ...this._config, home_side: val };
                    this.configChanged(newConfig);
                    this.requestUpdate();
                }}
            ></ha-selector>
        </div>
        `;
    }
}
