import { css } from "lit";

export const cardStyles = css`
.badge { position: relative; overflow: hidden; display: flex; flex-direction: row; align-items: center; height: var(--ha-badge-size, 36px); min-width: 220px; padding: 0 8px; box-sizing: border-box; border-radius: var(--ha-badge-border-radius, calc(var(--ha-badge-size, 36px) / 2)); background: var(--ha-card-background, var(--card-background-color, white)); border: 1px solid var(--ha-card-border-color, var(--divider-color, #e0e0e0)); box-shadow: var(--ha-card-box-shadow, none); backdrop-filter: var(--ha-card-backdrop-filter, none); }
.team-bg { opacity: 0.06; position: absolute; top: -30%; left: -10%; width: 42%; z-index: 0; pointer-events: none; }
.opponent-bg { opacity: 0.06; position: absolute; top: -30%; right: -10%; width: 42%; z-index: 0; pointer-events: none; }
.badge-content { display: flex; align-items: center; gap: 6px; position: relative; z-index: 1; width: 100%; }
.badge-team-left { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.badge-team-right { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.badge-logo { height: 26px; width: 26px; object-fit: contain; flex-shrink: 0; }
.badge-name { font-size: 0.95em; font-weight: 500; white-space: nowrap; }
.badge-center { flex: 1; text-align: center; padding: 0 4px; }
.badge-time { font-size: 0.75em; color: var(--secondary-text-color); display: block; line-height: 1.3; }
.badge-score-wrapper { display: flex; align-items: center; gap: 3px; }
.badge-score { font-size: 1.1em; font-weight: 600; line-height: 1; }
.badge-divider { font-size: 0.9em; font-weight: 300; color: var(--secondary-text-color); }
.badge-bye-text { font-size: 1em; font-weight: 600; }
.badge-clock { font-size: 0.75em; color: var(--secondary-text-color); flex-shrink: 0; padding-left: 8px; white-space: nowrap; animation: clock-pulse 2.5s ease-in-out infinite; }
@keyframes clock-pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
`;
