import { html } from "lit";
import { bgImg, logoImg } from "./render-helpers.js";


export function renderPre(c) {
    return html`
    <div class="badge">
        ${bgImg("team-bg", c.logo[1], c.logoAlternate[1])}
        ${bgImg("opponent-bg", c.logo[2], c.logoAlternate[2])}
        <div class="badge-content">
            <div class="badge-team-left">
                ${logoImg("badge-logo", c.logo[1], c.logoAlternate[1])}
                <span class="badge-name">${c.name[1]}</span>
            </div>
            <div class="badge-center">
                <span class="badge-time">${c.gameWeekday}</span>
                <span class="badge-time">${c.gameTime}</span>
            </div>
            <div class="badge-team-right">
                <span class="badge-name">${c.name[2]}</span>
                ${logoImg("badge-logo", c.logo[2], c.logoAlternate[2])}
            </div>
        </div>
    </div>
    `;
}
