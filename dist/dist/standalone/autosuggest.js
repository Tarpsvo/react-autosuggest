!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('React')))
    : 'function' == typeof define && define.amd
    ? define(['React'], t)
    : 'object' == typeof exports
    ? (exports.Autosuggest = t(require('React')))
    : (e.Autosuggest = t(e.React));
})(window, function (e) {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 5))
    );
  })([
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      e.exports = n(6)();
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      t.default = function (e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (e === t) return !1;
        var r = Object.keys(e),
          i = Object.keys(t);
        if (r.length !== i.length) return !0;
        var u = {},
          s = void 0,
          a = void 0;
        for (s = 0, a = n.length; s < a; s++) u[n[s]] = !0;
        for (s = 0, a = r.length; s < a; s++) {
          var l = r[s],
            c = e[l],
            g = t[l];
          if (c !== g) {
            if (
              !u[l] ||
              null === c ||
              null === g ||
              'object' !== (void 0 === c ? 'undefined' : o(c)) ||
              'object' !== (void 0 === g ? 'undefined' : o(g))
            )
              return !0;
            var f = Object.keys(c),
              d = Object.keys(g);
            if (f.length !== d.length) return !0;
            for (var h = 0, p = f.length; h < p; h++) {
              var m = f[h];
              if (c[m] !== g[m]) return !0;
            }
          }
        }
        return !1;
      };
    },
    function (e, t, n) {
      'use strict';
      e.exports = function (e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = e.length;
        if (t.length !== n) return !1;
        for (var o = 0; o < n; o++) if (e[o] !== t[o]) return !1;
        return !0;
      };
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(8).default;
    },
    function (e, t, n) {
      e.exports = n(15).default;
    },
    function (e, t, n) {
      'use strict';
      var o = n(7);
      function r() {}
      function i() {}
      (i.resetWarningCache = r),
        (e.exports = function () {
          function e(e, t, n, r, i, u) {
            if (u !== o) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((s.name = 'Invariant Violation'), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: r,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                o = !0,
                r = !1,
                i = void 0;
              try {
                for (
                  var u, s = e[Symbol.iterator]();
                  !(o = (u = s.next()).done) &&
                  (n.push(u.value), !t || n.length !== t);
                  o = !0
                );
              } catch (e) {
                (r = !0), (i = e);
              } finally {
                try {
                  !o && s.return && s.return();
                } finally {
                  if (r) throw i;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        u = n(0),
        s = d(u),
        a = d(n(1)),
        l = d(n(9)),
        c = d(n(10)),
        g = d(n(12)),
        f = d(n(13));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var h = {},
        p = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.storeInputReference = function (e) {
                null !== e && (n.input = e);
              }),
              (n.storeItemsContainerReference = function (e) {
                null !== e && (n.itemsContainer = e);
              }),
              (n.onHighlightedItemChange = function (e) {
                n.highlightedItem = e;
              }),
              (n.getItemId = function (e, t) {
                return null === t
                  ? null
                  : 'react-autowhatever-' +
                      n.props.id +
                      '-' +
                      (null === e ? '' : 'section-' + e) +
                      '-item-' +
                      t;
              }),
              (n.onFocus = function (e) {
                var t = n.props.inputProps;
                n.setState({ isInputFocused: !0 }), t.onFocus && t.onFocus(e);
              }),
              (n.onBlur = function (e) {
                var t = n.props.inputProps;
                n.setState({ isInputFocused: !1 }), t.onBlur && t.onBlur(e);
              }),
              (n.onKeyDown = function (e) {
                var t = n.props,
                  o = t.inputProps,
                  i = t.highlightedSectionIndex,
                  u = t.highlightedItemIndex;
                switch (e.key) {
                  case 'ArrowDown':
                  case 'ArrowUp':
                    var s = 'ArrowDown' === e.key ? 'next' : 'prev',
                      a = n.sectionIterator[s]([i, u]),
                      l = r(a, 2),
                      c = l[0],
                      g = l[1];
                    o.onKeyDown(e, {
                      newHighlightedSectionIndex: c,
                      newHighlightedItemIndex: g,
                    });
                    break;
                  default:
                    o.onKeyDown(e, {
                      highlightedSectionIndex: i,
                      highlightedItemIndex: u,
                    });
                }
              }),
              (n.highlightedItem = null),
              (n.state = { isInputFocused: !1 }),
              n.setSectionsItems(e),
              n.setSectionIterator(e),
              n.setTheme(e),
              n
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  e.items !== this.props.items && this.setSectionsItems(e),
                    (e.items === this.props.items &&
                      e.multiSection === this.props.multiSection) ||
                      this.setSectionIterator(e),
                    e.theme !== this.props.theme && this.setTheme(e);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: 'setSectionsItems',
                value: function (e) {
                  e.multiSection &&
                    ((this.sectionsItems = e.items.map(function (t) {
                      return e.getSectionItems(t);
                    })),
                    (this.sectionsLengths = this.sectionsItems.map(function (
                      e
                    ) {
                      return e.length;
                    })),
                    (this.allSectionsAreEmpty = this.sectionsLengths.every(
                      function (e) {
                        return 0 === e;
                      }
                    )));
                },
              },
              {
                key: 'setSectionIterator',
                value: function (e) {
                  this.sectionIterator = (0, l.default)({
                    multiSection: e.multiSection,
                    data: e.multiSection
                      ? this.sectionsLengths
                      : e.items.length,
                  });
                },
              },
              {
                key: 'setTheme',
                value: function (e) {
                  this.theme = (0, c.default)(e.theme);
                },
              },
              {
                key: 'renderSections',
                value: function () {
                  var e = this;
                  if (this.allSectionsAreEmpty) return null;
                  var t = this.theme,
                    n = this.props,
                    o = n.id,
                    r = n.items,
                    i = n.renderItem,
                    u = n.renderItemData,
                    a = n.renderSectionTitle,
                    l = n.highlightedSectionIndex,
                    c = n.highlightedItemIndex,
                    d = n.itemProps;
                  return r.map(function (n, r) {
                    var h = 'react-autowhatever-' + o + '-',
                      p = h + 'section-' + r + '-',
                      m = 0 === r;
                    return s.default.createElement(
                      'div',
                      t(
                        p + 'container',
                        'sectionContainer',
                        m && 'sectionContainerFirst'
                      ),
                      s.default.createElement(g.default, {
                        section: n,
                        renderSectionTitle: a,
                        theme: t,
                        sectionKeyPrefix: p,
                      }),
                      s.default.createElement(f.default, {
                        items: e.sectionsItems[r],
                        itemProps: d,
                        renderItem: i,
                        renderItemData: u,
                        sectionIndex: r,
                        highlightedItemIndex: l === r ? c : null,
                        onHighlightedItemChange: e.onHighlightedItemChange,
                        getItemId: e.getItemId,
                        theme: t,
                        keyPrefix: h,
                        ref: e.storeItemsListReference,
                      })
                    );
                  });
                },
              },
              {
                key: 'renderItems',
                value: function () {
                  var e = this.props.items;
                  if (0 === e.length) return null;
                  var t = this.theme,
                    n = this.props,
                    o = n.id,
                    r = n.renderItem,
                    i = n.renderItemData,
                    u = n.highlightedSectionIndex,
                    a = n.highlightedItemIndex,
                    l = n.itemProps;
                  return s.default.createElement(f.default, {
                    items: e,
                    itemProps: l,
                    renderItem: r,
                    renderItemData: i,
                    highlightedItemIndex: null === u ? a : null,
                    onHighlightedItemChange: this.onHighlightedItemChange,
                    getItemId: this.getItemId,
                    theme: t,
                    keyPrefix: 'react-autowhatever-' + o + '-',
                  });
                },
              },
              {
                key: 'ensureHighlightedItemIsVisible',
                value: function () {
                  var e = this.highlightedItem;
                  if (e) {
                    var t = this.itemsContainer,
                      n =
                        e.offsetParent === t
                          ? e.offsetTop
                          : e.offsetTop - t.offsetTop,
                      o = t.scrollTop;
                    n < o
                      ? (o = n)
                      : n + e.offsetHeight > o + t.offsetHeight &&
                        (o = n + e.offsetHeight - t.offsetHeight),
                      o !== t.scrollTop && (t.scrollTop = o);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.theme,
                    t = this.props,
                    n = t.id,
                    r = t.multiSection,
                    i = t.renderInputComponent,
                    u = t.renderItemsContainer,
                    a = t.highlightedSectionIndex,
                    l = t.highlightedItemIndex,
                    c = this.state.isInputFocused,
                    g = r ? this.renderSections() : this.renderItems(),
                    f = null !== g,
                    d = this.getItemId(a, l),
                    h = 'react-autowhatever-' + n,
                    p = o(
                      {
                        role: 'combobox',
                        'aria-haspopup': 'listbox',
                        'aria-owns': h,
                        'aria-expanded': f,
                      },
                      e(
                        'react-autowhatever-' + n + '-container',
                        'container',
                        f && 'containerOpen'
                      ),
                      this.props.containerProps
                    ),
                    m = i(
                      o(
                        {
                          type: 'text',
                          value: '',
                          autoComplete: 'off',
                          'aria-autocomplete': 'list',
                          'aria-controls': h,
                          'aria-activedescendant': d,
                        },
                        e(
                          'react-autowhatever-' + n + '-input',
                          'input',
                          f && 'inputOpen',
                          c && 'inputFocused'
                        ),
                        this.props.inputProps,
                        {
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          onKeyDown:
                            this.props.inputProps.onKeyDown && this.onKeyDown,
                          ref: this.storeInputReference,
                        }
                      )
                    ),
                    y = u({
                      containerProps: o(
                        { id: h, role: 'listbox' },
                        e(
                          'react-autowhatever-' + n + '-items-container',
                          'itemsContainer',
                          f && 'itemsContainerOpen'
                        ),
                        { ref: this.storeItemsContainerReference }
                      ),
                      children: g,
                    });
                  return s.default.createElement('div', p, m, y);
                },
              },
            ]),
            t
          );
        })(u.Component);
      (p.propTypes = {
        id: a.default.string,
        multiSection: a.default.bool,
        renderInputComponent: a.default.func,
        renderItemsContainer: a.default.func,
        items: a.default.array.isRequired,
        renderItem: a.default.func,
        renderItemData: a.default.object,
        renderSectionTitle: a.default.func,
        getSectionItems: a.default.func,
        containerProps: a.default.object,
        inputProps: a.default.object,
        itemProps: a.default.oneOfType([a.default.object, a.default.func]),
        highlightedSectionIndex: a.default.number,
        highlightedItemIndex: a.default.number,
        theme: a.default.oneOfType([a.default.object, a.default.array]),
      }),
        (p.defaultProps = {
          id: '1',
          multiSection: !1,
          renderInputComponent: function (e) {
            return s.default.createElement('input', e);
          },
          renderItemsContainer: function (e) {
            var t = e.containerProps,
              n = e.children;
            return s.default.createElement('div', t, n);
          },
          renderItem: function () {
            throw new Error('`renderItem` must be provided');
          },
          renderItemData: h,
          renderSectionTitle: function () {
            throw new Error('`renderSectionTitle` must be provided');
          },
          getSectionItems: function () {
            throw new Error('`getSectionItems` must be provided');
          },
          containerProps: h,
          inputProps: h,
          itemProps: h,
          highlightedSectionIndex: null,
          highlightedItemIndex: null,
          theme: {
            container: 'react-autowhatever__container',
            containerOpen: 'react-autowhatever__container--open',
            input: 'react-autowhatever__input',
            inputOpen: 'react-autowhatever__input--open',
            inputFocused: 'react-autowhatever__input--focused',
            itemsContainer: 'react-autowhatever__items-container',
            itemsContainerOpen: 'react-autowhatever__items-container--open',
            itemsList: 'react-autowhatever__items-list',
            item: 'react-autowhatever__item',
            itemFirst: 'react-autowhatever__item--first',
            itemHighlighted: 'react-autowhatever__item--highlighted',
            sectionContainer: 'react-autowhatever__section-container',
            sectionContainerFirst:
              'react-autowhatever__section-container--first',
            sectionTitle: 'react-autowhatever__section-title',
          },
        }),
        (t.default = p);
    },
    function (e, t, n) {
      'use strict';
      var o = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              o = !0,
              r = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(o = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              (r = !0), (i = e);
            } finally {
              try {
                !o && s.return && s.return();
              } finally {
                if (r) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
      e.exports = function (e) {
        var t = e.data,
          n = e.multiSection;
        function r(e) {
          var r = o(e, 2),
            i = r[0],
            u = r[1];
          return n
            ? null === u || u === t[i] - 1
              ? null ===
                (i = (function (e) {
                  for (null === e ? (e = 0) : e++; e < t.length && 0 === t[e]; )
                    e++;
                  return e === t.length ? null : e;
                })(i))
                ? [null, null]
                : [i, 0]
              : [i, u + 1]
            : 0 === t || u === t - 1
            ? [null, null]
            : null === u
            ? [null, 0]
            : [null, u + 1];
        }
        return {
          next: r,
          prev: function (e) {
            var r = o(e, 2),
              i = r[0],
              u = r[1];
            return n
              ? null === u || 0 === u
                ? null ===
                  (i = (function (e) {
                    for (
                      null === e ? (e = t.length - 1) : e--;
                      e >= 0 && 0 === t[e];

                    )
                      e--;
                    return -1 === e ? null : e;
                  })(i))
                  ? [null, null]
                  : [i, t[i] - 1]
                : [i, u - 1]
              : 0 === t || 0 === u
              ? [null, null]
              : null === u
              ? [null, t - 1]
              : [null, u - 1];
          },
          isLast: function (e) {
            return null === r(e)[1];
          },
        };
      };
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              o = !0,
              r = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(o = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              (r = !0), (i = e);
            } finally {
              try {
                !o && s.return && s.return();
              } finally {
                if (r) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
      function r(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      var i,
        u = n(11),
        s = (i = u) && i.__esModule ? i : { default: i },
        a = function (e) {
          return e;
        };
      (t.default = function (e) {
        var t = Array.isArray(e) && 2 === e.length ? e : [e, null],
          n = o(t, 2),
          i = n[0],
          u = n[1];
        return function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          var l = n
            .map(function (e) {
              return i[e];
            })
            .filter(a);
          return 'string' == typeof l[0] || 'function' == typeof u
            ? { key: e, className: u ? u.apply(void 0, r(l)) : l.join(' ') }
            : { key: e, style: s.default.apply(void 0, [{}].concat(r(l))) };
        };
      }),
        (e.exports = t.default);
    },
    function (e, t, n) {
      'use strict';
      var o = Object.prototype.propertyIsEnumerable;
      function r(e) {
        if (null == e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      function i(e) {
        var t = Object.getOwnPropertyNames(e);
        return (
          Object.getOwnPropertySymbols &&
            (t = t.concat(Object.getOwnPropertySymbols(e))),
          t.filter(function (t) {
            return o.call(e, t);
          })
        );
      }
      e.exports =
        Object.assign ||
        function (e, t) {
          for (var n, o, u = r(e), s = 1; s < arguments.length; s++) {
            (n = arguments[s]), (o = i(Object(n)));
            for (var a = 0; a < o.length; a++) u[o[a]] = n[o[a]];
          }
          return u;
        };
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r = n(0),
        i = a(r),
        u = a(n(1)),
        s = a(n(2));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var g = (function (e) {
        function t() {
          return (
            l(this, t),
            c(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return (0, s.default)(e, this.props);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.section,
                  n = e.renderSectionTitle,
                  o = e.theme,
                  r = e.sectionKeyPrefix,
                  u = n(t);
                return u
                  ? i.default.createElement(
                      'div',
                      o(r + 'title', 'sectionTitle'),
                      u
                    )
                  : null;
              },
            },
          ]),
          t
        );
      })(r.Component);
      (g.propTypes = {
        section: u.default.any.isRequired,
        renderSectionTitle: u.default.func.isRequired,
        theme: u.default.func.isRequired,
        sectionKeyPrefix: u.default.string.isRequired,
      }),
        (t.default = g);
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = n(0),
        u = c(i),
        s = c(n(1)),
        a = c(n(14)),
        l = c(n(2));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function g(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var d = (function (e) {
        function t() {
          var e, n, o;
          g(this, t);
          for (var r = arguments.length, i = Array(r), u = 0; u < r; u++)
            i[u] = arguments[u];
          return (
            (n = o = f(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(i)
              )
            )),
            (o.storeHighlightedItemReference = function (e) {
              o.props.onHighlightedItemChange(null === e ? null : e.item);
            }),
            f(o, n)
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return (0, l.default)(e, this.props, ['itemProps']);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.items,
                  r = t.itemProps,
                  i = t.renderItem,
                  s = t.renderItemData,
                  l = t.sectionIndex,
                  c = t.highlightedItemIndex,
                  g = t.getItemId,
                  f = t.theme,
                  d = t.keyPrefix,
                  h = null === l ? d : d + 'section-' + l + '-',
                  p = 'function' == typeof r;
                return u.default.createElement(
                  'ul',
                  o({ role: 'listbox' }, f(h + 'items-list', 'itemsList')),
                  n.map(function (t, n) {
                    var d = 0 === n,
                      m = n === c,
                      y = h + 'item-' + n,
                      v = p ? r({ sectionIndex: l, itemIndex: n }) : r,
                      S = o(
                        { id: g(l, n), 'aria-selected': m },
                        f(y, 'item', d && 'itemFirst', m && 'itemHighlighted'),
                        v
                      );
                    return (
                      m && (S.ref = e.storeHighlightedItemReference),
                      u.default.createElement(
                        a.default,
                        o({}, S, {
                          sectionIndex: l,
                          isHighlighted: m,
                          itemIndex: n,
                          item: t,
                          renderItem: i,
                          renderItemData: s,
                        })
                      )
                    );
                  })
                );
              },
            },
          ]),
          t
        );
      })(i.Component);
      (d.propTypes = {
        items: s.default.array.isRequired,
        itemProps: s.default.oneOfType([s.default.object, s.default.func]),
        renderItem: s.default.func.isRequired,
        renderItemData: s.default.object.isRequired,
        sectionIndex: s.default.number,
        highlightedItemIndex: s.default.number,
        onHighlightedItemChange: s.default.func.isRequired,
        getItemId: s.default.func.isRequired,
        theme: s.default.func.isRequired,
        keyPrefix: s.default.string.isRequired,
      }),
        (d.defaultProps = { sectionIndex: null }),
        (t.default = d);
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = n(0),
        u = l(i),
        s = l(n(1)),
        a = l(n(2));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function g(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var f = (function (e) {
        function t() {
          var e, n, o;
          c(this, t);
          for (var r = arguments.length, i = Array(r), u = 0; u < r; u++)
            i[u] = arguments[u];
          return (
            (n = o = g(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(i)
              )
            )),
            (o.storeItemReference = function (e) {
              null !== e && (o.item = e);
            }),
            (o.onMouseEnter = function (e) {
              var t = o.props,
                n = t.sectionIndex,
                r = t.itemIndex;
              o.props.onMouseEnter(e, { sectionIndex: n, itemIndex: r });
            }),
            (o.onMouseLeave = function (e) {
              var t = o.props,
                n = t.sectionIndex,
                r = t.itemIndex;
              o.props.onMouseLeave(e, { sectionIndex: n, itemIndex: r });
            }),
            (o.onMouseDown = function (e) {
              var t = o.props,
                n = t.sectionIndex,
                r = t.itemIndex;
              o.props.onMouseDown(e, { sectionIndex: n, itemIndex: r });
            }),
            (o.onClick = function (e) {
              var t = o.props,
                n = t.sectionIndex,
                r = t.itemIndex;
              o.props.onClick(e, { sectionIndex: n, itemIndex: r });
            }),
            g(o, n)
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return (0, a.default)(e, this.props, ['renderItemData']);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.isHighlighted,
                  n = e.item,
                  r = e.renderItem,
                  i = e.renderItemData,
                  s = (function (e, t) {
                    var n = {};
                    for (var o in e)
                      t.indexOf(o) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, o) &&
                          (n[o] = e[o]));
                    return n;
                  })(e, [
                    'isHighlighted',
                    'item',
                    'renderItem',
                    'renderItemData',
                  ]);
                return (
                  delete s.sectionIndex,
                  delete s.itemIndex,
                  'function' == typeof s.onMouseEnter &&
                    (s.onMouseEnter = this.onMouseEnter),
                  'function' == typeof s.onMouseLeave &&
                    (s.onMouseLeave = this.onMouseLeave),
                  'function' == typeof s.onMouseDown &&
                    (s.onMouseDown = this.onMouseDown),
                  'function' == typeof s.onClick && (s.onClick = this.onClick),
                  u.default.createElement(
                    'li',
                    o({ role: 'option' }, s, { ref: this.storeItemReference }),
                    r(n, o({ isHighlighted: t }, i))
                  )
                );
              },
            },
          ]),
          t
        );
      })(i.Component);
      (f.propTypes = {
        sectionIndex: s.default.number,
        isHighlighted: s.default.bool.isRequired,
        itemIndex: s.default.number.isRequired,
        item: s.default.any.isRequired,
        renderItem: s.default.func.isRequired,
        renderItemData: s.default.object.isRequired,
        onMouseEnter: s.default.func,
        onMouseLeave: s.default.func,
        onMouseDown: s.default.func,
        onClick: s.default.func,
      }),
        (t.default = f);
    },
    function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return I;
        });
      var o = n(0),
        r = n.n(o),
        i = (n(1), n(3)),
        u = n.n(i),
        s = n(4),
        a = n.n(s),
        l = function (e) {
          var t = {};
          for (var n in e)
            switch (n) {
              case 'suggestionsContainer':
                t.itemsContainer = e[n];
                break;
              case 'suggestionsContainerOpen':
                t.itemsContainerOpen = e[n];
                break;
              case 'suggestion':
                t.item = e[n];
                break;
              case 'suggestionFirst':
                t.itemFirst = e[n];
                break;
              case 'suggestionHighlighted':
                t.itemHighlighted = e[n];
                break;
              case 'suggestionsList':
                t.itemsList = e[n];
                break;
              default:
                t[n] = e[n];
            }
          return t;
        };
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                S(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function h(e, t) {
        return !t || ('object' !== c(t) && 'function' != typeof t) ? p(e) : t;
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function S(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var b = function () {
          return !0;
        },
        I = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && v(e, t);
          })(c, e);
          var t,
            n,
            o,
            i,
            s =
              ((t = c),
              function () {
                var e,
                  n = y(t);
                if (m()) {
                  var o = y(this).constructor;
                  e = Reflect.construct(n, arguments, o);
                } else e = n.apply(this, arguments);
                return h(this, e);
              });
          function c(e) {
            var t,
              n = e.alwaysRenderSuggestions;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, c),
              S(p((t = s.call(this))), 'onDocumentMouseDown', function (e) {
                t.justClickedOnSuggestionsContainer = !1;
                for (
                  var n = (e.detail && e.detail.target) || e.target;
                  null !== n && n !== document;

                ) {
                  if (
                    n.getAttribute &&
                    null !== n.getAttribute('data-suggestion-index')
                  )
                    return;
                  if (n === t.suggestionsContainer)
                    return void (t.justClickedOnSuggestionsContainer = !0);
                  n = n.parentNode;
                }
              }),
              S(p(t), 'storeAutowhateverRef', function (e) {
                null !== e && (t.autowhatever = e);
              }),
              S(p(t), 'onSuggestionMouseEnter', function (e, n) {
                var o = n.sectionIndex,
                  r = n.itemIndex;
                t.updateHighlightedSuggestion(o, r),
                  e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !0),
                  (t.justMouseEntered = !0),
                  setTimeout(function () {
                    t.justMouseEntered = !1;
                  });
              }),
              S(p(t), 'highlightFirstSuggestion', function () {
                t.updateHighlightedSuggestion(
                  t.props.multiSection ? 0 : null,
                  0
                );
              }),
              S(p(t), 'onDocumentMouseUp', function () {
                t.pressedSuggestion &&
                  !t.justSelectedSuggestion &&
                  t.input.focus(),
                  (t.pressedSuggestion = null);
              }),
              S(p(t), 'onSuggestionMouseDown', function (e) {
                t.justSelectedSuggestion ||
                  ((t.justSelectedSuggestion = !0),
                  (t.pressedSuggestion = e.target));
              }),
              S(p(t), 'onSuggestionsClearRequested', function () {
                var e = t.props.onSuggestionsClearRequested;
                e && e();
              }),
              S(p(t), 'onSuggestionSelected', function (e, n) {
                var o = t.props,
                  r = o.alwaysRenderSuggestions,
                  i = o.onSuggestionSelected,
                  u = o.onSuggestionsFetchRequested;
                i && i(e, n),
                  r
                    ? u({
                        value: n.suggestionValue,
                        reason: 'suggestion-selected',
                      })
                    : t.onSuggestionsClearRequested(),
                  t.resetHighlightedSuggestion();
              }),
              S(p(t), 'onSuggestionClick', function (e) {
                var n = t.props,
                  o = n.alwaysRenderSuggestions,
                  r = n.focusInputOnSuggestionClick,
                  i = t.getSuggestionIndices(t.findSuggestionElement(e.target)),
                  u = i.sectionIndex,
                  s = i.suggestionIndex,
                  a = t.getSuggestion(u, s),
                  l = t.props.getSuggestionValue(a);
                t.maybeCallOnChange(e, l, 'click'),
                  t.onSuggestionSelected(e, {
                    suggestion: a,
                    suggestionValue: l,
                    suggestionIndex: s,
                    sectionIndex: u,
                    method: 'click',
                  }),
                  o || t.closeSuggestions(),
                  !0 === r ? t.input.focus() : t.onBlur(),
                  setTimeout(function () {
                    t.justSelectedSuggestion = !1;
                  });
              }),
              S(p(t), 'onBlur', function () {
                var e = t.props,
                  n = e.inputProps,
                  o = e.shouldRenderSuggestions,
                  r = n.value,
                  i = n.onBlur,
                  u = t.getHighlightedSuggestion(),
                  s = o(r);
                t.setState({
                  isFocused: !1,
                  highlightedSectionIndex: null,
                  highlightedSuggestionIndex: null,
                  highlightedSuggestion: null,
                  valueBeforeUpDown: null,
                  isCollapsed: !s,
                }),
                  i && i(t.blurEvent, { highlightedSuggestion: u });
              }),
              S(p(t), 'onSuggestionMouseLeave', function (e) {
                t.resetHighlightedSuggestion(!1),
                  t.justSelectedSuggestion &&
                    e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !1);
              }),
              S(p(t), 'onSuggestionTouchStart', function () {
                t.justSelectedSuggestion = !0;
              }),
              S(p(t), 'onSuggestionTouchMove', function () {
                (t.justSelectedSuggestion = !1),
                  (t.pressedSuggestion = null),
                  t.input.focus();
              }),
              S(p(t), 'itemProps', function (e) {
                return {
                  'data-section-index': e.sectionIndex,
                  'data-suggestion-index': e.itemIndex,
                  onMouseEnter: t.onSuggestionMouseEnter,
                  onMouseLeave: t.onSuggestionMouseLeave,
                  onMouseDown: t.onSuggestionMouseDown,
                  onTouchStart: t.onSuggestionTouchStart,
                  onTouchMove: t.onSuggestionTouchMove,
                  onClick: t.onSuggestionClick,
                };
              }),
              S(p(t), 'renderSuggestionsContainer', function (e) {
                var n = e.containerProps,
                  o = e.children;
                return (0,
                t.props
                  .renderSuggestionsContainer)({ containerProps: n, children: o, query: t.getQuery() });
              }),
              (t.state = {
                isFocused: !1,
                isCollapsed: !n,
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
              }),
              (t.justPressedUpDown = !1),
              (t.justMouseEntered = !1),
              (t.pressedSuggestion = null),
              t
            );
          }
          return (
            (n = c),
            (o = [
              {
                key: 'componentDidMount',
                value: function () {
                  document.addEventListener(
                    'mousedown',
                    this.onDocumentMouseDown
                  ),
                    document.addEventListener(
                      'mouseup',
                      this.onDocumentMouseUp
                    ),
                    (this.input = this.autowhatever.input),
                    (this.suggestionsContainer = this.autowhatever.itemsContainer);
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  u()(e.suggestions, this.props.suggestions)
                    ? e.highlightFirstSuggestion &&
                      e.suggestions.length > 0 &&
                      !1 === this.justPressedUpDown &&
                      !1 === this.justMouseEntered &&
                      this.highlightFirstSuggestion()
                    : this.willRenderSuggestions(e)
                    ? this.state.isCollapsed &&
                      !this.justSelectedSuggestion &&
                      this.revealSuggestions()
                    : this.resetHighlightedSuggestion();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    o = n.suggestions,
                    r = n.onSuggestionHighlighted,
                    i = n.highlightFirstSuggestion;
                  if (!u()(o, e.suggestions) && o.length > 0 && i)
                    this.highlightFirstSuggestion();
                  else if (r) {
                    var s = this.getHighlightedSuggestion();
                    s != t.highlightedSuggestion && r({ suggestion: s });
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  document.removeEventListener(
                    'mousedown',
                    this.onDocumentMouseDown
                  ),
                    document.removeEventListener(
                      'mouseup',
                      this.onDocumentMouseUp
                    );
                },
              },
              {
                key: 'updateHighlightedSuggestion',
                value: function (e, t, n) {
                  var o = this;
                  this.setState(function (r) {
                    var i = r.valueBeforeUpDown;
                    return (
                      null === t
                        ? (i = null)
                        : null === i && void 0 !== n && (i = n),
                      {
                        highlightedSectionIndex: e,
                        highlightedSuggestionIndex: t,
                        highlightedSuggestion:
                          null === t ? null : o.getSuggestion(e, t),
                        valueBeforeUpDown: i,
                      }
                    );
                  });
                },
              },
              {
                key: 'resetHighlightedSuggestion',
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  this.setState(function (t) {
                    var n = t.valueBeforeUpDown;
                    return {
                      highlightedSectionIndex: null,
                      highlightedSuggestionIndex: null,
                      highlightedSuggestion: null,
                      valueBeforeUpDown: e ? null : n,
                    };
                  });
                },
              },
              {
                key: 'revealSuggestions',
                value: function () {
                  this.setState({ isCollapsed: !1 });
                },
              },
              {
                key: 'closeSuggestions',
                value: function () {
                  this.setState({
                    highlightedSectionIndex: null,
                    highlightedSuggestionIndex: null,
                    highlightedSuggestion: null,
                    valueBeforeUpDown: null,
                    isCollapsed: !0,
                  });
                },
              },
              {
                key: 'getSuggestion',
                value: function (e, t) {
                  var n = this.props,
                    o = n.suggestions,
                    r = n.multiSection,
                    i = n.getSectionSuggestions;
                  return r ? i(o[e])[t] : o[t];
                },
              },
              {
                key: 'getHighlightedSuggestion',
                value: function () {
                  var e = this.state,
                    t = e.highlightedSectionIndex,
                    n = e.highlightedSuggestionIndex;
                  return null === n ? null : this.getSuggestion(t, n);
                },
              },
              {
                key: 'getSuggestionValueByIndex',
                value: function (e, t) {
                  return (0, this.props.getSuggestionValue)(
                    this.getSuggestion(e, t)
                  );
                },
              },
              {
                key: 'getSuggestionIndices',
                value: function (e) {
                  var t = e.getAttribute('data-section-index'),
                    n = e.getAttribute('data-suggestion-index');
                  return {
                    sectionIndex: 'string' == typeof t ? parseInt(t, 10) : null,
                    suggestionIndex: parseInt(n, 10),
                  };
                },
              },
              {
                key: 'findSuggestionElement',
                value: function (e) {
                  var t = e;
                  do {
                    if (
                      t.getAttribute &&
                      null !== t.getAttribute('data-suggestion-index')
                    )
                      return t;
                    t = t.parentNode;
                  } while (null !== t);
                  throw (
                    (console.error('Clicked element:', e),
                    new Error("Couldn't find suggestion element"))
                  );
                },
              },
              {
                key: 'maybeCallOnChange',
                value: function (e, t, n) {
                  var o = this.props.inputProps,
                    r = o.value,
                    i = o.onChange;
                  t !== r && i(e, { newValue: t, method: n });
                },
              },
              {
                key: 'willRenderSuggestions',
                value: function (e) {
                  var t = e.suggestions,
                    n = e.inputProps,
                    o = e.shouldRenderSuggestions,
                    r = n.value;
                  return t.length > 0 && o(r);
                },
              },
              {
                key: 'getQuery',
                value: function () {
                  var e = this.props.inputProps.value,
                    t = this.state.valueBeforeUpDown;
                  return (null === t ? e : t).trim();
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.suggestions,
                    o = t.renderInputComponent,
                    i = t.onSuggestionsFetchRequested,
                    u = t.renderSuggestion,
                    s = t.inputProps,
                    c = t.multiSection,
                    g = t.renderSectionTitle,
                    d = t.id,
                    h = t.getSectionSuggestions,
                    p = t.theme,
                    m = t.getSuggestionValue,
                    y = t.alwaysRenderSuggestions,
                    v = t.highlightFirstSuggestion,
                    S = this.state,
                    I = S.isFocused,
                    w = S.isCollapsed,
                    O = S.highlightedSectionIndex,
                    _ = S.highlightedSuggestionIndex,
                    x = S.valueBeforeUpDown,
                    j = y ? b : this.props.shouldRenderSuggestions,
                    C = s.value,
                    P = s.onFocus,
                    k = s.onKeyDown,
                    D = this.willRenderSuggestions(this.props),
                    R = y || (I && !w && D),
                    E = R ? n : [],
                    T = f({}, s, {
                      onFocus: function (t) {
                        if (
                          !e.justSelectedSuggestion &&
                          !e.justClickedOnSuggestionsContainer
                        ) {
                          var n = j(C);
                          e.setState({ isFocused: !0, isCollapsed: !n }),
                            P && P(t),
                            n && i({ value: C, reason: 'input-focused' });
                        }
                      },
                      onBlur: function (t) {
                        e.justClickedOnSuggestionsContainer
                          ? e.input.focus()
                          : ((e.blurEvent = t),
                            e.justSelectedSuggestion ||
                              (e.onBlur(), e.onSuggestionsClearRequested()));
                      },
                      onChange: function (t) {
                        var n = t.target.value,
                          o = j(n);
                        e.maybeCallOnChange(t, n, 'type'),
                          e.suggestionsContainer &&
                            (e.suggestionsContainer.scrollTop = 0),
                          e.setState(
                            f(
                              {},
                              v
                                ? {}
                                : {
                                    highlightedSectionIndex: null,
                                    highlightedSuggestionIndex: null,
                                    highlightedSuggestion: null,
                                  },
                              { valueBeforeUpDown: null, isCollapsed: !o }
                            )
                          ),
                          o
                            ? i({ value: n, reason: 'input-changed' })
                            : e.onSuggestionsClearRequested();
                      },
                      onKeyDown: function (t, o) {
                        var r = t.keyCode;
                        switch (r) {
                          case 40:
                          case 38:
                            if (w)
                              j(C) &&
                                (i({
                                  value: C,
                                  reason: 'suggestions-revealed',
                                }),
                                e.revealSuggestions());
                            else if (n.length > 0) {
                              var u,
                                s = o.newHighlightedSectionIndex,
                                a = o.newHighlightedItemIndex;
                              (u =
                                null === a
                                  ? null === x
                                    ? C
                                    : x
                                  : e.getSuggestionValueByIndex(s, a)),
                                e.updateHighlightedSuggestion(s, a, C),
                                e.maybeCallOnChange(
                                  t,
                                  u,
                                  40 === r ? 'down' : 'up'
                                );
                            }
                            t.preventDefault(),
                              (e.justPressedUpDown = !0),
                              setTimeout(function () {
                                e.justPressedUpDown = !1;
                              });
                            break;
                          case 9:
                            if (!e.props.selectOnTab) break;
                          case 13:
                            if (229 === t.keyCode) break;
                            var l = e.getHighlightedSuggestion();
                            if ((R && !y && e.closeSuggestions(), null != l)) {
                              var c = m(l);
                              e.maybeCallOnChange(t, c, 'enter'),
                                e.onSuggestionSelected(t, {
                                  suggestion: l,
                                  suggestionValue: c,
                                  suggestionIndex: _,
                                  sectionIndex: O,
                                  method: 'enter',
                                }),
                                (e.justSelectedSuggestion = !0),
                                setTimeout(function () {
                                  e.justSelectedSuggestion = !1;
                                });
                            }
                            break;
                          case 27:
                            R && t.preventDefault();
                            var g = R && !y;
                            null === x
                              ? g ||
                                (e.maybeCallOnChange(t, '', 'escape'),
                                j('')
                                  ? i({ value: '', reason: 'escape-pressed' })
                                  : e.onSuggestionsClearRequested())
                              : e.maybeCallOnChange(t, x, 'escape'),
                              g
                                ? (e.onSuggestionsClearRequested(),
                                  e.closeSuggestions())
                                : e.resetHighlightedSuggestion();
                        }
                        k && k(t);
                      },
                    }),
                    M = { query: this.getQuery() };
                  return r.a.createElement(a.a, {
                    multiSection: c,
                    items: E,
                    renderInputComponent: o,
                    renderItemsContainer: this.renderSuggestionsContainer,
                    renderItem: u,
                    renderItemData: M,
                    renderSectionTitle: g,
                    getSectionItems: h,
                    highlightedSectionIndex: O,
                    highlightedItemIndex: _,
                    inputProps: T,
                    itemProps: this.itemProps,
                    theme: l(p),
                    id: d,
                    ref: this.storeAutowhateverRef,
                  });
                },
              },
            ]) && d(n.prototype, o),
            i && d(n, i),
            c
          );
        })(o.Component);
      S(I, 'defaultProps', {
        renderSuggestionsContainer: function (e) {
          var t = e.containerProps,
            n = e.children;
          return r.a.createElement('div', t, n);
        },
        shouldRenderSuggestions: function (e) {
          return e.trim().length > 0;
        },
        alwaysRenderSuggestions: !1,
        multiSection: !1,
        focusInputOnSuggestionClick: !0,
        highlightFirstSuggestion: !1,
        theme: {
          container: 'react-autosuggest__container',
          containerOpen: 'react-autosuggest__container--open',
          input: 'react-autosuggest__input',
          inputOpen: 'react-autosuggest__input--open',
          inputFocused: 'react-autosuggest__input--focused',
          suggestionsContainer: 'react-autosuggest__suggestions-container',
          suggestionsContainerOpen:
            'react-autosuggest__suggestions-container--open',
          suggestionsList: 'react-autosuggest__suggestions-list',
          suggestion: 'react-autosuggest__suggestion',
          suggestionFirst: 'react-autosuggest__suggestion--first',
          suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
          sectionContainer: 'react-autosuggest__section-container',
          sectionContainerFirst: 'react-autosuggest__section-container--first',
          sectionTitle: 'react-autosuggest__section-title',
        },
        id: '1',
        selectOnTab: !1,
      }),
        (I.propTypes = {});
    },
  ]);
});