import { GOLF_HEADSHOT_URL, MMA_HEADSHOT_URL, RACING_HEADSHOT_URL, TENNIS_HEADSHOT_URL, ERROR_HEADSHOT_URL } from "./const.js";

export function setSportData(sport, stateObj, c, team, oppo) {
    switch (sport) {
        case "cricket":
            return setCricket(stateObj, c);
        case "golf":
            return setGolf(stateObj, c, team, oppo);
        case "mma":
            return setMMA(stateObj, c, team, oppo);
        case "racing":
            return setRacing(stateObj, c, team, oppo);
        case "tennis":
            return setTennis(stateObj, c, team, oppo);
        default:
            return;
    }
}

function setCricket(stateObj, c) {
    if (c.score[1] || c.score[2]) {
        var subscores = [];
        subscores[1] = c.score[1].split("(");
        subscores[2] = c.score[2].split("(");
        c.score[1] = subscores[1][0];
        c.score[2] = subscores[2][0];
    }
}

function setGolf(stateObj, c, team, oppo) {
    c.logo[team] = GOLF_HEADSHOT_URL + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = GOLF_HEADSHOT_URL + stateObj.attributes.opponent_id + ".png";
    c.logoAlternate[team] = ERROR_HEADSHOT_URL;
    c.logoAlternate[oppo] = ERROR_HEADSHOT_URL;
}

function setMMA(stateObj, c, team, oppo) {
    c.logo[team] = MMA_HEADSHOT_URL + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = MMA_HEADSHOT_URL + stateObj.attributes.opponent_id + ".png";
    c.logoAlternate[team] = ERROR_HEADSHOT_URL;
    c.logoAlternate[oppo] = ERROR_HEADSHOT_URL;
}

function setRacing(stateObj, c, team, oppo) {
    c.logo[team] = RACING_HEADSHOT_URL + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = RACING_HEADSHOT_URL + stateObj.attributes.opponent_id + ".png";
    c.logoAlternate[team] = ERROR_HEADSHOT_URL;
    c.logoAlternate[oppo] = ERROR_HEADSHOT_URL;
}

function setTennis(stateObj, c, team, oppo) {
    c.logo[team] = TENNIS_HEADSHOT_URL + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = TENNIS_HEADSHOT_URL + stateObj.attributes.opponent_id + ".png";
    c.logoAlternate[team] = ERROR_HEADSHOT_URL;
    c.logoAlternate[oppo] = ERROR_HEADSHOT_URL;
}
