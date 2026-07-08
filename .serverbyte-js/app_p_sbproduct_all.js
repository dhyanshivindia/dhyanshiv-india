"use strict";

function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SBProductPricing = function () {
  function SBProductPricing() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      action: null,
      currency: null,
      isManaged: false,
      periodMonths: null,
      paymentType: "any",
      price: null
    };
    var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var get_implied_price = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, SBProductPricing);
    this.action = p.action;
    this.currency = p.currency;
    this.getImpliedPrice = get_implied_price;
    this.periodMonths = p.periodMonths;
    this.isManaged = p.isManaged;
    this.managedMarkup = +p.managedMarkup;
    this.managedMarkupType = p.managedMarkupType;
    this.managedMarkedUpPrice = p.managedMarkedUpPrice;
    this.isNew = isNew;
    this.paymentType = p.paymentType;
    this.price = p.price;
  }
  return _createClass(SBProductPricing, [{
    key: "periodMonths",
    get: function get() {
      return this._periodMonths;
    },
    set: function set(v) {
      if (this.price && v && this._periodMonths) {
        this.price = Math.round(this.price * v * 100 / this._periodMonths) / 100;
      }
      this._periodMonths = v;
    }
  }, {
    key: "price",
    get: function get() {
      if (this._price !== null) {
        return this._price;
      }
      if (this.getImpliedPrice) {
        var price = this.getImpliedPrice();
        if (price !== null) {
          this._price = price;
          this.getImpliedPrice = null;
        }
        return this._price;
      }
      return null;
    },
    set: function set(v) {
      this._price = v === null ? v : +v;
    }
  }, {
    key: "matchesPaymentType",
    value: function matchesPaymentType(t) {
      if (t == this.paymentType) {
        return true;
      }
      var real_types = SBasketService.realTypes.get(this.paymentType);
      return !!real_types && real_types.includes(t);
    }
  }, {
    key: "priceForMonths",
    value: function priceForMonths(m) {
      if (!this.price) return this.price;
      if (m <= this.periodMonths) {
        return this.price;
      } else if (!this.periodMonths) {
        return null;
      } else {
        return Math.round(this.price * 100 * Math.ceil(m / this.periodMonths)) / 100;
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        action: this.action,
        currency: this.currency,
        isManaged: this.isManaged,
        managedMarkup: this.managedMarkup,
        managedMarkupType: this.managedMarkupType,
        managedMarkedUpPrice: this.managedMarkedUpPrice,
        periodMonths: this.periodMonths,
        paymentType: this.paymentType,
        price: this.price
      };
    }
  }]);
}();
var SBProduct = function () {
  function SBProduct() {
    _classCallCheck(this, SBProduct);
  }
  return _createClass(SBProduct, null, [{
    key: "classes",
    get: function get() {
      if (!this._classes) {
        this._classes = {};
      }
      return this._classes;
    }
  }, {
    key: "create",
    value: function create(p) {
      var prefix = p.code.replace(/:.*/, "");
      if (!prefix.match(/^[a-z0-9_-]*$/)) {
        throw new Error("Invalid type ".concat(prefix));
      }
      if (this.classes[prefix]) {
        return new this.classes[prefix](p);
      } else {
        return new SBGeneralProduct(p);
      }
    }
  }, {
    key: "register",
    value: function register(classes) {
      var _this = this;
      classes.forEach(function (c) {
        return _this.classes[c.prefix] = c;
      });
    }
  }, {
    key: "upgradePricing",
    value: function upgradePricing(from, to, real_payment_type, expiry_date) {
      var general_payment_type;
      if (real_payment_type) {
        general_payment_type = SBasketService.generalTypesFor(real_payment_type).find(function (t) {
          return from.pricing.some(function (p) {
            return p.paymentType == t;
          }) && to.pricing.some(function (p) {
            return p.paymentType == t;
          });
        });
      } else {
        general_payment_type = from.pricing.map(function (p) {
          return p.paymentType;
        }).find(function (pt) {
          return to.pricing.some(function (p) {
            return p.paymentType == pt;
          });
        });
      }
      var to_price = to.expectedPriceExcludingVATForDate(general_payment_type, expiry_date);
      var from_price = from.expectedPriceExcludingVATForDate(general_payment_type, expiry_date);
      var sum = to_price - from_price;
      return {
        generalPaymentType: general_payment_type,
        price: sum > 0 ? Math.round(sum * 2) / 2 : 0
      };
    }
  }]);
}();
var SBGeneralProduct = function (_NetworkPropertySet) {
  function SBGeneralProduct() {
    var _p$shopDisplayOrder;
    var _this2;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBGeneralProduct);
    _this2 = _callSuper(this, SBGeneralProduct);
    if (!p) {
      p = _this2.defaultContent;
      _this2.isNew = true;
    } else {
      _this2.isNew = false;
    }
    _this2.location = null;
    _this2.code = p.code;
    _this2.expanded = false;
    _this2._image = null;
    _this2.hasImage = p.hasImage;
    _this2.hasChangedImage = false;
    var parts = _this2.code.split(":");
    if (parts[0] == 'stack_user_package_allowance') {
      _this2.allowance = parts[1].split("-")[1];
      _this2.location = parts[1].split("-")[2] || "uk";
    } else {
      _this2.allowance = null;
    }
    _this2.discontinued = p.discontinued;
    _this2.hidden = p.hidden;
    _this2.emailTemplate = p.emailTemplate;
    _this2.affiliateCommission = p.affiliateCommission;
    _this2.forUser = p.forUser || null;
    _this2._label = p.label;
    _this2.originalLabel = p.label;
    _this2._pricing = null;
    _this2.pricing = p.pricing.map(function (p) {
      return p instanceof SBProductPricing ? p : new SBProductPricing(p, false);
    });
    _this2.updating = false;
    _this2.taxExempt = !!p.taxExempt;
    _this2.shopDisplayOrder = (_p$shopDisplayOrder = p.shopDisplayOrder) !== null && _p$shopDisplayOrder !== void 0 ? _p$shopDisplayOrder : null;
    return _this2;
  }
  _inherits(SBGeneralProduct, _NetworkPropertySet);
  return _createClass(SBGeneralProduct, [{
    key: "defaultContent",
    get: function get() {
      return {
        code: this.codePrefix + ":",
        discontinued: false,
        hidden: false,
        label: null,
        pricing: this.defaultPricing,
        emailTemplate: null,
        image: null
      };
    }
  }, {
    key: "defaultPricing",
    get: function get() {
      throw new Error("Not implemented");
    }
  }, {
    key: "codeComponents",
    get: function get() {
      return this.code.split(/:/).slice(1);
    },
    set: function set(v) {
      this.code = [this.codePrefix].concat(v).join(":");
    }
  }, {
    key: "codePrefix",
    get: function get() {
      throw new Error("Not implemented");
    }
  }, {
    key: "forSale",
    get: function get() {
      return !this.discontinued;
    },
    set: function set(v) {
      this.discontinued = !v;
    }
  }, {
    key: "image",
    get: function get() {
      return this._image;
    },
    set: function set(v) {
      if (this.image != v) {
        this.hasChangedImage = true;
        this.hasImage = true;
        this.reload(["imageDataUrl"]);
      }
      this._image = v;
    }
  }, {
    key: "isHidden",
    get: function get() {
      return this.hidden;
    },
    set: function set(v) {
      this.hidden = v;
    }
  }, {
    key: "label",
    get: function get() {
      return this._label;
    },
    set: function set(v) {
      this._label = v;
    }
  }, {
    key: "pricing",
    get: function get() {
      return this._pricing;
    },
    set: function set(v) {
      this._pricing = v;
    }
  }, {
    key: "productEmailTemplate",
    get: function get() {
      return this.emailTemplate;
    },
    set: function set(v) {
      this.emailTemplate = v;
    }
  }, {
    key: "lowestPrice",
    get: function get() {
      var _this3 = this;
      var prices = null;
      if (this.pricing.find(function (p) {
        return p.action === null && p.currency == AnyBasket.inst.currency;
      })) {
        prices = this.pricing.filter(function (p) {
          return p.action === null && p.currency === AnyBasket.inst.currency;
        });
      } else {
        prices = this.pricing.filter(function (p) {
          return p.action === null && p.currency === null;
        });
      }
      return prices.reduce(function (carry, p) {
        if (!carry) {
          return p;
        } else if (_this3.codePrefix === "domain") {
          if (p.managedMarkedUpPrice !== null && p.managedMarkedUpPrice < carry.managedMarkedUpPrice) return p;
        } else if (p.price !== null && p.price < carry.price) {
          return p;
        } else if (_this3.code.match(/cloud_server:/)) {
          if (typeof CloudProductHelper === 'function') {
            var h = CloudProductHelper.inst;
            var lp = h.lowestPriceSB();
            return lp ? lp : carry;
          } else {
            throw new Error("For lowest price of cloud server products please load the CloudProductHelper class via CloudProductHelper.inst in mounted");
          }
        } else {
          return carry;
        }
      }, null);
    }
  }, {
    key: "networkPropertyHandlers",
    get: function get() {
      var _this4 = this;
      return {
        imageDataUrl: function imageDataUrl() {
          return $.ajax("/a/catalogue/productImage/".concat(_this4.code));
        }
      };
    }
  }, {
    key: "type",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "basketItem",
    value: (function () {
      var _basketItem = _asyncToGenerator(function () {
        var _this5 = this;
        var pricing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var quoted_price = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return _regeneratorRuntime().mark(function _callee() {
          var vat_rate, pricingPrice;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!pricing) {
                  pricing = _this5.pricing[0];
                }
                if (!(pricing && pricing.price !== null && _this5.pricing.some(function (p) {
                  return p == pricing;
                }))) {
                  _context.next = 25;
                  break;
                }
                if (!_this5.taxExempt) {
                  _context.next = 6;
                  break;
                }
                vat_rate = 0;
                _context.next = 9;
                break;
              case 6:
                _context.next = 8;
                return UserCatalogue.inst.preloadSingle("userVATRate");
              case 8:
                vat_rate = _context.sent;
              case 9:
                pricingPrice = pricing.managedMarkedUpPrice ? pricing.managedMarkedUpPrice : pricing.price;
                _context.t0 = SBasketItem;
                _context.t1 = pricing.action;
                _context.next = 14;
                return UserCatalogue.inst.preloadSingle("currency");
              case 14:
                _context.t2 = _context.sent;
                _context.t3 = {};
                _context.t4 = pricing.paymentType;
                _context.t5 = multiple * pricing.periodMonths;
                _context.t6 = _this5.code;
                _context.t7 = Math.round((quoted_price || multiple * pricingPrice) * (100 + +vat_rate)) / 100;
                _context.t8 = Math.round((quoted_price || multiple * pricingPrice) * +vat_rate) / 100;
                _context.t9 = {
                  action: _context.t1,
                  contact: null,
                  currency: _context.t2,
                  dependentItems: _context.t3,
                  name: null,
                  paymentRef: null,
                  paymentSelections: null,
                  paymentType: _context.t4,
                  periodMonths: _context.t5,
                  productCode: _context.t6,
                  productOptionSelections: null,
                  quotedPriceFull: _context.t7,
                  quotedVAT: _context.t8,
                  service: null,
                  serviceConfiguration: null,
                  upgradeFromProductCode: null
                };
                return _context.abrupt("return", new _context.t0(_context.t9));
              case 25:
                throw new Error("Matching pricing not found");
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })();
      });
      function basketItem() {
        return _basketItem.apply(this, arguments);
      }
      return basketItem;
    }())
  }, {
    key: "expectedPriceExcludingVATForDate",
    value: function expectedPriceExcludingVATForDate(general_payment_type, expiry_date) {
      var fuzz_date = new Date(expiry_date);
      fuzz_date.setDate(fuzz_date.getDate() - 7);
      var possible_prices = this.pricing.filter(function (p) {
        return !p.action && p.paymentType == general_payment_type;
      }).sort(function (a, b) {
        return a.periodMonths - b.periodMonths;
      });
      var price = null;
      var _iterator = _createForOfIteratorHelper(possible_prices),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var target_date = new Date();
          target_date.setMonth(target_date.getMonth() + p.periodMonths);
          if (target_date >= fuzz_date) {
            price = p;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!price) {
        price = possible_prices.pop();
      }
      var base_period_end = new Date();
      base_period_end.setMonth(base_period_end.getMonth() + price.periodMonths);
      var base_period = base_period_end.valueOf() - new Date().valueOf();
      var target_period = Math.ceil((expiry_date.valueOf() - new Date().valueOf()) / 86400000) * 86400000;
      return Math.round(price.price * target_period * 100 / base_period) / 100;
    }
  }, {
    key: "initialPriceFor",
    value: function initialPriceFor(payment_type, months) {
      var price_info = this.pricingFor(payment_type, months);
      return price_info && price_info.price;
    }
  }, {
    key: "initialPriceForGeneral",
    value: function initialPriceForGeneral(general_payment_type, months) {
      var price_info = this.pricingForGeneral(general_payment_type, months);
      return price_info && price_info.price;
    }
  }, {
    key: "needsPrice",
    value: function needsPrice(price_info) {
      return price_info.paymentType == "any" && this.pricing.some(function (pr) {
        return pr.paymentType != "any" && pr.periodMonths == price_info.periodMonths;
      });
    }
  }, {
    key: "pricingFor",
    value: function pricingFor(payment_type, months) {
      return this.pricing.find(function (p) {
        return p.periodMonths == months && p.matchesPaymentType(payment_type) && p.action === null;
      }) || null;
    }
  }, {
    key: "pricingForGeneral",
    value: function pricingForGeneral(general_payment_type, months) {
      return this.pricing.find(function (p) {
        return p.periodMonths == months && p.paymentType == general_payment_type && p.action === null;
      }) || null;
    }
  }, {
    key: "pricingSupportsMonths",
    value: function pricingSupportsMonths(months) {
      return this.pricing.some(function (p) {
        return p.periodMonths == months && p.action === null;
      });
    }
  }, {
    key: "pricingSupportsRealType",
    value: function pricingSupportsRealType(payment_type) {
      return this.pricing.some(function (p) {
        return p.matchesPaymentType(payment_type) && p.action === null;
      });
    }
  }, {
    key: "upgradeBasketItem",
    value: (function () {
      var _upgradeBasketItem = _asyncToGenerator(function (from_product, for_service) {
        var _this6 = this;
        var real_payment_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return _regeneratorRuntime().mark(function _callee2() {
          var vat_rate, upgrade_pricing;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return UserCatalogue.inst.preloadSingle("userVATRate");
              case 2:
                vat_rate = _context2.sent;
                upgrade_pricing = SBProduct.upgradePricing(from_product, _this6, real_payment_type, new Date(for_service.expiry));
                return _context2.abrupt("return", new SBasketItem({
                  action: null,
                  contact: null,
                  currency: UserCatalogue.inst.currency,
                  dependentItems: {},
                  name: null,
                  paymentRef: null,
                  paymentSelections: null,
                  paymentType: upgrade_pricing.generalPaymentType,
                  periodMonths: 0,
                  productCode: _this6.code,
                  productOptionSelections: null,
                  quotedPriceFull: Math.round(upgrade_pricing.price * (100 + +vat_rate)) / 100,
                  quotedVAT: Math.round(upgrade_pricing.price * +vat_rate) / 100,
                  service: for_service,
                  serviceConfiguration: null,
                  upgradeFromProductCode: from_product.code
                }));
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })();
      });
      function upgradeBasketItem(_x, _x2) {
        return _upgradeBasketItem.apply(this, arguments);
      }
      return upgradeBasketItem;
    }())
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        discontinued: this.discontinued,
        hidden: this.hidden,
        forUser: this.forUser,
        label: this.label,
        location: this.location,
        pricing: this.pricing,
        emailTemplate: this.emailTemplate,
        affiliateCommission: this.affiliateCommission
      };
    }
  }, {
    key: "toJSONBulk",
    value: function toJSONBulk() {
      return {
        code: this.code,
        discontinued: this.discontinued,
        hidden: this.hidden,
        forUser: this.forUser,
        label: this.label,
        location: this.location,
        emailTemplate: this.emailTemplate,
        affiliateCommission: this.affiliateCommission,
        pricing: this.pricing.filter(function (p) {
          return p.price !== null;
        })
      };
    }
  }], [{
    key: "prefix",
    get: function get() {
      throw new Error("Not implemented");
    }
  }]);
}(NetworkPropertySet);
var SBNonTransferProduct = function (_SBGeneralProduct) {
  function SBNonTransferProduct() {
    _classCallCheck(this, SBNonTransferProduct);
    return _callSuper(this, SBNonTransferProduct, arguments);
  }
  _inherits(SBNonTransferProduct, _SBGeneralProduct);
  return _createClass(SBNonTransferProduct, [{
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "defaultPricing",
    get: function get() {
      return [new SBProductPricing({
        action: null,
        isManaged: false,
        managedMarkup: 0,
        managedMarkupType: null,
        managedMarkedUpPrice: null,
        periodMonths: null,
        paymentType: this.defaultAbstractPaymentType,
        price: null
      })];
    }
  }, {
    key: "directAddToCartLinks",
    get: function get() {
      var out = {};
      var _iterator2 = _createForOfIteratorHelper(this.savedPricing),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var p = _step2.value;
          if (p.paymentType == "any") {
            var j = {
              m: p.periodMonths,
              c: this.code
            };
            out[p.periodMonths] = btoa(JSON.stringify(j));
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return out;
    }
  }, {
    key: "price",
    get: function get() {
      var p = this.pricing.find(function (p) {
        return !p.action;
      });
      return p ? p.price : null;
    },
    set: function set(v) {
      var p = this.pricing.find(function (p) {
        return !p.action;
      });
      if (p) {
        p.price = v;
      } else {
        this.pricing.push(new SBProductPricing({
          action: null,
          isManaged: false,
          periodMonths: 12,
          paymentType: this.defaultAbstractPaymentType,
          price: v
        }));
      }
    }
  }, {
    key: "savedPricing",
    get: function get() {
      return this.pricing.filter(function (p) {
        return !p.isNew;
      });
    }
  }]);
}(SBGeneralProduct);
"use strict";
var SBBalanceProduct = function (_SBNonTransferProduct) {
  function SBBalanceProduct() {
    _classCallCheck(this, SBBalanceProduct);
    return _callSuper(this, SBBalanceProduct, arguments);
  }
  _inherits(SBBalanceProduct, _SBNonTransferProduct);
  return _createClass(SBBalanceProduct, [{
    key: "codePrefix",
    get: function get() {
      return "balance";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "balance";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBBalanceProduct]);
"use strict";
var SBCloudTimelineProduct = function (_SBNonTransferProduct2) {
  function SBCloudTimelineProduct() {
    _classCallCheck(this, SBCloudTimelineProduct);
    return _callSuper(this, SBCloudTimelineProduct, arguments);
  }
  _inherits(SBCloudTimelineProduct, _SBNonTransferProduct2);
  return _createClass(SBCloudTimelineProduct, [{
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "codePrefix",
    get: function get() {
      return "cloud_timeline";
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "basketItem",
    value: (function () {
      var _basketItem2 = _asyncToGenerator(function () {
        var _this7 = this;
        var pricing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var serviceConfiguration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return _regeneratorRuntime().mark(function _callee3() {
          var item;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (serviceConfiguration) {
                  _context3.next = 2;
                  break;
                }
                throw new Error("Cloud Timeline requires the config for a basket item");
              case 2:
                if (!name) {
                  name = "".concat(_this7.label);
                }
                item = {};
                item.name = name;
                item.periodMonths = 1;
                item.basket_pricing = 1;
                item.serviceConfiguration = serviceConfiguration;
                return _context3.abrupt("return", item);
              case 9:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        })();
      });
      function basketItem() {
        return _basketItem2.apply(this, arguments);
      }
      return basketItem;
    }())
  }], [{
    key: "prefix",
    get: function get() {
      return "cloud_timeline";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBCloudTimelineProduct]);
"use strict";
var SBCustomProduct = function (_SBNonTransferProduct3) {
  function SBCustomProduct() {
    _classCallCheck(this, SBCustomProduct);
    return _callSuper(this, SBCustomProduct, arguments);
  }
  _inherits(SBCustomProduct, _SBNonTransferProduct3);
  return _createClass(SBCustomProduct, [{
    key: "codePrefix",
    get: function get() {
      return "custom";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "custom";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBCustomProduct]);
"use strict";
var SBCustomLimitAddonProduct = function (_SBNonTransferProduct4) {
  function SBCustomLimitAddonProduct() {
    _classCallCheck(this, SBCustomLimitAddonProduct);
    return _callSuper(this, SBCustomLimitAddonProduct, arguments);
  }
  _inherits(SBCustomLimitAddonProduct, _SBNonTransferProduct4);
  return _createClass(SBCustomLimitAddonProduct, [{
    key: "basketItem",
    value: (function () {
      var _basketItem3 = _asyncToGenerator(function () {
        var _this8 = this;
        var pricing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var serviceConfiguration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return _regeneratorRuntime().mark(function _callee4() {
          var item;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (serviceConfiguration) {
                  _context4.next = 2;
                  break;
                }
                throw new Error("Custom Limit addon requires config for a basket item");
              case 2:
                if (!name) {
                  name = serviceConfiguration.domain;
                }
                _context4.next = 5;
                return _superPropGet(SBCustomLimitAddonProduct, "basketItem", _this8, 3)([pricing]);
              case 5:
                item = _context4.sent;
                item.name = name;
                item.periodMonths = item.periodMonths * multiple;
                item.quotedPriceFull = Math.round(item.quotedPriceFull * 100 * multiple) / 100;
                if (item.quotedVAT) {
                  item.quotedVAT = Math.round(item.quotedVAT * 100 * multiple) / 100;
                }
                if (serviceConfiguration) {
                  item.serviceConfiguration = serviceConfiguration;
                }
                return _context4.abrupt("return", item);
              case 12:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        })();
      });
      function basketItem() {
        return _basketItem3.apply(this, arguments);
      }
      return basketItem;
    }())
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "codePrefix",
    get: function get() {
      return "custom_limit_addon";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "defaultPricing",
    get: function get() {
      return StackBillingProduct.defaultPricingFor(this);
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "custom_limit_addon";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBCustomLimitAddonProduct]);
"use strict";
var SBDomainPrivacyProduct = function (_SBNonTransferProduct5) {
  function SBDomainPrivacyProduct() {
    var _this9;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBDomainPrivacyProduct);
    _this9 = _callSuper(this, SBDomainPrivacyProduct, [p]);
    _this9.codeComponents = ["domain_privacy"];
    return _this9;
  }
  _inherits(SBDomainPrivacyProduct, _SBNonTransferProduct5);
  return _createClass(SBDomainPrivacyProduct, [{
    key: "codePrefix",
    get: function get() {
      return "domain_privacy";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "defaultPricing",
    get: function get() {
      return [new SBProductPricing({
        action: null,
        isManaged: false,
        periodMonths: 12,
        paymentType: "any",
        price: null
      })];
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "basketItemFor",
    value: (function () {
      var _basketItemFor = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5(identity, service_ref) {
        var bi, expiry_date, whois_equivalent_data, quantity_needed, paid_expiry;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.basketItem();
            case 2:
              bi = _context5.sent;
              bi.name = identity;
              _context5.prev = 4;
              _context5.next = 7;
              return $.ajax("/a/whoisEquivalentData/".concat(identity));
            case 7:
              whois_equivalent_data = _context5.sent;
              if (whois_equivalent_data) {
                _context5.next = 10;
                break;
              }
              throw new Error("No info found");
            case 10:
              if (!(whois_equivalent_data.registrar == "tucows")) {
                _context5.next = 14;
                break;
              }
              expiry_date = new Date(whois_equivalent_data.expiryDate);
              if (expiry_date) {
                _context5.next = 14;
                break;
              }
              throw new Error("Could not check expiry date");
            case 14:
              _context5.next = 20;
              break;
            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](4);
              console.log("WHOIS-equivalent check failed");
              throw new Error("Could not check domain");
            case 20:
              for (quantity_needed = 0, paid_expiry = new Date(+new Date() + 86400 * 183 * 1000); paid_expiry <= expiry_date; paid_expiry.setFullYear(paid_expiry.getFullYear() + 1), quantity_needed++);
              bi.periodMonths = 12 * quantity_needed;
              bi.quotedPriceFull = Math.round(bi.quotedPriceFull * quantity_needed * 100) / 100;
              bi.quotedVAT = Math.round(bi.quotedVAT * quantity_needed * 100) / 100;
              bi.serviceConfiguration = {
                parentService: service_ref,
                target: {
                  expiry_date: expiry_date.toISOString()
                }
              };
              return _context5.abrupt("return", bi);
            case 26:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[4, 16]]);
      }));
      function basketItemFor(_x3, _x4) {
        return _basketItemFor.apply(this, arguments);
      }
      return basketItemFor;
    }())
  }], [{
    key: "prefix",
    get: function get() {
      return "domain_privacy";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBDomainPrivacyProduct]);
"use strict";
var SBTLSCertificateProduct = function (_SBNonTransferProduct6) {
  function SBTLSCertificateProduct() {
    _classCallCheck(this, SBTLSCertificateProduct);
    return _callSuper(this, SBTLSCertificateProduct, arguments);
  }
  _inherits(SBTLSCertificateProduct, _SBNonTransferProduct6);
  return _createClass(SBTLSCertificateProduct, [{
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "codePrefix",
    get: function get() {
      return "tls_certificate";
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "basketItem",
    value: (function () {
      var _basketItem4 = _asyncToGenerator(function () {
        var _this10 = this;
        var pricing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var serviceConfiguration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return _regeneratorRuntime().mark(function _callee6() {
          var item;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                if (serviceConfiguration) {
                  _context6.next = 2;
                  break;
                }
                throw new Error("TLS/SSL requires the config for a basket item");
              case 2:
                if (!name) {
                  name = "".concat(_this10.label, " (").concat(serviceConfiguration.domain, ")");
                }
                _context6.next = 5;
                return _superPropGet(SBTLSCertificateProduct, "basketItem", _this10, 3)([pricing]);
              case 5:
                item = _context6.sent;
                item.name = name;
                item.periodMonths = item.periodMonths * multiple;
                item.quotedPriceFull = Math.round(item.quotedPriceFull * 100 * multiple) / 100;
                if (item.quotedVAT) {
                  item.quotedVAT = Math.round(item.quotedVAT * 100 * multiple) / 100;
                }
                if (serviceConfiguration) {
                  item.serviceConfiguration = serviceConfiguration;
                }
                return _context6.abrupt("return", item);
              case 12:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        })();
      });
      function basketItem() {
        return _basketItem4.apply(this, arguments);
      }
      return basketItem;
    }())
  }], [{
    key: "prefix",
    get: function get() {
      return "tls_certificate";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBTLSCertificateProduct]);
"use strict";
var SBVPSBackupProduct = function (_SBNonTransferProduct7) {
  function SBVPSBackupProduct() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBVPSBackupProduct);
    return _callSuper(this, SBVPSBackupProduct, [p]);
  }
  _inherits(SBVPSBackupProduct, _SBNonTransferProduct7);
  return _createClass(SBVPSBackupProduct, [{
    key: "codePrefix",
    get: function get() {
      return "vps_backup";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "groupName",
    get: function get() {
      return this.label.replace(/ .*/, "");
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "vps_backup";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBVPSBackupProduct]);
"use strict";
var SBVPSOSProduct = function (_SBNonTransferProduct8) {
  function SBVPSOSProduct() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBVPSOSProduct);
    return _callSuper(this, SBVPSOSProduct, [p]);
  }
  _inherits(SBVPSOSProduct, _SBNonTransferProduct8);
  return _createClass(SBVPSOSProduct, [{
    key: "codePrefix",
    get: function get() {
      return "vps_os";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "groupName",
    get: function get() {
      return this.label.replace(/ .*/, "");
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "mayRebuildFrom",
    value: function mayRebuildFrom(other_option) {
      if (other_option instanceof SBVPSOSProduct) {
        var other_pricing_signatures = {};
        other_option.pricing.forEach(function (p) {
          return other_pricing_signatures[JSON.stringify(p)] = true;
        });
        return this.pricing.some(function (p) {
          return other_pricing_signatures[JSON.stringify(p)];
        });
      } else {
        return false;
      }
    }
  }, {
    key: "supportsApp",
    value: function supportsApp(app_code) {
      return this.typeRef == "rhel6";
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "vps_os";
    }
  }]);
}(SBNonTransferProduct);
var SBVPSFreeOS = function () {
  function SBVPSFreeOS(type_ref, label) {
    _classCallCheck(this, SBVPSFreeOS);
    this.typeRef = type_ref;
    this.label = label;
  }
  return _createClass(SBVPSFreeOS, [{
    key: "groupName",
    get: function get() {
      return this.label.replace(/ .*/, "");
    }
  }, {
    key: "lowestPrice",
    get: function get() {
      return new SBProductPricing({
        action: null,
        isManaged: false,
        paymentType: "any",
        periodMonths: 1,
        price: 0
      }, false);
    }
  }, {
    key: "initialPriceFor",
    value: function initialPriceFor(payment_type, months) {
      return 0;
    }
  }, {
    key: "initialPriceForGeneral",
    value: function initialPriceForGeneral(general_payment_type, months) {
      return 0;
    }
  }, {
    key: "mayRebuildFrom",
    value: function mayRebuildFrom(other_option) {
      return other_option instanceof SBVPSFreeOS;
    }
  }, {
    key: "pricingSupportsMonths",
    value: function pricingSupportsMonths(months) {
      return true;
    }
  }, {
    key: "pricingSupportsRealType",
    value: function pricingSupportsRealType(payment_type) {
      return true;
    }
  }, {
    key: "supportsApp",
    value: function supportsApp(app_code) {
      return this.typeRef == "rhel6";
    }
  }]);
}();
SBProduct.register([SBVPSOSProduct]);
"use strict";
var SBBespokeProduct = function (_SBNonTransferProduct9) {
  function SBBespokeProduct() {
    var _this11;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBBespokeProduct);
    _this11 = _callSuper(this, SBBespokeProduct, [p]);
    _this11.specifics = null;
    return _this11;
  }
  _inherits(SBBespokeProduct, _SBNonTransferProduct9);
  return _createClass(SBBespokeProduct, [{
    key: "labels",
    get: function get() {
      try {
        var labels = JSON.parse(this._label);
        return labels;
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "labelRaw",
    get: function get() {
      return this._label;
    }
  }, {
    key: "codePrefix",
    get: function get() {
      return "bespoke";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "networkPropertyHandlers",
    get: function get() {
      var _this12 = this;
      return {
        imageDataUrl: function imageDataUrl() {
          return $.ajax("/a/catalogue/productImage/".concat(_this12.code));
        },
        specifics: function specifics() {
          return $.ajax("/n/catalogue/product/".concat(_this12.code, "/specifics")).done(function (s) {
            return s;
          });
        }
      };
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "bespoke";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBBespokeProduct]);
"use strict";
var SBCloudBandwidthProduct = function (_SBNonTransferProduct10) {
  function SBCloudBandwidthProduct() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBCloudBandwidthProduct);
    return _callSuper(this, SBCloudBandwidthProduct, [p]);
  }
  _inherits(SBCloudBandwidthProduct, _SBNonTransferProduct10);
  return _createClass(SBCloudBandwidthProduct, [{
    key: "codePrefix",
    get: function get() {
      return "cloud_bandwidth";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "networkPropertyHandlers",
    get: function get() {
      var _this13 = this;
      return {
        imageDataUrl: function imageDataUrl() {
          return $.ajax("/a/catalogue/productImage/".concat(_this13.code));
        }
      };
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "cloud_bandwidth";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBCloudBandwidthProduct]);
"use strict";
var SBCloudServerProduct = function (_SBNonTransferProduct11) {
  function SBCloudServerProduct() {
    var _this14;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBCloudServerProduct);
    _this14 = _callSuper(this, SBCloudServerProduct, [p]);
    _this14.provisioningInfo = null;
    _this14.vpsOSOptions = null;
    return _this14;
  }
  _inherits(SBCloudServerProduct, _SBNonTransferProduct11);
  return _createClass(SBCloudServerProduct, [{
    key: "networkPropertyHandlers",
    get: function get() {
      var _this15 = this;
      return {
        imageDataUrl: function imageDataUrl() {
          return $.ajax("/a/catalogue/productImage/".concat(_this15.code));
        },
        cores: function cores() {
          return _this15.preloadSingle("provisioningInfo").then(function (i) {
            return i.CpuCores;
          });
        },
        disc: function disc() {
          return _this15.preloadSingle("provisioningInfo").then(function (i) {
            return i.OsDiskSizeGb * Math.pow(2, 30);
          });
        },
        provisioningInfo: function provisioningInfo() {
          return $.ajax("/n/catalogue/product/".concat(_this15.code, "/provisioningInfo"));
        },
        ram: function ram() {
          return _this15.preloadSingle("provisioningInfo").then(function (i) {
            return i.RamMb * Math.pow(2, 20);
          });
        },
        vpsOSOptions: function vpsOSOptions() {
          return $.ajax("/n/catalogue/product/".concat(_this15.code, "/vpsOSOptions"));
        }
      };
    }
  }, {
    key: "codePrefix",
    get: function get() {
      return "managed_vps";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "operatingSystems",
    get: function get() {
      return null;
    }
  }, {
    key: "label",
    get: function get() {
      var p = this.code.split(":");
      return p[1].toUpperCase() + " " + this._label;
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "cloud_server";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBCloudServerProduct]);
"use strict";
var SBDomainProduct = function (_SBGeneralProduct2) {
  function SBDomainProduct() {
    var _this16$registerPrici, _this16$transferPrici;
    var _this16;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBDomainProduct);
    _this16 = _callSuper(this, SBDomainProduct, [p]);
    _this16.pricingHaveChanged = "".concat((_this16$registerPrici = _this16.registerPricing) === null || _this16$registerPrici === void 0 ? void 0 : _this16$registerPrici.managedMarkup).concat((_this16$transferPrici = _this16.transferPricing) === null || _this16$transferPrici === void 0 ? void 0 : _this16$transferPrici.managedMarkup);
    return _this16;
  }
  _inherits(SBDomainProduct, _SBGeneralProduct2);
  return _createClass(SBDomainProduct, [{
    key: "codePrefix",
    get: function get() {
      return "domain";
    }
  }, {
    key: "defaultPricing",
    get: function get() {
      return [new SBProductPricing({
        action: null,
        isManaged: true,
        managedMarkup: 0,
        managedMarkupType: null,
        managedMarkedUpPrice: null,
        periodMonths: 12,
        paymentType: "any",
        price: null
      }), new SBProductPricing({
        action: "transfer",
        isManaged: true,
        managedMarkup: 0,
        managedMarkupType: null,
        managedMarkedUpPrice: null,
        periodMonths: 12,
        paymentType: "any",
        price: null
      })];
    }
  }, {
    key: "offerTransfer",
    get: function get() {
      return this.transferPrice !== null;
    }
  }, {
    key: "pricing",
    get: function get() {
      return this._pricing;
    },
    set: function set(v) {
      var _this$registerPricing, _this$transferPricing;
      this._pricing = v;
      this.pricingHaveChanged = "".concat((_this$registerPricing = this.registerPricing) === null || _this$registerPricing === void 0 ? void 0 : _this$registerPricing.managedMarkup).concat((_this$transferPricing = this.transferPricing) === null || _this$transferPricing === void 0 ? void 0 : _this$transferPricing.managedMarkup);
    }
  }, {
    key: "registerPrice",
    get: function get() {
      return this.registerPricing ? this.registerPricing.price : null;
    },
    set: function set(v) {
      if (this.registerPricing) {
        this.registerPricing.price = v;
      } else {
        this.pricing.push(new SBProductPricing({
          action: null,
          isManaged: false,
          managedMarkup: 0,
          managedMarkupType: null,
          managedMarkedUpPrice: null,
          periodMonths: 12,
          paymentType: "any",
          price: v
        }));
      }
    }
  }, {
    key: "registerPricing",
    get: function get() {
      return this.pricing.find(function (p) {
        return !p.action;
      });
    }
  }, {
    key: "tld",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "transferPrice",
    get: function get() {
      return this.transferPricing ? this.transferPricing.price : null;
    },
    set: function set(v) {
      if (this.transferPricing) {
        this.transferPricing.price = v;
      } else {
        this.pricing.push(new SBProductPricing({
          action: "transfer",
          isManaged: false,
          managedMarkup: 0,
          managedMarkupType: null,
          managedMarkedUpPrice: null,
          periodMonths: 12,
          paymentType: "any",
          price: v
        }));
      }
    }
  }, {
    key: "transferPricing",
    get: function get() {
      if (!this.pricing.some(function (p) {
        return p.action == "transfer";
      })) {
        this.pricing.push(new SBProductPricing({
          action: "transfer",
          isManaged: false,
          managedMarkup: 0,
          managedMarkupType: null,
          managedMarkedUpPrice: null,
          periodMonths: 12,
          paymentType: "any",
          price: null
        }));
      }
      return this.pricing.find(function (p) {
        return p.action == "transfer";
      });
    }
  }, {
    key: "hasManagaedMarkupChange",
    get: function get() {
      var _this$registerPricing2, _this$transferPricing2;
      return "".concat((_this$registerPricing2 = this.registerPricing) === null || _this$registerPricing2 === void 0 ? void 0 : _this$registerPricing2.managedMarkup).concat((_this$transferPricing2 = this.transferPricing) === null || _this$transferPricing2 === void 0 ? void 0 : _this$transferPricing2.managedMarkup) != this.pricingHaveChanged;
    }
  }, {
    key: "basketItem",
    value: (function () {
      var _basketItem5 = _asyncToGenerator(function () {
        var _this17 = this;
        var pricing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var quoted_price = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return _regeneratorRuntime().mark(function _callee7() {
          var item;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                if (name) {
                  _context7.next = 2;
                  break;
                }
                throw new Error("All domains must have a name");
              case 2:
                _context7.next = 4;
                return _superPropGet(SBDomainProduct, "basketItem", _this17, 3)([pricing, name, multiple, quoted_price]);
              case 4:
                item = _context7.sent;
                item.name = name;
                item.basket_pricing = true;
                return _context7.abrupt("return", item);
              case 8:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        })();
      });
      function basketItem() {
        return _basketItem5.apply(this, arguments);
      }
      return basketItem;
    }())
  }, {
    key: "matchesName",
    value: function matchesName(name) {
      return name.replace(/^[^.]*/, "") == this.tld;
    }
  }, {
    key: "anyPrice",
    get: function get() {
      var transfer_pricing = this.pricing.find(function (p) {
        return p.action == "transfer";
      });
      var regular_pricing = this.pricing.find(function (p) {
        return !p.action;
      });
      var purchasePrice = regular_pricing.price;
      if (regular_pricing.isManaged && regular_pricing.managedMarkedUpPrice) {
        purchasePrice = regular_pricing.managedMarkedUpPrice;
      }
      if (transfer_pricing) {
        var transferPrice = transfer_pricing.price;
        if (transfer_pricing.isManaged && transfer_pricing.managedMarkedUpPrice) {
          transferPrice = transfer_pricing.managedMarkedUpPrice;
        }
        return {
          purchase: purchasePrice,
          transfer: transferPrice
        };
      } else {
        return {
          purchase: purchasePrice
        };
      }
    }
  }, {
    key: "priceForYears",
    value: function priceForYears(year) {
      var discovered_price = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var domainDiscount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var total = 0;
      for (var i = 1; i <= year; i++) {
        var _domainDiscount;
        total += +((_domainDiscount = domainDiscount === null || domainDiscount === void 0 ? void 0 : domainDiscount[i * 12]) !== null && _domainDiscount !== void 0 ? _domainDiscount : discovered_price || this.anyPrice.purchase);
      }
      return Math.round(+total * 100) / 100;
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "domain";
    }
  }]);
}(SBGeneralProduct);
SBProduct.register([SBDomainProduct]);
"use strict";
var SBManagedVPSProduct = function (_SBNonTransferProduct12) {
  function SBManagedVPSProduct() {
    var _this18;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBManagedVPSProduct);
    _this18 = _callSuper(this, SBManagedVPSProduct, [p]);
    _this18.provisioningInfo = null;
    _this18.vpsOSOptions = null;
    return _this18;
  }
  _inherits(SBManagedVPSProduct, _SBNonTransferProduct12);
  return _createClass(SBManagedVPSProduct, [{
    key: "networkPropertyHandlers",
    get: function get() {
      var _this19 = this;
      return {
        imageDataUrl: function imageDataUrl() {
          return $.ajax("/a/catalogue/productImage/".concat(_this19.code));
        },
        cores: function cores() {
          return _this19.preloadSingle("provisioningInfo").then(function (i) {
            return i.CpuCores;
          });
        },
        disc: function disc() {
          return _this19.preloadSingle("provisioningInfo").then(function (i) {
            return i.OsDiskSizeGb * Math.pow(2, 30);
          });
        },
        provisioningInfo: function provisioningInfo() {
          return $.ajax("/n/catalogue/product/".concat(_this19.code, "/provisioningInfo"));
        },
        ram: function ram() {
          return _this19.preloadSingle("provisioningInfo").then(function (i) {
            return i.RamMb * Math.pow(2, 20);
          });
        },
        vpsOSOptions: function vpsOSOptions() {
          return $.ajax("/n/catalogue/product/".concat(_this19.code, "/vpsOSOptions"));
        }
      };
    }
  }, {
    key: "codePrefix",
    get: function get() {
      return "managed_vps";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "operatingSystems",
    get: function get() {
      return null;
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "managed_vps";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBManagedVPSProduct]);
"use strict";
var SBHostingProduct = function (_SBNonTransferProduct13) {
  function SBHostingProduct() {
    var _this20;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBHostingProduct);
    _this20 = _callSuper(this, SBHostingProduct, [p]);
    _this20.limits = null;
    _this20.platform = null;
    _this20.provisioningInfo = null;
    return _this20;
  }
  _inherits(SBHostingProduct, _SBNonTransferProduct13);
  return _createClass(SBHostingProduct, [{
    key: "codePrefix",
    get: function get() {
      return "package";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "networkPropertyHandlers",
    get: function get() {
      var _this21 = this;
      return {
        imageDataUrl: function imageDataUrl() {
          return $.ajax("/a/catalogue/productImage/".concat(_this21.code));
        },
        limits: function () {
          var _limits = _asyncToGenerator(_regeneratorRuntime().mark(function _callee8() {
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return _this21.preloadSingle("provisioningInfo");
                case 2:
                  return _context8.abrupt("return", _context8.sent.limits);
                case 3:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          function limits() {
            return _limits.apply(this, arguments);
          }
          return limits;
        }(),
        platform: function () {
          var _platform = _asyncToGenerator(_regeneratorRuntime().mark(function _callee9() {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return _this21.preloadSingle("provisioningInfo");
                case 2:
                  return _context9.abrupt("return", _context9.sent.platform);
                case 3:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }));
          function platform() {
            return _platform.apply(this, arguments);
          }
          return platform;
        }(),
        provisioningInfo: function provisioningInfo() {
          return $.ajax("/n/catalogue/product/".concat(_this21.code, "/provisioningInfo")).done(function (pi) {
            if (pi.platform == 'wordpress') {
              pi.limits.mysqlDatabases = 1;
            }
            return pi;
          });
        }
      };
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "basketItem",
    value: (function () {
      var _basketItem6 = _asyncToGenerator(function () {
        var _this22 = this;
        var pricing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return _regeneratorRuntime().mark(function _callee10() {
          var item;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _superPropGet(SBHostingProduct, "basketItem", _this22, 3)([pricing]);
              case 2:
                item = _context10.sent;
                item.name = name;
                return _context10.abrupt("return", item);
              case 5:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        })();
      });
      function basketItem() {
        return _basketItem6.apply(this, arguments);
      }
      return basketItem;
    }())
  }], [{
    key: "prefix",
    get: function get() {
      return "package";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBHostingProduct]);
"use strict";
var SBStackUserPackageAllowanceProduct = function (_SBNonTransferProduct14) {
  function SBStackUserPackageAllowanceProduct() {
    var _this23;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBStackUserPackageAllowanceProduct);
    _this23 = _callSuper(this, SBStackUserPackageAllowanceProduct, [p]);
    _this23.limits = null;
    _this23.platform = null;
    _this23.provisioningInfo = null;
    return _this23;
  }
  _inherits(SBStackUserPackageAllowanceProduct, _SBNonTransferProduct14);
  return _createClass(SBStackUserPackageAllowanceProduct, [{
    key: "basketItem",
    value: (function () {
      var _basketItem7 = _asyncToGenerator(function () {
        var _this24 = this;
        var pricing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var serviceConfiguration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return _regeneratorRuntime().mark(function _callee11() {
          var item;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _superPropGet(SBStackUserPackageAllowanceProduct, "basketItem", _this24, 3)([pricing]);
              case 2:
                item = _context11.sent;
                item.name = name;
                item.periodMonths = item.periodMonths * multiple;
                item.quotedPriceFull = Math.round(item.quotedPriceFull * 100 * multiple) / 100;
                if (item.quotedVAT) {
                  item.quotedVAT = Math.round(item.quotedVAT * 100 * multiple) / 100;
                }
                if (serviceConfiguration) {
                  item.serviceConfiguration = serviceConfiguration;
                }
                return _context11.abrupt("return", item);
              case 9:
              case "end":
                return _context11.stop();
            }
          }, _callee11);
        })();
      });
      function basketItem() {
        return _basketItem7.apply(this, arguments);
      }
      return basketItem;
    }())
  }, {
    key: "networkPropertyHandlers",
    get: function get() {
      var _this25 = this;
      return {
        imageDataUrl: function () {
          var _imageDataUrl = _asyncToGenerator(_regeneratorRuntime().mark(function _callee12() {
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  if (!_this25.hasImage) {
                    _context12.next = 6;
                    break;
                  }
                  _context12.next = 3;
                  return $.ajax("/a/catalogue/productImage/".concat(_this25.code));
                case 3:
                  return _context12.abrupt("return", _context12.sent);
                case 6:
                  return _context12.abrupt("return", null);
                case 7:
                case "end":
                  return _context12.stop();
              }
            }, _callee12);
          }));
          function imageDataUrl() {
            return _imageDataUrl.apply(this, arguments);
          }
          return imageDataUrl;
        }(),
        limits: function () {
          var _limits2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee13() {
            var _yield$_this25$preloa;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return _this25.preloadSingle("provisioningInfo");
                case 2:
                  _context13.t1 = _yield$_this25$preloa = _context13.sent;
                  _context13.t0 = _context13.t1 === null;
                  if (_context13.t0) {
                    _context13.next = 6;
                    break;
                  }
                  _context13.t0 = _yield$_this25$preloa === void 0;
                case 6:
                  if (!_context13.t0) {
                    _context13.next = 10;
                    break;
                  }
                  _context13.t2 = void 0;
                  _context13.next = 11;
                  break;
                case 10:
                  _context13.t2 = _yield$_this25$preloa.limits;
                case 11:
                  return _context13.abrupt("return", _context13.t2);
                case 12:
                case "end":
                  return _context13.stop();
              }
            }, _callee13);
          }));
          function limits() {
            return _limits2.apply(this, arguments);
          }
          return limits;
        }(),
        platform: function () {
          var _platform2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee14() {
            var _yield$_this25$preloa2;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return _this25.preloadSingle("provisioningInfo");
                case 2:
                  _context14.t1 = _yield$_this25$preloa2 = _context14.sent;
                  _context14.t0 = _context14.t1 === null;
                  if (_context14.t0) {
                    _context14.next = 6;
                    break;
                  }
                  _context14.t0 = _yield$_this25$preloa2 === void 0;
                case 6:
                  if (!_context14.t0) {
                    _context14.next = 10;
                    break;
                  }
                  _context14.t2 = void 0;
                  _context14.next = 11;
                  break;
                case 10:
                  _context14.t2 = _yield$_this25$preloa2.platform;
                case 11:
                  return _context14.abrupt("return", _context14.t2);
                case 12:
                case "end":
                  return _context14.stop();
              }
            }, _callee14);
          }));
          function platform() {
            return _platform2.apply(this, arguments);
          }
          return platform;
        }(),
        provisioningInfo: function () {
          var _provisioningInfo = _asyncToGenerator(_regeneratorRuntime().mark(function _callee15() {
            var pi;
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return AnyStore.inst.preloadSingle("allPackageAllowanceProductInfo");
                case 2:
                  pi = AnyStore.inst.allPackageAllowanceProductInfo[_this25.code];
                  if (pi && pi.platform == 'wordpress') {
                    pi.limits.mysqlDatabases = 1;
                  }
                  return _context15.abrupt("return", pi);
                case 5:
                case "end":
                  return _context15.stop();
              }
            }, _callee15);
          }));
          function provisioningInfo() {
            return _provisioningInfo.apply(this, arguments);
          }
          return provisioningInfo;
        }()
      };
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }, {
    key: "codePrefix",
    get: function get() {
      return "stack_user_package_allowance";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "defaultPricing",
    get: function get() {
      return StackBillingProduct.defaultPricingFor(this);
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "stack_user_package_allowance";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBStackUserPackageAllowanceProduct]);
"use strict";
var SBVPSProduct = function (_SBNonTransferProduct15) {
  function SBVPSProduct() {
    var _this26;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBVPSProduct);
    _this26 = _callSuper(this, SBVPSProduct, [p]);
    _this26.provisioningInfo = null;
    _this26.vpsOSOptions = null;
    return _this26;
  }
  _inherits(SBVPSProduct, _SBNonTransferProduct15);
  return _createClass(SBVPSProduct, [{
    key: "networkPropertyHandlers",
    get: function get() {
      var _this27 = this;
      return {
        imageDataUrl: function imageDataUrl() {
          return $.ajax("/a/catalogue/productImage/".concat(_this27.code));
        },
        cores: function cores() {
          return _this27.preloadSingle("provisioningInfo").then(function (i) {
            return i.CpuCores;
          });
        },
        disc: function disc() {
          return _this27.preloadSingle("provisioningInfo").then(function (i) {
            return i.OsDiskSizeGb * Math.pow(2, 30);
          });
        },
        provisioningInfo: function provisioningInfo() {
          return $.ajax("/n/catalogue/product/".concat(_this27.code, "/provisioningInfo"));
        },
        ram: function ram() {
          return _this27.preloadSingle("provisioningInfo").then(function (i) {
            return i.RamMb * Math.pow(2, 20);
          });
        },
        vpsOSOptions: function vpsOSOptions() {
          return $.ajax("/n/catalogue/product/".concat(_this27.code, "/vpsOSOptions"));
        }
      };
    }
  }, {
    key: "codePrefix",
    get: function get() {
      return "vps";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "operatingSystems",
    get: function get() {
      var _this28 = this;
      if (!this.vpsOSOptions) return null;
      var out = this.vpsOSOptions.free.map(function (o) {
        return new SBVPSFreeOS(o.code, o.label);
      });
      var _iterator3 = _createForOfIteratorHelper(UserCatalogue.inst.products),
        _step3;
      try {
        var _loop = function _loop() {
          var p = _step3.value;
          if (p instanceof SBVPSOSProduct) {
            var options = _this28.vpsOSOptions.paid.find(function (o) {
              return o.code == p.typeRef;
            });
            if (options) {
              out.push(p);
            }
          }
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return out;
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "vps";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBVPSProduct]);
"use strict";
var SBVPSAddonProduct = function (_SBNonTransferProduct16) {
  function SBVPSAddonProduct() {
    var _this29;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, SBVPSAddonProduct);
    _this29 = _callSuper(this, SBVPSAddonProduct, [p]);
    _this29.provisioningRequirements = null;
    return _this29;
  }
  _inherits(SBVPSAddonProduct, _SBNonTransferProduct16);
  return _createClass(SBVPSAddonProduct, [{
    key: "codePrefix",
    get: function get() {
      return "vps_addon";
    }
  }, {
    key: "defaultAbstractPaymentType",
    get: function get() {
      return "any";
    }
  }, {
    key: "networkPropertyHandlers",
    get: function get() {
      var _this30 = this;
      return {
        imageDataUrl: function imageDataUrl() {
          return $.ajax("/a/catalogue/productImage/".concat(_this30.code));
        },
        provisioningRequirements: function provisioningRequirements() {
          return $.ajax("/n/catalogue/product/".concat(_this30.code, "/provisioningRequirements"));
        }
      };
    }
  }, {
    key: "typeRef",
    get: function get() {
      return this.codeComponents[0];
    }
  }], [{
    key: "prefix",
    get: function get() {
      return "vps_addon";
    }
  }]);
}(SBNonTransferProduct);
SBProduct.register([SBVPSAddonProduct]);