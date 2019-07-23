(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\" fullscreen>\n  <mat-sidenav [mode]=\"sideNavMode\" class=\"sidenav\" #sidenav [opened]=\"sideNavOpened\" style=\"overflow: hidden;\">\n      <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n          <!-- <img src=\"./assets/logo.codetok.png\" width=\"36px\"> -->\n          <h1 class=\"logo\">\n              IND-INVOICES.\n              <span style=\"font-size: 12px;\">com</span>\n          </h1>\n      </mat-toolbar>\n      <app-sidemenu></app-sidemenu>\n  </mat-sidenav>\n  <mat-sidenav-content style=\"z-index: unset;overflow: hidden;\">\n      <mat-drawer-container fullscreen>\n          <mat-drawer mode=\"side\" #drawer class=\"drawer\" [opened]=\"matDrawerOpened\" style=\"overflow: hidden;\">\n              <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n                  <!-- <img src=\"./assets/logo.png\" width=\"36px\"> -->\n                  <h1 class=\"logo\">\n                    II\n                </h1>\n              </mat-toolbar>\n              <app-sidemenu [iconOnly]=\"true\"></app-sidemenu>\n          </mat-drawer>\n          <mat-drawer-content style=\"overflow: hidden;\">\n              <app-toolbar [sidenav]=\"sidenav\" [drawer]=\"drawer\" [matDrawerShow]=\"matDrawerShow\" style=\"z-index: 500\"></app-toolbar>\n              <perfect-scrollbar  style=\"height: calc(100% - 33px);\" >\n                <router-outlet></router-outlet>\n            </perfect-scrollbar>\n          </mat-drawer-content>\n      </mat-drawer-container>\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n               \n          \n          \n  \n  \n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");



var AuthComponent = /** @class */ (function () {
    function AuthComponent(media) {
        this.media = media;
        this.isVisible = true;
        this.visibility = "shown";
        this.sideNavOpened = true;
        this.matDrawerOpened = false;
        this.matDrawerShow = true;
        this.sideNavMode = "side";
    }
    AuthComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? "shown" : "hidden";
    };
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.media.media$.subscribe(function () {
            _this.toggleView();
        });
    };
    AuthComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    AuthComponent.prototype.toggleView = function () {
        if (this.media.isActive("gt-md")) {
            this.sideNavMode = "side";
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive("gt-xs")) {
            this.sideNavMode = "side";
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive("lt-sm")) {
            this.sideNavMode = "over";
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AuthComponent.prototype, "isVisible", void 0);
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-auth",
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _lazyloader_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lazyloader.routes */ "./src/app/auth/lazyloader.routes.ts");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_lazyloader_routes__WEBPACK_IMPORTED_MODULE_11__["appRoutes"]),
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_10__["BaseModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/lazyloader.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/lazyloader.routes.ts ***!
  \*******************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");

var appRoutes = [{
        path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_0__["AuthComponent"], children: [
            { path: 'dashboard', loadChildren: "../dashboard/dashboard.module#DashboardModule" },
            { path: 'invoices', loadChildren: '../invoices/invoices.module#InvoicesModule' },
            { path: 'customers', loadChildren: '../customers/customers.module#CustomersModule' },
            { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule' },
            { path: 'reports', loadChildren: '../reports/reports.module#ReportsModule' },
            { path: 'payments', loadChildren: '../payments/payments.module#PaymentsModule' },
            { path: 'tax', loadChildren: '../tax/tax.module#TaxModule' },
            { path: 'item', loadChildren: '../item/item.module#ItemModule' },
            { path: 'team', loadChildren: '../team/team.module#TeamModule' }
        ]
    }];


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map