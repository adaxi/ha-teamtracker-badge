let $4fcaa3c95ba349ea$export$a4ad2735b021c132 = "v0.18.0";
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




const $493b3ddf8310b60c$var$SCHEMA = [
    {
        name: "context",
        type: "expandable",
        flatten: true,
        icon: "mdi:shape",
        schema: [
            {
                name: "entity",
                selector: {
                    entity: {
                        filter: {
                            integration: "teamtracker"
                        }
                    }
                }
            }
        ]
    },
    {
        name: "content",
        type: "expandable",
        flatten: true,
        icon: "mdi:text-short",
        schema: [
            {
                name: "home_side",
                selector: {
                    select: {
                        mode: "dropdown",
                        options: [
                            {
                                value: "team",
                                label: "Team on Left"
                            },
                            {
                                value: "left",
                                label: "Home on Left"
                            },
                            {
                                value: "right",
                                label: "Home on Right"
                            }
                        ]
                    }
                }
            }
        ]
    },
    {
        name: "interactions",
        type: "expandable",
        flatten: true,
        icon: "mdi:gesture-tap",
        schema: [
            {
                name: "tap_action",
                selector: {
                    ui_action: {
                        default_action: "more-info"
                    }
                }
            },
            {
                name: "",
                type: "optional_actions",
                flatten: true,
                schema: [
                    "hold_action",
                    "double_tap_action"
                ].map((action)=>({
                        name: action,
                        selector: {
                            ui_action: {
                                default_action: "none"
                            }
                        }
                    }))
            }
        ]
    }
];
const $493b3ddf8310b60c$var$LABELS = {
    context: "Context",
    content: "Content",
    interactions: "Interactions",
    home_side: "Home Side"
};
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
    _computeLabel = (schema)=>{
        if ($493b3ddf8310b60c$var$LABELS[schema.name]) return $493b3ddf8310b60c$var$LABELS[schema.name];
        return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${schema.name}`);
    };
    render() {
        if (!this.hass || !this._config) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${$493b3ddf8310b60c$var$SCHEMA}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `;
    }
    _valueChanged = (ev)=>{
        this.configChanged(ev.detail.value);
    };
}


var $8944235bd8be49ac$var$__assign = undefined && undefined.__assign || function() {
    $8944235bd8be49ac$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $8944235bd8be49ac$var$__assign.apply(this, arguments);
};
var $8944235bd8be49ac$var$MS_PER_SECOND = 1e3;
var $8944235bd8be49ac$var$SECS_PER_MIN = 60;
var $8944235bd8be49ac$var$SECS_PER_HOUR = $8944235bd8be49ac$var$SECS_PER_MIN * 60;
var $8944235bd8be49ac$var$SECS_PER_DAY = $8944235bd8be49ac$var$SECS_PER_HOUR * 24;
var $8944235bd8be49ac$var$SECS_PER_WEEK = $8944235bd8be49ac$var$SECS_PER_DAY * 7;
function $8944235bd8be49ac$export$b8f7189986dd5395(from, to, thresholds) {
    if (to === void 0) to = Date.now();
    if (thresholds === void 0) thresholds = {};
    var resolvedThresholds = $8944235bd8be49ac$var$__assign($8944235bd8be49ac$var$__assign({}, $8944235bd8be49ac$export$f4fd60e41371f80d), thresholds || {});
    var secs = (+from - +to) / $8944235bd8be49ac$var$MS_PER_SECOND;
    if (Math.abs(secs) < resolvedThresholds.second) return {
        value: Math.round(secs),
        unit: 'second'
    };
    var mins = secs / $8944235bd8be49ac$var$SECS_PER_MIN;
    if (Math.abs(mins) < resolvedThresholds.minute) return {
        value: Math.round(mins),
        unit: 'minute'
    };
    var hours = secs / $8944235bd8be49ac$var$SECS_PER_HOUR;
    if (Math.abs(hours) < resolvedThresholds.hour) return {
        value: Math.round(hours),
        unit: 'hour'
    };
    var days = secs / $8944235bd8be49ac$var$SECS_PER_DAY;
    if (Math.abs(days) < resolvedThresholds.day) return {
        value: Math.round(days),
        unit: 'day'
    };
    var fromDate = new Date(from);
    var toDate = new Date(to);
    var years = fromDate.getFullYear() - toDate.getFullYear();
    if (Math.round(Math.abs(years)) > 0) return {
        value: Math.round(years),
        unit: 'year'
    };
    var months = years * 12 + fromDate.getMonth() - toDate.getMonth();
    if (Math.round(Math.abs(months)) > 0) return {
        value: Math.round(months),
        unit: 'month'
    };
    var weeks = secs / $8944235bd8be49ac$var$SECS_PER_WEEK;
    return {
        value: Math.round(weeks),
        unit: 'week'
    };
}
var $8944235bd8be49ac$export$f4fd60e41371f80d = {
    second: 45,
    minute: 45,
    hour: 22,
    day: 5
};


