"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [642], {
        6648: function(t, e, i) {
            i.d(e, {
                default: function() {
                    return r.a
                }
            });
            var n = i(5601),
                r = i.n(n)
        },
        8173: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            let n = i(9920),
                r = i(1452),
                s = i(7437),
                o = r._(i(2265)),
                a = n._(i(4887)),
                l = n._(i(8321)),
                u = i(497),
                h = i(7103),
                d = i(3938);
            i(2301);
            let c = i(291),
                p = n._(i(1241)),
                m = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function f(t, e, i, n, r, s, o) {
                let a = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && r(!0), null == i ? void 0 : i.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                r = !1;
                            i.current({
                                ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => r,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    r = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                }))
            }

            function v(t) {
                return o.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let g = (0, o.forwardRef)((t, e) => {
                let {
                    src: i,
                    srcSet: n,
                    sizes: r,
                    height: a,
                    width: l,
                    decoding: u,
                    className: h,
                    style: d,
                    fetchPriority: c,
                    placeholder: p,
                    loading: m,
                    unoptimized: g,
                    fill: y,
                    onLoadRef: x,
                    onLoadingCompleteRef: P,
                    setBlurComplete: b,
                    setShowAltText: w,
                    sizesInput: S,
                    onLoad: T,
                    onError: A,
                    ...C
                } = t;
                return (0, s.jsx)("img", {
                    ...C,
                    ...v(c),
                    loading: m,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": y ? "fill" : "1",
                    className: h,
                    style: d,
                    sizes: r,
                    srcSet: n,
                    src: i,
                    ref: (0, o.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (A && (t.src = t.src), t.complete && f(t, p, x, P, b, g, S))
                    }, [i, p, x, P, b, A, g, S, e]),
                    onLoad: t => {
                        f(t.currentTarget, p, x, P, b, g, S)
                    },
                    onError: t => {
                        w(!0), "empty" !== p && b(!0), A && A(t)
                    }
                })
            });

            function y(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: i
                } = t, n = {
                    as: "image",
                    imageSrcSet: i.srcSet,
                    imageSizes: i.sizes,
                    crossOrigin: i.crossOrigin,
                    referrerPolicy: i.referrerPolicy,
                    ...v(i.fetchPriority)
                };
                return e && a.default.preload ? (a.default.preload(i.src, n), null) : (0, s.jsx)(l.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: i.srcSet ? void 0 : i.src,
                        ...n
                    }, "__nimg-" + i.src + i.srcSet + i.sizes)
                })
            }
            let x = (0, o.forwardRef)((t, e) => {
                let i = (0, o.useContext)(c.RouterContext),
                    n = (0, o.useContext)(d.ImageConfigContext),
                    r = (0, o.useMemo)(() => {
                        let t = m || n || h.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            i = t.deviceSizes.sort((t, e) => t - e);
                        return {
                            ...t,
                            allSizes: e,
                            deviceSizes: i
                        }
                    }, [n]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = t,
                    f = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    f.current = a
                }, [a]);
                let v = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    v.current = l
                }, [l]);
                let [x, P] = (0, o.useState)(!1), [b, w] = (0, o.useState)(!1), {
                    props: S,
                    meta: T
                } = (0, u.getImgProps)(t, {
                    defaultLoader: p.default,
                    imgConf: r,
                    blurComplete: x,
                    showAltText: b
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(g, {
                        ...S,
                        unoptimized: T.unoptimized,
                        placeholder: T.placeholder,
                        fill: T.fill,
                        onLoadRef: f,
                        onLoadingCompleteRef: v,
                        setBlurComplete: P,
                        setShowAltText: w,
                        sizesInput: t.sizes,
                        ref: e
                    }), T.priority ? (0, s.jsx)(y, {
                        isAppRouter: !i,
                        imgAttributes: S
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        2901: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = i(9920)._(i(2265)).default.createContext({})
        },
        687: function(t, e) {
            function i(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: i = !1,
                    hasQuery: n = !1
                } = void 0 === t ? {} : t;
                return e || i && n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        497: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), i(2301);
            let n = i(1564),
                r = i(7103);

            function s(t) {
                return void 0 !== t.default
            }

            function o(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function a(t, e) {
                var i;
                let a, l, u, {
                        src: h,
                        sizes: d,
                        unoptimized: c = !1,
                        priority: p = !1,
                        loading: m,
                        className: f,
                        quality: v,
                        width: g,
                        height: y,
                        fill: x = !1,
                        style: P,
                        overrideSrc: b,
                        onLoad: w,
                        onLoadingComplete: S,
                        placeholder: T = "empty",
                        blurDataURL: A,
                        fetchPriority: C,
                        layout: E,
                        objectFit: M,
                        objectPosition: V,
                        lazyBoundary: j,
                        lazyRoot: R,
                        ...k
                    } = t,
                    {
                        imgConf: D,
                        showAltText: O,
                        blurComplete: L,
                        defaultLoader: F
                    } = e,
                    B = D || r.imageConfigDefault;
                if ("allSizes" in B) a = B;
                else {
                    let t = [...B.deviceSizes, ...B.imageSizes].sort((t, e) => t - e),
                        e = B.deviceSizes.sort((t, e) => t - e);
                    a = {
                        ...B,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                if (void 0 === F) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let I = k.loader || F;
                delete k.loader, delete k.srcSet;
                let U = "__next_img_default" in I;
                if (U) {
                    if ("custom" === a.loader) throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = I;
                    I = e => {
                        let {
                            config: i,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (E) {
                    "fill" === E && (x = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    } [E];
                    t && (P = {
                        ...P,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    } [E];
                    e && !d && (d = e)
                }
                let _ = "",
                    N = o(g),
                    z = o(y);
                if ("object" == typeof(i = h) && (s(i) || void 0 !== i.src)) {
                    let t = s(h) ? h.default : h;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (l = t.blurWidth, u = t.blurHeight, A = A || t.blurDataURL, _ = t.src, !x) {
                        if (N || z) {
                            if (N && !z) {
                                let e = N / t.width;
                                z = Math.round(t.height * e)
                            } else if (!N && z) {
                                let e = z / t.height;
                                N = Math.round(t.width * e)
                            }
                        } else N = t.width, z = t.height
                    }
                }
                let $ = !p && ("lazy" === m || void 0 === m);
                (!(h = "string" == typeof h ? h : _) || h.startsWith("data:") || h.startsWith("blob:")) && (c = !0, $ = !1), a.unoptimized && (c = !0), U && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0), p && (C = "high");
                let W = o(v),
                    H = Object.assign(x ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: M,
                        objectPosition: V
                    } : {}, O ? {} : {
                        color: "transparent"
                    }, P),
                    Y = L || "empty" === T ? null : "blur" === T ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: N,
                        heightInt: z,
                        blurWidth: l,
                        blurHeight: u,
                        blurDataURL: A || "",
                        objectFit: H.objectFit
                    }) + '")' : 'url("' + T + '")',
                    G = Y ? {
                        backgroundSize: H.objectFit || "cover",
                        backgroundPosition: H.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: Y
                    } : {},
                    X = function(t) {
                        let {
                            config: e,
                            src: i,
                            unoptimized: n,
                            width: r,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = t;
                        if (n) return {
                            src: i,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(t, e, i) {
                            let {
                                deviceSizes: n,
                                allSizes: r
                            } = t;
                            if (i) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(i); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: r.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: r,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => r.find(e => e >= t) || r[r.length - 1]))],
                                kind: "x"
                            }
                        }(e, r, o), h = l.length - 1;
                        return {
                            sizes: o || "w" !== u ? o : "100vw",
                            srcSet: l.map((t, n) => a({
                                config: e,
                                src: i,
                                quality: s,
                                width: t
                            }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                            src: a({
                                config: e,
                                src: i,
                                quality: s,
                                width: l[h]
                            })
                        }
                    }({
                        config: a,
                        src: h,
                        unoptimized: c,
                        width: N,
                        quality: W,
                        sizes: d,
                        loader: I
                    });
                return {
                    props: {
                        ...k,
                        loading: $ ? "lazy" : m,
                        fetchPriority: C,
                        width: N,
                        height: z,
                        decoding: "async",
                        className: f,
                        style: {
                            ...H,
                            ...G
                        },
                        sizes: X.sizes,
                        srcSet: X.srcSet,
                        src: b || X.src
                    },
                    meta: {
                        unoptimized: c,
                        priority: p,
                        placeholder: T,
                        fill: x
                    }
                }
            }
        },
        8321: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return f
                    },
                    defaultHead: function() {
                        return d
                    }
                });
            let n = i(9920),
                r = i(1452),
                s = i(7437),
                o = r._(i(2265)),
                a = n._(i(5960)),
                l = i(2901),
                u = i(6590),
                h = i(687);

            function d(t) {
                void 0 === t && (t = !1);
                let e = [(0, s.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return t || e.push((0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function c(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            i(2301);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(t, e) {
                let {
                    inAmpMode: i
                } = e;
                return t.reduce(c, []).reverse().concat(d(i).reverse()).filter(function() {
                    let t = new Set,
                        e = new Set,
                        i = new Set,
                        n = {};
                    return r => {
                        let s = !0,
                            o = !1;
                        if (r.key && "number" != typeof r.key && r.key.indexOf("$") > 0) {
                            o = !0;
                            let e = r.key.slice(r.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (r.type) {
                            case "title":
                            case "base":
                                e.has(r.type) ? s = !1 : e.add(r.type);
                                break;
                            case "meta":
                                for (let t = 0, e = p.length; t < e; t++) {
                                    let e = p[t];
                                    if (r.props.hasOwnProperty(e)) {
                                        if ("charSet" === e) i.has(e) ? s = !1 : i.add(e);
                                        else {
                                            let t = r.props[e],
                                                i = n[e] || new Set;
                                            ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t), n[e] = i)
                                        }
                                    }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let n = t.key || e;
                    if (!i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = {
                            ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, o.default.cloneElement(t, e)
                    }
                    return o.default.cloneElement(t, {
                        key: n
                    })
                })
            }
            let f = function(t) {
                let {
                    children: e
                } = t, i = (0, o.useContext)(l.AmpStateContext), n = (0, o.useContext)(u.HeadManagerContext);
                return (0, s.jsx)(a.default, {
                    reduceComponentsToState: m,
                    headManager: n,
                    inAmpMode: (0, h.isInAmpMode)(i),
                    children: e
                })
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        1564: function(t, e) {
            function i(t) {
                let {
                    widthInt: e,
                    heightInt: i,
                    blurWidth: n,
                    blurHeight: r,
                    blurDataURL: s,
                    objectFit: o
                } = t, a = n ? 40 * n : e, l = r ? 40 * r : i, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        3938: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(9920)._(i(2265)),
                r = i(7103),
                s = n.default.createContext(r.imageConfigDefault)
        },
        7103: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    VALID_LOADERS: function() {
                        return i
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        5601: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let n = i(9920),
                r = i(497),
                s = i(8173),
                o = n._(i(1241));

            function a(t) {
                let {
                    props: e
                } = (0, r.getImgProps)(t, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
                return {
                    props: e
                }
            }
            let l = s.Image
        },
        1241: function(t, e) {
            function i(t) {
                let {
                    config: e,
                    src: i,
                    width: n,
                    quality: r
                } = t;
                return e.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + (r || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i.__next_img_default = !0;
            let n = i
        },
        291: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = i(9920)._(i(2265)).default.createContext(null)
        },
        5960: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = i(2265),
                r = "undefined" == typeof window,
                s = r ? () => {} : n.useLayoutEffect,
                o = r ? () => {} : n.useEffect;

            function a(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: i
                } = t;

                function a() {
                    if (e && e.mountedInstances) {
                        let r = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(i(r, t))
                    }
                }
                if (r) {
                    var l;
                    null == e || null == (l = e.mountedInstances) || l.add(t.children), a()
                }
                return s(() => {
                    var i;
                    return null == e || null == (i = e.mountedInstances) || i.add(t.children), () => {
                        var i;
                        null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                    }
                }), s(() => (e && (e._pendingUpdate = a), () => {
                    e && (e._pendingUpdate = a)
                })), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        9591: function(t, e, i) {
            let n;

            function r(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            i.d(e, {
                E: function() {
                    return so
                }
            });
            let s = t => Array.isArray(t);

            function o(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function a(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function l(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, i) => {
                    e[0][i] = t.get(), e[1][i] = t.getVelocity()
                }), e
            }

            function u(t, e, i, n) {
                if ("function" == typeof e) {
                    let [r, s] = l(n);
                    e = e(void 0 !== i ? i : t.custom, r, s)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [r, s] = l(n);
                    e = e(void 0 !== i ? i : t.custom, r, s)
                }
                return e
            }

            function h(t, e, i) {
                let n = t.getProps();
                return u(n, e, void 0 !== i ? i : n.custom, t)
            }
            let d = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                c = ["initial", ...d],
                p = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                m = new Set(p),
                f = t => 1e3 * t,
                v = t => t / 1e3,
                g = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                y = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                x = {
                    type: "keyframes",
                    duration: .8
                },
                P = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                b = (t, {
                    keyframes: e
                }) => e.length > 2 ? x : m.has(t) ? t.startsWith("scale") ? y(e[1]) : g : P;

            function w(t, e) {
                return t ? t[e] || t.default || t : void 0
            }
            let S = {
                    skipAnimations: !1,
                    useManualTiming: !1
                },
                T = {
                    current: !1
                },
                A = t => null !== t;

            function C(t, {
                repeat: e,
                repeatType: i = "loop"
            }, n) {
                let r = t.filter(A),
                    s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return s && void 0 !== n ? n : r[s]
            }
            let E = t => t,
                M = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function V(t, e) {
                let i = !1,
                    n = !0,
                    r = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    s = () => i = !0,
                    o = M.reduce((t, e) => (t[e] = function(t) {
                        let e = new Set,
                            i = new Set,
                            n = !1,
                            r = !1,
                            s = new WeakSet,
                            o = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function a(e) {
                            s.has(e) && (l.schedule(e), t()), e(o)
                        }
                        let l = {
                            schedule: (t, r = !1, o = !1) => {
                                let a = o && n ? e : i;
                                return r && s.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), s.delete(t)
                            },
                            process: t => {
                                if (o = t, n) {
                                    r = !0;
                                    return
                                }
                                n = !0, [e, i] = [i, e], i.clear(), e.forEach(a), n = !1, r && (r = !1, l.process(t))
                            }
                        };
                        return l
                    }(s), t), {}),
                    {
                        read: a,
                        resolveKeyframes: l,
                        update: u,
                        preRender: h,
                        render: d,
                        postRender: c
                    } = o,
                    p = () => {
                        let s = S.useManualTiming ? r.timestamp : performance.now();
                        i = !1, r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1), r.timestamp = s, r.isProcessing = !0, a.process(r), l.process(r), u.process(r), h.process(r), d.process(r), c.process(r), r.isProcessing = !1, i && e && (n = !1, t(p))
                    },
                    m = () => {
                        i = !0, n = !0, r.isProcessing || t(p)
                    };
                return {
                    schedule: M.reduce((t, e) => {
                        let n = o[e];
                        return t[e] = (t, e = !1, r = !1) => (i || m(), n.schedule(t, e, r)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < M.length; e++) o[M[e]].cancel(t)
                    },
                    state: r,
                    steps: o
                }
            }
            let {
                schedule: j,
                cancel: R,
                state: k,
                steps: D
            } = V("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : E, !0), O = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function L(t, e, i, n) {
                if (t === e && i === n) return E;
                let r = e => (function(t, e, i, n, r) {
                    let s, o;
                    let a = 0;
                    do(s = O(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : O(r(t), e, n)
            }
            let F = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                B = t => e => 1 - t(1 - e),
                I = L(.33, 1.53, .69, .99),
                U = B(I),
                _ = F(U),
                N = t => (t *= 2) < 1 ? .5 * U(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
                z = t => 1 - Math.sin(Math.acos(t)),
                $ = B(z),
                W = F(z),
                H = t => /^0[^.\s]+$/u.test(t),
                Y = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                G = t => e => "string" == typeof e && e.startsWith(t),
                X = G("--"),
                K = G("var(--"),
                q = t => !!K(t) && Z.test(t.split("/*")[0].trim()),
                Z = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                J = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                Q = (t, e, i) => i > e ? e : i < t ? t : i,
                tt = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                te = {
                    ...tt,
                    transform: t => Q(0, 1, t)
                },
                ti = {
                    ...tt,
                    default: 1
                },
                tn = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                tr = tn("deg"),
                ts = tn("%"),
                to = tn("px"),
                ta = tn("vh"),
                tl = tn("vw"),
                tu = {
                    ...ts,
                    parse: t => ts.parse(t) / 100,
                    transform: t => ts.transform(100 * t)
                },
                th = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                td = t => t === tt || t === to,
                tc = (t, e) => parseFloat(t.split(", ")[e]),
                tp = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/u);
                    if (r) return tc(r[1], e);
                    {
                        let e = n.match(/^matrix\((.+)\)$/u);
                        return e ? tc(e[1], t) : 0
                    }
                },
                tm = new Set(["x", "y", "z"]),
                tf = p.filter(t => !tm.has(t)),
                tv = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: tp(4, 13),
                    y: tp(5, 14)
                };
            tv.translateX = tv.x, tv.translateY = tv.y;
            let tg = t => e => e.test(t),
                ty = [tt, to, ts, tr, tl, ta, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                tx = t => ty.find(tg(t)),
                tP = new Set,
                tb = !1,
                tw = !1;

            function tS() {
                if (tw) {
                    let t = Array.from(tP).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return tf.forEach(i => {
                                let n = t.getValue(i);
                                void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                            }), e
                        }(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            var n;
                            null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                tw = !1, tb = !1, tP.forEach(t => t.complete()), tP.clear()
            }

            function tT() {
                tP.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (tw = !0)
                })
            }
            class tA {
                constructor(t, e, i, n, r, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = r, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (tP.add(this), tb || (tb = !0, j.read(tT), j.resolveKeyframes(tS))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: n
                    } = this;
                    for (let r = 0; r < t.length; r++)
                        if (null === t[r]) {
                            if (0 === r) {
                                let r = null == n ? void 0 : n.get(),
                                    s = t[t.length - 1];
                                if (void 0 !== r) t[0] = r;
                                else if (i && e) {
                                    let n = i.readValue(e, s);
                                    null != n && (t[0] = n)
                                }
                                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0])
                            } else t[r] = t[r - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), tP.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, tP.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
            let tC = t => Math.round(1e5 * t) / 1e5,
                tE = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                tM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                tV = (t, e) => i => !!("string" == typeof i && tM.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
                tj = (t, e, i) => n => {
                    if ("string" != typeof n) return n;
                    let [r, s, o, a] = n.match(tE);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(s),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                tR = t => Q(0, 255, t),
                tk = {
                    ...tt,
                    transform: t => Math.round(tR(t))
                },
                tD = {
                    test: tV("rgb", "red"),
                    parse: tj("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: n = 1
                    }) => "rgba(" + tk.transform(t) + ", " + tk.transform(e) + ", " + tk.transform(i) + ", " + tC(te.transform(n)) + ")"
                },
                tO = {
                    test: tV("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            n = "",
                            r = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(n, 16),
                            alpha: r ? parseInt(r, 16) / 255 : 1
                        }
                    },
                    transform: tD.transform
                },
                tL = {
                    test: tV("hsl", "hue"),
                    parse: tj("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + ts.transform(tC(e)) + ", " + ts.transform(tC(i)) + ", " + tC(te.transform(n)) + ")"
                },
                tF = {
                    test: t => tD.test(t) || tO.test(t) || tL.test(t),
                    parse: t => tD.test(t) ? tD.parse(t) : tL.test(t) ? tL.parse(t) : tO.parse(t),
                    transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tD.transform(t) : tL.transform(t)
                },
                tB = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tI = "number",
                tU = "color",
                t_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function tN(t) {
                let e = t.toString(),
                    i = [],
                    n = {
                        color: [],
                        number: [],
                        var: []
                    },
                    r = [],
                    s = 0,
                    o = e.replace(t_, t => (tF.test(t) ? (n.color.push(s), r.push(tU), i.push(tF.parse(t))) : t.startsWith("var(") ? (n.var.push(s), r.push("var"), i.push(t)) : (n.number.push(s), r.push(tI), i.push(parseFloat(t))), ++s, "${}")).split("${}");
                return {
                    values: i,
                    split: o,
                    indexes: n,
                    types: r
                }
            }

            function tz(t) {
                return tN(t).values
            }

            function t$(t) {
                let {
                    split: e,
                    types: i
                } = tN(t), n = e.length;
                return t => {
                    let r = "";
                    for (let s = 0; s < n; s++)
                        if (r += e[s], void 0 !== t[s]) {
                            let e = i[s];
                            e === tI ? r += tC(t[s]) : e === tU ? r += tF.transform(t[s]) : r += t[s]
                        } return r
                }
            }
            let tW = t => "number" == typeof t ? 0 : t,
                tH = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tE)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tB)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: tz,
                    createTransformer: t$,
                    getAnimatableNone: function(t) {
                        let e = tz(t);
                        return t$(t)(e.map(tW))
                    }
                },
                tY = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function tG(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(tE) || [];
                if (!n) return t;
                let r = i.replace(n, ""),
                    s = tY.has(e) ? 1 : 0;
                return n !== i && (s *= 100), e + "(" + s + r + ")"
            }
            let tX = /\b([a-z-]*)\(.*?\)/gu,
                tK = {
                    ...tH,
                    getAnimatableNone: t => {
                        let e = t.match(tX);
                        return e ? e.map(tG).join(" ") : t
                    }
                },
                tq = {
                    ...tt,
                    transform: Math.round
                },
                tZ = {
                    borderWidth: to,
                    borderTopWidth: to,
                    borderRightWidth: to,
                    borderBottomWidth: to,
                    borderLeftWidth: to,
                    borderRadius: to,
                    radius: to,
                    borderTopLeftRadius: to,
                    borderTopRightRadius: to,
                    borderBottomRightRadius: to,
                    borderBottomLeftRadius: to,
                    width: to,
                    maxWidth: to,
                    height: to,
                    maxHeight: to,
                    top: to,
                    right: to,
                    bottom: to,
                    left: to,
                    padding: to,
                    paddingTop: to,
                    paddingRight: to,
                    paddingBottom: to,
                    paddingLeft: to,
                    margin: to,
                    marginTop: to,
                    marginRight: to,
                    marginBottom: to,
                    marginLeft: to,
                    backgroundPositionX: to,
                    backgroundPositionY: to,
                    rotate: tr,
                    rotateX: tr,
                    rotateY: tr,
                    rotateZ: tr,
                    scale: ti,
                    scaleX: ti,
                    scaleY: ti,
                    scaleZ: ti,
                    skew: tr,
                    skewX: tr,
                    skewY: tr,
                    distance: to,
                    translateX: to,
                    translateY: to,
                    translateZ: to,
                    x: to,
                    y: to,
                    z: to,
                    perspective: to,
                    transformPerspective: to,
                    opacity: te,
                    originX: tu,
                    originY: tu,
                    originZ: to,
                    zIndex: tq,
                    size: to,
                    fillOpacity: te,
                    strokeOpacity: te,
                    numOctaves: tq
                },
                tJ = {
                    ...tZ,
                    color: tF,
                    backgroundColor: tF,
                    outlineColor: tF,
                    fill: tF,
                    stroke: tF,
                    borderColor: tF,
                    borderTopColor: tF,
                    borderRightColor: tF,
                    borderBottomColor: tF,
                    borderLeftColor: tF,
                    filter: tK,
                    WebkitFilter: tK
                },
                tQ = t => tJ[t];

            function t0(t, e) {
                let i = tQ(t);
                return i !== tK && (i = tH), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let t1 = new Set(["auto", "none", "0"]);
            class t2 extends tA {
                constructor(t, e, i, n, r) {
                    super(t, e, i, n, r, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        if ("string" == typeof n && q(n = n.trim())) {
                            let r = function t(e, i, n = 1) {
                                E(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [r, s] = function(t) {
                                    let e = J.exec(t);
                                    if (!e) return [, ];
                                    let [, i, n, r] = e;
                                    return [`--${null!=i?i:n}`, r]
                                }(e);
                                if (!r) return;
                                let o = window.getComputedStyle(i).getPropertyValue(r);
                                if (o) {
                                    let t = o.trim();
                                    return Y(t) ? parseFloat(t) : t
                                }
                                return q(s) ? t(s, i, n + 1) : s
                            }(n, e.current);
                            void 0 !== r && (t[i] = r), i === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !th.has(i) || 2 !== t.length) return;
                    let [n, r] = t, s = tx(n), o = tx(r);
                    if (s !== o) {
                        if (td(s) && td(o))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var n;
                        ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || H(n)) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let n, r = 0;
                        for (; r < t.length && !n;) {
                            let e = t[r];
                            "string" == typeof e && !t1.has(e) && tN(e).values.length && (n = t[r]), r++
                        }
                        if (n && i)
                            for (let r of e) t[r] = t0(i, n)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tv[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(i, n).jump(n, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: i,
                        unresolvedKeyframes: n
                    } = this;
                    if (!e || !e.current) return;
                    let r = e.getValue(i);
                    r && r.jump(this.measuredOrigin, !1);
                    let s = n.length - 1,
                        o = n[s];
                    n[s] = tv[i](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, i]) => {
                        e.getValue(t).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }

            function t3(t) {
                return "function" == typeof t
            }

            function t5() {
                n = void 0
            }
            let t9 = {
                    now: () => (void 0 === n && t9.set(k.isProcessing || S.useManualTiming ? k.timestamp : performance.now()), n),
                    set: t => {
                        n = t, queueMicrotask(t5)
                    }
                },
                t4 = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tH.test(t) || "0" === t) && !t.startsWith("url("));
            class t6 {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: n = 0,
                    repeatDelay: r = 0,
                    repeatType: s = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = t9.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: n,
                        repeatDelay: r,
                        repeatType: s,
                        ...o
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (tT(), tS()), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = t9.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: i,
                        type: n,
                        velocity: r,
                        delay: s,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(t, e, i, n) {
                            let r = t[0];
                            if (null === r) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let s = t[t.length - 1],
                                o = t4(r, e),
                                a = t4(s, e);
                            return E(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`), !!o && !!a && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let i = 0; i < t.length; i++)
                                    if (t[i] !== e) return !0
                            }(t) || ("spring" === i || t3(i)) && n)
                        }(t, i, n, r)) {
                        if (T.current || !s) {
                            null == a || a(C(t, this.options, e)), null == o || o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let u = this.initPlayback(t, e);
                    !1 !== u && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...u
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }

            function t8(t, e, i) {
                var n, r;
                let s = Math.max(e - 5, 0);
                return n = i - t(s), (r = e - s) ? 1e3 / r * n : 0
            }

            function t7(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let et = ["duration", "bounce"],
                ee = ["stiffness", "damping", "mass"];

            function ei(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function en({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...n
            }) {
                let r;
                let s = t[0],
                    o = t[t.length - 1],
                    a = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: h,
                        duration: d,
                        velocity: c,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!ei(t, ee) && ei(t, et)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: n = 1
                            }) {
                                let r, s;
                                E(t <= f(10), "Spring duration must be 10 seconds or less");
                                let o = 1 - e;
                                o = Q(.05, 1, o), t = Q(.01, 10, v(t)), o < 1 ? (r = e => {
                                    let n = e * o,
                                        r = n * t;
                                    return .001 - (n - i) / t7(e, o) * Math.exp(-r)
                                }, s = e => {
                                    let n = e * o * t,
                                        s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                        a = t7(Math.pow(e, 2), o);
                                    return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / a
                                }) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), s = e => t * t * (i - e) * Math.exp(-e * t));
                                let a = function(t, e, i) {
                                    let n = i;
                                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                    return n
                                }(r, s, 5 / t);
                                if (t = f(t), isNaN(a)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                };
                                {
                                    let e = Math.pow(a, 2) * n;
                                    return {
                                        stiffness: e,
                                        damping: 2 * o * Math.sqrt(n * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = {
                                ...e,
                                ...i,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }({
                        ...n,
                        velocity: -v(n.velocity || 0)
                    }),
                    m = c || 0,
                    g = u / (2 * Math.sqrt(l * h)),
                    y = o - s,
                    x = v(Math.sqrt(l / h)),
                    P = 5 > Math.abs(y);
                if (i || (i = P ? .01 : 2), e || (e = P ? .005 : .5), g < 1) {
                    let t = t7(x, g);
                    r = e => o - Math.exp(-g * x * e) * ((m + g * x * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
                } else if (1 === g) r = t => o - Math.exp(-x * t) * (y + (m + x * y) * t);
                else {
                    let t = x * Math.sqrt(g * g - 1);
                    r = e => {
                        let i = Math.exp(-g * x * e),
                            n = Math.min(t * e, 300);
                        return o - i * ((m + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: p && d || null,
                    next: t => {
                        let n = r(t);
                        if (p) a.done = t >= d;
                        else {
                            let s = 0;
                            g < 1 && (s = 0 === t ? f(m) : t8(r, t, n));
                            let l = Math.abs(s) <= i,
                                u = Math.abs(o - n) <= e;
                            a.done = l && u
                        }
                        return a.value = a.done ? o : n, a
                    }
                }
            }

            function er({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let d, c;
                let p = t[0],
                    m = {
                        done: !1,
                        value: p
                    },
                    f = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    g = i * e,
                    y = p + g,
                    x = void 0 === o ? y : o(y);
                x !== y && (g = x - p);
                let P = t => -g * Math.exp(-t / n),
                    b = t => x + P(t),
                    w = t => {
                        let e = P(t),
                            i = b(t);
                        m.done = Math.abs(e) <= u, m.value = m.done ? x : i
                    },
                    S = t => {
                        f(m.value) && (d = t, c = en({
                            keyframes: [m.value, v(m.value)],
                            velocity: t8(b, t, m.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (c || void 0 !== d || (e = !0, w(t), S(t)), void 0 !== d && t >= d) ? c.next(t - d) : (e || w(t), m)
                    }
                }
            }
            let es = L(.42, 0, 1, 1),
                eo = L(0, 0, .58, 1),
                ea = L(.42, 0, .58, 1),
                el = t => Array.isArray(t) && "number" != typeof t[0],
                eu = t => Array.isArray(t) && "number" == typeof t[0],
                eh = {
                    linear: E,
                    easeIn: es,
                    easeInOut: ea,
                    easeOut: eo,
                    circIn: z,
                    circInOut: W,
                    circOut: $,
                    backIn: U,
                    backInOut: _,
                    backOut: I,
                    anticipate: N
                },
                ed = t => {
                    if (eu(t)) {
                        E(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return L(e, i, n, r)
                    }
                    return "string" == typeof t ? (E(void 0 !== eh[t], `Invalid easing type '${t}'`), eh[t]) : t
                },
                ec = (t, e) => i => e(t(i)),
                ep = (...t) => t.reduce(ec),
                em = (t, e, i) => {
                    let n = e - t;
                    return 0 === n ? 1 : (i - t) / n
                },
                ef = (t, e, i) => t + (e - t) * i;

            function ev(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function eg(t, e) {
                return i => i > 0 ? e : t
            }
            let ey = (t, e, i) => {
                    let n = t * t,
                        r = i * (e * e - n) + n;
                    return r < 0 ? 0 : Math.sqrt(r)
                },
                ex = [tO, tD, tL],
                eP = t => ex.find(e => e.test(t));

            function eb(t) {
                let e = eP(t);
                if (E(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let i = e.parse(t);
                return e === tL && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let n = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - n;
                        r = ev(a, n, t + 1 / 3), s = ev(a, n, t), o = ev(a, n, t - 1 / 3)
                    } else r = s = o = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: n
                    }
                }(i)), i
            }
            let ew = (t, e) => {
                    let i = eb(t),
                        n = eb(e);
                    if (!i || !n) return eg(t, e);
                    let r = {
                        ...i
                    };
                    return t => (r.red = ey(i.red, n.red, t), r.green = ey(i.green, n.green, t), r.blue = ey(i.blue, n.blue, t), r.alpha = ef(i.alpha, n.alpha, t), tD.transform(r))
                },
                eS = new Set(["none", "hidden"]);

            function eT(t, e) {
                return i => ef(t, e, i)
            }

            function eA(t) {
                return "number" == typeof t ? eT : "string" == typeof t ? q(t) ? eg : tF.test(t) ? ew : eM : Array.isArray(t) ? eC : "object" == typeof t ? tF.test(t) ? ew : eE : eg
            }

            function eC(t, e) {
                let i = [...t],
                    n = i.length,
                    r = t.map((t, i) => eA(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < n; e++) i[e] = r[e](t);
                    return i
                }
            }

            function eE(t, e) {
                let i = {
                        ...t,
                        ...e
                    },
                    n = {};
                for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = eA(t[r])(t[r], e[r]));
                return t => {
                    for (let e in n) i[e] = n[e](t);
                    return i
                }
            }
            let eM = (t, e) => {
                let i = tH.createTransformer(e),
                    n = tN(t),
                    r = tN(e);
                return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? eS.has(t) && !r.values.length || eS.has(e) && !n.values.length ? eS.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : ep(eC(function(t, e) {
                    var i;
                    let n = [],
                        r = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s],
                            a = t.indexes[o][r[o]],
                            l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        n[s] = l, r[o]++
                    }
                    return n
                }(n, r), r.values), i) : (E(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), eg(t, e))
            };

            function eV(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? ef(t, e, i) : eA(t)(t, e)
            }

            function ej({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = el(n) ? n.map(ed) : ed(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = function(t, e, {
                        clamp: i = !0,
                        ease: n,
                        mixer: r
                    } = {}) {
                        let s = t.length;
                        if (E(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                        if (2 === s && t[0] === t[1]) return () => e[1];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let o = function(t, e, i) {
                                let n = [],
                                    r = i || eV,
                                    s = t.length - 1;
                                for (let i = 0; i < s; i++) {
                                    let s = r(t[i], t[i + 1]);
                                    e && (s = ep(Array.isArray(e) ? e[i] || E : e, s)), n.push(s)
                                }
                                return n
                            }(e, n, r),
                            a = o.length,
                            l = e => {
                                let i = 0;
                                if (a > 1)
                                    for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                                let n = em(t[i], t[i + 1], e);
                                return o[i](n)
                            };
                        return i ? e => l(Q(t[0], t[s - 1], e)) : l
                    }((i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let r = em(0, e, n);
                                t.push(ef(i, 1, r))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || ea).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = o(e), s.done = e >= t, s)
                }
            }
            let eR = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => j.update(e, !0),
                        stop: () => R(e),
                        now: () => k.isProcessing ? k.timestamp : t9.now()
                    }
                },
                ek = {
                    decay: er,
                    inertia: er,
                    tween: ej,
                    keyframes: ej,
                    spring: en
                },
                eD = t => t / 100;
            class eO extends t6 {
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options, s = (null == n ? void 0 : n.KeyframeResolver) || tA;
                    this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
                initPlayback(t) {
                    let e, i;
                    let {
                        type: n = "keyframes",
                        repeat: r = 0,
                        repeatDelay: s = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, l = t3(n) ? n : ek[n] || ej;
                    l !== ej && "number" != typeof t[0] && (e = ep(eD, eV(t[0], t[1])), t = [0, 100]);
                    let u = l({
                        ...this.options,
                        keyframes: t
                    });
                    "mirror" === o && (i = l({
                        ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -a
                    })), null === u.calculatedDuration && (u.calculatedDuration = function(t) {
                        let e = 0,
                            i = t.next(e);
                        for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                        return e >= 2e4 ? 1 / 0 : e
                    }(u));
                    let {
                        calculatedDuration: h
                    } = u, d = h + s;
                    return {
                        generator: u,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: e,
                        calculatedDuration: h,
                        resolvedDuration: d,
                        totalDuration: d * (r + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: i
                    } = this;
                    if (!i) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: r,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: h
                    } = i;
                    if (null === this.startTime) return r.next(0);
                    let {
                        delay: d,
                        repeat: c,
                        repeatType: p,
                        repeatDelay: m,
                        onUpdate: f
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                        g = this.speed >= 0 ? v < 0 : v > u;
                    this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let y = this.currentTime,
                        x = r;
                    if (c) {
                        let t = Math.min(this.currentTime, u) / h,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i, m && (i -= m / h)) : "mirror" === p && (x = s)), y = Q(0, 1, i) * h
                    }
                    let P = g ? {
                        done: !1,
                        value: a[0]
                    } : x.next(y);
                    o && (P.value = o(P.value));
                    let {
                        done: b
                    } = P;
                    g || null === l || (b = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
                    return w && void 0 !== n && (P.value = C(a, this.options, n)), f && f(P.value), w && this.finish(), P
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? v(t.calculatedDuration) : 0
                }
                get time() {
                    return v(this.currentTime)
                }
                set time(t) {
                    t = f(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = v(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = eR,
                        onPlay: e,
                        startTime: i
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let n = this.driver.now();
                    null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }
            let eL = new Set(["opacity", "clipPath", "filter", "transform"]),
                eF = (t, e) => {
                    let i = "",
                        n = Math.max(Math.round(e / 10), 2);
                    for (let e = 0; e < n; e++) i += t(em(0, n - 1, e)) + ", ";
                    return `linear(${i.substring(0,i.length-2)})`
                };

            function eB(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let eI = {
                    linearEasing: void 0
                },
                eU = function(t, e) {
                    let i = eB(t);
                    return () => {
                        var t;
                        return null !== (t = eI[e]) && void 0 !== t ? t : i()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                e_ = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                eN = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: e_([0, .65, .55, 1]),
                    circOut: e_([.55, 0, 1, .45]),
                    backIn: e_([.31, .01, .66, -.59]),
                    backOut: e_([.33, 1.53, .69, .99])
                };

            function ez(t, e) {
                t.timeline = e, t.onfinish = null
            }
            let e$ = eB(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                eW = {
                    anticipate: N,
                    backInOut: _,
                    circInOut: W
                };
            class eH extends t6 {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options;
                    this.resolver = new t2(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var i, n;
                    let {
                        duration: r = 300,
                        times: s,
                        ease: o,
                        type: a,
                        motionValue: l,
                        name: u,
                        startTime: h
                    } = this.options;
                    if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
                    if ("string" == typeof o && eU() && o in eW && (o = eW[o]), t3((n = this.options).type) || "spring" === n.type || ! function t(e) {
                            return !!("function" == typeof e && eU() || !e || "string" == typeof e && (e in eN || eU()) || eu(e) || Array.isArray(e) && e.every(t))
                        }(n.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: i,
                            motionValue: n,
                            element: l,
                            ...u
                        } = this.options, h = function(t, e) {
                            let i = new eO({
                                    ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: t[0]
                                },
                                r = [],
                                s = 0;
                            for (; !n.done && s < 2e4;) r.push((n = i.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: r,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = h.keyframes).length && (t[1] = t[0]), r = h.duration, s = h.times, o = h.ease, a = "keyframes"
                    }
                    let d = function(t, e, i, {
                        delay: n = 0,
                        duration: r = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a,
                        times: l
                    } = {}) {
                        let u = {
                            [e]: i
                        };
                        l && (u.offset = l);
                        let h = function t(e, i) {
                            if (e) return "function" == typeof e && eU() ? eF(e, i) : eu(e) ? e_(e) : Array.isArray(e) ? e.map(e => t(e, i) || eN.easeOut) : eN[e]
                        }(a, r);
                        return Array.isArray(h) && (u.easing = h), t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(l.owner.current, u, t, {
                        ...this.options,
                        duration: r,
                        times: s,
                        ease: o
                    });
                    return d.startTime = null != h ? h : this.calcStartTime(), this.pendingTimeline ? (ez(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
                        let {
                            onComplete: i
                        } = this.options;
                        l.set(C(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: d,
                        duration: r,
                        times: s,
                        type: a,
                        ease: o,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return v(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return v(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.currentTime = f(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return E;
                        let {
                            animation: i
                        } = e;
                        ez(i, t)
                    } else this.pendingTimeline = t;
                    return E
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: i,
                        duration: n,
                        type: r,
                        ease: s,
                        times: o
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: a,
                            element: l,
                            ...u
                        } = this.options, h = new eO({
                            ...u,
                            keyframes: i,
                            duration: n,
                            type: r,
                            ease: s,
                            times: o,
                            isGenerator: !0
                        }), d = f(this.time);
                        t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10)
                    }
                    let {
                        onStop: a
                    } = this.options;
                    a && a(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: n,
                        repeatType: r,
                        damping: s,
                        type: o
                    } = t;
                    return e$() && i && eL.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== r && 0 !== s && "inertia" !== o
                }
            }
            let eY = eB(() => void 0 !== window.ScrollTimeline);
            class eG {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t, e) {
                    let i = this.animations.map(i => eY() && i.attachTimeline ? i.attachTimeline(t) : e(i));
                    return () => {
                        i.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            let eX = (t, e, i, n = {}, r, s) => o => {
                    let a = w(n, t) || {},
                        l = a.delay || n.delay || 0,
                        {
                            elapsed: u = 0
                        } = n;
                    u -= f(l);
                    let h = {
                        keyframes: Array.isArray(i) ? i : [null, i],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...a,
                        delay: -u,
                        onUpdate: t => {
                            e.set(t), a.onUpdate && a.onUpdate(t)
                        },
                        onComplete: () => {
                            o(), a.onComplete && a.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: s ? void 0 : r
                    };
                    ! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: n,
                        staggerDirection: r,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(a) && (h = {
                        ...h,
                        ...b(t, h)
                    }), h.duration && (h.duration = f(h.duration)), h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
                    let d = !1;
                    if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0, 0 !== h.delay || (d = !0)), (T.current || S.skipAnimations) && (d = !0, h.duration = 0, h.delay = 0), d && !s && void 0 !== e.get()) {
                        let t = C(h.keyframes, a);
                        if (void 0 !== t) return j.update(() => {
                            h.onUpdate(t), h.onComplete()
                        }), new eG([])
                    }
                    return !s && eH.supports(h) ? new eH(h) : new eO(h)
                },
                eK = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                eq = t => s(t) ? t[t.length - 1] || 0 : t;

            function eZ(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function eJ(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class eQ {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return eZ(this.subscriptions, t), () => eJ(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let e0 = t => !isNaN(parseFloat(t)),
                e1 = {
                    current: void 0
                };
            class e2 {
                constructor(t, e = {}) {
                    this.version = "11.11.11", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = t9.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = t9.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = e0(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new eQ);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), j.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return e1.current && e1.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = t9.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), i ? 1e3 / i * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function e3(t, e) {
                return new e2(t, e)
            }
            let e5 = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                e9 = "data-" + e5("framerAppearId"),
                e4 = t => !!(t && t.getVelocity);

            function e6(t, e) {
                let i = t.getValue("willChange");
                if (e4(i) && i.add) return i.add(e)
            }

            function e8(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: r
            } = {}) {
                var s;
                let {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = e;
                n && (o = n);
                let u = [],
                    d = r && t.animationState && t.animationState.getState()[r];
                for (let e in l) {
                    let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null),
                        r = l[e];
                    if (void 0 === r || d && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(d, e)) continue;
                    let a = {
                            delay: i,
                            ...w(o || {}, e)
                        },
                        h = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = t.props[e9];
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, j);
                            null !== t && (a.startTime = t, h = !0)
                        }
                    }
                    e6(t, e), n.start(eX(e, n, r, t.shouldReduceMotion && m.has(e) ? {
                        type: !1
                    } : a, t, h));
                    let c = n.animation;
                    c && u.push(c)
                }
                return a && Promise.all(u).then(() => {
                    j.update(() => {
                        a && function(t, e) {
                            let {
                                transitionEnd: i = {},
                                transition: n = {},
                                ...r
                            } = h(t, e) || {};
                            for (let e in r = {
                                    ...r,
                                    ...i
                                }) {
                                let i = eq(r[e]);
                                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, e3(i))
                            }
                        }(t, a)
                    })
                }), u
            }

            function e7(t, e, i = {}) {
                var n;
                let r = h(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (s = i.transitionOverride);
                let o = r ? () => Promise.all(e8(t, r, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(it).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(e7(t, e, {
                                    ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + n, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(i.delay)]);
                {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function it(t, e) {
                return t.sortNodePosition(e)
            }
            let ie = c.length,
                ii = [...d].reverse(),
                ir = d.length;

            function is(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function io() {
                return {
                    animate: is(!0),
                    whileInView: is(),
                    whileHover: is(),
                    whileTap: is(),
                    whileDrag: is(),
                    whileFocus: is(),
                    exit: is()
                }
            }
            class ia {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class il extends ia {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let n;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => e7(t, e, i)));
                                else if ("string" == typeof e) n = e7(t, e, i);
                                else {
                                    let r = "function" == typeof e ? h(t, e, i.custom) : e;
                                    n = Promise.all(e8(t, r, i))
                                }
                                return n.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, i))),
                            i = io(),
                            n = !0,
                            l = e => (i, n) => {
                                var r;
                                let s = h(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                                if (s) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = s;
                                    i = {
                                        ...i,
                                        ...n,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function u(u) {
                            let {
                                props: h
                            } = t, d = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < ie; t++) {
                                    let n = c[t],
                                        r = e.props[n];
                                    (a(r) || !1 === r) && (i[n] = r)
                                }
                                return i
                            }(t.parent) || {}, p = [], m = new Set, f = {}, v = 1 / 0;
                            for (let e = 0; e < ir; e++) {
                                var g;
                                let c = ii[e],
                                    y = i[c],
                                    x = void 0 !== h[c] ? h[c] : d[c],
                                    P = a(x),
                                    b = c === u ? y.isActive : null;
                                !1 === b && (v = e);
                                let w = x === d[c] && x !== h[c] && P;
                                if (w && n && t.manuallyAnimateOnMount && (w = !1), y.protectedKeys = {
                                        ...f
                                    }, !y.isActive && null === b || !x && !y.prevProp || r(x) || "boolean" == typeof x) continue;
                                let S = (g = y.prevProp, "string" == typeof x ? x !== g : !!Array.isArray(x) && !o(x, g)),
                                    T = S || c === u && y.isActive && !w && P || e > v && P,
                                    A = !1,
                                    C = Array.isArray(x) ? x : [x],
                                    E = C.reduce(l(c), {});
                                !1 === b && (E = {});
                                let {
                                    prevResolvedValues: M = {}
                                } = y, V = {
                                    ...M,
                                    ...E
                                }, j = e => {
                                    T = !0, m.has(e) && (A = !0, m.delete(e)), y.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in V) {
                                    let e = E[t],
                                        i = M[t];
                                    if (!f.hasOwnProperty(t))(s(e) && s(i) ? o(e, i) : e === i) ? void 0 !== e && m.has(t) ? j(t) : y.protectedKeys[t] = !0 : null != e ? j(t) : m.add(t)
                                }
                                y.prevProp = x, y.prevResolvedValues = E, y.isActive && (f = {
                                    ...f,
                                    ...E
                                }), n && t.blockInitialAnimation && (T = !1);
                                let R = !(w && S) || A;
                                T && R && p.push(...C.map(t => ({
                                    animation: t,
                                    options: {
                                        type: c
                                    }
                                })))
                            }
                            if (m.size) {
                                let e = {};
                                m.forEach(i => {
                                    let n = t.getBaseTarget(i),
                                        r = t.getValue(i);
                                    r && (r.liveStyle = !0), e[i] = null != n ? n : null
                                }), p.push({
                                    animation: e
                                })
                            }
                            let y = !!p.length;
                            return n && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (y = !1), n = !1, y ? e(p) : Promise.resolve()
                        }
                        return {
                            animateChanges: u,
                            setActive: function(e, n) {
                                var r;
                                if (i[e].isActive === n) return Promise.resolve();
                                null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                }), i[e].isActive = n;
                                let s = u(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = io(), n = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    r(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let iu = 0;
            class ih extends ia {
                constructor() {
                    super(...arguments), this.id = iu++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let id = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function ic(t, e = "page") {
                return {
                    point: {
                        x: t[`${e}X`],
                        y: t[`${e}Y`]
                    }
                }
            }
            let ip = t => e => id(e) && t(e, ic(e));

            function im(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }

            function iv(t, e, i, n) {
                return im(t, e, ip(i), n)
            }
            let ig = (t, e) => Math.abs(t - e);
            class iy {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: n,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = ib(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                r = (t = i.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(ig(t.x, e.x) ** 2 + ig(t.y, e.y) ** 2) >= 3);
                            if (!n && !r) return;
                            let {
                                point: s
                            } = i, {
                                timestamp: o
                            } = k;
                            this.history.push({
                                ...s,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = ix(e, this.transformPagePoint), j.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: n,
                                resumeAnimation: r
                            } = this.handlers;
                            if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = ib("pointercancel" === t.type ? this.lastMoveEventInfo : ix(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, s), n && n(t, s)
                        }, !id(t)) return;
                    this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                    let s = ix(ic(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = k;
                    this.history = [{
                        ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, ib(s, this.history)), this.removeListeners = ep(iv(this.contextWindow, "pointermove", this.handlePointerMove), iv(this.contextWindow, "pointerup", this.handlePointerUp), iv(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), R(this.updatePoint)
                }
            }

            function ix(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function iP(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function ib({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: iP(t, iw(e)),
                    offset: iP(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = iw(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > f(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = v(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function iw(t) {
                return t[t.length - 1]
            }

            function iS(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let iT = iS("dragHorizontal"),
                iA = iS("dragVertical");

            function iC(t) {
                let e = !1;
                if ("y" === t) e = iA();
                else if ("x" === t) e = iT();
                else {
                    let t = iT(),
                        i = iA();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function iE() {
                let t = iC(!0);
                return !t || (t(), !1)
            }

            function iM(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function iV(t) {
                return t.max - t.min
            }

            function ij(t, e, i, n = .5) {
                t.origin = n, t.originPoint = ef(e.min, e.max, t.origin), t.scale = iV(i) / iV(e), t.translate = ef(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function iR(t, e, i, n) {
                ij(t.x, e.x, i.x, n ? n.originX : void 0), ij(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function ik(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + iV(e)
            }

            function iD(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + iV(e)
            }

            function iO(t, e, i) {
                iD(t.x, e.x, i.x), iD(t.y, e.y, i.y)
            }

            function iL(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function iF(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function iB(t, e, i) {
                return {
                    min: iI(t, e),
                    max: iI(t, i)
                }
            }

            function iI(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let iU = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                i_ = () => ({
                    x: iU(),
                    y: iU()
                }),
                iN = () => ({
                    min: 0,
                    max: 0
                }),
                iz = () => ({
                    x: iN(),
                    y: iN()
                });

            function i$(t) {
                return [t("x"), t("y")]
            }

            function iW({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function iH(t) {
                return void 0 === t || 1 === t
            }

            function iY({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !iH(t) || !iH(e) || !iH(i)
            }

            function iG(t) {
                return iY(t) || iX(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function iX(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function iK(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function iq(t, e = 0, i = 1, n, r) {
                t.min = iK(t.min, e, i, n, r), t.max = iK(t.max, e, i, n, r)
            }

            function iZ(t, {
                x: e,
                y: i
            }) {
                iq(t.x, e.translate, e.scale, e.originPoint), iq(t.y, i.translate, i.scale, i.originPoint)
            }

            function iJ(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function iQ(t, e, i, n, r = .5) {
                let s = ef(t.min, t.max, r);
                iq(t, e, i, s, n)
            }

            function i0(t, e) {
                iQ(t.x, e.x, e.scaleX, e.scale, e.originX), iQ(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function i1(t, e) {
                return iW(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let i2 = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                i3 = new WeakMap;
            class i5 {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = iz(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new iy(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(ic(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = iC(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), i$(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (ts.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = iV(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && j.postRender(() => r(t, e)), e6(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => i$(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: i2(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && j.postRender(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !i9(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? ef(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? ef(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, r = this.constraints;
                    e && iM(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: iL(t.x, i, r),
                            y: iL(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: iB(t, "left", "right"),
                            y: iB(t, "top", "bottom")
                        }
                    }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && i$(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !iM(e)) return !1;
                    let n = e.current;
                    E(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = i1(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (iJ(n.x, r.offset.x), iJ(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: iF((t = r.layout.layoutBox).x, s.x),
                            y: iF(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = iW(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(i$(o => {
                        if (!i9(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return e6(this.visualElement, t), i.start(eX(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    i$(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    i$(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    i$(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!i9(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - ef(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!iM(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    i$(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = iV(t),
                                    r = iV(e);
                                return r > n ? i = em(e.min, e.max - n, t.min) : n > r && (i = em(t.min, t.max - r, e.min)), Q(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), i$(e => {
                        if (!i9(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set(ef(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    i3.set(this.visualElement, this);
                    let t = iv(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            iM(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), j.read(e);
                    let r = im(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (i$(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return {
                        ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function i9(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class i4 extends ia {
                constructor(t) {
                    super(t), this.removeGroupControls = E, this.removeListeners = E, this.controls = new i5(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || E
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let i6 = t => (e, i) => {
                t && j.postRender(() => t(e, i))
            };
            class i8 extends ia {
                constructor() {
                    super(...arguments), this.removePointerDownListener = E
                }
                onPointerDown(t) {
                    this.session = new iy(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: i2(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: i6(t),
                        onStart: i6(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, n && j.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = iv(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var i7, nt, ne, ni = i(7437),
                nn = i(2265);
            let nr = (0, nn.createContext)(null),
                ns = (0, nn.createContext)({}),
                no = (0, nn.createContext)({}),
                na = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function nl(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let nu = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!to.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let i = nl(t, e.target.x),
                            n = nl(t, e.target.y);
                        return `${i}% ${n}%`
                    }
                },
                nh = {},
                {
                    schedule: nd,
                    cancel: nc
                } = V(queueMicrotask, !1);
            class np extends nn.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(nh, nf), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({
                        ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), na.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || j.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), nd.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function nm(t) {
                let [e, i] = function() {
                    let t = (0, nn.useContext)(nr);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: n
                    } = t, r = (0, nn.useId)();
                    (0, nn.useEffect)(() => n(r), []);
                    let s = (0, nn.useCallback)(() => i && i(r), [r, i]);
                    return !e && i ? [!1, s] : [!0]
                }(), n = (0, nn.useContext)(ns);
                return (0, ni.jsx)(np, {
                    ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, nn.useContext)(no),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let nf = {
                    borderRadius: {
                        ...nu,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: nu,
                    borderTopRightRadius: nu,
                    borderBottomLeftRadius: nu,
                    borderBottomRightRadius: nu,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let n = tH.parse(t);
                            if (n.length > 5) return t;
                            let r = tH.createTransformer(t),
                                s = "number" != typeof n[0] ? 1 : 0,
                                o = i.x.scale * e.x,
                                a = i.y.scale * e.y;
                            n[0 + s] /= o, n[1 + s] /= a;
                            let l = ef(o, a, .5);
                            return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                        }
                    }
                },
                nv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                ng = nv.length,
                ny = t => "string" == typeof t ? parseFloat(t) : t,
                nx = t => "number" == typeof t || to.test(t);

            function nP(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let nb = nS(0, .5, $),
                nw = nS(.5, .95, E);

            function nS(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i(em(t, e, n))
            }

            function nT(t, e) {
                t.min = e.min, t.max = e.max
            }

            function nA(t, e) {
                nT(t.x, e.x), nT(t.y, e.y)
            }

            function nC(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function nE(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function nM(t, e, [i, n, r], s, o) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                    if (ts.test(e) && (e = parseFloat(e), e = ef(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = ef(s.min, s.max, n);
                    t === s && (a -= e), t.min = nE(t.min, e, i, a, r), t.max = nE(t.max, e, i, a, r)
                }(t, e[i], e[n], e[r], e.scale, s, o)
            }
            let nV = ["x", "scaleX", "originX"],
                nj = ["y", "scaleY", "originY"];

            function nR(t, e, i, n) {
                nM(t.x, e, nV, i ? i.x : void 0, n ? n.x : void 0), nM(t.y, e, nj, i ? i.y : void 0, n ? n.y : void 0)
            }

            function nk(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function nD(t) {
                return nk(t.x) && nk(t.y)
            }

            function nO(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function nL(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function nF(t, e) {
                return nL(t.x, e.x) && nL(t.y, e.y)
            }

            function nB(t) {
                return iV(t.x) / iV(t.y)
            }

            function nI(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class nU {
                constructor() {
                    this.members = []
                }
                add(t) {
                    eZ(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (eJ(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let n_ = (t, e) => t.depth - e.depth;
            class nN {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    eZ(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    eJ(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(n_), this.isDirty = !1, this.children.forEach(t)
                }
            }

            function nz(t) {
                let e = e4(t) ? t.get() : t;
                return eK(e) ? e.toValue() : e
            }
            let n$ = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                nW = "undefined" != typeof window && void 0 !== window.MotionDebug,
                nH = ["", "X", "Y", "Z"],
                nY = {
                    visibility: "hidden"
                },
                nG = 0;

            function nX(t, e, i, n) {
                let {
                    latestValues: r
                } = e;
                r[t] && (i[t] = r[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function nK({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = nG++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, nW && (n$.totalNodes = n$.resolvedTargetDeltas = n$.recalculatedProjection = 0), this.nodes.forEach(nJ), this.nodes.forEach(n9), this.nodes.forEach(n4), this.nodes.forEach(nQ), nW && window.MotionDebug.record(n$)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new nN)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new eQ), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = t9.now(),
                                        n = ({
                                            timestamp: e
                                        }) => {
                                            let r = e - i;
                                            r >= 250 && (R(n), t(r - 250))
                                        };
                                    return j.read(n, !0), () => R(n)
                                }(n, 0), na.hasAnimatedSinceResize && (na.hasAnimatedSinceResize = !1, this.nodes.forEach(n5))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || ri,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !nF(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = {
                                    ...w(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || n5(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, R(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(n6), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: i
                                } = e.options;
                                if (!i) return;
                                let n = i.props[e9];
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", j, !(t || i))
                                }
                                let {
                                    parent: r
                                } = e;
                                r && !r.hasCheckedOptimisedAppear && t(r)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(n1);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(n2), this.isUpdating = !1, this.nodes.forEach(n3), this.nodes.forEach(nq), this.nodes.forEach(nZ), this.clearAllSnapshots();
                        let t = t9.now();
                        k.delta = Q(0, 1e3 / 60, t - k.timestamp), k.timestamp = t, k.isProcessing = !0, D.update.process(k), D.preRender.process(k), D.render.process(k), k.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, nd.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(n0), this.sharedNodes.forEach(n8)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, j.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        j.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = iz(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = n(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: i(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !nD(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || iG(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), rs((e = n).x), rs(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return iz();
                        let i = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(ra))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (iJ(i.x, t.offset.x), iJ(i.y, t.offset.y))
                        }
                        return i
                    }
                    removeElementScroll(t) {
                        var e;
                        let i = iz();
                        if (nA(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return i;
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            n !== this.root && r && s.layoutScroll && (r.wasRoot && nA(i, t), iJ(i.x, r.offset.x), iJ(i.y, r.offset.y))
                        }
                        return i
                    }
                    applyTransform(t, e = !1) {
                        let i = iz();
                        nA(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && i0(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), iG(n.latestValues) && i0(i, n.latestValues)
                        }
                        return iG(this.latestValues) && i0(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = iz();
                        nA(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !iG(i.latestValues)) continue;
                            iY(i.latestValues) && i.updateSnapshot();
                            let n = iz();
                            nA(n, i.measurePageBox()), nR(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return iG(this.latestValues) && nR(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = {
                            ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== k.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = k.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = iz(), this.relativeTargetOrigin = iz(), iO(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), nA(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = iz(), this.targetWithTransforms = iz()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, ik(i.x, n.x, r.x), ik(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nA(this.target, this.layout.layoutBox), iZ(this.target, this.targetDelta)) : nA(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = iz(), this.relativeTargetOrigin = iz(), iO(this.relativeTargetOrigin, this.target, t.target), nA(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                nW && n$.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || iY(this.parent.latestValues) || iX(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === k.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        nA(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (r = i[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = r.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && i0(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, iZ(t, s)), n && iG(r.latestValues) && i0(t, r.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = iz());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (nC(this.prevProjectionDelta.x, this.projectionDelta.x), nC(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), iR(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && nI(this.projectionDelta.x, this.prevProjectionDelta.x) && nI(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), nW && n$.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = i_(), this.projectionDelta = i_(), this.projectionDeltaWithTransform = i_()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = {
                                ...this.latestValues
                            },
                            o = i_();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = iz(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(re));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (n7(o.x, t.x, n), n7(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, c, p, m;
                                iO(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, rt(p.x, m.x, a.x, n), rt(p.y, m.y, a.y, n), i && (u = this.relativeTarget, c = i, nO(u.x, c.x) && nO(u.y, c.y)) && (this.isProjectionDirty = !1), i || (i = iz()), nA(i, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = ef(0, void 0 !== i.opacity ? i.opacity : 1, nb(n)), t.opacityExit = ef(void 0 !== e.opacity ? e.opacity : 1, 0, nw(n))) : s && (t.opacity = ef(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < ng; r++) {
                                    let s = `border${nv[r]}Radius`,
                                        o = nP(e, s),
                                        a = nP(i, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || nx(o) === nx(a) ? (t[s] = Math.max(ef(ny(o), ny(a), n), 0), (ts.test(a) || ts.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = ef(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, d, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (R(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = j.update(() => {
                            na.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = e4(0) ? 0 : e3(0);
                                return n.start(eX("", n, 1e3, i)), n.animation
                            }(0, 0, {
                                ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && ro(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || iz();
                                let e = iV(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = iV(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            nA(e, i), i0(e, r), iR(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new nU), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let n = {};
                        i.z && nX("z", t, n, this.animationValues);
                        for (let e = 0; e < nH.length; e++) nX(`rotate${nH[e]}`, t, n, this.animationValues), nX(`skew${nH[e]}`, t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return nY;
                        let n = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = nz(null == t ? void 0 : t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = nz(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !iG(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = function(t, e, i) {
                            let n = "",
                                r = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                o = (null == i ? void 0 : i.z) || 0;
                            if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: r,
                                    rotateY: s,
                                    skewX: o,
                                    skewY: a
                                } = i;
                                t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), r && (n += `rotateX(${r}deg) `), s && (n += `rotateY(${s}deg) `), o && (n += `skewX(${o}deg) `), a && (n += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, nh) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = nh[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? nz(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(n1), this.root.sharedNodes.clear()
                    }
                }
            }

            function nq(t) {
                t.updateLayout()
            }

            function nZ(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? i$(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = iV(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : ro(r, i.layoutBox, e) && i$(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            o = iV(e[n]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = i_();
                    iR(o, e, i.layoutBox);
                    let a = i_();
                    s ? iR(a, t.applyTransform(n, !0), i.measuredBox) : iR(a, e, i.layoutBox);
                    let l = !nD(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let o = iz();
                                iO(o, i.layoutBox, r.layoutBox);
                                let a = iz();
                                iO(a, e, s.layoutBox), nF(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function nJ(t) {
                nW && n$.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function nQ(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function n0(t) {
                t.clearSnapshot()
            }

            function n1(t) {
                t.clearMeasurements()
            }

            function n2(t) {
                t.isLayoutDirty = !1
            }

            function n3(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function n5(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function n9(t) {
                t.resolveTargetDelta()
            }

            function n4(t) {
                t.calcProjection()
            }

            function n6(t) {
                t.resetSkewAndRotation()
            }

            function n8(t) {
                t.removeLeadSnapshot()
            }

            function n7(t, e, i) {
                t.translate = ef(e.translate, 0, i), t.scale = ef(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function rt(t, e, i, n) {
                t.min = ef(e.min, i.min, n), t.max = ef(e.max, i.max, n)
            }

            function re(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let ri = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                rn = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                rr = rn("applewebkit/") && !rn("chrome/") ? Math.round : E;

            function rs(t) {
                t.min = rr(t.min), t.max = rr(t.max)
            }

            function ro(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nB(e) - nB(i)))
            }

            function ra(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let rl = nK({
                    attachResizeListener: (t, e) => im(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ru = {
                    current: void 0
                },
                rh = nK({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!ru.current) {
                            let t = new rl({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), ru.current = t
                        }
                        return ru.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function rd(t, e) {
                let i = e ? "onHoverStart" : "onHoverEnd";
                return iv(t.current, e ? "pointerenter" : "pointerleave", (n, r) => {
                    if ("touch" === n.pointerType || iE()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e);
                    let o = s[i];
                    o && j.postRender(() => o(n, r))
                }, {
                    passive: !t.getProps()[i]
                })
            }
            class rc extends ia {
                mount() {
                    this.unmount = ep(rd(this.node, !0), rd(this.node, !1))
                }
                unmount() {}
            }
            class rp extends ia {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = ep(im(this.node.current, "focus", () => this.onFocus()), im(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let rm = (t, e) => !!e && (t === e || rm(t, e.parentElement));

            function rf(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, ic(i))
            }
            class rv extends ia {
                constructor() {
                    super(...arguments), this.removeStartListeners = E, this.removeEndListeners = E, this.removeAccessibleListeners = E, this.startPointerPress = (t, e) => {
                        if (this.isPressing) return;
                        this.removeEndListeners();
                        let i = this.node.getProps(),
                            n = iv(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: i,
                                    onTapCancel: n,
                                    globalTapTarget: r
                                } = this.node.getProps(), s = r || rm(this.node.current, t.target) ? i : n;
                                s && j.update(() => s(t, e))
                            }, {
                                passive: !(i.onTap || i.onPointerUp)
                            }),
                            r = iv(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(i.onTapCancel || i.onPointerCancel)
                            });
                        this.removeEndListeners = ep(n, r), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = im(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = im(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && rf("up", (t, e) => {
                                        let {
                                            onTap: i
                                        } = this.node.getProps();
                                        i && j.postRender(() => i(t, e))
                                    })
                                }), rf("down", (t, e) => {
                                    this.startPress(t, e)
                                }))
                            }),
                            e = im(this.node.current, "blur", () => {
                                this.isPressing && rf("cancel", (t, e) => this.cancelPress(t, e))
                            });
                        this.removeAccessibleListeners = ep(t, e)
                    }
                }
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: i,
                        whileTap: n
                    } = this.node.getProps();
                    n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && j.postRender(() => i(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !iE()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: i
                    } = this.node.getProps();
                    i && j.postRender(() => i(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = iv(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        i = im(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = ep(e, i)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
            }
            let rg = new WeakMap,
                ry = new WeakMap,
                rx = t => {
                    let e = rg.get(t.target);
                    e && e(t)
                },
                rP = t => {
                    t.forEach(rx)
                },
                rb = {
                    some: 0,
                    all: 1
                };
            class rw extends ia {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : rb[n]
                    };
                    return function(t, e, i) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            ry.has(i) || ry.set(i, {});
                            let n = ry.get(i),
                                r = JSON.stringify(e);
                            return n[r] || (n[r] = new IntersectionObserver(rP, {
                                root: t,
                                ...e
                            })), n[r]
                        }(e);
                        return rg.set(t, i), n.observe(t), () => {
                            rg.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? i : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            let rS = (0, nn.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                rT = (0, nn.createContext)({}),
                rA = "undefined" != typeof window,
                rC = rA ? nn.useLayoutEffect : nn.useEffect,
                rE = (0, nn.createContext)({
                    strict: !1
                });

            function rM(t) {
                return r(t.animate) || c.some(e => a(t[e]))
            }

            function rV(t) {
                return !!(rM(t) || t.variants)
            }

            function rj(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let rR = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                rk = {};
            for (let t in rR) rk[t] = {
                isEnabled: e => rR[t].some(t => !!e[t])
            };
            let rD = Symbol.for("motionComponentSymbol"),
                rO = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function rL(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (rO.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }

            function rF(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let rB = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function rI(t, e, i, n) {
                for (let i in rF(t, e, void 0, n), e.attrs) t.setAttribute(rB.has(i) ? i : e5(i), e.attrs[i])
            }

            function rU(t, {
                layout: e,
                layoutId: i
            }) {
                return m.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!nh[t] || "opacity" === t)
            }

            function r_(t, e, i) {
                var n;
                let {
                    style: r
                } = t, s = {};
                for (let o in r)(e4(r[o]) || e.style && e4(e.style[o]) || rU(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
                return s
            }

            function rN(t, e, i) {
                let n = r_(t, e, i);
                for (let i in t)(e4(t[i]) || e4(e[i])) && (n[-1 !== p.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return n
            }
            let rz = t => (e, i) => {
                    let n = (0, nn.useContext)(rT),
                        s = (0, nn.useContext)(nr),
                        o = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: i
                        }, n, s, o) {
                            let a = {
                                latestValues: function(t, e, i, n) {
                                    let s = {},
                                        o = n(t, {});
                                    for (let t in o) s[t] = nz(o[t]);
                                    let {
                                        initial: a,
                                        animate: l
                                    } = t, h = rM(t), d = rV(t);
                                    e && d && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === l && (l = e.animate));
                                    let c = !!i && !1 === i.initial,
                                        p = (c = c || !1 === a) ? l : a;
                                    if (p && "boolean" != typeof p && !r(p)) {
                                        let e = Array.isArray(p) ? p : [p];
                                        for (let i = 0; i < e.length; i++) {
                                            let n = u(t, e[i]);
                                            if (n) {
                                                let {
                                                    transitionEnd: t,
                                                    transition: e,
                                                    ...i
                                                } = n;
                                                for (let t in i) {
                                                    let e = i[t];
                                                    if (Array.isArray(e)) {
                                                        let t = c ? e.length - 1 : 0;
                                                        e = e[t]
                                                    }
                                                    null !== e && (s[t] = e)
                                                }
                                                for (let e in t) s[e] = t[e]
                                            }
                                        }
                                    }
                                    return s
                                }(n, s, o, t),
                                renderState: e()
                            };
                            return i && (a.mount = t => i(n, t, a)), a
                        })(t, e, n, s);
                    return i ? o() : function(t) {
                        let e = (0, nn.useRef)(null);
                        return null === e.current && (e.current = t()), e.current
                    }(o)
                },
                r$ = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                rW = () => ({
                    ...r$(),
                    attrs: {}
                }),
                rH = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                rY = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                rG = p.length;

            function rX(t, e, i) {
                let {
                    style: n,
                    vars: r,
                    transformOrigin: s
                } = t, o = !1, a = !1;
                for (let t in e) {
                    let i = e[t];
                    if (m.has(t)) {
                        o = !0;
                        continue
                    }
                    if (X(t)) {
                        r[t] = i;
                        continue
                    } {
                        let e = rH(i, tZ[t]);
                        t.startsWith("origin") ? (a = !0, s[t] = e) : n[t] = e
                    }
                }
                if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                        let n = "",
                            r = !0;
                        for (let s = 0; s < rG; s++) {
                            let o = p[s],
                                a = t[o];
                            if (void 0 === a) continue;
                            let l = !0;
                            if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                                let t = rH(a, tZ[o]);
                                if (!l) {
                                    r = !1;
                                    let e = rY[o] || o;
                                    n += `${e}(${t}) `
                                }
                                i && (e[o] = t)
                            }
                        }
                        return n = n.trim(), i ? n = i(e, r ? "" : n) : r && (n = "none"), n
                    }(e, t.transform, i) : n.transform && (n.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = s;
                    n.transformOrigin = `${t} ${e} ${i}`
                }
            }

            function rK(t, e, i) {
                return "string" == typeof t ? t : to.transform(e + i * t)
            }
            let rq = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                rZ = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function rJ(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, d) {
                if (rX(t, u, d), h) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: c,
                    style: p,
                    dimensions: m
                } = t;
                c.transform && (m && (p.transform = c.transform), delete c.transform), m && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                    let n = rK(e, t.x, t.width),
                        r = rK(i, t.y, t.height);
                    return `${n} ${r}`
                }(m, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (c.x = e), void 0 !== i && (c.y = i), void 0 !== n && (c.scale = n), void 0 !== o && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? rq : rZ;
                    t[s.offset] = to.transform(-n);
                    let o = to.transform(e),
                        a = to.transform(i);
                    t[s.array] = `${o} ${a}`
                }(c, o, a, l, !1)
            }
            let rQ = t => "string" == typeof t && "svg" === t.toLowerCase(),
                r0 = {
                    useVisualState: rz({
                        scrapeMotionValuesFromProps: rN,
                        createRenderState: rW,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            j.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), j.render(() => {
                                rJ(i, n, rQ(e.tagName), t.transformTemplate), rI(e, i)
                            })
                        }
                    })
                },
                r1 = {
                    useVisualState: rz({
                        scrapeMotionValuesFromProps: r_,
                        createRenderState: r$
                    })
                };

            function r2(t, e, i) {
                for (let n in e) e4(e[n]) || rU(n, i) || (t[n] = e[n])
            }
            let r3 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function r5(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || r3.has(t)
            }
            let r9 = t => !r5(t);
            try {
                (i7 = require("@emotion/is-prop-valid").default) && (r9 = t => t.startsWith("on") ? !r5(t) : i7(t))
            } catch (t) {}
            let r4 = {
                    current: null
                },
                r6 = {
                    current: !1
                },
                r8 = new WeakMap,
                r7 = [...ty, tF, tH],
                st = t => r7.find(tg(t)),
                se = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class si {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    blockInitialAnimation: r,
                    visualState: s
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = tA, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = t9.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, j.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l
                    } = s;
                    this.latestValues = a, this.baseTarget = {
                        ...a
                    }, this.initialValues = e.initial ? {
                        ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!r, this.isControllingVariants = rM(e), this.isVariantNode = rV(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in h) {
                        let e = h[t];
                        void 0 !== a[t] && e4(e) && e.set(a[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, r8.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), r6.current || function() {
                        if (r6.current = !0, rA) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => r4.current = t.matches;
                                t.addListener(e), e()
                            } else r4.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || r4.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in r8.delete(this.current), this.projection && this.projection.unmount(), R(this.notifyUpdate), R(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = m.has(t),
                        r = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && j.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        r(), s(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in rk) {
                        let e = rk[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: n
                        } = e;
                        if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iz()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < se.length; e++) {
                        let i = se[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let n in e) {
                            let r = e[n],
                                s = i[n];
                            if (e4(r)) t.addValue(n, r);
                            else if (e4(s)) t.addValue(n, e3(r, {
                                owner: t
                            }));
                            else if (s !== r) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, e3(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = e3(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    var i;
                    let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != n && ("string" == typeof n && (Y(n) || H(n)) ? n = parseFloat(n) : !st(n) && tH.test(e) && (n = t0(t, e)), this.setBaseTarget(t, e4(n) ? n.get() : n)), e4(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let i;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let r = u(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        r && (i = r[t])
                    }
                    if (n && void 0 !== i) return i;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || e4(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new eQ), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class sn extends si {
                constructor() {
                    super(...arguments), this.KeyframeResolver = t2
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
            }
            class sr extends sn {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = rF
                }
                readValueFromInstance(t, e) {
                    if (m.has(e)) {
                        let t = tQ(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = (X(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return i1(t, e)
                }
                build(t, e, i) {
                    rX(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return r_(t, e, i)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    e4(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
            class ss extends sn {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = iz
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (m.has(e)) {
                        let t = tQ(e);
                        return t && t.default || 0
                    }
                    return e = rB.has(e) ? e : e5(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return rN(t, e, i)
                }
                build(t, e, i) {
                    rJ(t, e, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    rI(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = rQ(t.tagName), super.mount(t)
                }
            }
            let so = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
                })
            }((nt = {
                animation: {
                    Feature: il
                },
                exit: {
                    Feature: ih
                },
                inView: {
                    Feature: rw
                },
                tap: {
                    Feature: rv
                },
                focus: {
                    Feature: rp
                },
                hover: {
                    Feature: rc
                },
                pan: {
                    Feature: i8
                },
                drag: {
                    Feature: i4,
                    ProjectionNode: rh,
                    MeasureLayout: nm
                },
                layout: {
                    ProjectionNode: rh,
                    MeasureLayout: nm
                }
            }, ne = (t, e) => rL(t) ? new ss(e) : new sr(e, {
                allowProjection: t !== nn.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    let {
                        preloadedFeatures: e,
                        createVisualElement: i,
                        useRender: n,
                        useVisualState: r,
                        Component: s
                    } = t;
                    e && function(t) {
                        for (let e in t) rk[e] = {
                            ...rk[e],
                            ...t[e]
                        }
                    }(e);
                    let o = (0, nn.forwardRef)(function(t, e) {
                        var o;
                        let l;
                        let u = {
                                ...(0, nn.useContext)(rS),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, i = (0, nn.useContext)(ns).id;
                                    return i && void 0 !== e ? i + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: h
                            } = u,
                            d = function(t) {
                                let {
                                    initial: e,
                                    animate: i
                                } = function(t, e) {
                                    if (rM(t)) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = t;
                                        return {
                                            initial: !1 === e || a(e) ? e : void 0,
                                            animate: a(i) ? i : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, nn.useContext)(rT));
                                return (0, nn.useMemo)(() => ({
                                    initial: e,
                                    animate: i
                                }), [rj(e), rj(i)])
                            }(t),
                            c = r(t, h);
                        if (!h && rA) {
                            (0, nn.useContext)(rE).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: i
                                } = rk;
                                if (!e && !i) return {};
                                let n = {
                                    ...e,
                                    ...i
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                    ProjectionNode: n.ProjectionNode
                                }
                            }(u);
                            l = t.MeasureLayout, d.visualElement = function(t, e, i, n, r) {
                                var s, o;
                                let {
                                    visualElement: a
                                } = (0, nn.useContext)(rT), l = (0, nn.useContext)(rE), u = (0, nn.useContext)(nr), h = (0, nn.useContext)(rS).reducedMotion, d = (0, nn.useRef)();
                                n = n || l.renderer, !d.current && n && (d.current = n(t, {
                                    visualState: e,
                                    parent: a,
                                    props: i,
                                    presenceContext: u,
                                    blockInitialAnimation: !!u && !1 === u.initial,
                                    reducedMotionConfig: h
                                }));
                                let c = d.current,
                                    p = (0, nn.useContext)(no);
                                c && !c.projection && r && ("html" === c.type || "svg" === c.type) && function(t, e, i, n) {
                                    let {
                                        layoutId: r,
                                        layout: s,
                                        drag: o,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    } = e;
                                    t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: r,
                                        layout: s,
                                        alwaysMeasureLayout: !!o || a && iM(a),
                                        visualElement: t,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: n,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(d.current, i, r, p);
                                let m = (0, nn.useRef)(!1);
                                (0, nn.useInsertionEffect)(() => {
                                    c && m.current && c.update(i, u)
                                });
                                let f = i[e9],
                                    v = (0, nn.useRef)(!!f && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, f)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, f)));
                                return rC(() => {
                                    c && (m.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), nd.render(c.render), v.current && c.animationState && c.animationState.animateChanges())
                                }), (0, nn.useEffect)(() => {
                                    c && (!v.current && c.animationState && c.animationState.animateChanges(), v.current && (queueMicrotask(() => {
                                        var t;
                                        null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, f)
                                    }), v.current = !1))
                                }), c
                            }(s, c, u, i, t.ProjectionNode)
                        }
                        return (0, ni.jsxs)(rT.Provider, {
                            value: d,
                            children: [l && d.visualElement ? (0, ni.jsx)(l, {
                                visualElement: d.visualElement,
                                ...u
                            }) : null, n(s, t, (o = d.visualElement, (0, nn.useCallback)(t => {
                                t && c.mount && c.mount(t), o && (t ? o.mount(t) : o.unmount()), e && ("function" == typeof e ? e(t) : iM(e) && (e.current = t))
                            }, [o])), c, h, d.visualElement)]
                        })
                    });
                    return o[rD] = s, o
                }({
                    ...rL(t) ? r0 : r1,
                    preloadedFeatures: nt,
                    useRender: function(t = !1) {
                        return (e, i, n, {
                            latestValues: r
                        }, s) => {
                            let o = (rL(e) ? function(t, e, i, n) {
                                    let r = (0, nn.useMemo)(() => {
                                        let i = rW();
                                        return rJ(i, e, rQ(n), t.transformTemplate), {
                                            ...i.attrs,
                                            style: {
                                                ...i.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        r2(e, t.style, t), r.style = {
                                            ...e,
                                            ...r.style
                                        }
                                    }
                                    return r
                                } : function(t, e) {
                                    let i = {},
                                        n = function(t, e) {
                                            let i = t.style || {},
                                                n = {};
                                            return r2(n, i, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, nn.useMemo)(() => {
                                                    let i = r$();
                                                    return rX(i, e, t), Object.assign({}, i.vars, i.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i
                                })(i, r, s, e),
                                a = function(t, e, i) {
                                    let n = {};
                                    for (let r in t)("values" !== r || "object" != typeof t.values) && (r9(r) || !0 === i && r5(r) || !e && !r5(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                    return n
                                }(i, "string" == typeof e, t),
                                l = e !== nn.Fragment ? {
                                    ...a,
                                    ...o,
                                    ref: n
                                } : {},
                                {
                                    children: u
                                } = i,
                                h = (0, nn.useMemo)(() => e4(u) ? u.get() : u, [u]);
                            return (0, nn.createElement)(e, {
                                ...l,
                                children: h
                            })
                        }
                    }(e),
                    createVisualElement: ne,
                    Component: t
                })
            }))
        },
        1810: function(t, e, i) {
            i.d(e, {
                w_: function() {
                    return h
                }
            });
            var n = i(2265),
                r = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                s = n.createContext && n.createContext(r),
                o = ["attr", "size", "title"];

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function l(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(i), !0).forEach(function(e) {
                        var n, r;
                        n = e, r = i[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != typeof t || !t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == typeof e ? e : e + ""
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }

            function h(t) {
                return e => n.createElement(d, a({
                    attr: u({}, t.attr)
                }, e), function t(e) {
                    return e && e.map((e, i) => n.createElement(e.tag, u({
                        key: i
                    }, e.attr), t(e.child)))
                }(t.child))
            }

            function d(t) {
                var e = e => {
                    var i, {
                            attr: r,
                            size: s,
                            title: l
                        } = t,
                        h = function(t, e) {
                            if (null == t) return {};
                            var i, n, r = function(t, e) {
                                if (null == t) return {};
                                var i = {};
                                for (var n in t)
                                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        i[n] = t[n]
                                    } return i
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(t);
                                for (n = 0; n < s.length; n++) i = s[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
                            }
                            return r
                        }(t, o),
                        d = s || e.size || "1em";
                    return e.className && (i = e.className), t.className && (i = (i ? i + " " : "") + t.className), n.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, r, h, {
                        className: i,
                        style: u(u({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), l && n.createElement("title", null, l), t.children)
                };
                return void 0 !== s ? n.createElement(s.Consumer, null, t => e(t)) : e(r)
            }
        }
    }
]);