(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"../customers/customers.module": [
		"./src/app/customers/customers.module.ts",
		"common",
		"customers-customers-module"
	],
	"../dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"../forgot-password/forgot-password.module": [
		"./src/app/forgot-password/forgot-password.module.ts",
		"forgot-password-forgot-password-module"
	],
	"../home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"../invoices/invoices.module": [
		"./src/app/invoices/invoices.module.ts",
		"invoices-invoices-module"
	],
	"../item/item.module": [
		"./src/app/item/item.module.ts",
		"common",
		"item-item-module"
	],
	"../login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"../payments/payments.module": [
		"./src/app/payments/payments.module.ts",
		"payments-payments-module"
	],
	"../register/register.module": [
		"./src/app/register/register.module.ts",
		"register-register-module"
	],
	"../reports/reports.module": [
		"./src/app/reports/reports.module.ts",
		"reports-reports-module"
	],
	"../settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"settings-settings-module"
	],
	"../tax/tax.module": [
		"./src/app/tax/tax.module.ts",
		"common",
		"tax-tax-module"
	],
	"../team/team.module": [
		"./src/app/team/team.module.ts",
		"common",
		"team-team-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ind-invoice';
    }
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy-load/lazy-load.module */ "./src/app/lazy-load/lazy-load.module.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _dialogs_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialogs/dialog.module */ "./src/app/dialogs/dialog.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_7__["BaseModule"],
                _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_6__["LazyLoadModule"],
                _dialogs_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base/base.module.ts":
/*!*************************************!*\
  !*** ./src/app/base/base.module.ts ***!
  \*************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ "./src/app/base/sidemenu/sidemenu.component.ts");
/* harmony import */ var _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidemenu-item/sidemenu-item.component */ "./src/app/base/sidemenu-item/sidemenu-item.component.ts");
/* harmony import */ var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-menu/user-menu.component */ "./src/app/base/user-menu/user-menu.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/base/toolbar/toolbar.component.ts");
/* harmony import */ var _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toolbar-notification/toolbar-notification.component */ "./src/app/base/toolbar-notification/toolbar-notification.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_7__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_8__["SidemenuItemComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_9__["UserMenuComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarNotificationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_7__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_8__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_9__["UserMenuComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/base/sidemenu-item/sidemenu-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/base/sidemenu-item/sidemenu-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list [style.maxHeight]=\"(menu.open)?'1200px':'48px'\"  [ngClass]=\"{'secondaryMenu': secondaryMenu, 'primary': !secondaryMenu}\">\n  <mat-list-item *ngIf = \"menu.link==false\" (click)=\"menu.open = !menu.open\" >\n      <mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n      <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n      <mat-chip-list *ngIf=\"menu?.chip && !iconOnly\">\n          <mat-chip >{{menu?.chip?.value}} </mat-chip>\n      </mat-chip-list>        \n      <mat-icon *ngIf=\"chechForChildMenu()\" class=\"sidenav-dropdown-indicator rotate \" [ngClass]=\"{'indicateOpen':menu.open}\"> expand_more</mat-icon>\n  </mat-list-item>\n\n  <mat-list-item *ngIf = \"menu.link!=false\" (click)=\"menu.open = !menu.open\" [routerLink]=\"[menu.link]\">\n    <mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n      <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n  </mat-list-item>\n\n  <app-sidemenu-item *ngFor=\"let submenu of menu?.sub\" [menu]=\"submenu\" [iconOnly]=\"iconOnly\" [secondaryMenu]=\"true\"> </app-sidemenu-item>\n\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/base/sidemenu-item/sidemenu-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/base/sidemenu-item/sidemenu-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2Uvc2lkZW1lbnUtaXRlbS9zaWRlbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/base/sidemenu-item/sidemenu-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/base/sidemenu-item/sidemenu-item.component.ts ***!
  \***************************************************************/
/*! exports provided: SidemenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuItemComponent", function() { return SidemenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidemenuItemComponent = /** @class */ (function () {
    function SidemenuItemComponent() {
        this.secondaryMenu = false;
    }
    SidemenuItemComponent.prototype.ngOnInit = function () {
    };
    SidemenuItemComponent.prototype.openLink = function () {
        this.menu.open = this.menu.open;
    };
    SidemenuItemComponent.prototype.chechForChildMenu = function () {
        return (this.menu && this.menu.sub) ? true : false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidemenuItemComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SidemenuItemComponent.prototype, "iconOnly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidemenuItemComponent.prototype, "secondaryMenu", void 0);
    SidemenuItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu-item',
            template: __webpack_require__(/*! ./sidemenu-item.component.html */ "./src/app/base/sidemenu-item/sidemenu-item.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu-item.component.scss */ "./src/app/base/sidemenu-item/sidemenu-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidemenuItemComponent);
    return SidemenuItemComponent;
}());



/***/ }),

/***/ "./src/app/base/sidemenu/menu-element.ts":
/*!***********************************************!*\
  !*** ./src/app/base/sidemenu/menu-element.ts ***!
  \***********************************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
var menus = [
    {
        name: "Dashboard",
        icon: "dashboard",
        link: "/auth/dashboard",
        open: false
    },
    {
        name: "Customers",
        open: false,
        link: "/auth/customers",
        icon: "people"
    },
    {
        name: "Invoices",
        open: false,
        link: "/auth/invoices",
        icon: "receipt"
    },
    {
        name: "Payments",
        open: false,
        link: "/auth/payments",
        icon: "payment"
    },
    {
        name: "Team",
        open: false,
        link: "/auth/team",
        icon: "supervisor_account"
    },
    {
        name: "Tax",
        open: false,
        link: "/auth/tax",
        icon: "redeem"
    },
    {
        name: "Item",
        open: false,
        link: "/auth/item",
        icon: "store"
    },
    {
        name: "Reports",
        open: false,
        link: "/auth/reports",
        icon: "assessment"
    },
    {
        name: "Settings",
        open: false,
        link: "/auth/settings",
        icon: "settings"
    }
];


/***/ }),

/***/ "./src/app/base/sidemenu/sidemenu.component.html":
/*!*******************************************************!*\
  !*** ./src/app/base/sidemenu/sidemenu.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<perfect-scrollbar style=\"height: calc(100% - 33px);\">\n  <div fxLayout=\"column\" >\n      <app-sidemenu-item *ngFor=\"let menu of menus\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"> </app-sidemenu-item>\n  </div>\n  \n</perfect-scrollbar>\n"

/***/ }),

/***/ "./src/app/base/sidemenu/sidemenu.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/base/sidemenu/sidemenu.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2Uvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/base/sidemenu/sidemenu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/base/sidemenu/sidemenu.component.ts ***!
  \*****************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-element */ "./src/app/base/sidemenu/menu-element.ts");



