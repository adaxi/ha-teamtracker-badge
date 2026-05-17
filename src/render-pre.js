import { html } from "lit";


export function renderPre(c) {
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
                <span class="badge-time">${c.gameWeekday}</span>
                <span class="badge-time">${c.gameTime}</span>
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
