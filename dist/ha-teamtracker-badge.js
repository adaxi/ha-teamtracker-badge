let $4fcaa3c95ba349ea$export$a4ad2735b021c132 = "v0.17.0";
let $4fcaa3c95ba349ea$export$6df7962ea75d9a39 = "https://a.espncdn.com/i/headshots/golf/players/full/";
let $4fcaa3c95ba349ea$export$7e154a1de2266268 = "https://a.espncdn.com/i/headshots/mma/players/full/";
let $4fcaa3c95ba349ea$export$c8a00e33d990d0fa = "https://a.espncdn.com/i/headshots/rpm/players/full/";
let $4fcaa3c95ba349ea$export$54565cc34e8d24d2 = "https://a.espncdn.com/i/headshots/tennis/players/full/";
let $4fcaa3c95ba349ea$export$607dc1951b62972e = "https://cdn-icons-png.freepik.com/512/9706/9706583.png";
let $4fcaa3c95ba349ea$export$8c52d310a5488815 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NiIgZmlsbD0iIzg4ODg4OCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48dGV4dCB4PSI1MCIgeT0iNjgiIGZvbnQtc2l6ZT0iNTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODg4ODgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCI+PzwvdGV4dD48L3N2Zz4=";


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$n = globalThis, $f58f44579a4747ac$var$c = $f58f44579a4747ac$var$n.trustedTypes, $f58f44579a4747ac$var$h = $f58f44579a4747ac$var$c ? $f58f44579a4747ac$var$c.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$f = "$lit$", $f58f44579a4747ac$var$v = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$m = "?" + $f58f44579a4747ac$var$v, $f58f44579a4747ac$var$_ = `<${$f58f44579a4747ac$var$m}>`, $f58f44579a4747ac$var$w = document, $f58f44579a4747ac$var$lt = ()=>$f58f44579a4747ac$var$w.createComment(""), $f58f44579a4747ac$var$st = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$g = Array.isArray, $f58f44579a4747ac$var$$ = (t)=>$f58f44579a4747ac$var$g(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$x = "[ \t\n\f\r]", $f58f44579a4747ac$var$T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$E = /-->/g, $f58f44579a4747ac$var$k = />/g, $f58f44579a4747ac$var$O = RegExp(`>|${$f58f44579a4747ac$var$x}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$x}*=${$f58f44579a4747ac$var$x}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$S = /'/g, $f58f44579a4747ac$var$j = /"/g, $f58f44579a4747ac$var$M = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$P = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$P(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$P(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$P(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$V = new WeakMap, $f58f44579a4747ac$var$I = $f58f44579a4747ac$var$w.createTreeWalker($f58f44579a4747ac$var$w, 129);
function $f58f44579a4747ac$var$N(t, i) {
    if (!$f58f44579a4747ac$var$g(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$h ? $f58f44579a4747ac$var$h.createHTML(i) : i;
}
const $f58f44579a4747ac$var$U = (t, i)=>{
    const s = t.length - 1, e = [];
    let h, o = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", n = $f58f44579a4747ac$var$T;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let r, l, c = -1, a = 0;
        for(; a < s.length && (n.lastIndex = a, l = n.exec(s), null !== l);)a = n.lastIndex, n === $f58f44579a4747ac$var$T ? "!--" === l[1] ? n = $f58f44579a4747ac$var$E : void 0 !== l[1] ? n = $f58f44579a4747ac$var$k : void 0 !== l[2] ? ($f58f44579a4747ac$var$M.test(l[2]) && (h = RegExp("</" + l[2], "g")), n = $f58f44579a4747ac$var$O) : void 0 !== l[3] && (n = $f58f44579a4747ac$var$O) : n === $f58f44579a4747ac$var$O ? ">" === l[0] ? (n = h ?? $f58f44579a4747ac$var$T, c = -1) : void 0 === l[1] ? c = -2 : (c = n.lastIndex - l[2].length, r = l[1], n = void 0 === l[3] ? $f58f44579a4747ac$var$O : '"' === l[3] ? $f58f44579a4747ac$var$j : $f58f44579a4747ac$var$S) : n === $f58f44579a4747ac$var$j || n === $f58f44579a4747ac$var$S ? n = $f58f44579a4747ac$var$O : n === $f58f44579a4747ac$var$E || n === $f58f44579a4747ac$var$k ? n = $f58f44579a4747ac$var$T : (n = $f58f44579a4747ac$var$O, h = void 0);
        const u = n === $f58f44579a4747ac$var$O && t[i + 1].startsWith("/>") ? " " : "";
        o += n === $f58f44579a4747ac$var$T ? s + $f58f44579a4747ac$var$_ : c >= 0 ? (e.push(r), s.slice(0, c) + $f58f44579a4747ac$var$f + s.slice(c) + $f58f44579a4747ac$var$v + u) : s + $f58f44579a4747ac$var$v + (-2 === c ? i : u);
    }
    return [
        $f58f44579a4747ac$var$N(t, o + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$B {
    constructor({ strings: t, _$litType$: i }, s){
        let e;
        this.parts = [];
        let h = 0, o = 0;
        const n = t.length - 1, r = this.parts, [l, a] = $f58f44579a4747ac$var$U(t, i);
        if (this.el = $f58f44579a4747ac$var$B.createElement(l, s), $f58f44579a4747ac$var$I.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (e = $f58f44579a4747ac$var$I.nextNode()) && r.length < n;){
            if (1 === e.nodeType) {
                if (e.hasAttributes()) for (const t of e.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$f)) {
                    const i = a[o++], s = e.getAttribute(t).split($f58f44579a4747ac$var$v), n = /([.?@])?(.*)/.exec(i);
                    r.push({
                        type: 1,
                        index: h,
                        name: n[2],
                        strings: s,
                        ctor: "." === n[1] ? $f58f44579a4747ac$var$Y : "?" === n[1] ? $f58f44579a4747ac$var$Z : "@" === n[1] ? $f58f44579a4747ac$var$q : $f58f44579a4747ac$var$G
                    }), e.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$v) && (r.push({
                    type: 6,
                    index: h
                }), e.removeAttribute(t));
                if ($f58f44579a4747ac$var$M.test(e.tagName)) {
                    const t = e.textContent.split($f58f44579a4747ac$var$v), i = t.length - 1;
                    if (i > 0) {
                        e.textContent = $f58f44579a4747ac$var$c ? $f58f44579a4747ac$var$c.emptyScript : "";
                        for(let s = 0; s < i; s++)e.append(t[s], $f58f44579a4747ac$var$lt()), $f58f44579a4747ac$var$I.nextNode(), r.push({
                            type: 2,
                            index: ++h
                        });
                        e.append(t[i], $f58f44579a4747ac$var$lt());
                    }
                }
            } else if (8 === e.nodeType) {
                if (e.data === $f58f44579a4747ac$var$m) r.push({
                    type: 2,
                    index: h
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = e.data.indexOf($f58f44579a4747ac$var$v, t + 1));)r.push({
                        type: 7,
                        index: h
                    }), t += $f58f44579a4747ac$var$v.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$w.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$z(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s.o?.[e] : s.l;
    const o = $f58f44579a4747ac$var$st(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s.o ??= [])[e] = h : s.l = h), void 0 !== h && (i = $f58f44579a4747ac$var$z(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$F {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$w).importNode(i, !0);
        $f58f44579a4747ac$var$I.currentNode = e;
        let h = $f58f44579a4747ac$var$I.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $f58f44579a4747ac$var$et(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $f58f44579a4747ac$var$K(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = $f58f44579a4747ac$var$I.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$I.currentNode = $f58f44579a4747ac$var$w, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$et {
    get _$AU() {
        return this._$AM?._$AU ?? this.v;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this.v = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$z(this, t, i), $f58f44579a4747ac$var$st(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$$(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$st(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$w.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$B.createElement($f58f44579a4747ac$var$N(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$F(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$V.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$V.set(t.strings, i = new $f58f44579a4747ac$var$B(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$g(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$et(this.O($f58f44579a4747ac$var$lt()), this.O($f58f44579a4747ac$var$lt()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this.v = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$G {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$z(this, t, i, 0), o = !$f58f44579a4747ac$var$st(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$z(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$st(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$Y extends $f58f44579a4747ac$var$G {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$Z extends $f58f44579a4747ac$var$G {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$q extends $f58f44579a4747ac$var$G {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$z(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$K {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$z(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$f,
    P: $f58f44579a4747ac$var$v,
    A: $f58f44579a4747ac$var$m,
    C: 1,
    L: $f58f44579a4747ac$var$U,
    R: $f58f44579a4747ac$var$F,
    D: $f58f44579a4747ac$var$$,
    V: $f58f44579a4747ac$var$z,
    I: $f58f44579a4747ac$var$et,
    H: $f58f44579a4747ac$var$G,
    N: $f58f44579a4747ac$var$Z,
    U: $f58f44579a4747ac$var$q,
    B: $f58f44579a4747ac$var$Y,
    F: $f58f44579a4747ac$var$K
}, $f58f44579a4747ac$var$Re = $f58f44579a4747ac$var$n.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$Re?.($f58f44579a4747ac$var$B, $f58f44579a4747ac$var$et), ($f58f44579a4747ac$var$n.litHtmlVersions ??= []).push("3.2.0");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$et(i.insertBefore($f58f44579a4747ac$var$lt(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this.o = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(e, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this.o?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.o?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$f = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$f?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.0");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




class $493b3ddf8310b60c$export$406fb8b3d39eec91 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            _config: {
                type: Object
            },
            hass: {
                type: Object
            }
        };
    }
    setConfig(config) {
        if (!config) throw new Error("Invalid configuration");
        this._config = config;
    }
    configChanged(newConfig) {
        const event = new Event("config-changed", {
            bubbles: true,
            composed: true
        });
        event.detail = {
            config: newConfig
        };
        this.dispatchEvent(event);
    }
    render() {
        if (!this.hass || !this._config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <div>
            <h4>Team</h4>
            <ha-selector
                .value=${this._config.entity ?? ''}
                .selector=${{
            entity: {
                filter: {
                    integration: 'teamtracker'
                }
            }
        }}
                .hass=${this.hass}
                @value-changed=${(e)=>{
            const newConfig = {
                ...this._config,
                entity: e.detail.value
            };
            this.configChanged(newConfig);
            this.requestUpdate();
        }}
            ></ha-selector>
            <h4>Settings</h4>
            <ha-selector
                label="Home Side"
                .value=${this._config.home_side || 'team'}
                .selector=${{
            select: {
                mode: 'dropdown',
                options: [
                    {
                        value: 'team',
                        label: 'Team on Left'
                    },
                    {
                        value: 'left',
                        label: 'Home on Left'
                    },
                    {
                        value: 'right',
                        label: 'Home on Right'
                    }
                ]
            }
        }}
                @value-changed=${(e)=>{
            const val = e.detail.value === 'team' ? '' : e.detail.value;
            const newConfig = {
                ...this._config,
                home_side: val
            };
            this.configChanged(newConfig);
            this.requestUpdate();
        }}
            ></ha-selector>
        </div>
        `;
    }
}