var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
        this.iconOnly = false;
        this.menus = _menu_element__WEBPACK_IMPORTED_MODULE_2__["menus"];
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SidemenuComponent.prototype, "iconOnly", void 0);
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/base/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/base/sidemenu/sidemenu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/base/toolbar-notification/toolbar-notification.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/base/toolbar-notification/toolbar-notification.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-notification-container\">\n\t<button mat-icon-button (click)=\"isOpen = !isOpen;\" [ngClass]=\"[cssPrefix+'-btn']\" [class.open]=\"isOpen\">\n    \t<mat-icon>notifications_none</mat-icon>\n    \t<span class=\"badge\" *ngIf=\"notifications && notifications?.length !== 0\">{{ notifications?.length }}</span>\n  </button>\n\n\n\t<div class=\"dropdown mat-elevation-z4\" [class.open]=\"isOpen\">\n\n\t<div class=\"card\">\n      \t<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        \t<div class=\"title\">\n         \t\t <div class=\"name\">Notifications</div>\n          \t\t<div class=\"extra\">\nYou have {{ notifications?.length }} new notifications</div>\n        \t</div>\n        \t<button type=\"button\" mat-icon-button>\n          \t\t<mat-icon class=\"icon\">settings</mat-icon>\n        \t</button>\n      \t</div>\n      \t<div *ngIf=\"notifications?.length !== 0; then thenBlock else elseBlock;\"></div>\n      \t<div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        \t<div class=\"action\">Mark all as read</div>\n    \t</div>\n    </div>\n\n\t</div>\n\n</div>\n\n<ng-template #thenBlock>\n  <perfect-scrollbar class=\"content\">\n    <div *ngFor=\"let notification of notifications; last as isLast\">\n      <div class=\"notification\" fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n        <mat-icon class=\"icon\">notifications</mat-icon>\n        <div class=\"title\" fxLayout=\"column\">\n          <div class=\"name\">{{ notification.title }}</div>\n          <div class=\"time\">{{ notification.lastTime }}</div>\n        </div>\n        <span fxFlex></span>\n        <button type=\"button\" mat-icon-button (click)=\"delete(notification)\">\n          <mat-icon class=\"close\">close</mat-icon>\n        </button>\n      </div>\n      <div class=\"divider\" *ngIf=\"!isLast\"></div>\n    </div>\n  </perfect-scrollbar>\n</ng-template>\n\n<ng-template #elseBlock>\n  <div class=\"no\" fxLayout=\"row\" fxLayoutAlign=\"center center\">暂无通知</div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/base/toolbar-notification/toolbar-notification.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/base/toolbar-notification/toolbar-notification.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  font-weight: 700;\n  line-height: 13px;\n  height: 13px;\n  padding: 5px;\n  border-radius: 26%;\n  width: 30%;\n  background-color: #f44336;\n  color: #fff;\n  border-color: #f44336; }\n\n.toolbar-notification-container {\n  position: relative;\n  display: flex;\n  align-items: center; }\n\n.toolbar-notification-btn {\n  display: flex;\n  justify-content: center;\n  margin-right: 10px; }\n\n.dropdown {\n  background: white;\n  position: absolute;\n  top: 42px;\n  right: 28px;\n  min-width: 350px;\n  z-index: 1000;\n  -webkit-transform: translateY(0) scale(0);\n          transform: translateY(0) scale(0);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  visibility: hidden;\n  transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@media screen and (max-width: 599px) {\n    .dropdown {\n      min-width: 50vw;\n      right: 5px;\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      visibility: hidden;\n      transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); } }\n\n.dropdown.open {\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n    visibility: visible; }\n\n.dropdown .card .header {\n    background: #EEEEEE;\n    min-height: 54px;\n    padding-left: 16px;\n    padding-right: 8px;\n    color: #555;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    border-bottom: 1px solid #e0e0e0; }\n\n.dropdown .card .header .extra {\n      font-size: 12px;\n      color: #888; }\n\n.dropdown .content {\n    overflow: hidden;\n    max-height: 256px; }\n\n.dropdown .content .notification {\n      min-height: 64px;\n      padding: 0 16px 0 14px;\n      position: relative;\n      color: #666;\n      cursor: pointer; }\n\n.dropdown .content .notification .icon {\n        height: 28px;\n        width: 28px;\n        line-height: 28px;\n        font-size: 18px;\n        margin-right: 13px;\n        text-align: center;\n        border-radius: 50%;\n        background: #FFF;\n        color: #888;\n        border: 1px solid #EEE; }\n\n.dropdown .content .notification .title {\n        font-weight: 500;\n        font-size: 14px; }\n\n.dropdown .content .notification .time {\n        font-size: 12px; }\n\n.dropdown .content .notification .close {\n        font-size: 18px;\n        width: 18px;\n        height: 18px;\n        line-height: 18px; }\n\n.dropdown .content .notification.primary .icon {\n        background: #ccc;\n        color: #ddd; }\n\n.dropdown .content .notification.accent .icon {\n        background: #aaa;\n        color: #bbb; }\n\n.dropdown .content .notification.warn .icon {\n        background: #eee;\n        color: #ddd; }\n\n.dropdown .content .notification.read {\n        color: #999; }\n\n.dropdown .content .notification.read .name {\n          font-weight: normal; }\n\n.dropdown .footer {\n    min-height: 42px;\n    border-top: 1px solid #EEE; }\n\n.dropdown .footer .action {\n      cursor: pointer;\n      color: #AAA;\n      text-align: center;\n      font-size: 13px; }\n\n.dropdown .divider {\n    width: calc(100% - 30px);\n    height: 1px;\n    background: #EEE;\n    margin: 0 16px 0 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvYmFzZS90b29sYmFyLW5vdGlmaWNhdGlvbi90b29sYmFyLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNHLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUMxQixXQUFXO0VBQ1gscUJBQ0gsRUFBQTs7QUFHRTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHFIQUFxRztFQUFyRyw2R0FBcUc7RUFBckcsc0tBQXFHLEVBQUE7O0FBRXJHO0lBWkQ7TUFhSyxlQUFlO01BQ2YsVUFBVTtNQUNWLGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsa0JBQWtCO01BQ2xCLHFIQUErRjtNQUEvRiw2R0FBK0Y7TUFBL0Ysc0tBQStGLEVBQUEsRUFvSG5HOztBQXJJRDtJQXFCSyx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLG1CQUFtQixFQUFBOztBQXRCeEI7SUEyQk8sbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0NBQWdDLEVBQUE7O0FBcEN2QztNQXVDUyxlQUFlO01BQ2YsV0FBVyxFQUFBOztBQXhDcEI7SUE2Q08sZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQTlDeEI7TUFpRFMsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGVBQWUsRUFBQTs7QUFyRHhCO1FBd0RVLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLHNCQUFzQixFQUFBOztBQWpFaEM7UUFxRVksZ0JBQWdCO1FBQ2hCLGVBQWUsRUFBQTs7QUF0RTNCO1FBMEVXLGVBQWUsRUFBQTs7QUExRTFCO1FBOEVZLGVBQWU7UUFDZixXQUFXO1FBQ1osWUFBWTtRQUNaLGlCQUFpQixFQUFBOztBQWpGNUI7UUFzRmEsZ0JBQWdCO1FBQ2hCLFdBQVcsRUFBQTs7QUF2RnhCO1FBNkZhLGdCQUFnQjtRQUNoQixXQUFXLEVBQUE7O0FBOUZ4QjtRQW9HYSxnQkFBZ0I7UUFDaEIsV0FBVyxFQUFBOztBQXJHeEI7UUEwR1csV0FBVyxFQUFBOztBQTFHdEI7VUE2R2EsbUJBQW1CLEVBQUE7O0FBN0doQztJQW9ITyxnQkFBZ0I7SUFDaEIsMEJBQTBCLEVBQUE7O0FBckhqQztNQXdIUyxlQUFlO01BQ2YsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixlQUFlLEVBQUE7O0FBM0h4QjtJQWdJTyx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jhc2UvdG9vbGJhci1ub3RpZmljYXRpb24vdG9vbGJhci1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJlZml4OiAndG9vbGJhci1ub3RpZmljYXRpb24nO1xuXG4uYmFkZ2Uge1xuICBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXHR0b3A6IDA7XG4gIFx0bGVmdDogNTAlO1xuICBcdGZvbnQtd2VpZ2h0OiA3MDA7XG4gIFx0bGluZS1oZWlnaHQ6IDEzcHg7XG4gIFx0aGVpZ2h0OiAxM3B4O1xuICBcdHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNiU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBcdGNvbG9yOiAjZmZmO1xuICBcdGJvcmRlci1jb2xvcjojZjQ0MzM2XG59XG5cbi4jeyRwcmVmaXh9IHtcbiAgJi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5kcm9wZG93biB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNDJweDtcblx0cmlnaHQ6IDI4cHg7XG5cdG1pbi13aWR0aDogMzUwcHg7XG5cdHotaW5kZXg6IDEwMDA7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwKTtcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSksIHZpc2liaWxpdHkgLjRzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG5cdCAgICBtaW4td2lkdGg6IDUwdnc7XG5cdCAgICByaWdodDogNXB4O1xuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSwgdmlzaWJpbGl0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cdH1cblxuXHQmLm9wZW4ge1xuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuXHQgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblx0fVxuXHQuY2FyZCB7XG4gICAgICBcblx0ICAgIC5oZWFkZXIge1xuXHQgICAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuXHQgICAgICBtaW4taGVpZ2h0OiA1NHB4O1xuXHQgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG5cdCAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcblx0ICAgICAgY29sb3I6ICM1NTU7XG5cdCAgICAgIGRpc3BsYXk6IGZsZXg7XG5cdCAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0ICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXHQgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcblxuXHQgICAgICAuZXh0cmEge1xuXHQgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblx0ICAgICAgICBjb2xvcjogIzg4ODtcblx0ICAgICAgfVxuICAgIFx0fVxuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICBcdG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBcdG1heC1oZWlnaHQ6IDI1NnB4O1xuXG4gICAgICBcdC5ub3RpZmljYXRpb24ge1xuICAgICAgICBcdG1pbi1oZWlnaHQ6IDY0cHg7XG5cdCAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgMTRweDtcblx0ICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICAgICAgY29sb3I6ICM2NjY7XG5cdCAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG5cdCAgICAgICAgLmljb24ge1xuXHRcdCAgICAgICAgaGVpZ2h0OiAyOHB4O1xuXHRcdCAgICAgICAgd2lkdGg6IDI4cHg7XG5cdFx0ICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcblx0XHQgICAgICAgIGZvbnQtc2l6ZTogMThweDtcblx0XHQgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcblx0XHQgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHQgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG5cdFx0ICAgICAgICBjb2xvcjogIzg4ODtcblx0XHQgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRUU7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0LnRpdGxlIHtcbiAgICAgICAgICBcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBcdFx0Zm9udC1zaXplOiAxNHB4O1xuICAgICAgICBcdH1cblxuICAgICAgICBcdC50aW1lIHtcbiAgICAgICAgIFx0XHRmb250LXNpemU6IDEycHg7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0LmNsb3NlIHtcbiAgICAgICAgICBcdFx0Zm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIFx0XHR3aWR0aDogMThweDtcblx0ICAgICAgICAgIGhlaWdodDogMThweDtcblx0ICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgICYucHJpbWFyeSB7XG5cdCAgICAgICAgICAuaWNvbiB7XG5cdCAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG5cdCAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgICYuYWNjZW50IHtcblx0ICAgICAgICAgIC5pY29uIHtcblx0ICAgICAgICAgICAgYmFja2dyb3VuZDogI2FhYTtcblx0ICAgICAgICAgICAgY29sb3I6ICNiYmI7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJi53YXJuIHtcblx0ICAgICAgICAgIC5pY29uIHtcblx0ICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcblx0ICAgICAgICAgICAgY29sb3I6ICNkZGQ7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJi5yZWFkIHtcblx0ICAgICAgICAgIGNvbG9yOiAjOTk5O1xuXG5cdCAgICAgICAgICAubmFtZSB7XG5cdCAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuICAgICAgXHR9XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBcdG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgICBcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUVFO1xuXG5cdCAgICAuYWN0aW9uIHtcblx0ICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdCAgICAgICAgY29sb3I6ICNBQUE7XG5cdCAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcblx0ICAgIH1cbiAgICB9XG5cbiAgICAuZGl2aWRlciB7XG4gICAgICBcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgIFx0aGVpZ2h0OiAxcHg7XG4gICAgICBcdGJhY2tncm91bmQ6ICNFRUU7XG4gICAgICBcdG1hcmdpbjogMCAxNnB4IDAgMTRweDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/base/toolbar-notification/toolbar-notification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/base/toolbar-notification/toolbar-notification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToolbarNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationComponent", function() { return ToolbarNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarNotificationComponent = /** @class */ (function () {
    function ToolbarNotificationComponent(elementRef) {
        this.elementRef = elementRef;
        this.cssPrefix = 'toolbar-notification';
        this.isOpen = false;
        this.notifications = [];
    }
    ToolbarNotificationComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    ToolbarNotificationComponent.prototype.ngOnInit = function () {
    };
    ToolbarNotificationComponent.prototype.select = function () {
    };
    ToolbarNotificationComponent.prototype.delete = function (notification) {
        console.log(notification);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarNotificationComponent.prototype, "notifications", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent, HTMLElement]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToolbarNotificationComponent.prototype, "onClick", null);
    ToolbarNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar-notification',
            template: __webpack_require__(/*! ./toolbar-notification.component.html */ "./src/app/base/toolbar-notification/toolbar-notification.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-notification.component.scss */ "./src/app/base/toolbar-notification/toolbar-notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ToolbarNotificationComponent);
    return ToolbarNotificationComponent;
}());



