/*!
 * color-picker v1.0.0
 * (c) 2019 Smohan<https://smohan.net>.
 * Released under the MIT License.
 * https://smohan.net/blog/d5uvpu
 */
!(function (t, a) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = a())
    : "function" == typeof define && define.amd
    ? define([], a)
    : "object" == typeof exports
    ? (exports.MoColorPicker = a())
    : (t.MoColorPicker = a());
})(window, function () {
  return (function (t) {
    var a = {};
    function e(n) {
      if (a[n]) return a[n].exports;
      var r = (a[n] = { i: n, l: !1, exports: {} });
      return t[n].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    return (
      (e.m = t),
      (e.c = a),
      (e.d = function (t, a, n) {
        e.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: n });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, a) {
        if ((1 & a && (t = e(t)), 8 & a)) return t;
        if (4 & a && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (e.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & a && "string" != typeof t)
        )
          for (var r in t)
            e.d(
              n,
              r,
              function (a) {
                return t[a];
              }.bind(null, r)
            );
        return n;
      }),
      (e.n = function (t) {
        var a =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(a, "a", a), a;
      }),
      (e.o = function (t, a) {
        return Object.prototype.hasOwnProperty.call(t, a);
      }),
      (e.p = "/"),
      e((e.s = 1))
    );
  })([
    function (t, a, e) {},
    function (t, a, e) {
      "use strict";
      e.r(a);
      var n =
          '\n<div class="mo-color-sat-val">\n  <div class="mo-color-thumb" role="slider" tabindex="0">\n    <span></span>\n  </div>\n</div>\n<div class="mo-color-hue">\n  <div class="mo-color-rail"></div>\n  <div class="mo-color-thumb" role="slider" tabindex="0">\n    <span></span>\n  </div>\n</div>\n<div class="mo-color-alpha">\n  <div class="mo-color-rail"></div>\n  <div class="mo-color-thumb" role="slider" tabindex="0">\n    <span></span>\n  </div>\n</div>\n',
        r = /^#([a-f\d]{3}|[a-f\d]{6})$/i,
        s = /^rgba?\s?\(/i,
        i = /^hsla?\s?\(/i,
        o = /^hsva?\s?\(/i,
        l = function (t) {
          return void 0 !== t && !isNaN(+t) && 0 <= +t && +t <= 1 ? +t : 1;
        };
      function h(t, a) {
        return (
          (t = Math.min(a, Math.max(0, t))),
          Math.abs(t - a) < 1e-6 ? 1 : (t % a) / ~~a
        );
      }
      var u = function (t, a, e) {
          (t = h(t, 360)), (a = h(100 * a, 100));
          var n = ~~(6 * t),
            r = 6 * t - n,
            s = (e = h(100 * e, 100)) * (1 - a),
            i = e * (1 - r * a),
            o = e * (1 - (1 - r) * a),
            l = 0,
            u = 0,
            c = 0;
          switch (n % 6) {
            case 0:
              (l = e), (u = o), (c = s);
              break;
            case 1:
              (l = i), (u = e), (c = s);
              break;
            case 2:
              (l = s), (u = e), (c = o);
              break;
            case 3:
              (l = s), (u = i), (c = e);
              break;
            case 4:
              (l = o), (u = s), (c = e);
              break;
            case 5:
              (l = e), (u = s), (c = i);
          }
          var d = function (t) {
            return Math.round(255 * t);
          };
          return { r: d(l), g: d(u), b: d(c) };
        },
        c = function (t, a, e, n) {
          (t = h(t, 255)), (a = h(a, 255)), (e = h(e, 255));
          var r,
            s,
            i = Math.max(t, a, e),
            o = Math.min(t, a, e),
            u = i,
            c = i - o;
          if (((s = 0 === i ? 0 : c / i), i === o)) r = 0;
          else {
            switch (i) {
              case t:
                r = (a - e) / c + (a < e ? 6 : 0);
                break;
              case a:
                r = (e - t) / c + 2;
                break;
              case e:
                r = (t - a) / c + 4;
            }
            r /= 6;
          }
          return { h: 360 * r, s: s, v: u, a: l(n) };
        },
        d = function (t, a, e) {
          return {
            h: t,
            s: (a * e) / ((t = (2 - a) * e) < 1 ? t : 2 - t) || 0,
            l: t / 2,
          };
        },
        p = function (t) {
          if (t) {
            if (r.test(t)) {
              var a = (function (t) {
                  if (3 === (t = t.replace(/^#/, "")).length) {
                    for (var a = [], e = 0; e < 3; e++) a.push(t[e], t[e]);
                    t = a.join("");
                  }
                  return {
                    r: parseInt([t[0], t[1]].join(""), 16),
                    g: parseInt([t[2], t[3]].join(""), 16),
                    b: parseInt([t[4], t[5]].join(""), 16),
                  };
                })(t),
                e = a.r,
                n = a.g,
                h = a.b;
              return c(e, n, h);
            }
            if (s.test(t)) {
              (e = (f = t
                .replace(s, "")
                .replace(/\)/, "")
                .trim()
                .split(",")
                .filter(function (t) {
                  return "" !== t.trim();
                })
                .map(function (t, a) {
                  return 3 === a ? l(t) : parseInt(t, 10);
                }))[0]),
                (n = f[1]),
                (h = f[2]);
              var u = f[3],
                d = c(e, n, h);
              return (d.a = l(u)), d;
            }
            var p;
            if (o.test(t) || (p = i.test(t))) {
              var f,
                v = p ? i : o,
                g = (f = t
                  .replace(v, "")
                  .replace(/\)/, "")
                  .trim()
                  .split(",")
                  .filter(function (t) {
                    return "" !== t.trim();
                  })
                  .map(function (t, a) {
                    return 3 === a ? l(t) : parseFloat(t);
                  }))[0],
                m = f[1],
                b = f[2];
              u = f[3];
              return p
                ? (function (t, a, e, n) {
                    return {
                      h: t,
                      s: (2 * (a *= (e *= 2) <= 1 ? e : 2 - e)) / (e + a),
                      v: (e + a) / 2,
                      a: l(n),
                    };
                  })(g, m, b, u)
                : { h: g, s: m, v: b, a: u };
            }
          }
        },
        f = function (t, a) {
          return void 0 === a && (a = document), a.querySelector(t);
        },
        v = function (t, a, e) {
          return t.addEventListener(a, e, !1);
        },
        g = function (t, a, e) {
          return t.removeEventListener(a, e, !1);
        },
        m = function (t) {
          return "function" == typeof t;
        },
        b = {
          start: function (t) {},
          drag: function (t, a) {},
          end: function (t, a) {},
        };
      function _(t) {
        g(document, "mousemove", this._handlers.drag),
          g(document, "mouseup", this._handlers.dragEnd),
          (M.dragging = !1),
          "boolean" != typeof t &&
            m(this._props.end) &&
            this._props.end.call(this, y(this._$el, t), t);
      }
      function $() {
        var t = this._handlers,
          a = this._$el;
        (t.dragStart = function (t) {
          M.dragging ||
            (t.preventDefault(),
            v(document, "mousemove", this._handlers.drag),
            v(document, "mouseup", this._handlers.dragEnd),
            (M.dragging = !0),
            m(this._props.start) && this._props.start.call(this, t));
        }.bind(this)),
          (t.drag = function (t) {
            m(this._props.drag) &&
              this._props.drag.call(this, y(this._$el, t), t);
          }.bind(this)),
          (t.dragEnd = _.bind(this)),
          (t.click = function (t) {
            m(this._props.end) &&
              this._props.end.call(this, y(this._$el, t), t);
          }.bind(this)),
          v(a, "mousedown", t.dragStart),
          v(a, "click", t.click);
      }
      function y(t, a) {
        var e = t.getBoundingClientRect(),
          n = a,
          r = n.clientX - e.left,
          s = n.clientY - e.top;
        return {
          top: Math.min(Math.max(0, s), e.height),
          left: Math.min(Math.max(0, r), e.width),
        };
      }
      var M = (function () {
          function t(t, a) {
            (this._$el = t),
              (this._handlers = Object.create(null)),
              (this._props = Object.assign({}, b, a)),
              $.call(this);
          }
          return (
            (t.prototype.destroy = function () {
              (function () {
                var t = this._handlers,
                  a = this._$el;
                g(a, "mousedown", t.dragStart),
                  g(a, "click", t.click),
                  _.call(this, !1);
              }.call(this),
                (this._$el = null),
                (this._handlers = null));
            }),
            (t.dragging = !1),
            t
          );
        })(),
        x = M;
      e.d(a, "ColorPicker", function () {
        return E;
      }),
        e(0);
      var k = "mo-color-picker",
        j = {
          value: null,
          format: "rgb",
          alpha: !1,
          change: function (t, a) {},
        },
        w = {
          sat: ".mo-color-sat-val",
          hue: ".mo-color-hue",
          alp: ".mo-color-alpha",
          rail: ".mo-color-rail",
          thumb: ".mo-color-thumb",
        };
      function W() {
        var t = this._props,
          a = this._states,
          e = document.createElement("div");
        (e.className = k),
          (e.innerHTML = n),
          (a.$el = e),
          (a.$sat = f(w.sat, e)),
          (a.$hue = f(w.hue, e)),
          (a.$alp = f(w.alp, e)),
          (a.$satThumb = f(w.thumb, a.$sat)),
          (a.$hueThumb = f(w.thumb, a.$hue)),
          (a.$alpThumb = f(w.thumb, a.$alp)),
          (a.$alpRail = f(w.rail, a.$alp)),
          a.$wrap.appendChild(e),
          t.alpha || (a.$alp.style.display = "none"),
          function () {
            var t = this._states,
              a = this;
            function e(e) {
              var n = e.top,
                r = e.left,
                s = t.satWidth,
                i = t.satHeight,
                o = Math.round((r / s) * 100) / 100,
                l = Math.round(100 * (1 - n / i)) / 100;
              (t.s = o), (t.v = l), I.call(a), P.call(a);
            }
            function n(e) {
              var n = e.left,
                r = t.hueWidth;
              (t.h = Math.round((n / r) * 360 * 100) / 100),
                O.call(a),
                P.call(a);
            }
            function r(e) {
              var n = e.left,
                r = t.alpWidth;
              (t.a = Math.round((n / r) * 100) / 100),
                D.call(a, !0, !1),
                P.call(a);
            }
            (t.satDragIns = new x(t.$sat, { drag: e, end: e })),
              (t.hueDragIns = new x(t.$hue, { drag: n, end: n })),
              (t.alpDragIns = new x(t.$alp, { drag: r, end: r }));
          }.call(this);
      }
      function I() {
        var t = this._states,
          a = t.s,
          e = t.v;
        (t.satWidth = t.satWidth || t.$sat.offsetWidth),
          (t.satHeight = t.satHeight || t.$sat.offsetHeight);
        var n = Math.round((1 - e) * t.satHeight),
          r = Math.round(a * t.satWidth),
          s = a <= 0.2 && e >= 0.8 ? "rgba(0,0,0,.7)" : "white";
        (t.$satThumb.style.cssText +=
          "top: " + n + "px; left: " + r + "px; color: " + s + ";"),
          D.call(this, !1, !0);
      }
      function O() {
        var t = this._states,
          a = t.h;
        t.hueWidth = t.hueWidth || t.$hue.offsetWidth;
        var e = Math.round((a / 360) * t.hueWidth);
        (t.$hueThumb.style.left = e + "px"),
          (t.$sat.style.background = "hsl(" + a + ", 100%, 50%)"),
          D.call(this, !1, !0);
      }
      function D(t, a) {
        void 0 === t && (t = !0), void 0 === a && (a = !0);
        var e = this._props,
          n = this._states;
        if (e.alpha) {
          var r = n.h,
            s = n.s,
            i = n.v,
            o = n.a;
          if (
            (t &&
              ((n.alpWidth = n.alpWidth || n.$alp.offsetWidth),
              (n.$alpThumb.style.left = o * n.alpWidth + "px")),
            a)
          ) {
            var l = d(r, s, i);
            n.$alpRail.style.background =
              "linear-gradient(to right, transparent, hsl(" +
              l.h +
              ", " +
              100 * l.s +
              "%, " +
              100 * l.l +
              "%))";
          }
        }
      }
      function S() {
        I.call(this), O.call(this), D.call(this, !0, !0);
      }
      function T(t, a) {
        var e,
          n,
          r = this._states;
        if (t) {
          var s = p(t),
            i = s.h,
            o = s.s,
            l = s.v,
            h = s.a,
            c = u(i, o, l),
            d = c.r,
            f = c.g,
            v = c.b;
          if (
            void 0 !== i &&
            ((e = "rgb(" + d + "," + f + "," + v + ")"),
            ((n = new Option().style).color = e),
            (n.color || "").replace(/\s/g, "") === e)
          )
            return (
              (r.h = i), (r.s = o), (r.v = l), (r.a = h), void S.call(this)
            );
        }
        a && ((r.h = 360), (r.s = 1), (r.v = 1), (r.a = 1), S.call(this));
      }
      function P() {
        var t = this._props,
          a = this._states,
          e = a.h,
          n = a.s,
          r = a.v,
          s = a.a;
        m(t.change) &&
          t.change.call(this, this.getValue(), { h: e, s: n, v: r, a: s });
      }
      var E = (function () {
        function t(t, a) {
          (this._states = Object.create(null)),
            (this._props = Object.assign({}, j, a)),
            (this._states.$wrap = t),
            W.call(this),
            T.call(this, this._props.value, !0);
        }
        return (
          (t.prototype.setValue = function (t) {
            null === t ? T.call(this, null, !0) : t && T.call(this, t);
          }),
          (t.prototype.getValue = function (t) {
            var a,
              e = this._props,
              n = this._states,
              r = n.h,
              s = n.s,
              i = n.v,
              o = n.a;
            switch ((t = t || e.format)) {
              case "hsl":
                var l = d(r, s, i),
                  h = l.h,
                  c = l.s,
                  p = l.l;
                a = e.alpha
                  ? "hsla(" +
                    Math.round(h) +
                    ", " +
                    Math.round(100 * c) +
                    "%, " +
                    Math.round(100 * p) +
                    "%, " +
                    o +
                    ")"
                  : "hsl(" +
                    Math.round(h) +
                    ", " +
                    Math.round(100 * c) +
                    "%, " +
                    Math.round(100 * p) +
                    "%)";
                break;
              case "hsv":
                a = e.alpha
                  ? "hsva(" +
                    Math.round(r) +
                    ", " +
                    Math.round(100 * s) +
                    "%, " +
                    Math.round(100 * i) +
                    "%, " +
                    o +
                    ")"
                  : "hsv(" +
                    Math.round(r) +
                    ", " +
                    Math.round(100 * s) +
                    "%, " +
                    Math.round(100 * i) +
                    "%)";
                break;
              case "hex":
              case "rgb":
              default:
                var f = u(r, s, i),
                  v = f.r,
                  g = f.g,
                  m = f.b;
                a =
                  "hex" === t
                    ? (function (t, a, e) {
                        var n = "#";
                        return (
                          [t, a, e].forEach(function (t) {
                            var a = t.toString(16);
                            a.length < 2 && (a = "0" + a), (n += a);
                          }),
                          n
                        );
                      })(v, g, m)
                    : e.alpha
                    ? "rgba(" + v + ", " + g + ", " + m + ", " + o + ")"
                    : "rgb(" + v + ", " + g + ", " + m + ")";
            }
            return a;
          }),
          (t.prototype.destroy = function () {
            (function () {
              var t = this._states;
              t.satDragIns && t.satDragIns.destroy(),
                t.hueDragIns && t.hueDragIns.destroy(),
                t.alpDragIns && t.alpDragIns.destroy();
            }.call(this),
              this._states.$el.parentNode.removeChild(this._states.$el),
              (this._props = null),
              (this._states = null));
          }),
          t
        );
      })();
      a.default = E;
    },
  ]).default;
});
//# sourceMappingURL=mo.color-picker.js.map