const $044e49bbd03ccfb1$export$2fa162a495d26869 = {
    "common": {
        "api_error": "API Error",
        "field_not_set": "Qualifying nicht abgeschlossen",
        "no_upcoming_games": "Keine anstehenden Spiele bis %s",
        "finalTerm": "%s - Endergebnis",
        "byeTerm": "BYE",
        "tourney2": "Finale",
        "tourney4": "Halbfinale",
        "tourney8": "Viertelfinale",
        "tourney16": "Achtelfinale",
        "tourney32": "Sechzehntelfinale",
        "tourney64": "Vorrunde",
        "tourney128": "Vorrunde",
        "tourney256": "Vorrunde",
        "today": "Heute",
        "tomorrow": "Morgen"
    },
    "australian-football": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Gewinnchance",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "First Pitch",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Gewinnchance",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Tipoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Gewinnchance",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Gewinnchance",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Gewinnchance",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Round Starts",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (Thru)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Puck Drop",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Sch\xfcsse (auf Tor)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Gewinnchance",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Runden",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Ansto\xdf",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Sch\xfcsse (auf Tor)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Aufschlag",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Aufschlag",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Gewinnchance",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $e5e336768a089693$export$c3da0dad1b44eea9 = {
    "common": {
        "api_error": "\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 API",
        "field_not_set": "\u039F\u03B9 \u03BA\u03B1\u03C4\u03B1\u03C4\u03B1\u03BA\u03C4\u03AE\u03C1\u03B9\u03B5\u03C2 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AD\u03C2 \u03B4\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03B8\u03B5\u03AF",
        "no_upcoming_games": "\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C0\u03C1\u03BF\u03C3\u03B5\u03C7\u03B5\u03AF\u03C2 \u03B1\u03B3\u03CE\u03BD\u03B5\u03C2 \u03AD\u03C9\u03C2 %s",
        "finalTerm": "%s - \u03A4\u03B5\u03BB\u03B9\u03BA\u03CC\u03C2",
        "byeTerm": "\u0391\u039D\u0391\u03A0\u0391\u03A5\u03A3\u0397",
        "tourney2": "\u03A4\u03B5\u03BB\u03B9\u03BA\u03CC\u03C2",
        "tourney4": "\u0397\u03BC\u03B9\u03C4\u03B5\u03BB\u03B9\u03BA\u03BF\u03AF",
        "tourney8": "\u03A0\u03C1\u03BF\u03B7\u03BC\u03B9\u03C4\u03B5\u03BB\u03B9\u03BA\u03BF\u03AF",
        "tourney16": "\u03A6\u03AC\u03C3\u03B7 \u03C4\u03C9\u03BD 16",
        "tourney32": "\u03A6\u03AC\u03C3\u03B7 \u03C4\u03C9\u03BD 32",
        "tourney64": "\u03A6\u03AC\u03C3\u03B7 \u03C4\u03C9\u03BD 64",
        "tourney128": "\u03A0\u03C1\u03CE\u03B9\u03BC\u03B5\u03C2 \u03A6\u03AC\u03C3\u03B5\u03B9\u03C2",
        "tourney256": "\u03A0\u03C1\u03CE\u03B9\u03BC\u03B5\u03C2 \u03A6\u03AC\u03C3\u03B5\u03B9\u03C2",
        "today": "\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1",
        "tomorrow": "\u0391\u03CD\u03C1\u03B9\u03BF"
    },
    "australian-football": {
        "startTerm": "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A0\u03B9\u03B8\u03B1\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 \u039D\u03AF\u03BA\u03B7\u03C2",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "\u03A0\u03C1\u03CE\u03C4\u03B7 \u03A1\u03AF\u03C8\u03B7",
        "overUnder": "O/U: %s",
        "gameStat1": "\u039C\u03C0\u03AC\u03BB\u03B5\u03C2 %s",
        "gameStat2": "\u03A7\u03C4\u03C5\u03C0\u03AE\u03BC\u03B1\u03C4\u03B1 %s",
        "gameStat3": "%s \u0386\u03BF\u03C5\u03C4",
        "gameBar": "\u03A0\u03B9\u03B8\u03B1\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 \u039D\u03AF\u03BA\u03B7\u03C2",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "\u03A4\u03B6\u03AC\u03BC\u03C0\u03BF\u03BB",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A0\u03B9\u03B8\u03B1\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 \u039D\u03AF\u03BA\u03B7\u03C2",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A0\u03B9\u03B8\u03B1\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 \u039D\u03AF\u03BA\u03B7\u03C2",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "\u03A3\u03AD\u03BD\u03C4\u03C1\u03B1",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A0\u03B9\u03B8\u03B1\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 \u039D\u03AF\u03BA\u03B7\u03C2",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 \u0393\u03CD\u03C1\u03BF\u03C5",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A7\u03C4\u03C5\u03C0\u03AE\u03BC\u03B1\u03C4\u03B1 (\u039C\u03AD\u03C7\u03C1\u03B9)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 \u03A0\u03B1\u03B9\u03C7\u03BD\u03B9\u03B4\u03B9\u03BF\u03CD",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A3\u03BF\u03C5\u03C4 \u03C3\u03C4\u03BF \u03A4\u03AD\u03C1\u03BC\u03B1",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A0\u03B9\u03B8\u03B1\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 \u039D\u03AF\u03BA\u03B7\u03C2",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u0393\u03CD\u03C1\u03BF\u03B9",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "\u03A3\u03AD\u03BD\u03C4\u03C1\u03B1",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A3\u03BF\u03C5\u03C4 (\u03A3\u03C4\u03BF\u03BD \u03A3\u03C4\u03CC\u03C7\u03BF)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "\u03A0\u03C1\u03CE\u03C4\u03BF \u03A3\u03B5\u03C1\u03B2\u03AF\u03C2",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "\u03A0\u03C1\u03CE\u03C4\u03BF \u03A3\u03B5\u03C1\u03B2\u03AF\u03C2",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A3\u03BA\u03BF\u03C1 %s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\u03A0\u03B9\u03B8\u03B1\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1 \u039D\u03AF\u03BA\u03B7\u03C2",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $9bf8d9821f43b5a3$export$84584c2a98eb6753 = {
    "common": {
        "api_error": "API Error",
        "field_not_set": "Qualifying not Complete",
        "no_upcoming_games": "No upcoming games through %s",
        "finalTerm": "%s - Final",
        "byeTerm": "BYE",
        "tourney2": "Final",
        "tourney4": "Semifinals",
        "tourney8": "Quarterfinals",
        "tourney16": "Round of 16",
        "tourney32": "Round of 32",
        "tourney64": "Round of 64",
        "tourney128": "Early Rounds",
        "tourney256": "Early Rounds",
        "today": "Today",
        "tomorrow": "Tomorrow"
    },
    "australian-football": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "First Pitch",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Tipoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Round Starts",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (Thru)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Puck Drop",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots on Goal",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Laps",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (On Target)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "First Serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "First Serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $738479ced03534bd$export$25dc44e90bc68e13 = {
    "common": {
        "api_error": "API Error",
        "field_not_set": "Qualifying not Complete",
        "no_upcoming_games": "No upcoming games through %s",
        "finalTerm": "%s - Final",
        "byeTerm": "BYE",
        "tourney2": "Final",
        "tourney4": "Semifinals",
        "tourney8": "Quarterfinals",
        "tourney16": "Round of 16",
        "tourney32": "Round of 32",
        "tourney64": "Round of 64",
        "tourney128": "Early Rounds",
        "tourney256": "Early Rounds",
        "today": "Today",
        "tomorrow": "Tomorrow"
    },
    "australian-football": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "First Pitch",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Tipoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Round Starts",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (Thru)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Puck Drop",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots on Goal",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Laps",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (On Target)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "First Serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "First Serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $fa59b11c3970eda2$export$ca5e4045a55e76d2 = {
    "common": {
        "api_error": "Error de API",
        "field_not_set": "La clasificaci\xf3n no ha finalizado",
        "no_upcoming_games": "No hay pr\xf3ximos juegos hasta el %s",
        "finalTerm": "%s - Final",
        "byeTerm": "DESCANSO",
        "tourney2": "Final",
        "tourney4": "Semifinales",
        "tourney8": "Cuartos de Finals",
        "tourney16": "Octavos de Finals",
        "tourney32": "Ronda de 32",
        "tourney64": "Ronda de 64",
        "tourney128": "Primeras Rondas",
        "tourney256": "Primeras Rondas",
        "today": "Hoy",
        "tomorrow": "Ma\xf1ana"
    },
    "australian-football": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "Bolas %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros (Trav\xe9s De)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros a Puerta",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vueltas",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros (A Puerta)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": " Puntaje de %s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $b35902dfc88d0d3b$export$13aa9a2e371cd2fd = {
    "common": {
        "api_error": "Error de API",
        "field_not_set": "La clasificaci\xf3n no ha finalizado",
        "no_upcoming_games": "No hay pr\xf3ximos juegos hasta el %s",
        "finalTerm": "%s - Final",
        "byeTerm": "DESCANSO",
        "tourney2": "Final",
        "tourney4": "Semifinales",
        "tourney8": "Cuartos de Finals",
        "tourney16": "Octavos de Finals",
        "tourney32": "Ronda de 32",
        "tourney64": "Ronda de 64",
        "tourney128": "Primeras Rondas",
        "tourney256": "Primeras Rondas",
        "today": "Hoy",
        "tomorrow": "Ma\xf1ana"
    },
    "australian-football": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "Bolas %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros (Trav\xe9s De)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros a Puerta",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vueltas",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros (A Puerta)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": " Puntaje de %s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $4f808b6be6c4ddc7$export$acb2a88f7d552ebf = {
    "common": {
        "api_error": "Erreur API",
        "field_not_set": "Les qualifications ne sont pas termin\xe9es",
        "no_upcoming_games": "Aucun match pr\xe9vu pour l'instant %s",
        "finalTerm": "%s - Terminer",
        "byeTerm": "Au revoir",
        "tourney2": "Terminer",
        "tourney4": "Demi finale",
        "tourney8": "Quart de finale",
        "tourney16": "Round de 16",
        "tourney32": "Round de 32",
        "tourney64": "Round de 64",
        "tourney128": "Premier round",
        "tourney256": "Premiers Rounds",
        "today": "Aujourd'hui",
        "tomorrow": "Demain"
    },
    "australian-football": {
        "startTerm": "Commencer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Premier lancer",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Engagement",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Commencer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Engagement",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Debut du Round",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tirs (\xe0 travers)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Mise en jeu",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tirs au but",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "D\xe9but du combat",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "D\xe9part de la course",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tours",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Coup d'envoi",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tirs (cadr\xe9s)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Premier service",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Premier service",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Commencer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $d573fc5554189e19$export$3486a10f30cf1ee4 = {
    "common": {
        "api_error": "API Error",
        "field_not_set": "Le qualifiche non sono concluse",
        "no_upcoming_games": "Nessun Match imminente %s",
        "finalTerm": "%s - Finale",
        "byeTerm": "Ciao",
        "tourney2": "Finale",
        "tourney4": "Semifinale",
        "tourney8": "Quarti di finale",
        "tourney16": "Sedicesimi",
        "tourney32": "Trentaduesimi",
        "tourney64": "Sessantaquattresimi",
        "tourney128": "Gironi",
        "tourney256": "Gironi",
        "today": "Oggi",
        "tomorrow": "Domani"
    },
    "australian-football": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Primo lancio",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Palla a due",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Calcio di inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Colpi (attraverso)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiri in porta",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Partenza",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Giri",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Calcio di inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiri (In porta)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Primo servizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Primo servizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Punteggio",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $48e4764806fa7a6b$export$9c64ee4d84d79ce1 = {
    "common": {
        "api_error": "API Fout",
        "field_not_set": "Kwalificatie niet afgerond",
        "no_upcoming_games": "Geen aanstaande wedstrijden t/m %s",
        "finalTerm": "Einduitslag - %s",
        "byeTerm": "D\xe1\xe1\xe1g!",
        "tourney2": "Finale",
        "tourney4": "Halve Finale",
        "tourney8": "Kwart Finale",
        "tourney16": "Achtste Finale",
        "tourney32": "Zestiende Finale",
        "tourney64": "Twee\xebndertigste Finale",
        "tourney128": "Voorronde",
        "tourney256": "Voorronde",
        "today": "Vandaag",
        "tomorrow": "Morgen"
    },
    "australian-football": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Eerste Worp",
        "overUnder": "O/U: %s",
        "gameStat1": "%s Wijd",
        "gameStat2": "%s Slag",
        "gameStat3": "%s Uit",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Sprongbal",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Aftrap",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Ronde Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Schoten (Thru)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Puck Drop",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Schoten op Doel",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Rondes",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Aftrap",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Schoten (Op Doel)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Eerste Service",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Eerste Service",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $60a4d35e5022a9df$export$9dc8766c8c230075 = {
    "common": {
        "api_error": "Erro de API",
        "field_not_set": "A classifica\xe7\xe3o n\xe3o foi conclu\xedda",
        "no_upcoming_games": "Sem pr\xf3ximos jogos %s",
        "finalTerm": "%s - Final",
        "byeTerm": "DESCANSO",
        "today": "Hoje",
        "tomorrow": "Amanh\xe3"
    },
    "baseball": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "Bolas %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Fora",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "hockey": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Chutes no Gol",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Chutes no Gol",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Primeiro servi\xe7o",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": " Pontos %s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $06041e2b1c26c877$export$d608fa5b5bfd2021 = {
    "common": {
        "api_error": "Chyba API",
        "field_not_set": "Kvalifik\xe1cia nie je dokon\u010Den\xe1",
        "no_upcoming_games": "\u017Diadn\xfd nadch\xe1dzaj\xfaci z\xe1pas do %s",
        "finalTerm": "%s - Koniec",
        "byeTerm": "Vo\u013Eno",
        "tourney2": "Fin\xe1le",
        "tourney4": "Semifin\xe1le",
        "tourney8": "\u0160tvr\u0165fin\xe1le",
        "tourney16": "Posledn\xfdch 16",
        "tourney32": "Posledn\xfdch 32",
        "tourney64": "Posledn\xfdch 64",
        "tourney128": "Prv\xe9 kol\xe1",
        "tourney256": "Prv\xe9 kol\xe1",
        "today": "Dnes",
        "tomorrow": "Zajtra"
    },
    "australian-football": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Prv\xfd nadhod",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "Odpaly %s",
        "gameStat2": "Minut\xe9 odpaly %s",
        "gameStat3": "%s Outy",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Rozkok",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "V\xfdkop",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Za\u010Diatky kola",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\xdadery (Cez)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Strata Puku",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Strely na br\xe1nu",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Okruhy",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "V\xfdkop",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Strely (Na br\xe1nu)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Prv\xfd servis",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Prv\xfd servis",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Sk\xf3re",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $125926858f90b59c$export$b2bcf639de11a4af = {
    "common": {
        "api_error": "Chyba API",
        "field_not_set": "Kvalifik\xe1cia nie je dokon\u010Den\xe1",
        "no_upcoming_games": "\u017Diadn\xfd nadch\xe1dzaj\xfaci z\xe1pas do %s",
        "finalTerm": "%s - Koniec",
        "byeTerm": "Vo\u013Eno",
        "tourney2": "Fin\xe1le",
        "tourney4": "Semifin\xe1le",
        "tourney8": "\u0160tvr\u0165fin\xe1le",
        "tourney16": "Posledn\xfdch 16",
        "tourney32": "Posledn\xfdch 32",
        "tourney64": "Posledn\xfdch 64",
        "tourney128": "Prv\xe9 kol\xe1",
        "tourney256": "Prv\xe9 kol\xe1",
        "today": "Dnes",
        "tomorrow": "Zajtra"
    },
    "australian-football": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Prv\xfd nadhod",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "Odpaly %s",
        "gameStat2": "Minut\xe9 odpaly %s",
        "gameStat3": "%s Outy",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Rozkok",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "V\xfdkop",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Za\u010Diatky kola",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\xdadery (Cez)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Strata Puku",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Strely na br\xe1nu",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Okruhy",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "V\xfdkop",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Strely (Na br\xe1nu)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Prv\xfd servis",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Prv\xfd servis",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Sk\xf3re",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $f594c62d0c6e32a5$export$65540e5f7f6e7dce = {
    "common": {
        "api_error": "API Error",
        "field_not_set": "Kvalificeringen \xe4r inte avslutad",
        "no_upcoming_games": "Inga kommande matcher %s",
        "finalTerm": "%s - Final",
        "byeTerm": "BYE",
        "tourney2": "Final",
        "tourney4": "Semifinaler",
        "tourney8": "Kvartsfinaler",
        "tourney16": "\xc5ttondelsfinal",
        "tourney32": "Sextondelsfinal",
        "today": "Idag",
        "tomorrow": "Imorgon"
    },
    "australian-football": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vinstsannolikhet",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "F\xf6rsta pitch",
        "overUnder": "O/U: %s",
        "gameStat1": "Bollar %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Vinstsannolikhet",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Avkast",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vinstsannolikhet",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vinstsannolikhet",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Avspark",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vinstsannolikhet",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Omg\xe5ngen startar",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (Thru)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Skott p\xe5 m\xe5l",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vinstsannolikhet",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Varv",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Avspark",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Skott (p\xe5 m\xe5l)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "F\xf6rsta serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "F\xf6rsta serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vinstsannolikhet",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


var $cfd70fadc94c42c5$var$languages = {
    de: (0, $044e49bbd03ccfb1$export$2fa162a495d26869),
    el: (0, $e5e336768a089693$export$c3da0dad1b44eea9),
    en: (0, $9bf8d9821f43b5a3$export$84584c2a98eb6753),
    en_US: (0, $738479ced03534bd$export$25dc44e90bc68e13),
    es: (0, $fa59b11c3970eda2$export$ca5e4045a55e76d2),
    es_419: (0, $b35902dfc88d0d3b$export$13aa9a2e371cd2fd),
    nl: (0, $48e4764806fa7a6b$export$9c64ee4d84d79ce1),
    fr: (0, $4f808b6be6c4ddc7$export$acb2a88f7d552ebf),
    it: (0, $d573fc5554189e19$export$3486a10f30cf1ee4),
    pt_BR: (0, $60a4d35e5022a9df$export$9dc8766c8c230075),
    sk: (0, $06041e2b1c26c877$export$d608fa5b5bfd2021),
    sk_SK: (0, $125926858f90b59c$export$b2bcf639de11a4af),
    sv: (0, $f594c62d0c6e32a5$export$65540e5f7f6e7dce)
};
class $cfd70fadc94c42c5$export$9850010f89e291bb {
    constructor(lang = "en"){
        this.lang = lang.replace(/['"]+/g, '').replace('-', '_');
    }
    translate(key, search, replace) {
        var lang = this.lang;
        var translated;
        search = search || '';
        replace = replace || '';
        try {
            translated = key.split('.').reduce(function(o, i) {
                return o[i];
            }, $cfd70fadc94c42c5$var$languages[lang]);
        } catch (e) {
            try {
                translated = key.split('.').reduce(function(o, i) {
                    return o[i];
                }, $cfd70fadc94c42c5$var$languages[lang].substring(0, 2));
            } catch (e) {
                try {
                    translated = key.split('.').reduce(function(o, i) {
                        return o[i];
                    }, $cfd70fadc94c42c5$var$languages['en']);
                } catch (e) {
                    translated = '{' + key + '}';
                }
            }
        }
        if (translated === undefined || !(typeof translated === 'string') && !(translated instanceof String)) translated = '{' + key + '}';
        if (search !== '' && replace !== '') translated = translated.replace(search, replace);
        return translated;
    }
}





function $e3fa72ec87c6d57d$export$d1ab0fab55f61018(cls, src, alt) {
    const primary = src || (0, $4fcaa3c95ba349ea$export$8c52d310a5488815);
    const fallback = alt && alt !== src ? alt : (0, $4fcaa3c95ba349ea$export$8c52d310a5488815);
    const onerror = `this.onerror=function(){this.onerror=null;this.src='${(0, $4fcaa3c95ba349ea$export$8c52d310a5488815)}';}; this.src='${fallback}';`;
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<img class="${cls}" src="${primary}" onerror="${onerror}" />`;
}
function $e3fa72ec87c6d57d$export$7b557654ea0a0e48(cls, src, alt) {
    if (!src) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
    const fallback = alt && alt !== src ? alt : "";
    const onerror = fallback ? `this.onerror=function(){this.onerror=null;this.style.display='none';}; this.src='${fallback}';` : `this.onerror=null; this.style.display='none';`;
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<img class="${cls}" src="${src}" onerror="${onerror}" />`;
}


function $0fef19109112d570$export$eac7a64041e7dd4f(c) {
    const t = c.teamIdx || 1;
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="badge">
        ${(0, $e3fa72ec87c6d57d$export$7b557654ea0a0e48)("team-bg", c.logo[t], c.logoAlternate[t])}
        <div class="badge-content">
            <div class="badge-team-left">
                ${(0, $e3fa72ec87c6d57d$export$d1ab0fab55f61018)("badge-logo", c.logo[t], c.logoAlternate[t])}
                <span class="badge-name">${c.name[t]}</span>
            </div>
            <div class="badge-center">
                <span class="badge-bye-text">${c.byeTerm}</span>
            </div>
        </div>
    </div>
    `;
}



function $34e8f4cb5038827c$export$b2e19b637b85e37f() {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
}
function $34e8f4cb5038827c$export$adab126bb38c4dbc(entity) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <ha-card>Unknown entity: ${entity}</ha-card>
    `;
}
function $34e8f4cb5038827c$export$83a5095ba0388927(entity) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <style>
        ha-card {padding: 10px 16px;}
    </style>
    <ha-card>
        Sensor unavailable: ${entity}
    </ha-card>
    `;
}
function $34e8f4cb5038827c$export$e26cf6a49fd1ec72() {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <style>
        ha-card {padding: 10px 16px;}
    </style>
    <ha-card>
        State Invalid: ${this._config.state}
    </ha-card>
    `;
}




function $f55026069bb994a8$export$3f4c9efb42c5bfd8(c) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="badge">
        ${(0, $e3fa72ec87c6d57d$export$7b557654ea0a0e48)("team-bg", c.logo[1], c.logoAlternate[1])}
        ${(0, $e3fa72ec87c6d57d$export$7b557654ea0a0e48)("opponent-bg", c.logo[2], c.logoAlternate[2])}
        <div class="badge-content">
            <div class="badge-team-left">
                ${(0, $e3fa72ec87c6d57d$export$d1ab0fab55f61018)("badge-logo", c.logo[1], c.logoAlternate[1])}
                <span class="badge-name">${c.name[1]}</span>
            </div>
            <div class="badge-center">
                <div class="badge-score-wrapper">
                    <span class="badge-score">${c.score[1]}</span>
                    <span class="badge-divider"> - </span>
                    <span class="badge-score">${c.score[2]}</span>
                </div>
            </div>
            <div class="badge-team-right">
                <span class="badge-name">${c.name[2]}</span>
                ${(0, $e3fa72ec87c6d57d$export$d1ab0fab55f61018)("badge-logo", c.logo[2], c.logoAlternate[2])}
            </div>
            <div class="badge-clock">${c.playClock}</div>
        </div>
    </div>
    `;
}




function $03e25072c52748fb$export$cbe2629e62de17f0(c) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="badge">
        <div class="badge-content">
            <div class="badge-team-left">
                ${(0, $e3fa72ec87c6d57d$export$d1ab0fab55f61018)("badge-logo", c.notFoundLogoBG)}
                <span class="badge-name">${c.notFoundTerm1}</span>
            </div>
            <div class="badge-center">
                <span class="badge-time">${c.notFoundTerm2}</span>
            </div>
        </div>
    </div>
    `;
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this.t = t, this._$AM = e, this.i = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $19f464fcda7d2482$var$ee = "important", $19f464fcda7d2482$var$ie = " !" + $19f464fcda7d2482$var$ee, $19f464fcda7d2482$export$1e5b4ce2fa884e6a = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(e){
        if (super(e), e.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== e.name || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(t, [e]) {
        const { style: r } = t.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(e)), this.render(e);
        for (const t of this.ft)null == e[t] && (this.ft.delete(t), t.includes("-") ? r.removeProperty(t) : r[t] = null);
        for(const t in e){
            const s = e[t];
            if (null != s) {
                this.ft.add(t);
                const e = "string" == typeof s && s.endsWith($19f464fcda7d2482$var$ie);
                t.includes("-") || e ? r.setProperty(t, e ? s.slice(0, -11) : s, e ? $19f464fcda7d2482$var$ee : "") : r[t] = s;
            }
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});





function $024678abbafb78ef$export$823f4865e91cfbff(c) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="badge">
        ${(0, $e3fa72ec87c6d57d$export$7b557654ea0a0e48)("team-bg", c.logo[1], c.logoAlternate[1])}
        ${(0, $e3fa72ec87c6d57d$export$7b557654ea0a0e48)("opponent-bg", c.logo[2], c.logoAlternate[2])}
        <div class="badge-content">
            <div class="badge-team-left">
                ${(0, $e3fa72ec87c6d57d$export$d1ab0fab55f61018)("badge-logo", c.logo[1], c.logoAlternate[1])}
                <span class="badge-name">${c.name[1]}</span>
            </div>
            <div class="badge-center">
                <div class="badge-score-wrapper">
                    <span class="badge-score" style=${(0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
        opacity: `${c.scoreOp[1]}`
    })}>${c.score[1]}</span>
                    <span class="badge-divider"> - </span>
                    <span class="badge-score" style=${(0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
        opacity: `${c.scoreOp[2]}`
    })}>${c.score[2]}</span>
                </div>
            </div>
            <div class="badge-team-right">
                <span class="badge-name">${c.name[2]}</span>
                ${(0, $e3fa72ec87c6d57d$export$d1ab0fab55f61018)("badge-logo", c.logo[2], c.logoAlternate[2])}
            </div>
        </div>
    </div>
    `;
}




function $0642b532e06ae26b$export$d6bad15bd473a528(c) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="badge">
        ${(0, $e3fa72ec87c6d57d$export$7b557654ea0a0e48)("team-bg", c.logo[1], c.logoAlternate[1])}
        ${(0, $e3fa72ec87c6d57d$export$7b557654ea0a0e48)("opponent-bg", c.logo[2], c.logoAlternate[2])}
        <div class="badge-content">
            <div class="badge-team-left">
                ${(0, $e3fa72ec87c6d57d$export$d1ab0fab55f61018)("badge-logo", c.logo[1], c.logoAlternate[1])}
                <span class="badge-name">${c.name[1]}</span>
            </div>
            <div class="badge-center">
                <span class="badge-time">${c.gameWeekday}</span>
                <span class="badge-time">${c.gameTime}</span>
            </div>
            <div class="badge-team-right">
                <span class="badge-name">${c.name[2]}</span>
                ${(0, $e3fa72ec87c6d57d$export$d1ab0fab55f61018)("badge-logo", c.logo[2], c.logoAlternate[2])}
            </div>
        </div>
    </div>
    `;
}


function $f2881198e3346121$export$554552fb00f06e66(c) {
    c.logo = [];
    c.logoAlternate = [];
    c.name = [];
    c.score = [];
    c.scoreOp = [];
    c.winner = [];
}
function $f2881198e3346121$export$2e2366488d12e20d(t, lang, stateObj, c, o, team, oppo) {
    c.teamIdx = team;
    c.logo[team] = stateObj.attributes.team_logo;
    c.logoAlternate[team] = stateObj.attributes.team_logo;
    if (c.logo[team] && o.darkMode) c.logo[team] = c.logo[team].replace('/500/', '/500-dark/');
    c.logo[oppo] = stateObj.attributes.opponent_logo;
    c.logoAlternate[oppo] = stateObj.attributes.opponent_logo;
    if (c.logo[oppo] && o.darkMode) c.logo[oppo] = c.logo[oppo].replace('/500/', '/500-dark/');
    c.name[team] = stateObj.attributes.team_name;
    c.name[oppo] = stateObj.attributes.opponent_name;
    c.winner[team] = stateObj.attributes.team_winner || false;
    c.winner[oppo] = stateObj.attributes.opponent_winner || false;
    c.score[team] = stateObj.attributes.team_score;
    c.score[oppo] = stateObj.attributes.opponent_score;
    c.scoreOp[1] = .6;
    c.scoreOp[2] = .6;
    if (c.winner[team]) c.scoreOp[team] = 1;
    if (c.winner[oppo]) c.scoreOp[oppo] = 1;
    c.playClock = stateObj.attributes.clock;
    c.notFoundLogo = stateObj.attributes.league_logo;
    c.notFoundLogoBG = c.notFoundLogo;
    c.notFoundTerm1 = stateObj.attributes.team_abbr;
    c.notFoundTerm2 = "NOT_FOUND";
    if (stateObj.attributes.api_message) {
        c.notFoundTerm2 = t.translate("common.api_error");
        if (stateObj.attributes.api_message.includes("qualifying not complete")) c.notFoundTerm2 = t.translate("common.field_not_set");
        var apiTail = stateObj.attributes.api_message.substring(stateObj.attributes.api_message.length - 17);
        if (apiTail.slice(-1) == "Z") {
            var lastDateForm = new Date(apiTail);
            c.notFoundTerm2 = t.translate("common.no_upcoming_games", "%s", lastDateForm.toLocaleDateString(lang));
        }
    }
    c.byeTerm = t.translate("common.byeTerm");
}
function $f2881198e3346121$export$539ef78a097046ba(c, stateObj, t, lang, time_format, server_time_zone) {
    var gameDate = new Date(stateObj.attributes.date);
    var todayDate = new Date();
    var todayDateStr = todayDate.toLocaleDateString(lang, {
        month: 'short',
        day: '2-digit'
    });
    var tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1);
    var tomorrowDateStr = tomorrowDate.toLocaleDateString(lang, {
        month: 'short',
        day: '2-digit'
    });
    var gameDateStr = gameDate.toLocaleDateString(lang, {
        month: 'short',
        day: '2-digit'
    });
    c.gameWeekday = gameDate.toLocaleDateString(lang, {
        weekday: 'long'
    });
    if (gameDateStr === todayDateStr) c.gameWeekday = t.translate("common.today");
    else if (gameDateStr === tomorrowDateStr) c.gameWeekday = t.translate("common.tomorrow");
    if (server_time_zone) {
        c.gameTime = gameDate.toLocaleTimeString(lang, {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: server_time_zone
        });
        if (time_format == "24") c.gameTime = gameDate.toLocaleTimeString(lang, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: server_time_zone
        });
        if (time_format == "12") c.gameTime = gameDate.toLocaleTimeString(lang, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: server_time_zone
        });
        if (time_format == "system") {
            var sys_lang = navigator.language || "en";
            c.gameTime = gameDate.toLocaleTimeString(sys_lang, {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: server_time_zone
            });
        }
    } else {
        c.gameTime = gameDate.toLocaleTimeString(lang, {
            hour: '2-digit',
            minute: '2-digit'
        });
        if (time_format == "24") c.gameTime = gameDate.toLocaleTimeString(lang, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        if (time_format == "12") c.gameTime = gameDate.toLocaleTimeString(lang, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        if (time_format == "system") {
            var sys_lang = navigator.language || "en";
            c.gameTime = gameDate.toLocaleTimeString(sys_lang, {
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    }
}



function $172f2fd1cb2f6cba$export$42406174c4ed4231(sport, stateObj, c, team, oppo) {
    switch(sport){
        case "cricket":
            return $172f2fd1cb2f6cba$var$setCricket(stateObj, c);
        case "golf":
            return $172f2fd1cb2f6cba$var$setGolf(stateObj, c, team, oppo);
        case "mma":
            return $172f2fd1cb2f6cba$var$setMMA(stateObj, c, team, oppo);
        case "racing":
            return $172f2fd1cb2f6cba$var$setRacing(stateObj, c, team, oppo);
        case "tennis":
            return $172f2fd1cb2f6cba$var$setTennis(stateObj, c, team, oppo);
        default:
            return;
    }
}
function $172f2fd1cb2f6cba$var$setCricket(stateObj, c) {
    if (c.score[1] || c.score[2]) {
        var subscores = [];
        subscores[1] = c.score[1].split("(");
        subscores[2] = c.score[2].split("(");
        c.score[1] = subscores[1][0];
        c.score[2] = subscores[2][0];
    }
}
function $172f2fd1cb2f6cba$var$setGolf(stateObj, c, team, oppo) {
    c.logo[team] = (0, $4fcaa3c95ba349ea$export$6df7962ea75d9a39) + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = (0, $4fcaa3c95ba349ea$export$6df7962ea75d9a39) + stateObj.attributes.opponent_id + ".png";
    c.logoAlternate[team] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
    c.logoAlternate[oppo] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
}
function $172f2fd1cb2f6cba$var$setMMA(stateObj, c, team, oppo) {
    c.logo[team] = (0, $4fcaa3c95ba349ea$export$7e154a1de2266268) + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = (0, $4fcaa3c95ba349ea$export$7e154a1de2266268) + stateObj.attributes.opponent_id + ".png";
    c.logoAlternate[team] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
    c.logoAlternate[oppo] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
}
function $172f2fd1cb2f6cba$var$setRacing(stateObj, c, team, oppo) {
    c.logo[team] = (0, $4fcaa3c95ba349ea$export$c8a00e33d990d0fa) + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = (0, $4fcaa3c95ba349ea$export$c8a00e33d990d0fa) + stateObj.attributes.opponent_id + ".png";
    c.logoAlternate[team] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
    c.logoAlternate[oppo] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
}
function $172f2fd1cb2f6cba$var$setTennis(stateObj, c, team, oppo) {
    c.logo[team] = (0, $4fcaa3c95ba349ea$export$54565cc34e8d24d2) + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = (0, $4fcaa3c95ba349ea$export$54565cc34e8d24d2) + stateObj.attributes.opponent_id + ".png";
    c.logoAlternate[team] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
    c.logoAlternate[oppo] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
}



const $1a7c5d625ead7579$export$c579ff79a032fc68 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
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


class $7693d33567d87510$export$292b4a7b3a6b7f8b extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            hass: {},
            _config: {}
        };
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
            ${0, $1a7c5d625ead7579$export$c579ff79a032fc68}
        `;
    }
    setConfig(config) {
        this._config = config;
        this._actionConfig = {
            entity: this._config.entity,
            dblclick_action: {
                action: "more-info"
            }
        };
    }
    getCardSize() {
        return 1;
    }
    render() {
        var o = {};
        var c = {};
        if (!this.hass || !this._config) return (0, $34e8f4cb5038827c$export$b2e19b637b85e37f)();
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) return (0, $34e8f4cb5038827c$export$adab126bb38c4dbc)(this._config.entity);
        if (stateObj.state == 'unavailable') return (0, $34e8f4cb5038827c$export$83a5095ba0388927)(this._config.entity);
        o.homeSide = String(this._config.home_side).toUpperCase();
        o.darkMode = this.hass.themes.darkMode;
        var team = 1;
        var oppo = 2;
        if (o.homeSide == "RIGHT" && stateObj.attributes.team_homeaway == "home" || o.homeSide == "LEFT" && stateObj.attributes.opponent_homeaway == "home") {
            team = 2;
            oppo = 1;
        }
        var lang = this.hass.selectedLanguage || this.hass.language || navigator.language || "en";
        var time_format = "language";
        try {
            time_format = this.hass.locale["time_format"] || "language";
        } catch (e) {
            time_format = "language";
        }
        var t = new (0, $cfd70fadc94c42c5$export$9850010f89e291bb)(lang);
        var sport = stateObj.attributes.sport || "default";
        if (t.translate(sport + ".startTerm") == "{" + sport + ".startTerm" + "}") sport = "default";
        var server_time_zone = null;
        if (this.hass.locale.time_zone == "server") server_time_zone = this.hass.config.time_zone;
        (0, $f2881198e3346121$export$554552fb00f06e66)(c);
        (0, $f2881198e3346121$export$539ef78a097046ba)(c, stateObj, t, lang, time_format, server_time_zone);
        (0, $f2881198e3346121$export$2e2366488d12e20d)(t, lang, stateObj, c, o, team, oppo);
        (0, $172f2fd1cb2f6cba$export$42406174c4ed4231)(sport, stateObj, c, team, oppo);
        switch(stateObj.state){
            case 'PRE':
                return (0, $0642b532e06ae26b$export$d6bad15bd473a528)(c);
            case 'IN':
                return (0, $f55026069bb994a8$export$3f4c9efb42c5bfd8)(c);
            case 'POST':
                return (0, $024678abbafb78ef$export$823f4865e91cfbff)(c);
            case 'BYE':
                return (0, $0fef19109112d570$export$eac7a64041e7dd4f)(c);
            case 'NOT_FOUND':
                return (0, $03e25072c52748fb$export$cbe2629e62de17f0)(c);
            default:
                return (0, $34e8f4cb5038827c$export$e26cf6a49fd1ec72)(c);
        }
    }
    firstUpdated() {
        this.shadowRoot.querySelector('.badge').addEventListener('dblclick', ()=>this._handleDoubleClick());
    }
    _handleDoubleClick() {
        const event = new Event('hass-action', {
            bubbles: true,
            composed: true
        });
        event.detail = {
            config: this._actionConfig,
            action: 'dblclick'
        };
        this.dispatchEvent(event);
    }
    static getConfigElement() {
        return document.createElement("teamtracker-badge-editor");
    }
    static getStubConfig() {
        return {
            entity: ""
        };
    }
}


customElements.define("teamtracker-badge", (0, $7693d33567d87510$export$292b4a7b3a6b7f8b));
customElements.define("teamtracker-badge-editor", (0, $493b3ddf8310b60c$export$406fb8b3d39eec91));
console.info("%c TEAMTRACKER-BADGE %s IS INSTALLED", "color: green; font-weight: bold", (0, $4fcaa3c95ba349ea$export$a4ad2735b021c132));
window.customBadges = window.customBadges || [];
window.customBadges.push({
    type: "teamtracker-badge",
    name: "Team Tracker Badge",
    description: "Badge to display the ha-teamtracker sensor"
});


//# sourceMappingURL=ha-teamtracker-badge.js.map
