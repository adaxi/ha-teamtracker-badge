import { VERSION } from "./const.js";
import { TeamTrackerBadgeEditor } from "./badge-editor.js";
import { TeamTrackerBadge } from "./teamtracker-badge.js";


customElements.define("teamtracker-badge", TeamTrackerBadge);
customElements.define("teamtracker-badge-editor", TeamTrackerBadgeEditor);

console.info("%c TEAMTRACKER-BADGE %s IS INSTALLED",
    "color: green; font-weight: bold",
    VERSION);

window.customBadges = window.customBadges || [];
window.customBadges.push({
    type: "teamtracker-badge",
    name: "Team Tracker Badge",
    description: "Badge to display the ha-teamtracker sensor",
});