import { html } from "lit";


export function renderBye(c) {
    const t = c.teamIdx || 1;
    return html`
    <div class="badge">
        <img class="team-bg" src="${c.logo[t]}"
            onerror="this.onerror=null; this.src='${c.logoAlternate[t]}';" />
        <div class="badge-content">
            <div class="badge-team-left">
                <img class="badge-logo" src="${c.logo[t]}"
                    onerror="this.onerror=null; this.src='${c.logoAlternate[t]}';" />
                <span class="badge-name">${c.name[t]}</span>
            </div>
            <div class="badge-center">
                <span class="badge-bye-text">${c.byeTerm}</span>
            </div>
        </div>
    </div>
    `;
}
