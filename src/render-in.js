import { html } from "lit";
import { bgImg, logoImg } from "./render-helpers.js";


export function renderIn(c) {
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
                <div class="badge-score-wrapper">
                    <span class="badge-score">${c.score[1]}</span>
                    <span class="badge-divider"> - </span>
                    <span class="badge-score">${c.score[2]}</span>
                </div>
            </div>
            <div class="badge-team-right">
                <span class="badge-name">${c.name[2]}</span>
                ${logoImg("badge-logo", c.logo[2], c.logoAlternate[2])}
            </div>
            <div class="badge-clock">${c.playClock}</div>
        </div>
    </div>
    `;
}
