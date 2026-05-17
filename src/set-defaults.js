export function initCardData(c) {
    c.logo = [];
    c.logoAlternate = [];
    c.name = [];
    c.score = [];
    c.scoreOp = [];
    c.winner = [];
}

export function setDefaults(t, lang, stateObj, c, o, team, oppo) {

    c.teamIdx = team;

    c.logo[team] = stateObj.attributes.team_logo;
    c.logoAlternate[team] = stateObj.attributes.team_logo;
    if (c.logo[team] && o.darkMode) {
        c.logo[team] = c.logo[team].replace('/500/', '/500-dark/')
    }
    c.logo[oppo] = stateObj.attributes.opponent_logo;
    c.logoAlternate[oppo] = stateObj.attributes.opponent_logo;
    if (c.logo[oppo] && o.darkMode) {
        c.logo[oppo] = c.logo[oppo].replace('/500/', '/500-dark/')
    }

    c.name[team] = stateObj.attributes.team_name;
    c.name[oppo] = stateObj.attributes.opponent_name;

    c.winner[team] = stateObj.attributes.team_winner || false;
    c.winner[oppo] = stateObj.attributes.opponent_winner || false;

    c.score[team] = stateObj.attributes.team_score;
    c.score[oppo] = stateObj.attributes.opponent_score;

    c.scoreOp[1] = .6;
    c.scoreOp[2] = .6;
    if (c.winner[team]) {
        c.scoreOp[team] = 1;
    }
    if (c.winner[oppo]) {
        c.scoreOp[oppo] = 1;
    }

    c.playClock = stateObj.attributes.clock;

    c.notFoundLogo = stateObj.attributes.league_logo;
    c.notFoundLogoBG = c.notFoundLogo;
    c.notFoundTerm1 = stateObj.attributes.team_abbr;
    c.notFoundTerm2 = "NOT_FOUND"
    if (stateObj.attributes.api_message) {
        c.notFoundTerm2 = t.translate("common.api_error")
        if (stateObj.attributes.api_message.includes("qualifying not complete")) {
            c.notFoundTerm2 = t.translate("common.field_not_set")
        }
        var apiTail = stateObj.attributes.api_message.substring(stateObj.attributes.api_message.length - 17)
        if (apiTail.slice(-1) == "Z") {
            var lastDateForm = new Date(apiTail)
            c.notFoundTerm2 = t.translate("common.no_upcoming_games", "%s", lastDateForm.toLocaleDateString(lang))
        }
    }

    c.byeTerm = t.translate("common.byeTerm");
}

export function setStartInfo(c, stateObj, t, lang, time_format, server_time_zone) {

    var gameDate = new Date(stateObj.attributes.date);

    var todayDate = new Date();
    var todayDateStr = todayDate.toLocaleDateString(lang, { month: 'short', day: '2-digit' });

    var tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1);
    var tomorrowDateStr = tomorrowDate.toLocaleDateString(lang, { month: 'short', day: '2-digit' });

    var gameDateStr = gameDate.toLocaleDateString(lang, { month: 'short', day: '2-digit' });

    c.gameWeekday = gameDate.toLocaleDateString(lang, { weekday: 'long' });
    if (gameDateStr === todayDateStr) {
        c.gameWeekday = t.translate("common.today");
    }
    else if (gameDateStr === tomorrowDateStr) {
        c.gameWeekday = t.translate("common.tomorrow");
    }

    if (server_time_zone) {
        c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', timeZone: server_time_zone });
        if (time_format == "24") {
            c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: server_time_zone });
        }
        if (time_format == "12") {
            c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: server_time_zone });
        }
        if (time_format == "system") {
            var sys_lang = navigator.language || "en"
            c.gameTime = gameDate.toLocaleTimeString(sys_lang, { hour: '2-digit', minute: '2-digit', timeZone: server_time_zone });
        }
    }
    else {
        c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' });
        if (time_format == "24") {
            c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', hour12: false });
        }
        if (time_format == "12") {
            c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', hour12: true });
        }
        if (time_format == "system") {
            var sys_lang = navigator.language || "en"
            c.gameTime = gameDate.toLocaleTimeString(sys_lang, { hour: '2-digit', minute: '2-digit' });
        }
    }
}
