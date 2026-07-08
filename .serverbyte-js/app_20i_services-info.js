"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ServicesInfo = function () {
  function ServicesInfo() {
    var makeInitialCalls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, ServicesInfo);
    this._forLocation = "*";
    this._forPackageLabel = "";
    this._forMultiplePackageLabels = "";
    this._forUser = null;
    this._forPackageTypeName = null;
    this._forSsl = null;
    this._forEnabled = null;
    this._forTurbo = null;
    this._forPlatform = null;
    this._forDomain = null;
    this._page = 0;
    this._searchTerm = "";
    this._sortAscending = true;
    this._sortField = "name";
    this._startDate = null;
    this._endDate = null;
    this.byType = {
      autoscale_allowance: null,
      managed_vps: null,
      "package": null,
      package_allowance: null,
      wordpress_allowance: null
    };
    this.allowancePackages = [];
    this.nonAllowancePackages = null;
    this.packageCount = null;
    this._pageLength = 100;
    this.servicePackageCount = null;
    this.store = null;
    if (makeInitialCalls) {
      this.fetch();
      this.fetchAllAllowances();
    }
  }
  return _createClass(ServicesInfo, [{
    key: "pageLength",
    get: function get() {
      return this._pageLength;
    },
    set: function set(v) {
      this._pageLength = +v;
      this.fetch();
    }
  }, {
    key: "forLocation",
    get: function get() {
      return this._forLocation;
    },
    set: function set(dcLocation) {
      this._forLocation = dcLocation;
      this.fetch(true, true);
    }
  }, {
    key: "forUser",
    get: function get() {
      return this._forUser;
    },
    set: function set(user) {
      this._forUser = user;
      this.fetch(true, true);
    }
  }, {
    key: "forPackageLabel",
    get: function get() {
      return this._forPackageLabel;
    },
    set: function set(label) {
      this._forPackageLabel = label;
      this.fetch(true, true);
    }
  }, {
    key: "forMultiplePackageLabels",
    get: function get() {
      return this._forMultiplePackageLabels;
    },
    set: function set(labels) {
      this._forMultiplePackageLabels = labels;
      this.fetch();
    }
  }, {
    key: "forPackageTypeName",
    get: function get() {
      return this._forPackageTypeName;
    },
    set: function set(packageTypeName) {
      if (packageTypeName == "Cloud Server") {
        this._forPackageTypeName = "Managed VPS";
      }
      this._forPackageTypeName = packageTypeName;
      this.fetch(true, true);
    }
  }, {
    key: "forSsl",
    get: function get() {
      return this._forSsl;
    },
    set: function set(state) {
      this._forSsl = state;
      this.fetch(true, true);
    }
  }, {
    key: "forEnabled",
    get: function get() {
      return this._forEnabled;
    },
    set: function set(state) {
      this._forEnabled = state;
      this.fetch(true, true);
    }
  }, {
    key: "forTurbo",
    get: function get() {
      return this._forTurbo;
    },
    set: function set(state) {
      this._forTurbo = state;
      this.fetch(true, true);
    }
  }, {
    key: "forPlatform",
    get: function get() {
      return this._forPlatform;
    },
    set: function set(platform) {
      this._forPlatform = platform;
      this.fetch(true, true);
    }
  }, {
    key: "forDomain",
    get: function get() {
      return this._forDomain;
    },
    set: function set(state) {
      this._forDomain = state;
      this.fetch(true, true);
    }
  }, {
    key: "startDate",
    get: function get() {
      return this._startDate;
    },
    set: function set(d) {
      this._startDate = d;
      this.fetch();
    }
  }, {
    key: "endDate",
    get: function get() {
      return this._endDate;
    },
    set: function set(d) {
      this._endDate = d;
      this.fetch();
    }
  }, {
    key: "hasNonAllowancePackages",
    get: function get() {
      if (this.packageCount === null) return null;
      return !!(this.packageCount > 0);
    }
  }, {
    key: "hasActivePackageFilter",
    get: function get() {
      return this.searchTerm != "" || this.forLocation != "*" || this.forSsl !== null || this.forEnabled !== null || this.forTurbo !== null || this.forDomain !== null || this.forPlatform !== null || !!this.startDate || !!this.endDate || !!this.forPackageLabel || !!this.forMultiplePackageLabels;
    }
  }, {
    key: "hasPackages",
    get: function get() {
      return this.hasNonAllowancePackages || this.byType.package_allowance && !!this.byType.package_allowance.length || this.byType.wordpress_allowance && !!this.byType.wordpress_allowance.length || this.byType.managed_vps && !!this.byType.managed_vps.length;
    }
  }, {
    key: "packageRequestBody",
    get: function get() {
      var selectors = [];
      selectors.push({
        $or: [{
          packageBundleTypeId: {
            $regex: "."
          }
        }, {
          productSpec: "web-free"
        }, {
          productSpec: null
        }]
      });
      if (this.forLocation != "*") {
        selectors.push({
          "location": {
            $regex: "".concat(this.forLocation)
          }
        });
      }
      if (this.searchTerm != "") {
        var regex = this.searchTerm.replace(/[.]/g, "[.]");
        selectors.push({
          $or: [{
            name: {
              $regex: regex
            }
          }, {
            names: {
              $elemMatch: {
                $regex: regex
              }
            }
          }]
        });
      }
      if (this.forSsl !== null) {
        selectors.push({
          hasSslCache: {
            $regex: this.forSsl ? "1" : "0"
          }
        });
      }
      if (this.forEnabled !== null) {
        selectors.push({
          enabledCache: {
            $regex: this.forEnabled ? "1" : "0"
          }
        });
      }
      if (this.forTurbo !== null) {
        selectors.push({
          hasWebsiteTurbo: {
            $regex: this.forTurbo ? "1" : "0"
          }
        });
      }
      if (this.forDomain !== null) {
        selectors.push({
          hasDomainCache: {
            $regex: this.forDomain ? "1" : "0"
          }
        });
      }
      if (this.forPlatform !== null) {
        selectors.push({
          web: {
            $elemMatch: {
              platform: {
                $regex: this.forPlatform
              }
            }
          }
        });
      }
      if (this.startDate) {
        selectors.push({
          createdAt: {
            $gt: this.startDate
          }
        });
      }
      if (this.endDate) {
        selectors.push({
          createdAt: {
            $lt: this.endDate
          }
        });
      }
      if (this.forMultiplePackageLabels) {
        var _iterator = _createForOfIteratorHelper(this.forMultiplePackageLabels),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var l = _step.value;
            selectors.push({
              packageLabel: {
                $elemMatch: {
                  labelId: l
                }
              }
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (this.forPackageLabel) {
        if (this.forPackageLabel === "-") {
          selectors.push({
            packageLabel: {
              $not: {
                $elemMatch: {
                  labelId: {
                    $regex: "."
                  }
                }
              }
            }
          });
        } else {
          selectors.push({
            packageLabel: {
              $elemMatch: {
                labelId: this.forPackageLabel
              }
            }
          });
        }
      }
      if (this.forPackageTypeName && this.forPackageTypeName != "Cloud Server") {
        selectors.push({
          packageTypeName: {
            $regex: "^".concat(this.escapeRegexString(this.forPackageTypeName))
          },
          $not: {
            productSpec: {
              $regex: "^cloud-"
            }
          }
        });
      }
      if (this.forPackageTypeName == "Cloud Server") {
        selectors.push({
          $and: [{
            packageTypeName: {
              $regex: "Managed VPS"
            }
          }, {
            productSpec: {
              $regex: "^cloud-"
            }
          }]
        });
      }
      if (this.forUser !== null) {
        if (this.forUser && this.forUser !== "*") {
          selectors.push({
            accessControl: {
              $elemMatch: {
                userTuple: this.forUser
              }
            }
          });
        } else if (this.forUser === "*") {
          selectors.push({
            accessControl: {
              $elemMatch: {
                userTuple: {
                  $regex: "^stack-user:"
                }
              }
            }
          });
        } else {
          selectors.push({
            accessControl: {
              $not: {
                $elemMatch: {
                  userTuple: {
                    $regex: "^stack-user:"
                  }
                }
              }
            }
          });
        }
      }
      return {
        selector: selectors.length == 1 ? selectors[0] : {
          $and: selectors
        }
      };
    }
  }, {
    key: "page",
    get: function get() {
      return this._page;
    },
    set: function set(v) {
      this._page = v;
      this.fetch(false);
    }
  }, {
    key: "searchTerm",
    get: function get() {
      return this._searchTerm;
    },
    set: function set(v) {
      this._searchTerm = v;
      this.fetch();
    }
  }, {
    key: "serviceHasNonAllowancePackages",
    get: function get() {
      if (this.servicePackageCount === null) return null;
      return !!this.servicePackageCount;
    }
  }, {
    key: "serviceHasPackages",
    get: function get() {
      return this.serviceHasNonAllowancePackages || this.byType.package_allowance && !!this.byType.package_allowance.length || this.byType.autoscale_allowance && !!this.byType.autoscale_allowance.length || this.byType.wordpress_allowance && !!this.byType.wordpress_allowance.length || this.byType.managed_vps && !!this.byType.managed_vps.length;
    }
  }, {
    key: "sortAscending",
    get: function get() {
      return this._sortAscending;
    },
    set: function set(v) {
      if (v != this._sortAscending) {
        this._sortAscending = v;
        this.fetch(false);
      }
    }
  }, {
    key: "sortField",
    get: function get() {
      return this._sortField;
    },
    set: function set(v) {
      if (v != this._sortField) {
        this._sortField = v;
        this._sortAscending = true;
        this.fetch(false);
      }
    }
  }, {
    key: "fetch",
    value: (function () {
      var _fetch = _asyncToGenerator(function () {
        var _this = this;
        var include_meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var non_skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return _regenerator().m(function _callee() {
          var result, managedVpsPackageById, _iterator2, _step2, as, _iterator3, _step3, pkg, packages, resultIds, _i, _Object$keys, id, _pkg;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (_this.fetchP) {
                  _this.fetchP.abort();
                }
                if (!include_meta) {
                  _context.n = 2;
                  break;
                }
                _context.n = 1;
                return NetworkPropertySet.prototype.collectionLength("/a/package", _this.packageRequestBody);
              case 1:
                _this.packageCount = _context.v;
                if (!(_this.forUser || _this.searchTerm)) {
                  _this.servicePackageCount = _this.packageCount;
                }
              case 2:
                _this.nonAllowancePackages = null;
                if (non_skip) {
                  _this.page = 0;
                }
                _context.n = 3;
                return _this.fetchPackages(non_skip ? null : _this.page * _this.pageLength, _this.pageLength);
              case 3:
                result = _context.v;
                if (!ServicesInfo._allowancesPromise) {
                  _context.n = 4;
                  break;
                }
                _context.n = 4;
                return ServicesInfo._allowancesPromise;
              case 4:
                managedVpsPackageById = {};
                if (_this.byType.managed_vps && _this.byType.managed_vps.length > 0) {
                  _iterator2 = _createForOfIteratorHelper(_this.byType.managed_vps);
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      as = _step2.value;
                      _iterator3 = _createForOfIteratorHelper(as.packages);
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          pkg = _step3.value;
                          managedVpsPackageById[pkg.id] = pkg;
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
                packages = result.map(function (p) {
                  if (managedVpsPackageById[p.id]) {
                    p.pseudoAllowance = managedVpsPackageById[p.id].allowance;
                  }
                  return new PackageService(p);
                });
                if (_this.hasActivePackageFilter) {
                  _context.n = 8;
                  break;
                }
                resultIds = new Set(result.map(function (p) {
                  return String(p.id);
                }));
                _i = 0, _Object$keys = Object.keys(managedVpsPackageById);
              case 5:
                if (!(_i < _Object$keys.length)) {
                  _context.n = 8;
                  break;
                }
                id = _Object$keys[_i];
                if (!resultIds.has(id)) {
                  _context.n = 6;
                  break;
                }
                return _context.a(3, 7);
              case 6:
                _pkg = managedVpsPackageById[id];
                _pkg.pseudoAllowance = _pkg.allowance;
                packages.push(_pkg);
              case 7:
                _i++;
                _context.n = 5;
                break;
              case 8:
                _this.nonAllowancePackages = packages;
              case 9:
                return _context.a(2);
            }
          }, _callee);
        })();
      });
      function fetch() {
        return _fetch.apply(this, arguments);
      }
      return fetch;
    }())
  }, {
    key: "fetchAllAllowances",
    value: function fetchAllAllowances() {
      var _this2 = this;
      return ServicesInfo.fetchAllAllowancesCombined().then(function (data) {
        var wrap = function wrap(raws, Cls) {
          return raws.map(function (r) {
            var allowance = new Cls(r);
            if (allowance.packages && Array.isArray(allowance.packages) && allowance.packages.length) {
              allowance.packages.forEach(function (p) {
                return _this2.allowancePackages.push(p);
              });
            }
            if (_this2.store) {
              allowance.setStore(_this2.store);
            }
            return allowance;
          });
        };
        _this2.byType.package_allowance = wrap(data.package_allowance, PackageAllowanceService);
        _this2.byType.wordpress_allowance = wrap(data.wordpress_allowance, WordpressAllowanceService);
        _this2.byType.managed_vps = wrap(data.managed_vps, ManagedVpsAllowanceService);
        _this2.byType.autoscale_allowance = wrap(data.autoscale_allowance, AutoscaleAllowanceService);
      });
    }
  }, {
    key: "fetchPackages",
    value: function fetchPackages(skip, limit) {
      var cacheKey = "".concat(skip, ",").concat(limit, ",").concat(JSON.stringify(this.packageRequestBody), ",").concat(this.sortField, ",").concat(this.sortAscending);
      if (ServicesInfo._packagesCache[cacheKey]) {
        return ServicesInfo._packagesCache[cacheKey];
      }
      ServicesInfo._packagesCache[cacheKey] = $.ajax({
        method: "get",
        url: "/a/package",
        data: Object.assign({
          fields: ["id", "enabled", "hasWebsiteTurbo", "location", "names", "name", "packageTypeName", "productSpec", "created", "packageLabels", "web.hasSsl", "web.platform", "websiteTurbo", "isWordpress", "includeInWordpressManager"],
          limit: limit,
          skip: skip,
          sort: [_defineProperty({}, this.sortField, this.sortAscending ? "asc" : "desc")]
        }, this.packageRequestBody)
      }).then(function (result) {
        ServicesInfo._packagesCache[cacheKey] = result;
        return result;
      })["catch"](function (err) {
        delete ServicesInfo._packagesCache[cacheKey];
        throw err;
      });
      return ServicesInfo._packagesCache[cacheKey];
    }
  }, {
    key: "escapeRegexString",
    value: function escapeRegexString(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  }, {
    key: "setStore",
    value: function setStore(store) {
      this.store = store;
    }
  }], [{
    key: "fetchAllAllowancesCombined",
    value: function fetchAllAllowancesCombined() {
      var _this3 = this;
      if (this._allowancesPromise) {
        return this._allowancesPromise;
      }
      var allowanceFields = ["id", "name", "count", "expiryDate", "packages.hasWebsiteTurbo", "packages.websiteTurbo", "productSpec", "packageIds", "serviceType", "timelineService", "packages.id", "packages.name", "packages.names", "packages.packageTypeName", "packages.created", "profileIdCache"];
      var q = $.param({
        fields: allowanceFields
      });
      var multiRequests = ["/a/service/autoscale_allowance?".concat(q), "/a/service/managed_vps?".concat(q), "/a/service/package_allowance?".concat(q), "/a/service/wordpress_allowance?".concat(q)];
      var multiEncoded = encodeURIComponent(btoa(JSON.stringify(multiRequests)));
      this._allowancesPromise = $.ajax("/a/grouped-multi?requests=".concat(multiEncoded)).then(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 4),
          autoscale_allowance = _ref3[0],
          managed_vps = _ref3[1],
          package_allowance = _ref3[2],
          wordpress_allowance = _ref3[3];
        var result = {
          autoscale_allowance: autoscale_allowance || [],
          managed_vps: managed_vps || [],
          package_allowance: package_allowance || [],
          wordpress_allowance: wordpress_allowance || []
        };
        _this3._allowancesPromise = Promise.resolve(result);
        return result;
      })["catch"](function (err) {
        _this3._allowancesPromise = null;
        throw err;
      });
      return this._allowancesPromise;
    }
  }]);
}();
_defineProperty(ServicesInfo, "_allowancesPromise", null);
_defineProperty(ServicesInfo, "_packagesCache", {});
//# sourceMappingURL=services-info.js.map
