import { html, LitElement, nothing } from "lit";


const SCHEMA = [
    {
        name: "context",
        type: "expandable",
        flatten: true,
        icon: "mdi:shape",
        schema: [
            {
                name: "entity",
                selector: {
                    entity: {
                        filter: { integration: "teamtracker" },
                    },
                },
            },
        ],
    },
    {
        name: "content",
        type: "expandable",
        flatten: true,
        icon: "mdi:text-short",
        schema: [
            {
                name: "home_side",
                selector: {
                    select: {
                        mode: "dropdown",
                        options: [
                            { value: "team", label: "Team on Left" },
                            { value: "left", label: "Home on Left" },
                            { value: "right", label: "Home on Right" },
                        ],
                    },
                },
            },
        ],
    },
    {
        name: "interactions",
        type: "expandable",
        flatten: true,
        icon: "mdi:gesture-tap",
        schema: [
            {
                name: "tap_action",
                selector: {
                    ui_action: {
                        default_action: "more-info",
                    },
                },
            },
            {
                name: "",
                type: "optional_actions",
                flatten: true,
                schema: ["hold_action", "double_tap_action"].map((action) => ({
                    name: action,
                    selector: {
                        ui_action: {
                            default_action: "none",
                        },
                    },
                })),
            },
        ],
    },
];

const LABELS = {
    context: "Context",
    content: "Content",
    interactions: "Interactions",
    home_side: "Home Side",
};


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

    _computeLabel = (schema) => {
        if (LABELS[schema.name]) {
            return LABELS[schema.name];
        }
        return this.hass.localize(
            `ui.panel.lovelace.editor.card.generic.${schema.name}`
        );
    };

    render() {
        if (!this.hass || !this._config) {
            return nothing;
        }

        return html`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${SCHEMA}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `;
    }

    _valueChanged = (ev) => {
        this.configChanged(ev.detail.value);
    };
}
