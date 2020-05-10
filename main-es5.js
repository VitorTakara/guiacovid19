function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guide-detail/guide-detail.component */
    "./src/app/guide-detail/guide-detail.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'guia/:id',
      component: _guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_3__["GuideDetailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: false
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: false
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'squad8dobem';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "app-content", "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _hamburger_icon_hamburger_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hamburger-icon/hamburger-icon.component */
    "./src/app/hamburger-icon/hamburger-icon.component.ts");
    /* harmony import */


    var _guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guide-detail/guide-detail.component */
    "./src/app/guide-detail/guide-detail.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _hamburger_icon_hamburger_icon_component__WEBPACK_IMPORTED_MODULE_9__["HamburgerIconComponent"], _guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_10__["GuideDetailComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _hamburger_icon_hamburger_icon_component__WEBPACK_IMPORTED_MODULE_9__["HamburgerIconComponent"], _guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_10__["GuideDetailComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 57,
      vars: 0,
      consts: [[1, "footer"], [1, "wrapper", "container"], [1, "section"], [1, "title"], [1, "contact"], ["href", "#", "target", "_blank"], [1, "section", "_text-center"], ["type", "button", 1, "btn"], [1, "logo"], ["src", ""]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MAPA DO SITE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Entenda Tudo Sobre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fake News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mapa De Infec\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DESENVOLVIDO COM \u2764\uFE0F POR:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Maur\xEDcio Munhoz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Marcelle sobrenome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nath\xE1lia Lopes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Brayan Kurahara");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lucas Cordeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Vitor Takara");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "DENUNCIE AS FAKE NEWS AQUI!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guide-detail/guide-detail.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/guide-detail/guide-detail.component.ts ***!
    \********************************************************/

  /*! exports provided: GuideDetailComponent */

  /***/
  function srcAppGuideDetailGuideDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuideDetailComponent", function () {
      return GuideDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_assets_mock_guides_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/assets/mock/guides-details */
    "./src/assets/mock/guides-details.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GuideDetailComponent_a_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuideDetailComponent_a_16_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var shareBtn_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.shareGuide(shareBtn_r10.type, shareBtn_r10.link);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var shareBtn_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", shareBtn_r10.icon);
      }
    }

    function GuideDetailComponent_p_23_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13.step);
      }
    }

    function GuideDetailComponent_p_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GuideDetailComponent_p_23_span_1_Template, 2, 1, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-is-step", p_r13.step)("-is-last-step", p_r13.isLastStep);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r13.step);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r13.paragraph, "");
      }
    }

    function GuideDetailComponent_li_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r16);
      }
    }

    function GuideDetailComponent_a_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var shareBtn_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", shareBtn_r17.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shareBtn_r17.icon);
      }
    }

    function GuideDetailComponent_a_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuideDetailComponent_a_34_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return ctx_r18.goToNextGuide(ctx_r18.nextGuide.id, _r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r9.nextGuide == null ? null : ctx_r9.nextGuide.id, ". ", ctx_r9.nextGuide == null ? null : ctx_r9.nextGuide.title, " ");
      }
    }

    var GuideDetailComponent =
    /*#__PURE__*/
    function () {
      function GuideDetailComponent(route, router) {
        _classCallCheck(this, GuideDetailComponent);

        this.route = route;
        this.router = router;
        this.guides = src_assets_mock_guides_details__WEBPACK_IMPORTED_MODULE_1__["GUIDE_DETAILS"];
        this.nextGuide = null;
      }

      _createClass(GuideDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          try {
            // Testa se ID é convertivel para Number
            if (!/^\d+$/.test(this.route.snapshot.paramMap.get("id"))) throw new Error();
          } catch (_a) {
            console.error("O valor passado de parametro provavelmente não é um número válido. Irá redirecionar para HOME");
            this.router.navigate(['home']);
          }

          this.GUIDE_ID = parseFloat(this.route.snapshot.paramMap.get("id")); // Carrega o Guia

          this.loadGuide();
        }
      }, {
        key: "loadGuide",
        value: function loadGuide() {
          var GUIDE_ID = this.GUIDE_ID;

          if (GUIDE_ID > 8) {
            this.router.navigate(['home']); // Apenas um fallback se o ID for maior que 8. (Não temos ainda mais do que 8 guides)
          } // Itera guides, atribui guide de acordo com o ID atual e seleciona o próximo guide


          for (var i in this.guides) {
            if (this.guides[i].id === GUIDE_ID) {
              this.guide = this.cloneObject(this.guides[i]);

              if (GUIDE_ID < 8) {
                var NEXT_GUIDE_ID = parseInt(i) + 1;
                this.nextGuide = this.cloneObject(this.guides[NEXT_GUIDE_ID]);
              } else {
                this.nextGuide = null;
              }
            }
          }
        }
      }, {
        key: "goToNextGuide",
        value: function goToNextGuide(id, el) {
          this.router.navigate(["guia/".concat(id)]);
          this.GUIDE_ID = id;
          this.loadGuide();
          this.scrollToElement(el);
        }
      }, {
        key: "cloneObject",
        value: function cloneObject(src) {
          return JSON.parse(JSON.stringify(src));
        }
      }, {
        key: "scrollToElement",
        value: function scrollToElement(el) {
          setTimeout(function () {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
          }, 100);
        }
      }, {
        key: "shareGuide",
        value: function shareGuide(type, url) {
          if (type === "facebook") {
            var w = 630;
            var h = 360;
            var left = screen.width / 2 - 630 / 2;
            var top = screen.height / 2 - 360 / 2;
            window.open('http://www.facebook.com/sharer.php?u=' + url, 'Compartilhar no facebook', 'toolbar=no, location=no, directories=no, status=no, ' + 'menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
          }
        }
      }]);

      return GuideDetailComponent;
    }();

    GuideDetailComponent.ɵfac = function GuideDetailComponent_Factory(t) {
      return new (t || GuideDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    GuideDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuideDetailComponent,
      selectors: [["app-guide-detail"]],
      decls: 35,
      vars: 15,
      consts: [[1, "guide-detail", "container"], ["guia", ""], [1, "header"], [1, "title"], [1, "subtitle"], [1, "time"], [1, "upper-thumb"], [1, "listen"], [1, "text"], [1, "play", "icon-play"], [1, "share"], ["class", "icon", 3, "click", 4, "ngFor", "ngForOf"], [1, "thumb"], [1, "img-wrapper"], [1, "img", 3, "alt", "src"], [1, "description"], [1, "guide"], ["class", "paragraph", 3, "-is-step", "-is-last-step", 4, "ngFor", "ngForOf"], [1, "small-title"], [1, "references"], [4, "ngFor", "ngForOf"], [1, "share-next"], [3, "href", 4, "ngFor", "ngForOf"], ["class", "next", 4, "ngIf"], [1, "icon", 3, "click"], [3, "ngClass"], [1, "paragraph"], ["class", "step", 4, "ngIf"], [1, "step"], ["target", "_blank", 1, "link", 3, "href"], [3, "href"], [1, "next"], ["type", "button", 1, "btn", 3, "click"]],
      template: function GuideDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "time", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OU\xC7A AGORA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GuideDetailComponent_a_16_Template, 2, 1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GuideDetailComponent_p_23_Template, 3, 6, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "REFER\xCANCIAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GuideDetailComponent_li_27_Template, 3, 2, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "COMPARTILHE E AJUDE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GuideDetailComponent_a_33_Template, 2, 2, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GuideDetailComponent_a_34_Template, 3, 2, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.guide == null ? null : ctx.guide.id, ". ", ctx.guide == null ? null : ctx.guide.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.guide == null ? null : ctx.guide.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, ctx.guide == null ? null : ctx.guide.date), " - ", ctx.guide == null ? null : ctx.guide.readTime, " min de leitura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guide == null ? null : ctx.guide.shareButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.guide == null ? null : ctx.guide.thumb == null ? null : ctx.guide.thumb.alt)("src", ctx.guide == null ? null : ctx.guide.thumb == null ? null : ctx.guide.thumb.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("IMG: ", ctx.guide == null ? null : ctx.guide.thumb == null ? null : ctx.guide.thumb.alt, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guide == null ? null : ctx.guide.paragraphs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guide == null ? null : ctx.guide.references);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guide == null ? null : ctx.guide.shareButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextGuide !== null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlLWRldGFpbC9ndWlkZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuideDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guide-detail',
          templateUrl: './guide-detail.component.html',
          styleUrls: ['./guide-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hamburger-icon/hamburger-icon.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/hamburger-icon/hamburger-icon.component.ts ***!
    \************************************************************/

  /*! exports provided: HamburgerIconComponent */

  /***/
  function srcAppHamburgerIconHamburgerIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HamburgerIconComponent", function () {
      return HamburgerIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HamburgerIconComponent =
    /*#__PURE__*/
    function () {
      function HamburgerIconComponent() {
        _classCallCheck(this, HamburgerIconComponent);

        this.menuAberto = false;
      }

      _createClass(HamburgerIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HamburgerIconComponent;
    }();

    HamburgerIconComponent.ɵfac = function HamburgerIconComponent_Factory(t) {
      return new (t || HamburgerIconComponent)();
    };

    HamburgerIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HamburgerIconComponent,
      selectors: [["app-hamburger-icon"]],
      inputs: {
        menuAberto: "menuAberto"
      },
      decls: 8,
      vars: 2,
      consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "320px", "height", "220.5px", "viewBox", "0 0 32 22.5", "enable-background", "new 0 0 32 22.5", 0, "xml", "space", "preserve", 1, "inline-svg"], [1, "svg-menu-toggle"], ["d", "M20.945,8.75c0,0.69-0.5,1.25-1.117,1.25H3.141c-0.617,0-1.118-0.56-1.118-1.25l0,0\n                   c0-0.69,0.5-1.25,1.118-1.25h16.688C20.445,7.5,20.945,8.06,20.945,8.75L20.945,8.75z", 1, "bar"], ["d", "M20.923,15c0,0.689-0.501,1.25-1.118,1.25H3.118C2.5,16.25,2,15.689,2,15l0,0c0-0.689,0.5-1.25,1.118-1.25 h16.687C20.422,13.75,20.923,14.311,20.923,15L20.923,15z", 1, "bar"], ["d", "M20.969,21.25c0,0.689-0.5,1.25-1.117,1.25H3.164c-0.617,0-1.118-0.561-1.118-1.25l0,0\n                   c0-0.689,0.5-1.25,1.118-1.25h16.688C20.469,20,20.969,20.561,20.969,21.25L20.969,21.25z", 1, "bar"], ["width", "30", "height", "30", "fill", "none"]],
      template: function HamburgerIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-active", ctx.menuAberto);
        }
      },
      styles: [".svg-menu-toggle[_ngcontent-%COMP%] {\n  fill: #151522;\n  pointer-events: all;\n  cursor: pointer;\n}\n.svg-menu-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  transform: rotate(0) translateY(0) translateX(0);\n  opacity: 1;\n  transform-origin: 20px 10px;\n  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;\n}\n.svg-menu-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(1) {\n  transform-origin: 20px 10px;\n}\n.svg-menu-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(3) {\n  transform-origin: 20px 20px;\n}\n.svg-menu-toggle.-active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(1) {\n  transform: rotate(-45deg) translateY(0) translateX(0);\n}\n.svg-menu-toggle.-active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(2) {\n  opacity: 0;\n}\n.svg-menu-toggle.-active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(3) {\n  transform: rotate(45deg) translateY(0em) translateX(0em);\n}\n.inline-svg[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 70px;\n  height: 80px;\n  padding: 10px 10px 15px 15px;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #4c4c4c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFtYnVyZ2VyLWljb24vQzpcXFVzZXJzXFxUYWthcmFcXEdvb2dsZSBEcml2ZVxcUHJvamV0b3NcXDhkb2JlbS9zcmNcXGFwcFxcaGFtYnVyZ2VyLWljb25cXGhhbWJ1cmdlci1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oYW1idXJnZXItaWNvbi9oYW1idXJnZXItaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjtBRENFO0VBRUUsZ0RBQUE7RUFDQSxVQUFBO0VBRUEsMkJBQUE7RUFFQSxnRUFBQTtBQ0NKO0FERUU7RUFFRSwyQkFBQTtBQ0FKO0FER0U7RUFFRSwyQkFBQTtBQ0RKO0FETUU7RUFFRSxxREFBQTtBQ0hKO0FETUU7RUFDRSxVQUFBO0FDSko7QURPRTtFQUVFLHdEQUFBO0FDTEo7QURTQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ05GO0FEU0E7RUFDRSx5QkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvaGFtYnVyZ2VyLWljb24vaGFtYnVyZ2VyLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ZnLW1lbnUtdG9nZ2xlIHtcclxuICBmaWxsOiByZ2IoMjEsMjEsMzQpO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7IC8vbmVlZHMgdG8gYmUgdGhlcmUgc28gdGhlIGhvdmVyIHdvcmtzXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAuYmFyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCkgdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCkgdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMjBweCAxMHB4O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMjBweCAxMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dCwgb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmJhcjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDIwcHggMTBweDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDIwcHggMTBweDtcclxuICB9XHJcblxyXG4gIC5iYXI6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAyMHB4IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyMHB4IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ZnLW1lbnUtdG9nZ2xlLi1hY3RpdmUge1xyXG4gIC5iYXI6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuXHJcbiAgLmJhcjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLmJhcjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKDBlbSkgdHJhbnNsYXRlWCgwZW0pO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVkoMGVtKSB0cmFuc2xhdGVYKDBlbSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5saW5lLXN2ZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzRjNGM7XHJcbn0iLCIuc3ZnLW1lbnUtdG9nZ2xlIHtcbiAgZmlsbDogIzE1MTUyMjtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN2Zy1tZW51LXRvZ2dsZSAuYmFyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKSB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAyMHB4IDEwcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDIwcHggMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uc3ZnLW1lbnUtdG9nZ2xlIC5iYXI6bnRoLW9mLXR5cGUoMSkge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDIwcHggMTBweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMjBweCAxMHB4O1xufVxuLnN2Zy1tZW51LXRvZ2dsZSAuYmFyOm50aC1vZi10eXBlKDMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAyMHB4IDIwcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDIwcHggMjBweDtcbn1cblxuLnN2Zy1tZW51LXRvZ2dsZS4tYWN0aXZlIC5iYXI6bnRoLW9mLXR5cGUoMSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKTtcbn1cbi5zdmctbWVudS10b2dnbGUuLWFjdGl2ZSAuYmFyOm50aC1vZi10eXBlKDIpIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5zdmctbWVudS10b2dnbGUuLWFjdGl2ZSAuYmFyOm50aC1vZi10eXBlKDMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSgwZW0pIHRyYW5zbGF0ZVgoMGVtKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVkoMGVtKSB0cmFuc2xhdGVYKDBlbSk7XG59XG5cbi5pbmxpbmUtc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweCAxNXB4O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNGM0Yztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HamburgerIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hamburger-icon',
          templateUrl: './hamburger-icon.component.html',
          styleUrls: ['./hamburger-icon.component.scss']
        }]
      }], function () {
        return [];
      }, {
        menuAberto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_assets_mock_guides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/assets/mock/guides */
    "./src/assets/mock/guides.ts");
    /* harmony import */


    var src_assets_mock_aside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/mock/aside */
    "./src/assets/mock/aside.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_article_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LER MAIS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var guide_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", guide_r2.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", guide_r2.alt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](guide_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](guide_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#/" + guide_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_aside_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LER MAIS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var asideItem_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", asideItem_r3.alt)("src", asideItem_r3.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r3.subtitle);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.guides = src_assets_mock_guides__WEBPACK_IMPORTED_MODULE_1__["GUIDES"];
        this.asideItems = src_assets_mock_aside__WEBPACK_IMPORTED_MODULE_2__["ASIDEITEMS"];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 12,
      vars: 2,
      consts: [[1, "home"], [1, "start"], [1, "main"], [1, "title-subtitle"], [1, "title"], [1, "subtitle"], [1, "small-cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "aside"], ["class", "aside-cards", 4, "ngFor", "ngForOf"], [1, "card"], [1, "thumbnail"], [1, "image", 3, "src", "alt"], [1, "info"], [1, "description"], [1, "link", 3, "href"], [1, "aside-cards"], [1, "background-img", 3, "alt", "src"], [1, "title-description"], [1, "read-more"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ENTENDA TUDO SOBRE O COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TUDO O QUE VOC\xCA PRECISA SABER DE MANEIRA SIMPLES, OBJETIVA E ENRIQUECEDORA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_article_9_Template, 10, 5, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_aside_11_Template, 10, 4, "aside", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.guides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asideItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hamburger_icon_hamburger_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../hamburger-icon/hamburger-icon.component */
    "./src/app/hamburger-icon/hamburger-icon.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function MenuComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ENTENDA TUDO SOBRE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FAKE NEWS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function MenuComponent_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);

        this.menuAberto = false; // true: Icone do hamburguer fica "X"
      }

      _createClass(MenuComponent, [{
        key: "openMenu",
        value: function openMenu() {
          this.menuAberto = !this.menuAberto;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 12,
      vars: 5,
      consts: [["links", ""], [1, "menu"], [1, "wrapper", "container"], [1, "logo"], ["src", "https://placekitten.com/260/120", 1, "image"], [1, "links-desktop"], [4, "ngTemplateOutlet"], [1, "menu-mobile"], [3, "menuAberto", "click"], [1, "links-mobile"], ["routerLink", "/home", "routerLinkActive", "-active", 1, "link"], ["href", "#", 1, "link"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuComponent_ng_template_0_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_ng_container_7_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-hamburger-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_app_hamburger_icon_click_9_listener() {
            return ctx.openMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_ng_container_11_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-active", ctx.menuAberto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuAberto", ctx.menuAberto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r20);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _hamburger_icon_hamburger_icon_component__WEBPACK_IMPORTED_MODULE_2__["HamburgerIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/mock/aside.ts":
  /*!**********************************!*\
    !*** ./src/assets/mock/aside.ts ***!
    \**********************************/

  /*! exports provided: ASIDEITEMS */

  /***/
  function srcAssetsMockAsideTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ASIDEITEMS", function () {
      return ASIDEITEMS;
    });

    var ASIDEITEMS = [{
      thumb: "../../assets/images/thumb/covid_fakenews_noticias_falsas.jpg",
      title: "É FAKE NEWS!",
      subtitle: "NÃO ACREDITE EM TUDO QUE VOCÊ RECEBE. SAIBA AGORA O QUE É VERDADEIRO!",
      alt: "Imagem ilustativa de uma pessoa interagindo com seu celular onde nele mostra notícias referentes ao vírus",
      link: "#"
    }, {
      thumb: "../../assets/images/thumb/covid_infectados_mortes.jpg",
      title: "CONFIRA O NÚMERO DE INFECTADOS!",
      alt: "Imagem ilustrativa de diversos caixões sendo tombados",
      subtitle: "NO BRASIL E NO MUNDO!",
      link: "#"
    }];
    /***/
  },

  /***/
  "./src/assets/mock/guides-details.ts":
  /*!*******************************************!*\
    !*** ./src/assets/mock/guides-details.ts ***!
    \*******************************************/

  /*! exports provided: GUIDE_DETAILS */

  /***/
  function srcAssetsMockGuidesDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GUIDE_DETAILS", function () {
      return GUIDE_DETAILS;
    });

    var GUIDE_DETAILS = [{
      id: 1,
      title: "O QUE É A COVID-19",
      subtitle: "Saiba o que é COVID-19, de onde veio e como chegou até o Brasil",
      date: "2020-03-24",
      readTime: 2,
      audio: "",
      shareButtons: [{
        icon: "icon-facebook",
        type: "facebook",
        link: "http://www.guiacovid19.com.br/#/guia/1"
      }, {
        icon: "icon-whatsapp",
        link: "#"
      }],
      thumb: {
        img: "../../assets/images/banners/1_o_que_e_covid.jpg",
        alt: "Imagem ilustrativa de uma pessoa com equipamento de proteção segurando um sugador de vírus"
      },
      paragraphs: [{
        paragraph: "Coronavirus disease 2019 (COVID-19), é o nome que se deu para o novo coronavírus SARS-cov-2. É uma doença que afeta o trato respiratório, assim como a gripe comum, porém somados à complicações respiratórias mais graves."
      }, {
        paragraph: "A família coronaviridae apresenta diversas espécies de coronavírus, mas poucas destas, infectam o homem. No caso do COVID-19, o vírus se assemelha à um tipo de coronavírus em morcegos, no entanto ainda não se sabe se a doença decorreu de mutações naturais ou não."
      }, {
        paragraph: "De acordo com a OMS (Organização Mundial de Saúde) aproximadamente 80% das pessoas que contraírem a COVID-19, podem não apresentar nenhum sintoma, cerca de 20% dos casos podem precisar de atendimento hospitalar para tratar de dificuldades respiratórias não graves e aproximadamente 5% podem necessitar de tratamento para complicações respiratórias graves."
      }],
      references: ["https://coronavirus.saude.gov.br/", "https://www.nature.com/articles/s41591-020-0820-9"]
    }, {
      id: 2,
      title: "Como a COVID-19 é transmitida?",
      subtitle: "O SARS-cov-2 é um virus respiratório, descubra como acontece a transmissão.",
      date: "2020-03-24",
      readTime: 2,
      audio: "",
      shareButtons: [{
        icon: "X",
        link: "#"
      }, {
        icon: "O",
        link: "#"
      }],
      thumb: {
        img: "../../assets/images/banners/2_como_e_transmitido.jpg",
        alt: "Imagem ilustrativa de pessoas aglomeradas em um espaço vúlnerável"
      },
      paragraphs: [{
        paragraph: "O Sars-cov-2 é um vírus respiratório,  ou seja, fica alojado em locais como nariz, boca, traquéia, garganta e pulmões.  Quando uma pessoa com COVID-19 fala, tosse ou espirra, o vírus é carregado por pequenas partículas de água."
      }, {
        paragraph: "As gotículas com o vírus podem ser inaladas diretamente por outra pessoa, ou se depositarem em superfícies(maçanetas, celulares, etc...). Pesquisas indicam que objetos de plástico e aço inoxidável,  podem transmitir o vírus por 3 dias."
      }, {
        paragraph: "Existem, embora raramente ocorra, casos de COVID-19 transmitido verticalmente, ou seja, de mãe para filho, durante a gravidez. Quanto aos animais domésticos, não existem comprovações de que possam transmitir o COVD-19. Houveram casos de felinos que contraíram  COVID-19 de seus donos, no entanto, os sintomas foram brandos."
      }, {
        paragraph: "Alguns estudos na China apontam que gatos com donos infectados, se contaminaram com a COVID-19, porém nenhum animal apresentou sintomas e não há nenhum estudo que conclua que os animais possam transmitir a doença, do mesmo modo que não existem fontes que demonstram que alimentos possam transmitir o vírus."
      }],
      references: ["https://coronavirus.saude.gov.br/sobre-a-doenca#transmissao", "https://drauziovarella.uol.com.br/coronavirus/posso-estar-infectado-com-coronavirus-e-nao-ter-sintomas/", "https://saude.abril.com.br/medicina/como-o-coronavirus-e-transmitido-e-por-quanto-tempo-ele-resiste-por-ai/", "http://portal.anvisa.gov.br/noticias/-/asset_publisher/FXrpx9qY7FbU/content/o-novo-coronavirus-pode-ser-transmitido-por-alimentos-/219201/pop_up?_101_INSTANCE_FXrpx9qY7FbU_viewMode=print&_101_INSTANCE_FXrpx9qY7FbU_languageId=pt_BR", "https://theconversation.com/can-your-pets-get-coronavirus-and-can-you-catch-it-from-them-135611"]
    }, {
      id: 3,
      title: "O que são os Grupos de Risco?",
      subtitle: "As pessoas mais frágeis devem ser protegidas, saiba quem são elas",
      date: "2020-03-24",
      readTime: 5,
      audio: "",
      shareButtons: [{
        icon: "X",
        link: "#"
      }, {
        icon: "O",
        link: "#"
      }],
      thumb: {
        img: "../../assets/images/banners/3_grupo_risco.jpg",
        alt: "Imagem de um senhor sentado tomando seu vinho dentro de um restaurante ou bar"
      },
      paragraphs: [{
        paragraph: "São grupos de pessoas que caso se contaminem com COVID-19, estão mais propensos a maiores complicações e morrer em decorrência da COVID-19, eles são:"
      }, {
        step: "1.",
        paragraph: "Diabéticos;"
      }, {
        step: "2.",
        paragraph: "Hipertensos;"
      }, {
        step: "3.",
        paragraph: "Asmaticos;"
      }, {
        step: "4.",
        paragraph: "Indivíduos acima de 60 anos;"
      }, {
        step: "5.",
        paragraph: "Portadores de doenças renais crônicas;"
      }, {
        step: "6.",
        paragraph: "Pessoas que passam por tratamentos de condições autoimune como lúpus e câncer;"
      }, {
        step: "7.",
        isLastStep: true,
        paragraph: "Gestantes."
      }, {
        paragraph: "Um levantamento feito na Itália que mostra a taxa de mortalidade,  por faixa etária ajuda a ilustrar:"
      }, {
        step: "•",
        paragraph: "90 anos ou mais: 25,2%"
      }, {
        step: "•",
        paragraph: "80 a 89 anos: 30,5%"
      }, {
        step: "•",
        paragraph: "70 a 79 anos: 24%"
      }, {
        step: "•",
        paragraph: "60 a 69 anos: 9,5%"
      }, {
        step: "•",
        paragraph: "50 a 59 anos: 2,5%"
      }, {
        step: "•",
        paragraph: "40 a 49 anos: 0,9%"
      }, {
        step: "•",
        paragraph: "30 a 39 anos: 0,3%"
      }, {
        step: "•",
        paragraph: "Até 29 anos: 0,1%"
      }, {
        step: "•",
        paragraph: "Não reportados: 0,8%"
      }, {
        isLastStep: true,
        step: "•",
        paragraph: "Total de mortes: 19.508"
      }, {
        paragraph: "Outro levantamento foi feito por condições pré existentes:"
      }, {
        step: "•",
        paragraph: "Doenças cardiovasculares: 10,5%"
      }, {
        step: "•",
        paragraph: "Diabetes: 7,3%"
      }, {
        step: "•",
        paragraph: "Doença respiratória crônica: 6,3%"
      }, {
        step: "•",
        paragraph: "Hipertensão: 6,0%"
      }, {
        step: "•",
        paragraph: "Câncer: 5,6%"
      }, {
        isLastStep: true,
        step: "•",
        paragraph: "Sem condição pré-existente: 0,9%"
      }],
      references: ["https://saude.abril.com.br/medicina/coronavirus-novos-dados-sobre-grupos-de-risco/", "https://saude.ig.com.br/2020-02-29/coronavirus-estudo-exibe-taxa-de-mortalidade-por-idade-e-doencas.html", "https://www.poder360.com.br/coronavirus/conheca-a-faixa-etaria-dos-mortos-por-covid-19-no-brasil-italia-e-espanha/"]
    }, {
      id: 4,
      title: "Como posso me proteger e proteger minha família do novo Coronavírus?",
      subtitle: "Aprenda medidas fundamentais para proteger a si e todos que você ama!",
      date: "2020-03-24",
      readTime: 6,
      audio: "",
      shareButtons: [{
        icon: "X",
        link: "#"
      }, {
        icon: "O",
        link: "#"
      }],
      thumb: {
        img: "../../assets/images/banners/4_protecao.jpg",
        alt: "Imagem de uma escultura utilizando um máscara de proteção"
      },
      paragraphs: [{
        step: "1.",
        paragraph: "Lavar com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%;"
      }, {
        step: "2.",
        paragraph: "Cobrir o nariz e boca com lenço ou com o braço ao tossir ou espirrar, e não com as mãos;"
      }, {
        step: "3.",
        paragraph: "Evitar tocar olhos, nariz e boca, antes de higienizá-las ou quando sair de casa; "
      }, {
        step: "4.",
        paragraph: "Manter uma distância mínima de cerca de 2 metros de qualquer pessoa;"
      }, {
        step: "5.",
        paragraph: "Higienizar com frequência o celular e os brinquedos das crianças;"
      }, {
        step: "6.",
        paragraph: "Não compartilhar objetos de uso pessoal, como talheres, toalhas, pratos e copos;"
      }, {
        step: "7.",
        paragraph: "Manter os ambientes limpos e bem ventilados;"
      }, {
        step: "8.",
        paragraph: "Evitar circulação desnecessária nas ruas ou locais públicos. Se puder, fique em casa;"
      }, {
        step: "9.",
        paragraph: "Utilizar máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência; "
      }, {
        step: "10.",
        paragraph: "o pedir algo via delivery, higienizar a embalagem, e para alimentos, remover da embalagem para consumo, e para alguns apps como o iFood, usar a opção de entrega sem contato."
      }, {
        paragraph: "Existem outras opções que podem substituir o álcool em gel na falta do mesmo.   Lenços umedecidos antissépticos, clorexidina e antisséptico em spray com gluconato de clorexidina."
      }, {
        paragraph: "Se você teve um contato esporádico com a pessoa, mantenha-se em quarentena por 14 dias, atento se você apresentar algum sintoma. Já se a pessoa mora com você, não entre em pânico, siga as seguintes recomendações e tudo ficará bem:"
      }, {
        step: "1.",
        paragraph: "Não compartilhar talheres com outros membros da família;"
      }, {
        step: "2.",
        paragraph: "Não compartilhar produtos de higiene pessoal;"
      }, {
        step: "3.",
        paragraph: "Descartar o material de higiene pessoal em um lixo separado;"
      }, {
        step: "4.",
        paragraph: "A pessoa infectada deverá tirar sua própria roupa de cama;"
      }, {
        step: "5.",
        paragraph: "Desinfetar sempre maçanetas, interruptores, torneiras com álcool 70% ou uma solução de 4 colheres de chá (20mL) de água sanitária para um litro de água;"
      }, {
        step: "6.",
        paragraph: "Desinfetar o cesto de roupa suja ou deixar as roupas em um saco fechado, e descartá-lo após o uso;"
      }, {
        step: "7.",
        paragraph: "Se o tecido permitir, lavar as roupas com água quente;"
      }, {
        step: "8.",
        paragraph: "Pode-se lavar as roupas juntas, mas ao estender, evitar de chacoalhar as roupas;"
      }],
      references: ["https://coronavirus.saude.gov.br/sobre-a-doenca#como-se-proteger", "https://oglobo.globo.com/sociedade/coronavirus/nao-encontra-alcool-gel-para-se-proteger-do-coronavirus-veja-alternativas-24288638", "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2020/04/17/decreto-determina-que-moradores-do-rio-de-janeiro-saiam-as-ruas-de-mascara.htm", "https://g1.globo.com/sp/ribeirao-preto-franca/noticia/2020/04/18/multa-a-morador-que-sair-de-casa-sem-mascara-e-de-r-55-em-ribeirao-preto-diz-prefeitura.ghtml", "https://www.campograndenews.com.br/cidades/capital/quem-nao-usar-mascara-ao-sair-de-casa-pode-responder-por-3-crimes-e-pagar-multa", "https://www.bbc.com/portuguese/geral-5213505", "https://www.semprefamilia.com.br/saude/quarentena-em-casa-pelo-coronavirus-o-que-significa/", "https://www.unimed.coop.br/viver-bem/saude-em-pauta/coronavirus-e-covid-19-perguntas-e-respostas", "https://drauziovarella.uol.com.br/coronavirus/como-limpar-superficies-e-objetos-para-prevenir-o-coronavirus/"]
    }, {
      id: 5,
      title: "Qual a importância do distanciamento social?",
      subtitle: "O distanciamento social é a melhor forma de combater esse inimigo, descubra o motivo!",
      date: "2020-03-24",
      readTime: 1,
      audio: "",
      shareButtons: [{
        icon: "X",
        link: "#"
      }, {
        icon: "O",
        link: "#"
      }],
      thumb: {
        img: "../../assets/images/banners/5_distanciamento_social.jpg",
        alt: "Imagem de 4 pessoas atravessando a rua na faixa de pedestres, porém a imagem foi cortada e afastada em cada pessoa para demonstrar o distânciamento"
      },
      paragraphs: [{
        paragraph: "O distanciamento social é uma medida recomendada por especialistas em saúde do mundo inteiro para diminuir a proliferação da doença, a fim de desacelerar a curva do COVID-19. Isso vai evitar que o sistema de saúde colapse, garantindo que todas as pessoas tenham condições de serem tratadas. E isso é de extrema importância, pois mesmo a mortalidade de COVID-19 não ser tão alta, as pessoas infectadas que precisam de tratamento ficam internadas,  ocupando leitos hospitalares por alguns dias."
      }],
      references: ["https://www.semprefamilia.com.br/saude/por-que-o-distanciamento-social-e-a-melhor-arma-que-temos-para-combater-o-coronavirus/?ref=veja-tambem", "https://www.nature.com/articles/s41591-020-0820-9", "https://www.ufrgs.br/telessauders/posts_coronavirus/qual-a-diferenca-de-distanciamento-social-isolamento-e-quarentena/", "https://www.semprefamilia.com.br/saude/como-se-proteger-coronavirus-onibus-metro-trem/"]
    }, {
      id: 6,
      title: "Quais são os sintomas da COVID-19?",
      subtitle: "Os sintomas são os sinais perceptíveis que uma doença pode causar. Saiba quais são os sintomas da COVID-19",
      date: "2020-03-24",
      readTime: 3,
      audio: "",
      shareButtons: [{
        icon: "X",
        link: "#"
      }, {
        icon: "O",
        link: "#"
      }],
      thumb: {
        img: "../../assets/images/banners/6_sintomas.jpg",
        alt: "Imagem de um termômetro"
      },
      paragraphs: [{
        paragraph: "Os sintomas principais da COVID-19 são:"
      }, {
        step: "1.",
        paragraph: "Febre;"
      }, {
        step: "2.",
        paragraph: "Tosse;"
      }, {
        step: "3.",
        isLastStep: true,
        paragraph: "Dificuldades para respirar."
      }, {
        paragraph: "Outros sintomas menos comuns são:"
      }, {
        step: "1.",
        paragraph: "Dores no corpo;"
      }, {
        step: "2.",
        paragraph: "Congestão nasal;"
      }, {
        step: "3.",
        paragraph: "Coriza;"
      }, {
        step: "4.",
        paragraph: "Dor de garganta;"
      }, {
        step: "5.",
        isLastStep: true,
        paragraph: "Diarréia."
      }, {
        paragraph: "Se necessário, os médicos irão diagnosticar a doença por meio de exames laboratoriais."
      }],
      references: ["https://www.saude.gov.br/o-ministro/746-saude-de-a-a-z/46490-novo-coronavirus-o-que-e-causas-sintomas-tratamento-e-prevencao-3", "https://saude.abril.com.br/medicina/tratamento-do-novo-coronavirus/", "https://coronavirus.saude.gov.br/sobre-a-doenca#transmissao"]
    }, {
      id: 7,
      title: "A Covid-19 tem cura?",
      subtitle: "O novo coronavírus é perigoso, porém não é uma sentença",
      date: "2020-03-24",
      readTime: 4,
      audio: "",
      shareButtons: [{
        icon: "X",
        link: "#"
      }, {
        icon: "O",
        link: "#"
      }],
      thumb: {
        img: "../../assets/images/banners/2_thumb_transmissao.jpg",
        alt: "PESSOAS FAZENDO TRAQUINAGENS NO CENTRO"
      },
      paragraphs: [{
        paragraph: "Sim, até dia 20/04 já são mais de 600 mil pessoas recuperadas no mundo."
      }, {
        paragraph: "Existem alguns medicamentos sendo testados, contudo a forma mais eficaz de se proteger é não ser infectado (tome as medidas sugeridas no nosso guia número 4)!"
      }, {
        paragraph: "Diversos medicamentos são reportados pela mídia, mas JAMAIS se medique sem uma orientação médica!"
      }, {
        paragraph: "Pouco sabemos sobre o futuro da pandemia do COVID-19 para dizermos se essa doença será erradicada, ou se tornará uma doença sazonal como a gripe. Não se sabe sobre quanto tempo uma pessoa permanece imunizada depois de infectada pelo coronavírus ou se podem haver casos de reincidência da doença."
      }, {
        paragraph: "Ainda não existem vacinas, no entanto, diversos países estão se dedicando em criar e produzi-la. Mas, não há previsões sobre quando estarão disponíveis para a população."
      }, {
        paragraph: "Especialistas indicam que se todos os países seguirem as recomendações da OMS, o estado de pandemia (contaminação em escala mundial de uma doença) terminará em junho."
      }],
      references: ["https://oglobo.globo.com/sociedade/coronavirus/epidemiologista-chines-que-lidou-com-sars-afirma-que-pandemia-do-coronavirus-terminara-em-junho-24300192", "https://saude.abril.com.br/medicina/tratamento-do-novo-coronavirus/", "https://www.abrale.org.br/revista-online/coronavirus-no-brasil-e-imunidade/", "https://oglobo.globo.com/sociedade/coronavirus-servico/previna-se-contra-as-fake-news-sobre-coronavirus-24279517", "https://veja.abril.com.br/saude/coronavirus-70-vacinas-em-andamento-com-3-candidatas-principais-diz-oms/", "https://www.bbc.com/portuguese/internacional-51315759", "https://drauziovarella.uol.com.br/coronavirus/peguei-coronavirus-uma-vez-estou-imune/"]
    }, {
      id: 8,
      title: "O que mais preciso saber sobre a COVID-19?",
      subtitle: "Mantenha uma vida saudável, durante a quarentena. Se cuide!",
      date: "2020-03-24",
      readTime: 5,
      audio: "",
      shareButtons: [{
        icon: "icon-facebook",
        link: "#"
      }, {
        icon: "icon-whatsapp",
        link: "#"
      }],
      thumb: {
        img: "../../assets/images/banners/2_thumb_transmissao.jpg",
        alt: "PESSOAS FAZENDO TRAQUINAGENS NO CENTRO"
      },
      paragraphs: [{
        paragraph: "Os planos de saúde com segmentação ambulatorial, hospitalar ou referência, cobrem o teste para a COVID-19 se houver indicação médica, de acordo com o protocolo e as diretrizes definidas pelo Ministério da Saúde."
      }, {
        paragraph: "Neste momento de isolamento social, somados a vários fatores, pode afetar nossa saúde mental. Com isso, devemos redobrar o cuidado conosco e com aqueles que nos cercam, buscando amenizar sintomas de ansiedade através de:"
      }, {
        step: "1.",
        paragraph: "Faça exercícios físicos em casa como alongamentos, aeróbica e o que tem ajudado muitas pessoas nessa quarentena é a prática do Yoga. São alguns minutos que você irá separar do seu dia para fazer esses exercícios e após fazer a primeira vez, verá o quanto se sentirá mais disposto. Ah lembre de respeitar seus limites. Vá com calma!"
      }, {
        step: "2.",
        paragraph: "Evite o bombardeio e o excesso de informações, isso gera ansiedade e medo. É preciso estar bem informado, mas não obcecados e deve-se tomar cuidado com as fake news que circulam pela internet. Escolha um horário do seu dia para se informar. Busque as informações sempre de fontes confiáveis;"
      }, {
        step: "3.",
        paragraph: "Mantenha sua alimentação de uma forma saudável, evite frituras e alimentos muitos gordurosos, bem como bebidas industrializadas, opte por suco natural e tome bastante água. Consuma alimentos ricos em fibras, coma arroz e feijão pelo menos 5 vezes na semana. Aprecie a comida e coma devagar. Consulte um nutricionista online;"
      }, {
        step: "4.",
        paragraph: " Pratique meditação, ela irá ajudar a diminuir o estresse e a ansiedade, além de ser benéfica para o fortalecimento do sistema imunológico. Quando a mente vai bem, o corpo fica mais forte. Comece com meditações guiadas, feche os olhos, se conecte-se com o seu eu, preste atenção na respiração e siga a meditação escolhida por você;"
      }, {
        step: "5.",
        paragraph: "Procure cultivar pensamentos positivos e não deixe que ao longo do dia pensamentos negativos tomem conta de você e nem fique ruminando o medo. Procure sempre pelas pessoas de sua casa ou ligue para um amigo para desabafar e falar sobre o seu dia; "
      }, {
        step: "6.",
        isLastStep: true,
        paragraph: "Procure ajuda de especialistas (psicólogos, psiquiatra) online para te orientar melhor em como lidar com o que estamos passando;"
      }, {
        paragraph: "Nesse período de quarentena, você não está sozinho (a), estamos todos juntos =)"
      }],
      references: ["http://www.ans.gov.br/aans/noticias-ans/consumidor/5405-ans-inclui-exame-para-deteccao-de-coronavirus-no-rol-de-procedimentos-obrigatorios", "https://www.vittude.com/blog/quarentena-como-manter-a-saude-mental/"]
    }];
    /***/
  },

  /***/
  "./src/assets/mock/guides.ts":
  /*!***********************************!*\
    !*** ./src/assets/mock/guides.ts ***!
    \***********************************/

  /*! exports provided: GUIDES */

  /***/
  function srcAssetsMockGuidesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GUIDES", function () {
      return GUIDES;
    });

    var GUIDES = [{
      title: "1. O que é a COVID-19?",
      description: "Saiba o que é COVID-19, de onde veio e como chegou até o Brasil",
      link: "/guia/1",
      alt: "Imagem ilustrativa de uma pessoa com equipamento de proteção segurando um sugador de vírus",
      thumb: "../../assets/images/thumb/1_thumb_o_que_e_covid.jpg"
    }, {
      title: "2. Como a COVID-19 é transmitida?",
      description: "O SARS-cov-2 é um virus respiratório, descubra como acontece a transmissão.",
      link: "/guia/2",
      alt: "Imagem ilustrativa de pessoas aglomeradas em um espaço vúlnerável",
      thumb: "../../assets/images/thumb/2_thumb_transmissao.jpg"
    }, {
      title: "3. O que são os Grupos de Risco?",
      description: "As pessoas mais frágeis devem ser protegidas, saiba quem são elas.",
      link: "/guia/3",
      alt: "Imagem de um senhor sentado tomando seu vinho dentro de um restaurante ou bar",
      thumb: "../../assets/images/thumb/3_thumb_grupo_risco.jpg"
    }, {
      title: "4. Como posso me proteger e proteger minha família do novo Coronavírus?",
      description: "Aprenda medidas fundamentais para proteger a si e todos que você ama!",
      link: "/guia/4",
      alt: "Imagem de uma escultura utilizando um máscara de proteção",
      thumb: "../../assets/images/thumb/4_thumb_protecao.jpg"
    }, {
      title: "5. Qual a importância do distanciamento social?",
      description: "O distanciamento social é a melhor forma de combater esse inimigo, descubra o motivo!",
      link: "/guia/5",
      alt: "Imagem de 4 pessoas atravessando a rua na faixa de pedestres, porém a imagem foi cortada e afastada em cada pessoa para demonstrar o distânciamento",
      thumb: "../../assets/images/thumb/5_thumb_distanciamento_social.jpg"
    }, {
      title: "6. Quais são os sintomas da COVID-19?",
      description: "Os sintomas são os sinais perceptíveis que uma doença pode causar. Saiba quais são os sintomas da COVID-19.",
      link: "/guia/6",
      alt: "Imagem de um termômetro",
      thumb: "../../assets/images/thumb/6_thumb_sintomas.jpg"
    }, {
      title: "7. A Covid-19 tem cura?",
      description: "O novo coronavírus é perigoso, porém não é uma sentença.",
      link: "/guia/7",
      alt: "Imagem ilustrativa",
      thumb: "../../assets/images/thumb/"
    }, {
      title: "8. O que mais preciso saber sobre a COVID-19?",
      description: "Mantenha uma vida saudável, durante a quarentena. Se cuide!",
      link: "/guia/8",
      alt: "Imagem ilustrativa",
      thumb: "../../assets/images/thumb/"
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Takara\Google Drive\Projetos\8dobem\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map