import { html } from "lit";
import { bgImg, logoImg } from "./render-helpers.js";


export function renderBye(c) {
    const t = c.teamIdx || 1;
    return html`
    <div class="badge">
        ${bgImg("team-bg", c.logo[t], c.logoAlternate[t])}
        <div class="badge-content">
            <div class="badge-team-left">
                ${logoImg("badge-logo", c.logo[t], c.logoAlternate[t])}
                <span class="badge-name">${c.name[t]}</span>
            </div>
            <div class="badge-center">
                <span class="badge-bye-text">${c.byeTerm}</span>
            </div>
        </div>
    </div>
    `;
}