var $ee1328194d522913$export$27bce688931fdfcc, $ee1328194d522913$export$7fd1ce15b01d50ca, $ee1328194d522913$export$1a0dc7c974e8444d = function(e, t) {
    return $ee1328194d522913$var$i(t).format(e);
}, $ee1328194d522913$var$i = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
}, $ee1328194d522913$export$3ae94a2503e890a1 = function(e, t) {
    return $ee1328194d522913$var$o(t).format(e);
}, $ee1328194d522913$var$o = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}, $ee1328194d522913$export$fbb9ef859002af37 = function(e, t) {
    return $ee1328194d522913$var$c(t).format(e);
}, $ee1328194d522913$var$c = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });
}, $ee1328194d522913$export$7813392c1f00426f = function(e, t) {
    return $ee1328194d522913$var$s(t).format(e);
}, $ee1328194d522913$var$s = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        day: "numeric",
        month: "short"
    });
}, $ee1328194d522913$export$295e1e57d6713bf4 = function(e, t) {
    return $ee1328194d522913$var$d(t).format(e);
}, $ee1328194d522913$var$d = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        month: "long",
        year: "numeric"
    });
}, $ee1328194d522913$export$cbc7ca92d37b9650 = function(e, t) {
    return $ee1328194d522913$var$g(t).format(e);
}, $ee1328194d522913$var$g = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        month: "long"
    });
}, $ee1328194d522913$export$5a252a405018366 = function(e, t) {
    return $ee1328194d522913$var$h(t).format(e);
}, $ee1328194d522913$var$h = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric"
    });
};
!function(e) {
    e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
}($ee1328194d522913$export$27bce688931fdfcc || ($ee1328194d522913$export$27bce688931fdfcc = {})), function(e) {
    e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}($ee1328194d522913$export$7fd1ce15b01d50ca || ($ee1328194d522913$export$7fd1ce15b01d50ca = {}));
