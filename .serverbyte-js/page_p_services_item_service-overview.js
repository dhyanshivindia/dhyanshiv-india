"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var ItemServiceOverviewPage = function () {
  function ItemServiceOverviewPage() {
    _classCallCheck(this, ItemServiceOverviewPage);
  }
  return _createClass(ItemServiceOverviewPage, [{
    key: "init",
    value: function init(id) {
      if (brand) {
        brand.togglePrefs = typeof brand.togglePrefs == "string" ? JSON.parse(brand.togglePrefs) : {};
      }
      var currentBrand = new Brand(brand, SimpleService.inst);
      var select_scroll_limit = 10;
      this.view = new Vue({
        el: "#service-overview",
        delimiters: ["[[", "]]"],
        data: {
          brand: currentBrand,
          dnsServiceNames: null,
          domains: null,
          expandLink: null,
          extraUsage: {
            mailboxCount: null,
            subdomains: null
          },
          ftpaccount: null,
          homeDirectory: null,
          ip: remote_ip,
          limit: null,
          managedVpsService: null,
          modalNames: null,
          name: null,
          notifications: null,
          oneclicks: null,
          packageFetch: {
            method: "get",
            url: "/a/package",
            data: function data(params) {
              return {
                fields: ["name", "id"],
                selector: {
                  name: params.term ? {
                    '$regex': "^" + params.term.replace(/.*\//, "").replace(/([.?+*\(\)\[\]\{\}-])/g, function (s, m1) {
                      return "[".concat(m1, "]");
                    }).replace(/\\/, "\\\\")
                  } : undefined
                },
                sort: ["names"],
                limit: select_scroll_limit,
                skip: select_scroll_limit * ((params.page || 1) - 1)
              };
            },
            processResults: function processResults(results) {
              return {
                results: results.map(function (p) {
                  return {
                    text: p.name,
                    id: p.id
                  };
                }),
                pagination: {
                  more: results.length == select_scroll_limit
                }
              };
            }
          },
          packageId: id,
          packageTypeName: null,
          password: null,
          passwordValidator: passwordValidator,
          platform: null,
          platformInstallerName: {
            wordpress: {
              name: "WordPress",
              imgName: "reinstall-wordpress.svg"
            }
          },
          primaryNameDNSStatus: null,
          profileId: null,
          reloadingFtpAccountDetails: false,
          searchString: null,
          service: SimpleService.inst,
          serviceCounts: {
            "package": null
          },
          serviceLimits: new ServiceLimits("package", id),
          showFtpPassword: false,
          web: null,
          wordpressIsInstalled: {
            isLatest: null,
            current: null,
            latest: null
          },
          get managedVpsLink() {
            var _this = this;
            if (!this.managedVpsService) return null;
            var mvps = this.managedVpsService.find(function (v) {
              return v.packageIds.includes(_this.packageId);
            });
            if (mvps) {
              return "/services/managed-vps/".concat(mvps.id, "/service-overview");
            } else {
              return null;
            }
          },
          get preferStackMail() {
            return this.brand && this.brand.togglePrefs && this.brand.togglePrefs.preferstackMail;
          },
          get primaryFTPCredentials() {
            return this.web && this.web.ftp_credentials && this.web.ftp_credentials[0] && {
              username: this.web.ftp_credentials[0].username,
              initialPassword: this.web.ftp_credentials[0].password
            };
          },
          get realFTPServer() {
            return this.web && this.web.info && (this.web.info.ftpserver || "ftp.stackcp.com");
          },
          get sessionLimits() {
            return this.serviceLimits.limits;
          },
          get someDomains() {
            return this.domains && {
              canUpdate: this.domains.some(function (d) {
                return !d.pendingTransfer;
              }),
              exist: !!this.domains.length
            };
          }
        },
        computed: {
          isDarkMode: function isDarkMode() {
            return localStorage.getItem("dark-theme") === "1";
          },
          bandwidthTotal: function bandwidthTotal() {
            return this.web && this.web.usage && this.web.usage.Bandwidth.MbIn + this.web.usage.Bandwidth.MbOut;
          },
          ftpServer: function ftpServer() {
            if (this.primaryNameDNSStatus && this.primaryNameDNSStatus.tryDAC) {
              return this.realFTPServer;
            } else {
              return "ftp.".concat(this.name);
            }
          },
          haveDataToShow: function haveDataToShow() {
            return {
              ftpPanel: this.serviceLimits.limits && this.serviceLimits.limits.primaryFtpUnlock && this.primaryFTPCredentials,
              ftpUnlock: this.serviceLimits.limits && this.serviceLimits.limits.primaryFtpUnlock && this.ftpaccount,
              icons: this.sessionLimits && this.serviceLimits.limits && this.someDomains && this.platform,
              infoPanel: this.limit && this.limit.accountSummary && this.platform && this.name && this.packageTypeName !== null,
              nameserverSetup: this.sessionLimits && this.sessionLimits.nameserverCheck && this.primaryNameDNSStatus && this.primaryNameDNSStatus.results,
              oneClicks: this.serviceLimits.limits && this.oneclicks
            };
          },
          imapServer: function imapServer() {
            if (this.primaryNameDNSStatus && this.primaryNameDNSStatus.tryDAC || this.preferStackMail) {
              return "imap.stackmail.com";
            } else {
              return "imap.".concat(this.name);
            }
          },
          loadedUsageMailData: function loadedUsageMailData() {
            return this.extraUsage.mailboxCount !== null;
          },
          showSection: function showSection() {
            var limits = this.serviceLimits.limits;
            return {
              domains: limits.dns || limits.domainContacts || limits.nameservers || limits.pushTransfer || limits.domainPrivacy || limits.domains || limits.subdomains || limits.whois,
              email: limits.mailJunkFilters || limits.mailCatchAllForwarders || limits.mailAutoresponders || limits.mailForwarders || limits.mailboxes || limits.webmail,
              files: limits.fileManager || limits.ftp || limits.backups || limits.webBuilder,
              logstat: limits.awstats || limits.webalizer || limits.accessErrorLogs || limits.timelineBackups,
              oneclick: limits.apps && Object.keys(limits.apps).length,
              security: limits.blockVisitors || limits.passwordProtectedDirectories || limits.directoryIndexing || limits.freeSsl || limits.ssh || limits.hotlinkProtection,
              webtools: limits.switchPhpVersion || limits.mysqlDatabases || limits.scheduledTasks || limits.phpMyAdmin || limits.webRedirect,
              wordpress: this.platform == 'wordpress' ? true : false
            };
          },
          smtpServer: function smtpServer() {
            if (this.primaryNameDNSStatus && this.primaryNameDNSStatus.tryDAC || this.preferStackMail) {
              return "smtp.stackmail.com";
            } else {
              return "smtp.".concat(this.name);
            }
          },
          temporaryWebAddress: function temporaryWebAddress() {
            if (this.name && this.web && this.web.info && this.web.info.temporaryUrls && this.web.info.temporaryUrls[this.name]) {
              return "http://".concat(this.web.info.temporaryUrls[this.name]);
            } else {
              return null;
            }
          },
          usage: function usage() {
            var out;
            if (this.web && this.web.usage) {
              out = Object.assign({}, this.extraUsage, this.web.usage);
            } else {
              out = Object.assign({}, this.extraUsage);
            }
            return out;
          },
          webIPv4: function webIPv4() {
            return this.web && this.web.info && this.web.info.ip4Address;
          },
          webIPv6: function webIPv6() {
            return this.web && this.web.info && this.web.info.ip6Address;
          },
          webLink: function webLink() {
            return "http://".concat(this.name);
          }
        },
        watch: {
          "haveDataToShow.icons": function haveDataToShowIcons() {
            $("#service-icons").css("opacity", 0.0).fadeTo(500, 1);
            this.$nextTick(function () {
              return Site.optionalTranslateSelect();
            });
          },
          "haveDataToShow.infoPanel": function haveDataToShowInfoPanel() {
            $("#info-panel").css("opacity", 0.0).fadeTo(500, 1);
          },
          limit: function limit(v) {
            if (v && v.googleTranslate) {
              this.$nextTick(function () {
                if (Site.translateEnabled === null) {
                  Site.translateEnabled = true;
                }
              });
            }
          },
          limitAvailable: function limitAvailable() {
            $("#ftp_unlock_fade").css("opacity", 0.0).fadeTo(500, 1);
          },
          packageId: function packageId(v, o) {
            if (v != o) {
              $.ajax("/o/package?selector[id]=".concat(v)).done(function (result) {
                return location.href = "/services/".concat(result[0].oid, "/service-overview");
              });
            }
          },
          searchString: function searchString(v) {
            this.$nextTick(function () {
              if (v) {
                $("ul.icons__list").each(function () {
                  if ($(this).children().length > 0) {
                    $(this).prev(".section-row-title").show();
                    $(this).show();
                  } else {
                    $(this).prev(".section-row-title").hide();
                    $(this).hide();
                  }
                });
              } else {
                $("ul.icons__list").each(function () {
                  $(this).show();
                  $(this).prev(".section-row-title").show();
                });
              }
            });
          },
          web: function web(v) {
            this.primaryNameDNSStatus = new DNSCheckHeadless(v.name, this.packageId, v.hasParent);
            this.password = v && v.ftp_credentials && v.ftp_credentials.length ? v.ftp_credentials[0].password : null;
          }
        },
        methods: {
          changeMasterFTPPassword: function changeMasterFTPPassword() {
            return this.ftpaccount.changePassword(this.password).done(function () {
              ShowNotification.success("Successfully changed your FTP password.");
            }).fail(function () {
              return ShowNotification.fail("Failed to update your FTP password.");
            });
          },
          domainFunctionClicked: function domainFunctionClicked(url) {
            var _this2 = this;
            this.selectName(function (name) {
              var domain = _this2.domains.find(function (domain) {
                return domain.name == name;
              });
              return "/domain/".concat(domain.oid, "/").concat(url);
            }, this.domains.map(function (domain) {
              return domain.name;
            }));
          },
          domainSearch: function domainSearch() {
            location.href = "/domain-search?domain=".concat(this.name);
          },
          gotoFileManager: function gotoFileManager() {
            var _this3 = this;
            return _asyncToGenerator(_regenerator().m(function _callee() {
              var web, primary_ftp_credentials, real_ftp_server, file_manager_url, fileManagerWindow;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!_this3.web) {
                      _context.n = 1;
                      break;
                    }
                    web = _this3.web;
                    _context.n = 3;
                    break;
                  case 1:
                    _context.n = 2;
                    return $.ajax({
                      method: "get",
                      url: "/a/package/".concat(_this3.packageId, "/web"),
                      async: false
                    });
                  case 2:
                    web = _context.v;
                  case 3:
                    primary_ftp_credentials = web.ftp_credentials && web.ftp_credentials[0] && {
                      username: web.ftp_credentials[0].username,
                      initialPassword: web.ftp_credentials[0].password
                    };
                    if (primary_ftp_credentials) {
                      _context.n = 4;
                      break;
                    }
                    throw new Error("Unable to access file manager credentials");
                  case 4:
                    real_ftp_server = web.info && (web.info.ftpserver || "ftp.stackcp.com");
                    file_manager_url = "".concat(_this3.brand.fileManagerUrlPrefix, "/v2/#/c/") + [real_ftp_server, primary_ftp_credentials.username, php_urlencode(btoa(JSON.stringify({
                      t: "ftp",
                      c: {
                        v: 1,
                        p: primary_ftp_credentials.initialPassword
                      }
                    })))].join("/");
                    fileManagerWindow = window.open(file_manager_url, "_blank");
                  case 5:
                    return _context.a(2);
                }
              }, _callee);
            }))();
          },
          gotoWebBuilder: function gotoWebBuilder() {
            var _this4 = this;
            $.ajax({
              method: "get",
              url: "/a/package/".concat(this.packageId, "/web/websiteBuilderSso"),
              async: false
            }).done(function (sso) {
              if (sso.match(/stackcp.com/)) {
                window.open(sso);
              } else {
                window.open(_this4.brand.webBuilderUrlPrefix + sso);
              }
            }).fail(function () {
              return ShowNotification.fail("Web Builder login failed, please try again later.");
            });
          },
          gotoWebStats: function gotoWebStats(type) {
            var _this5 = this;
            return _asyncToGenerator(_regenerator().m(function _callee2() {
              var web, _t;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    _context2.p = 0;
                    _context2.n = 1;
                    return $.ajax({
                      dataType: "json",
                      method: "get",
                      url: "/a/package/".concat(_this5.packageId, "/web"),
                      async: false
                    });
                  case 1:
                    web = _context2.v;
                    if (web.info) {
                      _context2.n = 2;
                      break;
                    }
                    throw new Error("Platform error getting web stats URL");
                  case 2:
                    window.open(web.info.statsUrls[type]);
                    _context2.n = 4;
                    break;
                  case 3:
                    _context2.p = 3;
                    _t = _context2.v;
                    ShowNotification.fail("Unable to retrieve your web stats, please try again later.");
                  case 4:
                    return _context2.a(2);
                }
              }, _callee2, null, [[0, 3]]);
            }))();
          },
          platformName: function platformName(val) {
            switch (val) {
              case 'virtual':
                return "Managed VPS";
              case 'wordpress':
                return "WordPress";
              default:
                return val.toLowerCase().replace(/^./, function (m) {
                  return m.toUpperCase();
                });
            }
          },
          reloadFtpAccountDetails: function reloadFtpAccountDetails() {
            var _this6 = this;
            this.reloadingFtpAccountDetails = true;
            $.ajax("/x/package/".concat(this.packageId, "/web/ftpusers")).done(function (r) {
              var primaryFtp = r.find(function (ftpacc) {
                return ftpacc.isPrimary;
              });
              if (primaryFtp) {
                _this6.ftpaccount = new FTPAccount(_this6.packageId, primaryFtp);
              } else {
                _this6.ftpaccount = null;
              }
            }).always(function () {
              return _this6.reloadingFtpAccountDetails = false;
            });
          },
          selectName: function selectName(f, names) {
            if (names.length == 1) {
              this.modalNames = null;
              location.href = f(names[0]);
            } else {
              this.expandLink = f;
              this.modalNames = names;
            }
          },
          viewDns: function viewDns() {
            this.selectName(function (domain) {
              return "/services/".concat(oid, "/manage-dns/").concat(domain);
            }, this.dnsServiceNames);
          }
        },
        mounted: function mounted() {
          var _this7 = this;
          $.ajax("/a/package/".concat(this.packageId, "/web")).done(function (web) {
            var _$;
            web.packageId = _this7.packageId;
            _this7.web = new Web(web);
            if (document.title.match(/-/)) {
              var t = document.title;
              document.title = "".concat(t, " - ").concat(web.name);
            }
            $.ajax("/a/package/".concat(_this7.packageId, "/web/homeDirectory")).done(function (data) {
              return _this7.homeDirectory = data;
            });
            $.ajax("/a/package/".concat(_this7.packageId, "/web/subdomains")).done(function (result) {
              _this7.extraUsage.subdomains = Object.keys(result).length;
            });
            var emailCount = 0;
            (_$ = $).when.apply(_$, _toConsumableArray(web.names.map(function (wn) {
              return $.ajax("/a/package/".concat(_this7.packageId, "/email/").concat(wn, "/mailbox")).done(function (result) {
                if (result.mailbox) {
                  emailCount += result.mailbox.length;
                }
              });
            }))).done(function () {
              return _this7.extraUsage.mailboxCount = emailCount;
            });
            $.ajax("/a/stackNotifications/onpage").done(function (n) {
              return _this7.notifications = n;
            });
          });
          $.ajax("/a/package/".concat(this.packageId, "/domain")).done(function (domains) {
            return _this7.domains = domains;
          });
          $.ajax({
            url: "/a/package/".concat(this.packageId, "/web/oneclick"),
            cache: false
          }).done(function (oneclicks) {
            return _this7.oneclicks = oneclicks;
          });
          $.ajax("/a/package/".concat(this.packageId, "/dns")).done(function (dns) {
            return _this7.dnsServiceNames = Object.keys(dns);
          });
          $.ajax("/a/package/".concat(this.packageId, "/limits")).done(function (limits) {
            _this7.limit = ServiceLimitSupport.realLimits(limits);
          });
          $.ajax({
            method: "head",
            url: "/a/package"
          }).done(function (r, s, jqxhr) {
            var l = jqxhr.getResponseHeader("X-Collection-Length");
            if (l !== null) {
              _this7.serviceCounts["package"] = l;
            }
          });
          $.ajax({
            method: "get",
            url: "/a/package",
            data: {
              selector: {
                id: this.packageId
              },
              purpose: "web",
              fields: ["name", "packageTypeName", "web.platform"]
            }
          }).done(function (results) {
            var r = results[0];
            if (r) {
              _this7.name = r.name;
              _this7.packageTypeName = r.packageTypeName || "";
              _this7.platform = r.web.platform;
            }
          }).done(function () {
            if (_this7.platform == 'wordpress') {
              $.ajax("/x/package/".concat(_this7.packageId, "/web/wordpressVersion")).done(function (version) {
                _this7.wordpressIsInstalled = version;
              }).fail(function () {
                _this7.wordpressIsInstalled = false;
              });
            }
            if (_this7.platform == 'virtual') {
              $.ajax("/x/package/".concat(_this7.packageId, "/web/profileId")).done(function (profileId) {
                _this7.profileId = profileId;
                if (profileId == 2) {
                  $.ajax("/x/package/".concat(_this7.packageId, "/web/wordpressVersion")).done(function (version) {
                    _this7.wordpressIsInstalled = version;
                  }).fail(function () {
                    _this7.wordpressIsInstalled = false;
                  });
                }
              });
            }
          });
          $.ajax("/a/service/managed_vps").done(function (r) {
            return _this7.managedVpsService = r;
          });
          this.reloadFtpAccountDetails();
        },
        components: {
          ftpUnlock: FTPUnlock,
          pieChart: PieChart,
          vueSelect: VueSelect,
          vueQuota: VueQuota,
          manageIcon: ManageIcon
        }
      });
    }
  }]);
}();
//# sourceMappingURL=service-overview.js.map
