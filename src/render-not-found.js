import { html } from "lit";


export function renderNotFound(c) {
    return html`
    <div class="badge">
        <div class="badge-content">
            <div class="badge-team-left">
                <img class="badge-logo" src="${c.notFoundLogoBG}" />
                <span class="badge-name">${c.notFoundTerm1}</span>
            </div>
            <div class="badge-center">
                <span class="badge-time">${c.notFoundTerm2}</span>
            </div>
        </div>
    </div>
    `;
}
