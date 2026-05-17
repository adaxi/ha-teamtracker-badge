import { html } from "lit";
import { styleMap } from 'lit/directives/style-map.js';


export function renderPost(c) {
    return html`
    <div class="badge">
        <img class="team-bg" src="${c.logo[1]}"
            onerror="this.onerror=null; this.src='${c.logoAlternate[1]}';" />
        <img class="opponent-bg" src="${c.logo[2]}"
            onerror="this.onerror=null; this.src='${c.logoAlternate[2]}';" />
        <div class="badge-content">
            <div class="badge-team-left">
                <img class="badge-logo" src="${c.logo[1]}"
                    onerror="this.onerror=null; this.src='${c.logoAlternate[1]}';" />
                <span class="badge-name">${c.name[1]}</span>
            </div>
            <div class="badge-center">
                <div class="badge-score-wrapper">
                    <span class="badge-score" style=${styleMap({ opacity: `${c.scoreOp[1]}` })}>${c.score[1]}</span>
                    <span class="badge-divider"> - </span>
                    <span class="badge-score" style=${styleMap({ opacity: `${c.scoreOp[2]}` })}>${c.score[2]}</span>
                </div>
            </div>
            <div class="badge-team-right">
                <span class="badge-name">${c.name[2]}</span>
                <img class="badge-logo" src="${c.logo[2]}"
                    onerror="this.onerror=null; this.src='${c.logoAlternate[2]}';" />
            </div>
        </div>
    </div>
    `;
}
