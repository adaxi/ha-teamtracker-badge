import {de} from "./languages/de.js"
import {el} from "./languages/el.js"
import {en} from "./languages/en.js"
import {en_US} from "./languages/en_US.js"
import {es} from "./languages/es.js"
import {es_419} from "./languages/es_419.js"
import {fr} from "./languages/fr.js"
import {it} from "./languages/it.js"
import {nl} from "./languages/nl.js"
import {pt_BR} from "./languages/pt_BR.js"
import {sk} from "./languages/sk.js"
import {sk_SK} from "./languages/sk_SK.js"
import {sr} from "./languages/sr.js"
import {sr_Latn} from "./languages/sr_Latn.js"
import {sv} from "./languages/sv.js"

var languages = {
    de: de,
    el: el,
    en: en,
    en_US: en_US,
    es: es,
    es_419: es_419,
    nl: nl,
    fr: fr,
    it: it,
    pt_BR: pt_BR,
    sk: sk,    
    sk_SK: sk_SK,
    sr: sr,
    sr_Latn: sr_Latn,
    sv: sv,
};

export class Translator {
    constructor(lang = "en") {
        this.lang = lang.replace(/['"]+/g, '').replace(/-/g, '_');
    }

    translate(key, search, replace) {
        var translated;
        search = search || '';
        replace = replace || '';

        // Try the full tag, then shorter ones (sr_Latn_RS, sr_Latn, sr), then English
        var parts = this.lang.split('_');
        var tags = parts.map(function (_, i) { return parts.slice(0, parts.length - i).join('_'); });
        tags.push('en');

        for (var tag of tags) {
            var value = key.split('.').reduce(function (o, i) { return o?.[i]; }, languages[tag]);
            if (typeof value === 'string' || value instanceof String) {
                translated = value;
                break;
            }
        }
        if (translated === undefined) {
            translated = '{' + key + '}';
        }
        if (search !== '' && replace !== '') {
            translated = translated.replace(search, replace);
        }
        return translated;
    }
}
