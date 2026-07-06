import { html } from "lit";
import { PLACEHOLDER_LOGO } from "./const.js";


// Renders a team/opponent logo that degrades gracefully. The image tries the
// primary source, then the alternate source (when it differs), and finally the
// built-in placeholder, so a broken-image icon is never shown even when a
// team's badge is unavailable.
export function logoImg(cls, src, alt) {
    const primary = src || PLACEHOLDER_LOGO;
    const fallback = (alt && alt !== src) ? alt : PLACEHOLDER_LOGO;
    const onerror = `this.onerror=function(){this.onerror=null;this.src='${PLACEHOLDER_LOGO}';}; this.src='${fallback}';`;
    return html`<img class="${cls}" src="${primary}" onerror="${onerror}" />`;
}

// Background logos are purely decorative. If the primary (and alternate) source
// can't be loaded we simply hide the element instead of showing a placeholder.
export function bgImg(cls, src, alt) {
    if (!src) {
        return html``;
    }
    const fallback = (alt && alt !== src) ? alt : "";
    const onerror = fallback
        ? `this.onerror=function(){this.onerror=null;this.style.display='none';}; this.src='${fallback}';`
        : `this.onerror=null; this.style.display='none';`;
    return html`<img class="${cls}" src="${src}" onerror="${onerror}" />`;
}
