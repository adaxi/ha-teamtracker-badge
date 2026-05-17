import { html } from "lit";


export function renderMissingConfig() {
    return html``;
}

export function renderMissingObj(entity) {
    return html`
        <ha-card>Unknown entity: ${entity}</ha-card>
    `;
}

export function renderStateUnavailable(entity) {
    return html`
    <style>
        ha-card {padding: 10px 16px;}
    </style>
    <ha-card>
        Sensor unavailable: ${entity}
    </ha-card>
    `;
}

export function renderStateInvalid() {
    return html`
    <style>
        ha-card {padding: 10px 16px;}
    </style>
    <ha-card>
        State Invalid: ${this._config.state}
    </ha-card>
    `;
}
