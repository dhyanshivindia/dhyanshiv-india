"use strict";
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Catalogue = function (_NetworkPropertySet) {
  function Catalogue() {
    var _this;
    _classCallCheck(this, Catalogue);
    _this = _callSuper(this, Catalogue);
    _this.allProducts = null;
    _this.config = null;
    _this.domainPremiumType = null;
    _this.products = null;
    _this.discontinuedProducts = [];
    _this.renewableProducts = null;
    _this.currency = null;
    _this.currencyRate = null;
    _this.currencySymbol = null;
    _this.isOpen = null;
    _this.packageTypes = null;
    _this.prefs = null;
    _this.shopIntro = null;
    return _this;
  }
  _inherits(Catalogue, _NetworkPropertySet);
  return _createClass(Catalogue, [{
    key: "networkPropertyHandlers",
    get: function get() {
      var _this2 = this;
      return {
        allProducts: function () {
          var _allProducts = _asyncToGenerator(_regenerator().m(function _callee() {
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return $.ajax("/a/catalogue/product");
                case 1:
                  return _context.a(2, _context.v);
              }
            }, _callee);
          }));
          function allProducts() {
            return _allProducts.apply(this, arguments);
          }
          return allProducts;
        }(),
        config: function () {
          var _config = _asyncToGenerator(_regenerator().m(function _callee2() {
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  _context2.n = 1;
                  return AnyStore.inst.preloadSingle("catalogueConfig");
                case 1:
                  if (!AnyStore.inst.catalogueConfig.currency) {
                    AnyStore.inst.catalogueConfig.currency = "GBP";
                  }
                  return _context2.a(2, AnyStore.inst.catalogueConfig);
              }
            }, _callee2);
          }));
          function config() {
            return _config.apply(this, arguments);
          }
          return config;
        }(),
        currency: function () {
          var _currency = _asyncToGenerator(_regenerator().m(function _callee3() {
            return _regenerator().w(function (_context3) {
              while (1) switch (_context3.n) {
                case 0:
                  _context3.n = 1;
                  return _this2.preloadSingle("config");
                case 1:
                  return _context3.a(2, _context3.v.currency);
              }
            }, _callee3);
          }));
          function currency() {
            return _currency.apply(this, arguments);
          }
          return currency;
        }(),
        currencyRate: function () {
          var _currencyRate = _asyncToGenerator(_regenerator().m(function _callee4() {
            var rates, currency, basket;
            return _regenerator().w(function (_context4) {
              while (1) switch (_context4.n) {
                case 0:
                  _context4.n = 1;
                  return _this2.preloadSingle("exchangeRates");
                case 1:
                  rates = _context4.v;
                  _context4.n = 2;
                  return _this2.preloadSingle("currency");
                case 2:
                  currency = _context4.v;
                  basket = AnyBasket.inst;
                  if (!(_this2.currency != basket.currency)) {
                    _context4.n = 3;
                    break;
                  }
                  return _context4.a(2, 1 / rates[basket.currency]);
                case 3:
                  return _context4.a(2, 1);
                case 4:
                  return _context4.a(2);
              }
            }, _callee4);
          }));
          function currencyRate() {
            return _currencyRate.apply(this, arguments);
          }
          return currencyRate;
        }(),
        currencySymbol: function () {
          var _currencySymbol = _asyncToGenerator(_regenerator().m(function _callee5() {
            var _Catalogue$currencies;
            var _t, _t2, _t3, _t4;
            return _regenerator().w(function (_context5) {
              while (1) switch (_context5.n) {
                case 0:
                  _context5.n = 1;
                  return _this2.preloadSingle("currency");
                case 1:
                  _t2 = _context5.v;
                  _t3 = _Catalogue$currencies = Catalogue.currencies[_t2];
                  _t = _t3 === null;
                  if (_t) {
                    _context5.n = 2;
                    break;
                  }
                  _t = _Catalogue$currencies === void 0;
                case 2:
                  if (!_t) {
                    _context5.n = 3;
                    break;
                  }
                  _t4 = void 0;
                  _context5.n = 4;
                  break;
                case 3:
                  _t4 = _Catalogue$currencies.symbol;
                case 4:
                  return _context5.a(2, _t4);
              }
            }, _callee5);
          }));
          function currencySymbol() {
            return _currencySymbol.apply(this, arguments);
          }
          return currencySymbol;
        }(),
        domainPremiumType: function domainPremiumType() {
          return $.ajax("/a/domainPremiumType");
        },
        exchangeRates: function exchangeRates() {
          return $.ajax("/a/catalogue/exchangeRates");
        },
        isOpen: function () {
          var _isOpen = _asyncToGenerator(_regenerator().m(function _callee6() {
            return _regenerator().w(function (_context6) {
              while (1) switch (_context6.n) {
                case 0:
                  _context6.n = 1;
                  return _this2.preloadSingle("config");
                case 1:
                  return _context6.a(2, _context6.v.isOpen);
              }
            }, _callee6);
          }));
          function isOpen() {
            return _isOpen.apply(this, arguments);
          }
          return isOpen;
        }(),
        packageTypes: function packageTypes() {
          return $.ajax("/a/reseller/*/packageTypes");
        },
        prefs: function prefs() {
          return _this2.preloadSingle("config").then(function (c) {
            return c.prefs || {};
          });
        },
        products: function () {
          var _products = _asyncToGenerator(_regenerator().m(function _callee7() {
            var result, out, _iterator, _step, p, _t5, _t6, _t7;
            return _regenerator().w(function (_context7) {
              while (1) switch (_context7.p = _context7.n) {
                case 0:
                  _context7.n = 1;
                  return _this2.preloadSingle("allProducts");
                case 1:
                  result = _this2.allProducts.filter(function (i) {
                    return true;
                  });
                  result.sort(function (a, b) {
                    return (a.shopDisplayOrder || 0) - (b.shopDisplayOrder || 0);
                  });
                  out = [];
                  _iterator = _createForOfIteratorHelper(result);
                  _context7.p = 2;
                  _iterator.s();
                case 3:
                  if ((_step = _iterator.n()).done) {
                    _context7.n = 8;
                    break;
                  }
                  p = _step.value;
                  if (p.discontinued) {
                    _context7.n = 5;
                    break;
                  }
                  _t5 = out;
                  _context7.n = 4;
                  return SBProduct.create(p);
                case 4:
                  _t5.push.call(_t5, _context7.v);
                  _context7.n = 7;
                  break;
                case 5:
                  _t6 = _this2.discontinuedProducts;
                  _context7.n = 6;
                  return SBProduct.create(p);
                case 6:
                  _t6.push.call(_t6, _context7.v);
                case 7:
                  _context7.n = 3;
                  break;
                case 8:
                  _context7.n = 10;
                  break;
                case 9:
                  _context7.p = 9;
                  _t7 = _context7.v;
                  _iterator.e(_t7);
                case 10:
                  _context7.p = 10;
                  _iterator.f();
                  return _context7.f(10);
                case 11:
                  return _context7.a(2, out);
              }
            }, _callee7, null, [[2, 9, 10, 11]]);
          }));
          function products() {
            return _products.apply(this, arguments);
          }
          return products;
        }(),
        renewableProducts: function () {
          var _renewableProducts = _asyncToGenerator(_regenerator().m(function _callee8() {
            var out, _iterator2, _step2, p, _t8, _t9;
            return _regenerator().w(function (_context8) {
              while (1) switch (_context8.p = _context8.n) {
                case 0:
                  _context8.n = 1;
                  return _this2.preloadSingle("allProducts");
                case 1:
                  out = [];
                  _iterator2 = _createForOfIteratorHelper(_this2.allProducts);
                  _context8.p = 2;
                  _iterator2.s();
                case 3:
                  if ((_step2 = _iterator2.n()).done) {
                    _context8.n = 6;
                    break;
                  }
                  p = _step2.value;
                  _t8 = out;
                  _context8.n = 4;
                  return SBProduct.create(p);
                case 4:
                  _t8.push.call(_t8, _context8.v);
                case 5:
                  _context8.n = 3;
                  break;
                case 6:
                  _context8.n = 8;
                  break;
                case 7:
                  _context8.p = 7;
                  _t9 = _context8.v;
                  _iterator2.e(_t9);
                case 8:
                  _context8.p = 8;
                  _iterator2.f();
                  return _context8.f(8);
                case 9:
                  return _context8.a(2, out);
              }
            }, _callee8, null, [[2, 7, 8, 9]]);
          }));
          function renewableProducts() {
            return _renewableProducts.apply(this, arguments);
          }
          return renewableProducts;
        }(),
        shopIntro: function () {
          var _shopIntro = _asyncToGenerator(_regenerator().m(function _callee9() {
            var _t0;
            return _regenerator().w(function (_context9) {
              while (1) switch (_context9.n) {
                case 0:
                  _context9.n = 1;
                  return $.ajax("/a/catalogue/config/shopIntro");
                case 1:
                  _t0 = _context9.v;
                  if (_t0) {
                    _context9.n = 2;
                    break;
                  }
                  _t0 = Catalogue.defaultShopIntro;
                case 2:
                  return _context9.a(2, _t0);
              }
            }, _callee9);
          }));
          function shopIntro() {
            return _shopIntro.apply(this, arguments);
          }
          return shopIntro;
        }(),
        supplierIsVATRegistered: function () {
          var _supplierIsVATRegistered = _asyncToGenerator(_regenerator().m(function _callee0() {
            return _regenerator().w(function (_context0) {
              while (1) switch (_context0.n) {
                case 0:
                  _context0.n = 1;
                  return _this2.preloadSingle("config");
                case 1:
                  return _context0.a(2, _context0.v.supplierIsVATRegistered);
              }
            }, _callee0);
          }));
          function supplierIsVATRegistered() {
            return _supplierIsVATRegistered.apply(this, arguments);
          }
          return supplierIsVATRegistered;
        }()
      };
    }
  }, {
    key: "reducedPackageTypes",
    get: function get() {
      return this.packageTypes && this.packageTypes.filter(function (p) {
        return p.platform != 'virtual';
      }).map(function (pt) {
        return {
          text: pt.platform,
          id: pt.id
        };
      });
    }
  }, {
    key: "domainMayBePremium",
    value: (function () {
      var _domainMayBePremium = _asyncToGenerator(_regenerator().m(function _callee1(domain_name) {
        var dpt, _i, _Object$entries, _Object$entries$_i, tld, rpt;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _context1.n = 1;
              return this.preloadSingle("domainPremiumType");
            case 1:
              dpt = _context1.v;
              _i = 0, _Object$entries = Object.entries(dpt);
            case 2:
              if (!(_i < _Object$entries.length)) {
                _context1.n = 4;
                break;
              }
              _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), tld = _Object$entries$_i[0], rpt = _Object$entries$_i[1];
              if (!(domain_name.substring(domain_name.length - tld.length) == tld.toLowerCase() && ["2", "3"].includes(rpt))) {
                _context1.n = 3;
                break;
              }
              return _context1.a(2, true);
            case 3:
              _i++;
              _context1.n = 2;
              break;
            case 4:
              return _context1.a(2, false);
          }
        }, _callee1, this);
      }));
      function domainMayBePremium(_x) {
        return _domainMayBePremium.apply(this, arguments);
      }
      return domainMayBePremium;
    }())
  }, {
    key: "humaniseFrequency",
    value: function humaniseFrequency(frequency) {
      switch (+frequency) {
        case 0:
          return;
        case 1:
          return 'Monthly';
        case 12:
          return 'Annually';
        case 3:
          return 'Quarterly';
        case 6:
          return 'Semiannually';
        case 24:
          return 'Biennially';
        case 36:
          return 'Triennially';
        case 48:
          return 'Every 4 Years';
        case 60:
          return 'Every 5 Years';
        case 72:
          return 'Every 6 Years';
        case 84:
          return 'Every 7 Years';
        case 96:
          return 'Every 8 Years';
        case 108:
          return 'Every 9 Years';
        case 120:
          return 'Every 10 Years';
        default:
          throw new Error("Unknown frequency");
      }
    }
  }, {
    key: "price",
    value: function price(n) {
      var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (n === null) return "UNKNOWN";
      var symbol = currency ? Catalogue.currencies[currency].symbol : this.currencySymbol;
      return symbol + (+n).toFixed(2);
    }
  }, {
    key: "reloadConfig",
    value: function reloadConfig() {
      this.reload(["config", "currency", "currencyRate", "currencySymbol", "isOpen", "supplierIsVATRegistered"]);
    }
  }, {
    key: "roundCurrency",
    value: function roundCurrency(price) {
      return Math.round(price * 100) / 100;
    }
  }], [{
    key: "abstractPaymentTypes",
    get: function get() {
      return [{
        id: "any",
        text: "All Payment Types"
      }].concat(this.paymentTypes.map(function (o) {
        return Object.assign({}, o, {
          text: o.text
        });
      }));
    }
  }, {
    key: "currencies",
    get: function get() {
      return {
        AED: {
          rate: 4.60,
          symbol: "\u062F.\u0625"
        },
        AOA: {
          rate: 1239.92,
          symbol: "Kz"
        },
        AUD: {
          rate: 1.96,
          symbol: "$"
        },
        BIF: {
          rate: 3946.54,
          symbol: "FBu"
        },
        BDT: {
          rate: 109.00,
          symbol: "\u09F3"
        },
        BRL: {
          rate: 5.06,
          symbol: "R$"
        },
        CAD: {
          rate: 1.64,
          symbol: "$"
        },
        CLP: {
          rate: 1233.11,
          symbol: "$"
        },
        CHF: {
          rate: 1.25,
          symbol: "CHF"
        },
        CZK: {
          rate: 29.08,
          symbol: "K\u010D."
        },
        DKK: {
          rate: 8.43,
          symbol: "Kr."
        },
        DZD: {
          rate: 149.66,
          symbol: "\u062C.\u062F"
        },
        EGP: {
          rate: 62.72,
          symbol: "\xA3"
        },
        EUR: {
          rate: 1.12,
          symbol: "\u20AC"
        },
        GBP: {
          rate: 1,
          symbol: "\xA3"
        },
        GHS: {
          rate: 6.78,
          symbol: "GH\u20B5"
        },
        IDR: {
          rate: 19190.57,
          symbol: "Rp"
        },
        INR: {
          rate: 86.1,
          symbol: "\u20B9"
        },
        KES: {
          rate: 128.88,
          symbol: "KSh"
        },
        LKR: {
          rate: 400.14,
          symbol: "\u20A8"
        },
        MAD: {
          rate: 12.53,
          symbol: "MAD"
        },
        MYR: {
          rate: 5.18,
          symbol: "RM"
        },
        MUR: {
          rate: 49.08,
          symbol: "\u20A8"
        },
        MVR: {
          rate: 19.4,
          symbol: "MVR"
        },
        MXN: {
          rate: 29.63,
          symbol: "$"
        },
        NGN: {
          rate: 465.60,
          symbol: "\u20A6"
        },
        NOK: {
          rate: 11.73,
          symbol: "NKr"
        },
        NPR: {
          rate: 138,
          symbol: "\u20A8"
        },
        NZD: {
          rate: 1.89,
          symbol: "$"
        },
        OMR: {
          rate: 0.49,
          symbol: "\uFDFC"
        },
        PHP: {
          rate: 72.89,
          symbol: "\u20B1"
        },
        PKR: {
          rate: 201.33,
          symbol: "\u20A8"
        },
        PLN: {
          rate: 5.46,
          symbol: "zł"
        },
        RON: {
          rate: 5.27,
          symbol: "lei"
        },
        SAR: {
          rate: 4.70,
          symbol: "\uFDFC"
        },
        SEK: {
          rate: 11.56,
          symbol: "kr"
        },
        SGD: {
          rate: 1.83,
          symbol: "$"
        },
        THB: {
          rate: 42.75,
          symbol: "\u0E3F"
        },
        USD: {
          rate: 1.25,
          symbol: "$"
        },
        XAF: {
          rate: 740.55,
          symbol: "CFA"
        },
        XOF: {
          rate: 740.26,
          symbol: "CFA"
        },
        ZAR: {
          rate: 17.8,
          symbol: "R"
        }
      };
    }
  }, {
    key: "defaultProductDescription",
    value: function defaultProductDescription(type) {
      var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-GB";
      var content = "";
      switch (type) {
        case 'group-package':
          content = "<ul class=\"list-unstyled tombstone__features fa-ul style=\"--fa-li-margin: 1.75rem;\">\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>".concat(translation.getOnDemand('group_package_description_powerful', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_user_friedly_and_apps', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_state_of_the_art', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_windows_linux', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_frindly_support', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_value_for_money', lang), "</span></li>\n                  </ul>");
          break;
        case 'group-stack_user_package_allowance':
          content = "<ul class=\"list-unstyled tombstone__features fa-ul\" style=\"--fa-li-margin: 1.75rem;\">\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>".concat(translation.getOnDemand('group_package_description_powerful', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_user_friedly_and_apps', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_state_of_the_art', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_windows_linux', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_frindly_support', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_value_for_money', lang), "</span></li>\n                  </ul>");
          break;
        case 'group-domain':
          content = "<ul class=\"list-unstyled tombstone__features fa-ul\" style=\"--fa-li-margin: 1.75rem;\">\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>".concat(translation.getOnDemand('group_domain_description_find', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_domain_description_100_top_level', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_domain_description_buy_tansfer', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_domain_description_privacy', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_domain_description_great_value', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_domain_description_simple_cp', lang), "</span></li>\n                  </ul>");
          break;
        case 'group-cloud-server':
          content = "<ul class=\"list-unstyled tombstone__features fa-ul pb-4\" style=\"--fa-li-margin: 1.75rem;\">\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>".concat(translation.getOnDemand('group_cloud_server_description_l1', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_cloud_server_description_l2', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_cloud_server_description_l3', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_cloud_server_description_l4', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_cloud_server_description_l5', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_cloud_server_description_l6', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_cloud_server_description_l7', lang), "</span></li>\n                  </ul>");
          break;
        case 'group-vps':
          content = "<ul class=\"list-unstyled tombstone__features fa-ul\" style=\"--fa-li-margin: 1.75rem;\">\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>".concat(translation.getOnDemand('group_vps_description_ram', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_vps_description_cpu', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_vps_description_storage', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_vps_description_bandwith', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_vps_description_ddos', lang), "</span></li>\n                  </ul>");
          break;
        case 'group-wordpress':
          content = "<ul class=\"list-unstyled tombstone__features fa-ul\" style=\"--fa-li-margin: 1.75rem;\">\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>".concat(translation.getOnDemand('group_package_description_powerful', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_state_of_the_art', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_wordpress', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_frindly_support', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_package_description_value_for_money', lang), "</span></li>\n                  </ul>");
          break;
        case 'group-tls_certificate':
          content = "<ul class=\"list-unstyled tombstone__features fa-ul\" style=\"--fa-li-margin: 1.75rem;\">\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>".concat(translation.getOnDemand('group_tls_description_secure', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_tls_description_improve_performance', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_tls_description_padlock', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_tls_description_free_ssl', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_tls_description_simple_ssl', lang), "</span></li>\n                      <li class=\"mb-1\"><span class=\"fa-li\"><i class=\"fas fa-check me-3 text-primary\"></i></span><span>").concat(translation.getOnDemand('group_tls_description_extended_ssl', lang), "</span></li>\n                  </ul>");
          break;
        default:
          console.log("Unknown type of ".concat(type));
          break;
      }
      return {
        content: content
      };
    }
  }, {
    key: "defaultShopIntro",
    get: function get() {
      return {
        title: translation.get('gloabal_default_shop_intro'),
        welcome: translation.sprintf(translation.get('gloabal_default_shop_welcome'), ['{{ brand }}', '{{ full_name }}'])
      };
    }
  }, {
    key: "inst",
    get: function get() {
      if (!this._inst) {
        this._inst = new Catalogue();
      }
      return this._inst;
    }
  }, {
    key: "intervalLabels",
    get: function get() {
      return {
        36: translation.get("global_triennially"),
        24: translation.get("global_biennially"),
        12: translation.get("global_annually"),
        6: translation.get("global_semiannually"),
        3: translation.get("global_quarterly"),
        1: translation.get("global_monthly"),
        0: translation.get("global_one_off")
      };
    }
  }, {
    key: "intervals",
    get: function get() {
      return Object.entries(this.intervalLabels).map(function (i_l) {
        return {
          id: i_l[0],
          text: i_l[1].replace(/^(.)/, function (a, $1) {
            return $1.toUpperCase();
          })
        };
      });
    }
  }, {
    key: "paymentTypes",
    get: function get() {
      return [{
        id: "card",
        text: translation.get("global_credit_debit_card")
      }, {
        id: "paypal",
        text: "PayPal"
      }, {
        id: "balance",
        text: "Balance"
      }, {
        id: "paystack",
        text: "Paystack"
      }, {
        id: "paddle",
        text: "Paddle"
      }, {
        id: "transfer",
        text: translation.get("global_mail_in_payment_bank_transfer")
      }, {
        id: "debit",
        text: translation.get("global_direct_debit")
      }, {
        id: "razorpay",
        text: "Razorpay"
      }];
    }
  }, {
    key: "intervalMonthsLabel",
    value: function intervalMonthsLabel(m) {
      var capitalise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (m === null) return translation.get("global_unknown");
      var label = this.intervalLabels[m];
      var s;
      if (label) {
        s = label;
      } else if (m % 12) {
        s = m == 1 ? translation.get("global_every_month") : translation.sprintf(translation.get("global_every_number_months"), [String(m)]);
      } else {
        s = m == 12 ? translation.get("global_every_year") : translation.sprintf(translation.get("global_every_number_years"), [String(m / 12)]);
      }
      return capitalise ? s.replace(/^(.)/, function (a, $1) {
        return $1.toUpperCase();
      }) : s;
    }
  }, {
    key: "paymentTypeLabel",
    value: function paymentTypeLabel(general_payment_type) {
      var pto = this.abstractPaymentTypes.find(function (i) {
        return i.id == general_payment_type;
      });
      return pto ? pto.text : general_payment_type;
    }
  }, {
    key: "realPaymentTypeLabel",
    value: function realPaymentTypeLabel(real_payment_type) {
      var pto = this.paymentTypes.find(function (i) {
        return i.id == real_payment_type;
      });
      return pto ? pto.text : real_payment_type;
    }
  }]);
}(NetworkPropertySet);
//# sourceMappingURL=catalogue.js.map