/***/ }),

/***/ "./src/app/base/toolbar/toolbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/base/toolbar/toolbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar   class=\"mat-elevation-z4\">  \n\t<button mat-icon-button (click)=\"sidenav.toggle();drawer.toggle();\" *ngIf=\"matDrawerShow\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button> \n    <button mat-icon-button (click)=\"sidenav.toggle();\" *ngIf=\"!matDrawerShow\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button>\n\n    <span class=\"spacer\"></span>\n\n    <!-- <app-toolbar-notification [notifications]=\"data?.notifications\"></app-toolbar-notification> -->\n\n    <app-user-menu [currentUser]=\"data?.currentUser\"></app-user-menu>\n    \n</mat-toolbar>"

/***/ }),

/***/ "./src/app/base/toolbar/toolbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/base/toolbar/toolbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 4; }\n\n.main-toolbar {\n  height: 64px;\n  padding-left: 16px; }\n\n.more-btn {\n  height: 100%;\n  min-width: 70px; }\n\n.mat-icon-button {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvYmFzZS90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jhc2UvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHotaW5kZXg6IDQ7XG4gIH1cbiAgXG4gIC5tYWluLXRvb2xiYXIge1xuICAgIGhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIH1cbiAgXG4gIC5tb3JlLWJ0biB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgfVxuICBcbiAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/base/toolbar/toolbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/base/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.data = {
            notifications: [
                {
                    id: 'id',
                    title: 'This is a test message',
                    lastTime: '23 Minutes ago',
                    state: 'state'
                }
            ],
            currentUser: {
                photoURL: 'assets/default-user.png',
                currentUserName: 'Virender'
            }
        };
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "sidenav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "drawer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "matDrawerShow", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/base/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/base/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/base/user-menu/user-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/base/user-menu/user-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-user-container\">\n  <button\n    mat-button\n    (click)=\"isOpen = !isOpen\"\n    class=\"toolbar-user-btn\"\n    [class.open]=\"isOpen\"\n    [ngStyle.xs]=\"{ 'min-width': '70px' }\"\n  >\n    <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <!-- <img class=\"avatar\" [src]=\"currentUser?.photoURL || 'assets/default-user.png'\"> -->\n      <span class=\"name\"\n        >{{ currentUser?.currentUserName || defaultUser }} Nehra</span\n      >\n      <mat-icon class=\"icon\">keyboard_arrow_down</mat-icon>\n    </span>\n  </button>\n\n  <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n    <div class=\"content\">\n      <mat-nav-list>\n        <mat-list-item>\n          <a matLine\n            >Profile\n            <mat-icon>account_circle</mat-icon>\n          </a>\n        </mat-list-item>\n        <mat-list-item>\n          <a matLine\n            >Help\n            <mat-icon>help</mat-icon>\n          </a>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n          <a matLine [routerLink]=\"['/login']\"\n            >Logout\n            <mat-icon>power_settings_new</mat-icon>\n          </a>\n        </mat-list-item>\n      </mat-nav-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/base/user-menu/user-menu.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/base/user-menu/user-menu.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\n.toolbar-user-container {\n  height: 100%;\n  position: relative; }\n\n.toolbar-user-container .toolbar-user-btn {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    min-width: 160px; }\n\n.toolbar-user-container .toolbar-user-btn .avatar {\n      width: 30px;\n      height: 30px;\n      border-radius: 50%; }\n\n.toolbar-user-container .toolbar-user-btn .name {\n      margin: 0 8px 0 10px; }\n\n.toolbar-user-container .toolbar-user-btn .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.toolbar-user-container .toolbar-user-btn.open {\n      background: rgba(0, 0, 0, 0.05); }\n\n.toolbar-user-container .toolbar-user-btn.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n\n.toolbar-user-container .dropdown {\n    background: white;\n    z-index: 4;\n    position: absolute;\n    width: 100%;\n    min-width: 160px;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.25s linear, max-height 0.25s linear, opacity 0.25s linear; }\n\n@media screen and (max-width: 599px) {\n      .toolbar-user-container .dropdown {\n        min-width: 65px; } }\n\n.toolbar-user-container .dropdown.open {\n      opacity: 1;\n      visibility: visible; }\n\n.toolbar-user-container .content mat-icon {\n    float: right;\n    margin-top: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvYmFzZS91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUZwQjtJQUtJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVJwQjtNQVdNLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCLEVBQUE7O0FBYnhCO01BaUJNLG9CQUFvQixFQUFBOztBQWpCMUI7TUFxQk0sV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YsNEJBQW9CO2NBQXBCLG9CQUFvQjtNQUNwQixvRUFBNEQ7TUFBNUQsNERBQTREO01BQTVELHNIQUE0RCxFQUFBOztBQXpCbEU7TUE2Qk0sK0JBQStCLEVBQUE7O0FBN0JyQztRQWdDUSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQixFQUFBOztBQWhDbEM7SUFzQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDJFQUEyRSxFQUFBOztBQUUzRTtNQS9DSjtRQWdETSxlQUFlLEVBQUEsRUFPbEI7O0FBdkRIO01Bb0RNLFVBQVU7TUFDVixtQkFBbUIsRUFBQTs7QUFyRHpCO0lBMERNLFlBQVk7SUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYXNlL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvb2xiYXItdXNlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAudG9vbGJhci11c2VyLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcblxuICAgIC5hdmF0YXIge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgbWFyZ2luOiAwIDhweCAwIDEwcHg7XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgICB9XG5cbiAgICAmLm9wZW4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICAgICAgLmljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZHJvcGRvd24ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhciwgbWF4LWhlaWdodCAwLjI1cyBsaW5lYXIsIG9wYWNpdHkgMC4yNXMgbGluZWFyO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAgIG1pbi13aWR0aDogNjVweDtcbiAgICB9XG5cbiAgICAmLm9wZW4ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG4gIC5jb250ZW50IHtcbiAgICBtYXQtaWNvbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/base/user-menu/user-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/base/user-menu/user-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(elementRef) {
        this.elementRef = elementRef;
        this.isOpen = false;
        this.defaultUser = 'virender nehra';
        this.currentUser = null;
    }
    UserMenuComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserMenuComponent.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent, HTMLElement]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UserMenuComponent.prototype, "onClick", null);
    UserMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/base/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/base/user-menu/user-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/customer-dialog/customer-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/customer-dialog/customer-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog \">\n  <form action=\"submit\" [formGroup]=\"customerForm\" (ngSubmit)=\"submit()\">\n    <h2 mat-dialog-title>\n      {{ title }}\n      <button [mat-dialog-close]=\"false\">\n        <mat-icon class=\"clear-icon\">clear</mat-icon>\n      </button>\n    </h2>\n    <mat-divider></mat-divider>\n    <mat-dialog-content>\n      <mat-tab-group >\n        <mat-tab label=\"Basic\">\n          <div>\n            <mat-form-field class=\"au-wt\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Name\"\n                formControlName=\"name\"\n              />\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field class=\"au-wt\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Email\"\n                formControlName=\"email\"\n              />\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field class=\"au-wt\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Account (generated if blank)\"\n                formControlName=\"account\"\n              />\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"au-wt\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Tax Id\"\n                formControlName=\"taxId\"\n              />\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field class=\"au-wt\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Private notes on this customer\"\n                formControlName=\"notes\"\n              />\n            </mat-form-field>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Address\">\n          <div class=\"df\">\n            <mat-form-field class=\"mr10 w120\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Attention To\"\n                formControlName=\"attentionTo\"\n              />\n            </mat-form-field>\n            <mat-form-field class=\"w120\">\n              <input\n                matInput\n                type=\"tel\"\n                autocomplete=\"off\"\n                placeholder=\"Phone\"\n                formControlName=\"phone\"\n              />\n            </mat-form-field>\n          </div>\n          <div></div>\n          <div>\n            <mat-form-field class=\"au-wt\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Address 1\"\n                formControlName=\"address_1\"\n              />\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field class=\"au-wt\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Address 2\"\n                formControlName=\"address_2\"\n              />\n            </mat-form-field>\n          </div>\n          <div class=\"df\">\n            <mat-form-field class=\"mr10 w120\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"City\"\n                formControlName=\"city\"\n              />\n            </mat-form-field>\n            <mat-form-field class=\"w120\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"State\"\n                formControlName=\"state\"\n              />\n            </mat-form-field>\n          </div>\n          <div></div>\n          <div class=\"df\">\n            <mat-form-field class=\"mr10 w120\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Country\"\n                formControlName=\"country\"\n              />\n            </mat-form-field>\n            <mat-form-field class=\"w120\">\n              <input\n                matInput\n                type=\"text\"\n                autocomplete=\"off\"\n                placeholder=\"Postal Code\"\n                formControlName=\"postalCode\"\n              />\n            </mat-form-field>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-dialog-content>\n    <mat-divider></mat-divider>\n    <mat-dialog-actions align=\"end\">\n      <button\n        mat-raised-button\n        type=\"submit\"\n        [disabled]=\"!customerForm.valid\"\n        color=\"primary\"\n      >\n        Save\n      </button>\n    </mat-dialog-actions>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/customer-dialog/customer-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/customer-dialog/customer-dialog.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog .mat-dialog-title button {\n  background: #fff;\n  border: none;\n  float: right;\n  outline: 0; }\n  .dialog .mat-dialog-title button .clear-icon {\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 4px; }\n  .dialog .mat-dialog-title button .clear-icon:hover {\n    background: #42a5f5; }\n  .dialog .mat-dialog-title button:hover {\n  background: #fff;\n  outline: 0; }\n  .dialog .mat-dialog-content {\n  margin-bottom: 20px; }\n  .dialog .mat-dialog-content .df {\n    display: flex; }\n  .dialog .mat-dialog-content .mr10 {\n    margin-right: 10px; }\n  @media screen and (min-width: 599px) {\n    .dialog .mat-dialog-content .au-wt {\n      width: 300px; } }\n  @media screen and (max-width: 599px) {\n    .dialog .mat-dialog-content .au-wt {\n      width: 230px; }\n    .dialog .mat-dialog-content .w120 {\n      width: 120px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvZGlhbG9ncy9jdXN0b21lci1kaWFsb2cvY3VzdG9tZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBO0VBTmhCO0lBUVEsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQVYxQjtJQWFRLG1CQUFtQixFQUFBO0VBYjNCO0VBaUJNLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7RUFsQmhCO0VBc0JJLG1CQUFtQixFQUFBO0VBdEJ2QjtJQXdCTSxhQUFhLEVBQUE7RUF4Qm5CO0lBMkJNLGtCQUFrQixFQUFBO0VBRXBCO0lBN0JKO01BK0JRLFlBQVksRUFBQSxFQUNiO0VBRUg7SUFsQ0o7TUFvQ1EsWUFBWSxFQUFBO0lBcENwQjtNQXVDUSxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY3VzdG9tZXItZGlhbG9nL2N1c3RvbWVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2cge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgLmNsZWFyLWljb24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICAgIC5jbGVhci1pY29uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzQyYTVmNTtcbiAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgfVxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC5kZiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAubXIxMCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSB7XG4gICAgICAuYXUtd3Qge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAuYXUtd3Qge1xuICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICB9XG4gICAgICAudzEyMCB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/customer-dialog/customer-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/customer-dialog/customer-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDialogComponent", function() { return CustomerDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var CustomerDialogComponent = /** @class */ (function () {
    function CustomerDialogComponent(data, fb, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.dialogRef = dialogRef;
    }
    CustomerDialogComponent.prototype.ngOnInit = function () {
        this.data ? (this.title = "Edit Customer") : (this.title = "New Customer");
        this.customerForm = this.fb.group({
            name: [this.data ? this.data.name : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [this.data ? this.data.email : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            account: [this.data ? this.data.account : ""],
            taxId: [this.data ? this.data.taxId : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            notes: [this.data ? this.data.notes : ""],
            attentionTo: [
                this.data && this.data.address ? this.data.address.attentionTo : ""
            ],
            phone: [this.data && this.data.address ? this.data.address.phone : null],
            address_1: [
                this.data && this.data.address ? this.data.address.address_1 : ""
            ],
            address_2: [
                this.data && this.data.address ? this.data.address.address_2 : ""
            ],
            city: [this.data && this.data.address ? this.data.address.city : ""],
            state: [this.data && this.data.address ? this.data.address.state : ""],
            country: [
                this.data && this.data.address ? this.data.address.country : "India"
            ],
            postalCode: [
                this.data && this.data.address ? this.data.address.postalCode : null
            ]
        });
    };
    CustomerDialogComponent.prototype.submit = function () {
        this.customerForm.value.address = {
            attentionTo: this.customerForm.value.attentionTo,
            address_1: this.customerForm.value.address_1,
            address_2: this.customerForm.value.address_2,
            phone: this.customerForm.value.phone,
            city: this.customerForm.value.city,
            state: this.customerForm.value.state,
            country: this.customerForm.value.country,
            postalCode: this.customerForm.value.postalCode
        };
        console.log(this.customerForm.value);
        if (this.data) {
            this.customerForm.value.id = this.data.id;
        }
        this.dialogRef.close(this.customerForm.value);
    };
    CustomerDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-customer-dialog",
            template: __webpack_require__(/*! ./customer-dialog.component.html */ "./src/app/dialogs/customer-dialog/customer-dialog.component.html"),
            styles: [__webpack_require__(/*! ./customer-dialog.component.scss */ "./src/app/dialogs/customer-dialog/customer-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CustomerDialogComponent);
    return CustomerDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/dialog.module.ts":
/*!******************************************!*\
  !*** ./src/app/dialogs/dialog.module.ts ***!
  \******************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tax_dialog_tax_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-dialog/tax-dialog.component */ "./src/app/dialogs/tax-dialog/tax-dialog.component.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _item_dialog_item_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-dialog/item-dialog.component */ "./src/app/dialogs/item-dialog/item-dialog.component.ts");
/* harmony import */ var _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-dialog/customer-dialog.component */ "./src/app/dialogs/customer-dialog/customer-dialog.component.ts");
/* harmony import */ var _invoice_dialog_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice-dialog/invoice-dialog.component */ "./src/app/dialogs/invoice-dialog/invoice-dialog.component.ts");
/* harmony import */ var _team_dialog_team_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team-dialog/team-dialog.component */ "./src/app/dialogs/team-dialog/team-dialog.component.ts");








var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _tax_dialog_tax_dialog_component__WEBPACK_IMPORTED_MODULE_2__["TaxDialogComponent"],
                _item_dialog_item_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ItemDialogComponent"],
                _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDialogComponent"],
                _invoice_dialog_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceDialogComponent"],
                _team_dialog_team_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TeamDialogComponent"]
            ],
            imports: [_base_base_module__WEBPACK_IMPORTED_MODULE_3__["BaseModule"]],
            entryComponents: [
                _tax_dialog_tax_dialog_component__WEBPACK_IMPORTED_MODULE_2__["TaxDialogComponent"],
                _item_dialog_item_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ItemDialogComponent"],
                _customer_dialog_customer_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDialogComponent"],
                _team_dialog_team_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TeamDialogComponent"]
            ]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "./src/app/dialogs/invoice-dialog/invoice-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/invoice-dialog/invoice-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  invoice-dialog works!\n</p>\n"

/***/ }),

/***/ "./src/app/dialogs/invoice-dialog/invoice-dialog.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/invoice-dialog/invoice-dialog.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvaW52b2ljZS1kaWFsb2cvaW52b2ljZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/invoice-dialog/invoice-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/invoice-dialog/invoice-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: InvoiceDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDialogComponent", function() { return InvoiceDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoiceDialogComponent = /** @class */ (function () {
    function InvoiceDialogComponent() {
    }
    InvoiceDialogComponent.prototype.ngOnInit = function () {
    };
    InvoiceDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-dialog',
            template: __webpack_require__(/*! ./invoice-dialog.component.html */ "./src/app/dialogs/invoice-dialog/invoice-dialog.component.html"),
            styles: [__webpack_require__(/*! ./invoice-dialog.component.scss */ "./src/app/dialogs/invoice-dialog/invoice-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InvoiceDialogComponent);
    return InvoiceDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/item-dialog/item-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/item-dialog/item-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog \">\n  <form action=\"submit\" [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\n    <h2 mat-dialog-title>\n      {{ title }}\n      <button [mat-dialog-close]=\"false\">\n        <mat-icon class=\"clear-icon\">clear</mat-icon>\n      </button>\n    </h2>\n    <mat-divider></mat-divider>\n    <mat-dialog-content>\n      <div>\n        <mat-form-field class=\"au-wt\">\n          <input\n            matInput\n            type=\"text\"\n            autocomplete=\"off\"\n            placeholder=\"Name\"\n            formControlName=\"name\"\n          />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class=\"au-wt\">\n          <input\n            matInput\n            type=\"text\"\n            autocomplete=\"off\"\n            placeholder=\"Description\"\n            formControlName=\"description\"\n          />\n        </mat-form-field>\n      </div>\n      <!-- <div>\n        <mat-form-field class=\"au-wt\">\n          <mat-select placeholder=\"Type\" formControlName=\"type\">\n            <mat-option\n              style=\"line-height: 15px;\n                  border-bottom: 1px solid #ccc;background:#f5f5f5\"\n              *ngFor=\"let type of Types\"\n              [value]=\"type\"\n            >\n              {{ type }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div> -->\n      <div>\n        <mat-form-field class=\"au-wt\">\n          <input\n            matInput\n            type=\"number\"\n            autocomplete=\"off\"\n            placeholder=\"Unit Cost\"\n            formControlName=\"unitCost\"\n          />\n        </mat-form-field>\n      </div>\n      <div>\n        <section style=\"height:35px;\">\n          <mat-checkbox color=\"primary\" formControlName=\"taxable\"\n            ><span style=\"padding-left: 10px;\">Taxable</span>\n          </mat-checkbox>\n        </section>\n      </div>\n      <!-- <div *ngIf=\"itemForm.value.taxable\">\n        <mat-form-field class=\"au-wt\">\n          <mat-label>Taxes</mat-label>\n          <mat-select formControlName=\"taxIds\" multiple>\n            <mat-option *ngFor=\"let tax of taxList\" [value]=\"tax.id\">\n              {{ tax.name }} - {{tax.amount}} %\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div> -->\n    </mat-dialog-content>\n    <mat-divider></mat-divider>\n    <mat-dialog-actions align=\"end\">\n      <button\n        mat-raised-button\n        type=\"submit\"\n        [disabled]=\"!itemForm.valid\"\n        color=\"primary\"\n      >\n        Save\n      </button>\n    </mat-dialog-actions>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/item-dialog/item-dialog.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/item-dialog/item-dialog.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog .mat-dialog-title button {\n  background: #fff;\n  border: none;\n  float: right;\n  outline: 0; }\n  .dialog .mat-dialog-title button .clear-icon {\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 4px; }\n  .dialog .mat-dialog-title button .clear-icon:hover {\n    background: #42a5f5; }\n  .dialog .mat-dialog-title button:hover {\n  background: #fff;\n  outline: 0; }\n  .dialog .mat-dialog-content {\n  margin-bottom: 20px; }\n  @media screen and (min-width: 599px) {\n    .dialog .mat-dialog-content .au-wt {\n      width: 300px; } }\n  @media screen and (max-width: 599px) {\n    .dialog .mat-dialog-content .au-wt {\n      width: 230px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvZGlhbG9ncy9pdGVtLWRpYWxvZy9pdGVtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVMsRUFBQTtFQU5qQjtJQVFVLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFWNUI7SUFhVSxtQkFBbUIsRUFBQTtFQWI3QjtFQWlCUSxnQkFBZ0I7RUFDaEIsVUFDRixFQUFBO0VBbkJOO0VBc0JNLG1CQUFtQixFQUFBO0VBQ25CO0lBdkJOO01BeUJVLFlBQVksRUFBQSxFQUNiO0VBRUg7SUE1Qk47TUE4QlUsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2l0ZW0tZGlhbG9nL2l0ZW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZyB7XG4gICAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG91dGxpbmU6MDtcbiAgICAgICAgLmNsZWFyLWljb24ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuY2xlYXItaWNvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQyYTVmNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgb3V0bGluZTowXG4gICAgICB9XG4gICAgfVxuICAgIC5tYXQtZGlhbG9nLWNvbnRlbnR7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIHtcbiAgICAgICAgLmF1LXd0e1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAgICAgLmF1LXd0e1xuICAgICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/dialogs/item-dialog/item-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/item-dialog/item-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDialogComponent", function() { return ItemDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var ItemDialogComponent = /** @class */ (function () {
    function ItemDialogComponent(data, fb, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.Types = ["Product", "Service", "Shipping"];
    }
    ItemDialogComponent.prototype.ngOnInit = function () {
        this.data ? (this.title = "Edit Item") : (this.title = "New Item");
        this.itemForm = this.fb.group({
            name: [this.data ? this.data.name : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            // type: [this.data ? this.data.type : "None"],
            description: [this.data ? this.data.description : ""],
            unitCost: [this.data ? this.data.unitCost : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            taxable: [this.data ? this.data.taxable : true],
        });
    };
    ItemDialogComponent.prototype.submit = function () {
        //  this.itemForm.value.taxRate = "";
        // format tax rate to show in item table
        // if (this.itemForm.value.taxIds && this.itemForm.value.taxIds.length > 0) {
        //   this.itemForm.value.taxIds.forEach((item, index) => {
        //     for (let tax of this.taxList) {
        //       if (tax.id === item) {
        //         this.itemForm.value.taxRate += `${tax.name} + ${tax.amount}%`;
        //       }
        //     }
        //     if (index + 1 !== this.itemForm.value.taxIds.length) {
        //       this.itemForm.value.taxRate += ", ";
        //     }
        //   });
        // }
        if (this.data) {
            this.itemForm.value.id = this.data.id;
        }
        this.dialogRef.close(this.itemForm.value);
    };
    ItemDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-item-dialog",
            template: __webpack_require__(/*! ./item-dialog.component.html */ "./src/app/dialogs/item-dialog/item-dialog.component.html"),
            styles: [__webpack_require__(/*! ./item-dialog.component.scss */ "./src/app/dialogs/item-dialog/item-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ItemDialogComponent);
    return ItemDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/tax-dialog/tax-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/tax-dialog/tax-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog \">\n  <form\n    action=\"submit\"\n    [formGroup]=\"taxForm\"\n    (ngSubmit)=\"submit()\"\n  >\n    <h2 mat-dialog-title>\n      {{ title }}\n      <button [mat-dialog-close]=\"false\">\n        <mat-icon class=\"clear-icon\">clear</mat-icon>\n      </button>\n    </h2>\n    <mat-divider></mat-divider>\n    <mat-dialog-content>\n      <div>\n        <mat-form-field class=\"au-wt\">\n          <input matInput type=\"text\" autocomplete=\"off\" placeholder=\"Name\" formControlName=\"name\" />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class=\"au-wt\">\n          <input\n            matInput\n            type=\"number\"\n            autocomplete=\"off\"\n            placeholder=\"Amount (%)\"\n            formControlName=\"amount\"\n          />\n        </mat-form-field>\n      </div>\n      <div>\n        <section style=\"height:35px;\">\n          <mat-checkbox color=\"primary\" formControlName=\"taxMode\"\n            ><span style=\"padding-left: 10px;\">Price include tax</span>\n          </mat-checkbox>\n        </section>\n      </div>\n    </mat-dialog-content>\n    <mat-divider></mat-divider>\n    <mat-dialog-actions align=\"end\">\n      <!-- <button mat-button [mat-dialog-close]=\"false\">Cancel</button> -->\n      <button\n        mat-raised-button\n        type=\"submit\"\n        [disabled]=\"!taxForm.valid\"\n        color=\"primary\"\n      >\n        Save\n      </button>\n    </mat-dialog-actions>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/tax-dialog/tax-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/tax-dialog/tax-dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog .mat-dialog-title button {\n  background: #fff;\n  border: none;\n  float: right;\n  outline: 0; }\n  .dialog .mat-dialog-title button .clear-icon {\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 4px; }\n  .dialog .mat-dialog-title button .clear-icon:hover {\n    background: #42a5f5; }\n  .dialog .mat-dialog-title button:hover {\n  background: #fff;\n  outline: 0; }\n  .dialog .mat-dialog-content {\n  margin-bottom: 20px; }\n  @media screen and (min-width: 599px) {\n    .dialog .mat-dialog-content .au-wt {\n      width: 300px; } }\n  @media screen and (max-width: 599px) {\n    .dialog .mat-dialog-content .au-wt {\n      width: 230px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvZGlhbG9ncy90YXgtZGlhbG9nL3RheC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFTLEVBQUE7RUFOZjtJQVFRLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFWMUI7SUFhUSxtQkFBbUIsRUFBQTtFQWIzQjtFQWlCTSxnQkFBZ0I7RUFDaEIsVUFDRixFQUFBO0VBbkJKO0VBc0JJLG1CQUFtQixFQUFBO0VBQ25CO0lBdkJKO01BeUJRLFlBQVksRUFBQSxFQUNiO0VBRUg7SUE1Qko7TUE4QlEsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL3RheC1kaWFsb2cvdGF4LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2cge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBvdXRsaW5lOjA7XG4gICAgICAuY2xlYXItaWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgICAgLmNsZWFyLWljb246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDJhNWY1O1xuICAgICAgfVxuICAgIH1cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIG91dGxpbmU6MFxuICAgIH1cbiAgfVxuICAubWF0LWRpYWxvZy1jb250ZW50e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIHtcbiAgICAgIC5hdS13dHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgICAgLmF1LXd0e1xuICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dialogs/tax-dialog/tax-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialogs/tax-dialog/tax-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: TaxDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxDialogComponent", function() { return TaxDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var TaxDialogComponent = /** @class */ (function () {
    function TaxDialogComponent(data, fb, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.dialogRef = dialogRef;
    }
    TaxDialogComponent.prototype.ngOnInit = function () {
        this.data
            ? (this.title = "Edit Tax Rate")
            : (this.title = "New Tax Rate");
        this.taxForm = this.fb.group({
            name: [this.data ? this.data.name : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amount: [this.data ? this.data.amount : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            taxMode: [this.data ? this.data.taxMode : false]
        });
    };
    TaxDialogComponent.prototype.submit = function () {
        if (this.data) {
            this.taxForm.value.id = this.data.id;
        }
        this.dialogRef.close(this.taxForm.value);
    };
    TaxDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tax-dialog",
            template: __webpack_require__(/*! ./tax-dialog.component.html */ "./src/app/dialogs/tax-dialog/tax-dialog.component.html"),
            styles: [__webpack_require__(/*! ./tax-dialog.component.scss */ "./src/app/dialogs/tax-dialog/tax-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], TaxDialogComponent);
    return TaxDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/team-dialog/team-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/team-dialog/team-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog \">\n  <form action=\"submit\" [formGroup]=\"teamForm\" (ngSubmit)=\"submit()\">\n    <h2 mat-dialog-title>\n      {{ title }}\n      <button [mat-dialog-close]=\"false\">\n        <mat-icon class=\"clear-icon\">clear</mat-icon>\n      </button>\n    </h2>\n    <mat-divider></mat-divider>\n    <mat-dialog-content>\n      <div>\n        <mat-form-field class=\"au-wt\">\n          <input\n            matInput\n            type=\"text\"\n            autocomplete=\"off\"\n            placeholder=\"Name\"\n            formControlName=\"name\"\n          />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class=\"au-wt\">\n          <input\n            matInput\n            type=\"text\"\n            autocomplete=\"off\"\n            placeholder=\"Email Address\"\n            formControlName=\"emailAddress\"\n          />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class=\"au-wt\">\n          <mat-select formControlName=\"role\">\n            <mat-option *ngFor=\"let role of Roles\" [value]=\"role\">{{\n              role\n            }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </mat-dialog-content>\n    <mat-divider></mat-divider>\n    <mat-dialog-actions align=\"end\">\n      <!-- <button mat-button [mat-dialog-close]=\"false\">Cancel</button> -->\n      <button\n        mat-raised-button\n        type=\"submit\"\n        [disabled]=\"!teamForm.valid\"\n        color=\"primary\"\n      >\n        Save\n      </button>\n    </mat-dialog-actions>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/team-dialog/team-dialog.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/team-dialog/team-dialog.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog .mat-dialog-title button {\n  background: #fff;\n  border: none;\n  float: right;\n  outline: 0; }\n  .dialog .mat-dialog-title button .clear-icon {\n    cursor: pointer;\n    background: #f5f5f5;\n    border-radius: 4px; }\n  .dialog .mat-dialog-title button .clear-icon:hover {\n    background: #42a5f5; }\n  .dialog .mat-dialog-title button:hover {\n  background: #fff;\n  outline: 0; }\n  .dialog .mat-dialog-content {\n  margin-bottom: 20px; }\n  @media screen and (min-width: 599px) {\n    .dialog .mat-dialog-content .au-wt {\n      width: 300px; } }\n  @media screen and (max-width: 599px) {\n    .dialog .mat-dialog-content .au-wt {\n      width: 230px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvZGlhbG9ncy90ZWFtLWRpYWxvZy90ZWFtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVMsRUFBQTtFQU5qQjtJQVFVLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFWNUI7SUFhVSxtQkFBbUIsRUFBQTtFQWI3QjtFQWlCUSxnQkFBZ0I7RUFDaEIsVUFDRixFQUFBO0VBbkJOO0VBc0JNLG1CQUFtQixFQUFBO0VBQ25CO0lBdkJOO01BeUJVLFlBQVksRUFBQSxFQUNiO0VBRUg7SUE1Qk47TUE4QlUsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL3RlYW0tZGlhbG9nL3RlYW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZyB7XG4gICAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG91dGxpbmU6MDtcbiAgICAgICAgLmNsZWFyLWljb24ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuY2xlYXItaWNvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQyYTVmNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgb3V0bGluZTowXG4gICAgICB9XG4gICAgfVxuICAgIC5tYXQtZGlhbG9nLWNvbnRlbnR7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIHtcbiAgICAgICAgLmF1LXd0e1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAgICAgLmF1LXd0e1xuICAgICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/dialogs/team-dialog/team-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/team-dialog/team-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: TeamDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDialogComponent", function() { return TeamDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var TeamDialogComponent = /** @class */ (function () {
    function TeamDialogComponent(data, fb, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.Roles = ['admin', 'readOnly', 'employee'];
    }
    TeamDialogComponent.prototype.ngOnInit = function () {
        this.data
            ? (this.title = "Edit User")
            : (this.title = "New User");
        this.teamForm = this.fb.group({
            name: [{ value: this.data ? this.data.name : "", disabled: this.data ? true : false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emailAddress: [{ value: this.data ? this.data.emailAddress : null, disabled: this.data ? true : false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            role: [this.data ? this.data.role : 'admin', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    TeamDialogComponent.prototype.submit = function () {
        if (this.data) {
            this.teamForm.value.id = this.data.id;
        }
        this.dialogRef.close(this.teamForm.value);
    };
    TeamDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-dialog',
            template: __webpack_require__(/*! ./team-dialog.component.html */ "./src/app/dialogs/team-dialog/team-dialog.component.html"),
            styles: [__webpack_require__(/*! ./team-dialog.component.scss */ "./src/app/dialogs/team-dialog/team-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], TeamDialogComponent);
    return TeamDialogComponent;
}());



/***/ }),

/***/ "./src/app/lazy-load/lazy-load.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lazy-load/lazy-load.module.ts ***!
  \***********************************************/
/*! exports provided: LazyLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function() { return LazyLoadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
    { path: 'register', loadChildren: '../register/register.module#RegisterModule' },
    { path: 'login', loadChildren: '../login/login.module#LoginModule' },
    { path: 'forgotpassword', loadChildren: '../forgot-password/forgot-password.module#ForgotPasswordModule' },
    { path: '', loadChildren: '../home/home.module#HomeModule' },
];
var LazyLoadModule = /** @class */ (function () {
    function LazyLoadModule() {
    }
    LazyLoadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ]
        })
    ], LazyLoadModule);
    return LazyLoadModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/i502306/Documents/invoice/invoice-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map