var $ee1328194d522913$var$b = function(e) {
    if (e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.language || e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.system) {
        var t = e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.language ? e.language : void 0, n = (new Date).toLocaleString(t);
        return n.includes("AM") || n.includes("PM");
    }
    return e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.am_pm;
}, $ee1328194d522913$export$8b492ed8828f789c = function(e, t) {
    return $ee1328194d522913$var$_(t).format(e);
}, $ee1328194d522913$var$_ = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$c2c7ff0067c06a13 = function(e, t) {
    return $ee1328194d522913$var$w(t).format(e);
}, $ee1328194d522913$var$w = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$c8a72f22956ccab0 = function(e, t) {
    return $ee1328194d522913$var$x(t).format(e);
}, $ee1328194d522913$var$x = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$3203edd9e5edd663 = function(e, t) {
    return $ee1328194d522913$var$S(t).format(e);
}, $ee1328194d522913$var$S = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: "numeric",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$ec86e83f20e68cd8 = function(e, t) {
    return $ee1328194d522913$var$T(t).format(e);
}, $ee1328194d522913$var$T = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$ad627f6ad084f5a2 = function(e, t) {
    return $ee1328194d522913$var$N(t).format(e);
}, $ee1328194d522913$var$N = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$caddcc104251c1d7 = function(t, r, n, i) {
    void 0 === i && (i = !0);
    var a = (0, $8944235bd8be49ac$export$b8f7189986dd5395)(t, n);
    return i ? (function(e) {
        return new Intl.RelativeTimeFormat(e.language, {
            numeric: "auto"
        });
    })(r).format(a.value, a.unit) : Intl.NumberFormat(r.language, {
        style: "unit",
        unit: a.unit,
        unitDisplay: "long"
    }).format(Math.abs(a.value));
};
function $ee1328194d522913$export$50fe296bd2427aef(e) {
    var t, r = 3600 * (t = e.attributes.remaining.split(":").map(Number))[0] + 60 * t[1] + t[2];
    if ("active" === e.state) {
        var n = (new Date).getTime(), i = new Date(e.last_changed).getTime();
        r = Math.max(r - (n - i) / 1e3, 0);
    }
    return r;
}
function $ee1328194d522913$var$O() {
    return ($ee1328194d522913$var$O = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var r = arguments[t];
            for(var n in r)Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }).apply(this, arguments);
}
var $ee1328194d522913$export$2a5af2efac2f8dc = function(e, t, r, n) {
    void 0 === n && (n = !1), e._themes || (e._themes = {});
    var i = t.default_theme;
    ("default" === r || r && t.themes[r]) && (i = r);
    var a = $ee1328194d522913$var$O({}, e._themes);
    if ("default" !== i) {
        var o = t.themes[i];
        Object.keys(o).forEach(function(t) {
            var r = "--" + t;
            e._themes[r] = "", a[r] = o[t];
        });
    }
    if (e.updateStyles ? e.updateStyles(a) : window.ShadyCSS && window.ShadyCSS.styleSubtree(e, a), n) {
        var u = document.querySelector("meta[name=theme-color]");
        if (u) {
            u.hasAttribute("default-content") || u.setAttribute("default-content", u.getAttribute("content"));
            var c = a["--primary-color"] || u.getAttribute("default-content");
            u.setAttribute("content", c);
        }
    }
}, $ee1328194d522913$export$67835a66b9f6da52 = function(e) {
    return "function" == typeof e.getCardSize ? e.getCardSize() : 4;
};
function $ee1328194d522913$export$2044bdc9670769ab(e) {
    return e.substr(0, e.indexOf("."));
}
function $ee1328194d522913$export$4c7757901b2ff860(e) {
    return e.substr(e.indexOf(".") + 1);
}
function $ee1328194d522913$export$5cacf63e4bbfecae(e) {
    var t, r = (null == e || null == (t = e.locale) ? void 0 : t.language) || "en";
    return e.translationMetadata.translations[r] && e.translationMetadata.translations[r].isRTL || !1;
}
function $ee1328194d522913$export$703829fe2802931b(e) {
    return $ee1328194d522913$export$5cacf63e4bbfecae(e) ? "rtl" : "ltr";
}
function $ee1328194d522913$export$5b7b50e8043fabe(e) {
    return $ee1328194d522913$export$2044bdc9670769ab(e.entity_id);
}
var $ee1328194d522913$export$88bfc1035e667f37 = function(e) {
    return !!e.attributes.unit_of_measurement || !!e.attributes.state_class;
}, $ee1328194d522913$export$5e25e39d6a8c0c11 = function(e) {
    switch(e.number_format){
        case $ee1328194d522913$export$27bce688931fdfcc.comma_decimal:
            return [
                "en-US",
                "en"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.decimal_comma:
            return [
                "de",
                "es",
                "it"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.space_comma:
            return [
                "fr",
                "sv",
                "cs"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.system:
            return;
        default:
            return e.language;
    }
}, $ee1328194d522913$export$2077e0241d6afd3c = function(e, t) {
    return void 0 === t && (t = 2), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
}, $ee1328194d522913$export$f5dd818bff069720 = function(e, r, n) {
    var i = r ? $ee1328194d522913$export$5e25e39d6a8c0c11(r) : void 0;
    if (Number.isNaN = Number.isNaN || function e(t) {
        return "number" == typeof t && e(t);
    }, (null == r ? void 0 : r.number_format) !== $ee1328194d522913$export$27bce688931fdfcc.none && !Number.isNaN(Number(e)) && Intl) try {
        return new Intl.NumberFormat(i, $ee1328194d522913$var$V(e, n)).format(Number(e));
    } catch (t) {
        return console.error(t), new Intl.NumberFormat(void 0, $ee1328194d522913$var$V(e, n)).format(Number(e));
    }
    return "string" == typeof e ? e : $ee1328194d522913$export$2077e0241d6afd3c(e, null == n ? void 0 : n.maximumFractionDigits).toString() + ("currency" === (null == n ? void 0 : n.style) ? " " + n.currency : "");
}, $ee1328194d522913$var$V = function(e, t) {
    var r = $ee1328194d522913$var$O({
        maximumFractionDigits: 2
    }, t);
    if ("string" != typeof e) return r;
    if (!t || !t.minimumFractionDigits && !t.maximumFractionDigits) {
        var n = e.indexOf(".") > -1 ? e.split(".")[1].length : 0;
        r.minimumFractionDigits = n, r.maximumFractionDigits = n;
    }
    return r;
}, $ee1328194d522913$export$278f9ea9192cff94 = function(e, t, r, n) {
    var i = void 0 !== n ? n : t.state;
    if ("unknown" === i || "unavailable" === i) return e("state.default." + i);
    if ($ee1328194d522913$export$88bfc1035e667f37(t)) {
        if ("monetary" === t.attributes.device_class) try {
            return $ee1328194d522913$export$f5dd818bff069720(i, r, {
                style: "currency",
                currency: t.attributes.unit_of_measurement
            });
        } catch (e) {}
        return $ee1328194d522913$export$f5dd818bff069720(i, r) + (t.attributes.unit_of_measurement ? " " + t.attributes.unit_of_measurement : "");
    }
    var o = $ee1328194d522913$export$5b7b50e8043fabe(t);
    if ("input_datetime" === o) {
        var u;
        if (void 0 === n) return t.attributes.has_date && t.attributes.has_time ? (u = new Date(t.attributes.year, t.attributes.month - 1, t.attributes.day, t.attributes.hour, t.attributes.minute), $ee1328194d522913$export$8b492ed8828f789c(u, r)) : t.attributes.has_date ? (u = new Date(t.attributes.year, t.attributes.month - 1, t.attributes.day), $ee1328194d522913$export$3ae94a2503e890a1(u, r)) : t.attributes.has_time ? ((u = new Date).setHours(t.attributes.hour, t.attributes.minute), $ee1328194d522913$export$3203edd9e5edd663(u, r)) : t.state;
        try {
            var c = n.split(" ");
            if (2 === c.length) return $ee1328194d522913$export$8b492ed8828f789c(new Date(c.join("T")), r);
            if (1 === c.length) {
                if (n.includes("-")) return $ee1328194d522913$export$3ae94a2503e890a1(new Date(n + "T00:00"), r);
                if (n.includes(":")) {
                    var m = new Date;
                    return $ee1328194d522913$export$3203edd9e5edd663(new Date(m.toISOString().split("T")[0] + "T" + n), r);
                }
            }
            return n;
        } catch (e) {
            return n;
        }
    }
    return "humidifier" === o && "on" === i && t.attributes.humidity ? t.attributes.humidity + " %" : "counter" === o || "number" === o || "input_number" === o ? $ee1328194d522913$export$f5dd818bff069720(i, r) : t.attributes.device_class && e("component." + o + ".state." + t.attributes.device_class + "." + i) || e("component." + o + ".state._." + i) || i;
}, $ee1328194d522913$export$25978a5d5a562f09 = "mdi:bookmark", $ee1328194d522913$export$f78a3169a0f9f31b = "lovelace", $ee1328194d522913$export$6df9924792233bc = [
    "climate",
    "cover",
    "configurator",
    "input_select",
    "input_number",
    "input_text",
    "lock",
    "media_player",
    "scene",
    "script",
    "timer",
    "vacuum",
    "water_heater",
    "weblink"
], $ee1328194d522913$export$b9a2b37e93bb73f2 = [
    "alarm_control_panel",
    "automation",
    "camera",
    "climate",
    "configurator",
    "cover",
    "fan",
    "group",
    "history_graph",
    "input_datetime",
    "light",
    "lock",
    "media_player",
    "script",
    "sun",
    "updater",
    "vacuum",
    "water_heater",
    "weather"
], $ee1328194d522913$export$ca927753507128f6 = [
    "input_number",
    "input_select",
    "input_text",
    "scene",
    "weblink"
], $ee1328194d522913$export$60e836dfbaf943c5 = [
    "camera",
    "configurator",
    "history_graph",
    "scene"
], $ee1328194d522913$export$23bace2b7923e5d1 = [
    "closed",
    "locked",
    "off"
], $ee1328194d522913$export$1b64f44bed0feb66 = new Set([
    "fan",
    "input_boolean",
    "light",
    "switch",
    "group",
    "automation"
]), $ee1328194d522913$export$3ed39d80c7b24b62 = "\xb0C", $ee1328194d522913$export$5c7f540eb0eef6a6 = "\xb0F", $ee1328194d522913$export$2c7beb20637e0bd1 = "group.default_view", $ee1328194d522913$export$43835e9acf248a15 = function(e, t, r, n) {
    n = n || {}, r = null == r ? {} : r;
    var i = new Event(t, {
        bubbles: void 0 === n.bubbles || n.bubbles,
        cancelable: Boolean(n.cancelable),
        composed: void 0 === n.composed || n.composed
    });
    return i.detail = r, e.dispatchEvent(i), i;
}, $ee1328194d522913$var$ie = new Set([
    "call-service",
    "divider",
    "section",
    "weblink",
    "cast",
    "select"
]), $ee1328194d522913$var$ae = {
    alert: "toggle",
    automation: "toggle",
    climate: "climate",
    cover: "cover",
    fan: "toggle",
    group: "group",
    input_boolean: "toggle",
    input_number: "input-number",
    input_select: "input-select",
    input_text: "input-text",
    light: "toggle",
    lock: "lock",
    media_player: "media-player",
    remote: "toggle",
    scene: "scene",
    script: "script",
    sensor: "sensor",
    timer: "timer",
    switch: "toggle",
    vacuum: "toggle",
    water_heater: "climate",
    input_datetime: "input-datetime"
}, $ee1328194d522913$export$5ad555b55cd85e0c = function(e, t) {
    void 0 === t && (t = !1);
    var r = function(e, t) {
        return n("hui-error-card", {
            type: "error",
            error: e,
            config: t
        });
    }, n = function(e, t) {
        var n = window.document.createElement(e);
        try {
            if (!n.setConfig) return;
            n.setConfig(t);
        } catch (n) {
            return console.error(e, n), r(n.message, t);
        }
        return n;
    };
    if (!e || "object" != typeof e || !t && !e.type) return r("No type defined", e);
    var i = e.type;
    if (i && i.startsWith("custom:")) i = i.substr(7);
    else if (t) {
        if ($ee1328194d522913$var$ie.has(i)) i = "hui-" + i + "-row";
        else {
            if (!e.entity) return r("Invalid config given.", e);
            var a = e.entity.split(".", 1)[0];
            i = "hui-" + ($ee1328194d522913$var$ae[a] || "text") + "-entity-row";
        }
    } else i = "hui-" + i + "-card";
    if (customElements.get(i)) return n(i, e);
    var o = r("Custom element doesn't exist: " + e.type + ".", e);
    o.style.display = "None";
    var u = setTimeout(function() {
        o.style.display = "";
    }, 2e3);
    return customElements.whenDefined(e.type).then(function() {
        clearTimeout(u), $ee1328194d522913$export$43835e9acf248a15(o, "ll-rebuild", {}, o);
    }), o;
}, $ee1328194d522913$export$61fc7d43ac8f84b0 = function(e, t, r) {
    var n;
    return void 0 === r && (r = !1), function() {
        var i = [].slice.call(arguments), a = this, o = function() {
            n = null, r || e.apply(a, i);
        }, u = r && !n;
        clearTimeout(n), n = setTimeout(o, t), u && e.apply(a, i);
    };
}, $ee1328194d522913$export$a76407ec79ca4ea3 = {
    alert: "mdi:alert",
    automation: "mdi:playlist-play",
    calendar: "mdi:calendar",
    camera: "mdi:video",
    climate: "mdi:thermostat",
    configurator: "mdi:settings",
    conversation: "mdi:text-to-speech",
    device_tracker: "mdi:account",
    fan: "mdi:fan",
    group: "mdi:google-circles-communities",
    history_graph: "mdi:chart-line",
    homeassistant: "mdi:home-assistant",
    homekit: "mdi:home-automation",
    image_processing: "mdi:image-filter-frames",
    input_boolean: "mdi:drawing",
    input_datetime: "mdi:calendar-clock",
    input_number: "mdi:ray-vertex",
    input_select: "mdi:format-list-bulleted",
    input_text: "mdi:textbox",
    light: "mdi:lightbulb",
    mailbox: "mdi:mailbox",
    notify: "mdi:comment-alert",
    person: "mdi:account",
    plant: "mdi:flower",
    proximity: "mdi:apple-safari",
    remote: "mdi:remote",
    scene: "mdi:google-pages",
    script: "mdi:file-document",
    sensor: "mdi:eye",
    simple_alarm: "mdi:bell",
    sun: "mdi:white-balance-sunny",
    switch: "mdi:flash",
    timer: "mdi:timer",
    updater: "mdi:cloud-upload",
    vacuum: "mdi:robot-vacuum",
    water_heater: "mdi:thermometer",
    weblink: "mdi:open-in-new"
};
function $ee1328194d522913$export$13fcd5035aa1446(e, t) {
    if (e in $ee1328194d522913$export$a76407ec79ca4ea3) return $ee1328194d522913$export$a76407ec79ca4ea3[e];
    switch(e){
        case "alarm_control_panel":
            switch(t){
                case "armed_home":
                    return "mdi:bell-plus";
                case "armed_night":
                    return "mdi:bell-sleep";
                case "disarmed":
                    return "mdi:bell-outline";
                case "triggered":
                    return "mdi:bell-ring";
                default:
                    return "mdi:bell";
            }
        case "binary_sensor":
            return t && "off" === t ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
        case "cover":
            return "closed" === t ? "mdi:window-closed" : "mdi:window-open";
        case "lock":
            return t && "unlocked" === t ? "mdi:lock-open" : "mdi:lock";
        case "media_player":
            return t && "off" !== t && "idle" !== t ? "mdi:cast-connected" : "mdi:cast";
        case "zwave":
            switch(t){
                case "dead":
                    return "mdi:emoticon-dead";
                case "sleeping":
                    return "mdi:sleep";
                case "initializing":
                    return "mdi:timer-sand";
                default:
                    return "mdi:z-wave";
            }
        default:
            return console.warn("Unable to find icon for domain " + e + " (" + t + ")"), "mdi:bookmark";
    }
}
var $ee1328194d522913$export$e2b36fa5c60547b2 = function(e, t) {
    var r = t.value || t, n = t.attribute ? e.attributes[t.attribute] : e.state;
    switch(t.operator || "=="){
        case "==":
            return n === r;
        case "<=":
            return n <= r;
        case "<":
            return n < r;
        case ">=":
            return n >= r;
        case ">":
            return n > r;
        case "!=":
            return n !== r;
        case "regex":
            return n.match(r);
        default:
            return !1;
    }
}, $ee1328194d522913$export$8bcf112cf396c716 = function(e) {
    $ee1328194d522913$export$43835e9acf248a15(window, "haptic", e);
}, $ee1328194d522913$export$ff7962acd6052c28 = function(e, t, r) {
    void 0 === r && (r = !1), r ? history.replaceState(null, "", t) : history.pushState(null, "", t), $ee1328194d522913$export$43835e9acf248a15(window, "location-changed", {
        replace: r
    });
}, $ee1328194d522913$export$3303cc16da6bc061 = function(e, t, r) {
    void 0 === r && (r = !0);
    var n, i = $ee1328194d522913$export$2044bdc9670769ab(t), a = "group" === i ? "homeassistant" : i;
    switch(i){
        case "lock":
            n = r ? "unlock" : "lock";
            break;
        case "cover":
            n = r ? "open_cover" : "close_cover";
            break;
        default:
            n = r ? "turn_on" : "turn_off";
    }
    return e.callService(a, n, {
        entity_id: t
    });
}, $ee1328194d522913$export$4f6896672dcf12b1 = function(e, t) {
    var r = $ee1328194d522913$export$23bace2b7923e5d1.includes(e.states[t].state);
    return $ee1328194d522913$export$3303cc16da6bc061(e, t, r);
}, $ee1328194d522913$export$fe63bc0ae3396800 = function(e, t, r, n) {
    if (n || (n = {
        action: "more-info"
    }), !n.confirmation || n.confirmation.exemptions && n.confirmation.exemptions.some(function(e) {
        return e.user === t.user.id;
    }) || ($ee1328194d522913$export$8bcf112cf396c716("warning"), confirm(n.confirmation.text || "Are you sure you want to " + n.action + "?"))) switch(n.action){
        case "more-info":
            (r.entity || r.camera_image) && $ee1328194d522913$export$43835e9acf248a15(e, "hass-more-info", {
                entityId: r.entity ? r.entity : r.camera_image
            });
            break;
        case "navigate":
            n.navigation_path && $ee1328194d522913$export$ff7962acd6052c28(0, n.navigation_path);
            break;
        case "url":
            n.url_path && window.open(n.url_path);
            break;
        case "toggle":
            r.entity && ($ee1328194d522913$export$4f6896672dcf12b1(t, r.entity), $ee1328194d522913$export$8bcf112cf396c716("success"));
            break;
        case "call-service":
            if (!n.service) return void $ee1328194d522913$export$8bcf112cf396c716("failure");
            var i = n.service.split(".", 2);
            t.callService(i[0], i[1], n.service_data, n.target), $ee1328194d522913$export$8bcf112cf396c716("success");
            break;
        case "fire-dom-event":
            $ee1328194d522913$export$43835e9acf248a15(e, "ll-custom", n);
    }
}, $ee1328194d522913$export$6c6c3f4b7541eaf1 = function(e, t, r, n) {
    var i;
    "double_tap" === n && r.double_tap_action ? i = r.double_tap_action : "hold" === n && r.hold_action ? i = r.hold_action : "tap" === n && r.tap_action && (i = r.tap_action), $ee1328194d522913$export$fe63bc0ae3396800(e, t, r, i);
}, $ee1328194d522913$export$b981489921ee18cd = function(e, t, r, n, i) {
    var a;
    if (i && r.double_tap_action ? a = r.double_tap_action : n && r.hold_action ? a = r.hold_action : !n && r.tap_action && (a = r.tap_action), a || (a = {
        action: "more-info"
    }), !a.confirmation || a.confirmation.exemptions && a.confirmation.exemptions.some(function(e) {
        return e.user === t.user.id;
    }) || confirm(a.confirmation.text || "Are you sure you want to " + a.action + "?")) switch(a.action){
        case "more-info":
            (a.entity || r.entity || r.camera_image) && ($ee1328194d522913$export$43835e9acf248a15(e, "hass-more-info", {
                entityId: a.entity ? a.entity : r.entity ? r.entity : r.camera_image
            }), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "navigate":
            a.navigation_path && ($ee1328194d522913$export$ff7962acd6052c28(0, a.navigation_path), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "url":
            a.url_path && window.open(a.url_path), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
            break;
        case "toggle":
            r.entity && ($ee1328194d522913$export$4f6896672dcf12b1(t, r.entity), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "call-service":
            if (!a.service) return;
            var o = a.service.split(".", 2), u = o[0], c = o[1], m = $ee1328194d522913$var$O({}, a.service_data);
            "entity" === m.entity_id && (m.entity_id = r.entity), t.callService(u, c, m, a.target), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
            break;
        case "fire-dom-event":
            $ee1328194d522913$export$43835e9acf248a15(e, "ll-custom", a), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
    }
};
function $ee1328194d522913$export$e217e69099d082f5(e) {
    return void 0 !== e && "none" !== e.action;
}
function $ee1328194d522913$export$695b4dbcc1028091(e, t, r) {
    if (t.has("config") || r) return !0;
    if (e.config.entity) {
        var n = t.get("hass");
        return !n || n.states[e.config.entity] !== e.hass.states[e.config.entity];
    }
    return !1;
}
function $ee1328194d522913$export$72d503079d05a3cf(e) {
    return void 0 !== e && "none" !== e.action;
}
var $ee1328194d522913$export$8d080c28108db9dd = function(e, t, r) {
    void 0 === r && (r = !0);
    var n = {};
    t.forEach(function(t) {
        if ($ee1328194d522913$export$23bace2b7923e5d1.includes(e.states[t].state) === r) {
            var i = $ee1328194d522913$export$2044bdc9670769ab(t), a = [
                "cover",
                "lock"
            ].includes(i) ? i : "homeassistant";
            a in n || (n[a] = []), n[a].push(t);
        }
    }), Object.keys(n).forEach(function(t) {
        var i;
        switch(t){
            case "lock":
                i = r ? "unlock" : "lock";
                break;
            case "cover":
                i = r ? "open_cover" : "close_cover";
                break;
            default:
                i = r ? "turn_on" : "turn_off";
        }
        e.callService(t, i, {
            entity_id: n[t]
        });
    });
}, $ee1328194d522913$export$b5e56594b0d6a61e = function() {
    var e = document.querySelector("home-assistant");
    if (e = (e = (e = (e = (e = (e = (e = (e = e && e.shadowRoot) && e.querySelector("home-assistant-main")) && e.shadowRoot) && e.querySelector("app-drawer-layout partial-panel-resolver")) && e.shadowRoot || e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) && e.querySelector("hui-root")) {
        var t = e.lovelace;
        return t.current_view = e.___curView, t;
    }
    return null;
}, $ee1328194d522913$var$xe = {
    humidity: "mdi:water-percent",
    illuminance: "mdi:brightness-5",
    temperature: "mdi:thermometer",
    pressure: "mdi:gauge",
    power: "mdi:flash",
    signal_strength: "mdi:wifi"
}, $ee1328194d522913$var$De = {
    binary_sensor: function(e, t) {
        var r = "off" === e;
        switch(null == t ? void 0 : t.attributes.device_class){
            case "battery":
                return r ? "mdi:battery" : "mdi:battery-outline";
            case "battery_charging":
                return r ? "mdi:battery" : "mdi:battery-charging";
            case "cold":
                return r ? "mdi:thermometer" : "mdi:snowflake";
            case "connectivity":
                return r ? "mdi:server-network-off" : "mdi:server-network";
            case "door":
                return r ? "mdi:door-closed" : "mdi:door-open";
            case "garage_door":
                return r ? "mdi:garage" : "mdi:garage-open";
            case "power":
                return r ? "mdi:power-plug-off" : "mdi:power-plug";
            case "gas":
            case "problem":
            case "safety":
            case "tamper":
                return r ? "mdi:check-circle" : "mdi:alert-circle";
            case "smoke":
                return r ? "mdi:check-circle" : "mdi:smoke";
            case "heat":
                return r ? "mdi:thermometer" : "mdi:fire";
            case "light":
                return r ? "mdi:brightness-5" : "mdi:brightness-7";
            case "lock":
                return r ? "mdi:lock" : "mdi:lock-open";
            case "moisture":
                return r ? "mdi:water-off" : "mdi:water";
            case "motion":
                return r ? "mdi:walk" : "mdi:run";
            case "occupancy":
                return r ? "mdi:home-outline" : "mdi:home";
            case "opening":
                return r ? "mdi:square" : "mdi:square-outline";
            case "plug":
                return r ? "mdi:power-plug-off" : "mdi:power-plug";
            case "presence":
                return r ? "mdi:home-outline" : "mdi:home";
            case "running":
                return r ? "mdi:stop" : "mdi:play";
            case "sound":
                return r ? "mdi:music-note-off" : "mdi:music-note";
            case "update":
                return r ? "mdi:package" : "mdi:package-up";
            case "vibration":
                return r ? "mdi:crop-portrait" : "mdi:vibrate";
            case "window":
                return r ? "mdi:window-closed" : "mdi:window-open";
            default:
                return r ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
        }
    },
    cover: function(e) {
        var t = "closed" !== e.state;
        switch(e.attributes.device_class){
            case "garage":
                return t ? "mdi:garage-open" : "mdi:garage";
            case "door":
                return t ? "mdi:door-open" : "mdi:door-closed";
            case "shutter":
                return t ? "mdi:window-shutter-open" : "mdi:window-shutter";
            case "blind":
                return t ? "mdi:blinds-open" : "mdi:blinds";
            case "window":
                return t ? "mdi:window-open" : "mdi:window-closed";
            default:
                return $ee1328194d522913$export$13fcd5035aa1446("cover", e.state);
        }
    },
    sensor: function(e) {
        var t = e.attributes.device_class;
        if (t && t in $ee1328194d522913$var$xe) return $ee1328194d522913$var$xe[t];
        if ("battery" === t) {
            var r = Number(e.state);
            if (isNaN(r)) return "mdi:battery-unknown";
            var n = 10 * Math.round(r / 10);
            return n >= 100 ? "mdi:battery" : n <= 0 ? "mdi:battery-alert" : "hass:battery-" + n;
        }
        var i = e.attributes.unit_of_measurement;
        return "\xb0C" === i || "\xb0F" === i ? "mdi:thermometer" : $ee1328194d522913$export$13fcd5035aa1446("sensor");
    },
    input_datetime: function(e) {
        return e.attributes.has_date ? e.attributes.has_time ? $ee1328194d522913$export$13fcd5035aa1446("input_datetime") : "mdi:calendar" : "mdi:clock";
    }
}, $ee1328194d522913$export$d138d1363acbec1f = function(e) {
    if (!e) return "mdi:bookmark";
    if (e.attributes.icon) return e.attributes.icon;
    var t = $ee1328194d522913$export$2044bdc9670769ab(e.entity_id);
    return t in $ee1328194d522913$var$De ? $ee1328194d522913$var$De[t](e) : $ee1328194d522913$export$13fcd5035aa1446(t, e.state);
};



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
        const badge = this.shadowRoot.querySelector('.badge');
        if (badge) this._bindActions(badge);
    }
    // Lightweight gesture recognizer mirroring Home Assistant's action-handler
    // semantics: hold/double-tap are only detected when configured, and a tap
    // always resolves (defaulting to more-info via handleAction).
    _bindActions(el) {
        el.style.cursor = 'pointer';
        let holdTimer;
        let tapTimer;
        let held = false;
        el.addEventListener('pointerdown', ()=>{
            held = false;
            if ((0, $ee1328194d522913$export$e217e69099d082f5)(this._config.hold_action)) holdTimer = setTimeout(()=>{
                held = true;
                this._runAction('hold');
            }, 500);
        });
        el.addEventListener('pointercancel', ()=>{
            clearTimeout(holdTimer);
            held = false;
        });
        el.addEventListener('pointerup', ()=>{
            clearTimeout(holdTimer);
            if (held) return;
            if (!(0, $ee1328194d522913$export$e217e69099d082f5)(this._config.double_tap_action)) {
                this._runAction('tap');
                return;
            }
            if (tapTimer) {
                clearTimeout(tapTimer);
                tapTimer = undefined;
                this._runAction('double_tap');
            } else tapTimer = setTimeout(()=>{
                tapTimer = undefined;
                this._runAction('tap');
            }, 250);
        });
    }
    _runAction(action) {
        (0, $ee1328194d522913$export$6c6c3f4b7541eaf1)(this, this.hass, this._config, action);
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
