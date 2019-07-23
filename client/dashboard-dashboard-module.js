(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"column\"\n  class=\"dashboard\"\n  fxLayoutAlign=\"space-between stretch\"\n  fxLayoutGap=\"10px\"\n  fxFlexFill\n  style=\"padding: 20px;\"\n>\n  <div\n    fxLayout=\"column\"\n    class=\"mat-elevation-z2\"\n    style=\"background-color: white; padding: 10px;\"\n    fxLayoutAlign=\"space-between stretch\"\n    fxFlexFill\n  >\n    <div>\n      <mat-toolbar>\n        <h3 class=\"mat-heading\">Welcome to Ind-Invoice, virender!</h3>\n      </mat-toolbar>\n    </div>\n    <div fxFlexFill>\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n        <div fxFlex=\"100\">\n          <h4 class=\"mat-subheader\">Let's help you set up your account.</h4>\n          <div>\n            <mat-tab-group>\n              <mat-tab label=\"Complete your business profile\">\n                <div class=\"mw-800\">\n                  <h4>Branding & Contact Information</h4>\n                  <p>\n                    This one is important. Make it clear to customers who they\n                    are paying! You should add your billing address, contact\n                    information, and your logo in <b>Settings > Billing</b> .\n                  </p>\n                  <div>\n                    <p>Example:</p>\n                    <img\n                      class=\"sample-img\"\n                      [src]=\"'assets/branding-sample.png'\"\n                    />\n                    <p>Current Address: Nehra, India</p>\n                  </div>\n                  <a\n                    [routerLink]=\"['/auth/settings']\"\n                    mat-raised-button\n                    color=\"warn\"\n                  >\n                    Complete Profile now <mat-icon>trending_flat</mat-icon>\n                  </a>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"Enable payments\">\n                <div class=\"mw-800\">\n                  <h4>Setup Payments</h4>\n                  <p>\n                    Don't forget to let your customers know how to pay! With\n                    Invoiced you can get paid in a variety of ways, making it\n                    more convenient for customers.\n                  </p>\n                  <h4>Online Payments</h4>\n                  <p>\n                    You can accept instant, online payments with Invoiced,\n                    including credit and debit cards, ACH, direct debit, and\n                    PayPal. When you receive a payment online, Invoiced will\n                    mark the invoice as paid, automatically.\n                  </p>\n                  <h4>Payment Instructions</h4>\n                  <p>\n                    Customers still sending a check? No problem! We can display\n                    your payment instructions on invoices and the payment page.\n                    Your customers can even click a button to let you know when\n                    a check is in the mail (known as a promise to pay).\n                  </p>\n                  <a\n                    [routerLink]=\"['/auth/payments']\"\n                    mat-raised-button\n                    color=\"warn\"\n                  >\n                    Setup payment now <mat-icon>trending_flat</mat-icon>\n                  </a>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"Import data\">\n                <div class=\"mw-800\">\n                  <h4>Importing Data</h4>\n                  <p>\n                    Already have existing billing data you need to pull into\n                    Invoiced? Data can be imported from a variety of sources,\n                    including from spreadsheets and your accounting system.\n                  </p>\n                  <a\n                    [routerLink]=\"['/auth/payments']\"\n                    mat-raised-button\n                    color=\"warn\"\n                  >\n                    Import customers\n                  </a>\n                  <a\n                    style=\"margin-left:20px;\"\n                    [routerLink]=\"['/auth/payments']\"\n                    mat-raised-button\n                    color=\"warn\"\n                  >\n                    Import invoices\n                  </a>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"Verify your email address\">\n                <div class=\"mw-800\">\n                  <h4>Verify Your Account</h4>\n                  <p>\n                    Before you can send invoices, you must first verify your\n                    email address. Please check your inbox for an email titled\n                    <b>\n                      <i><u>Please verify your email address</u></i></b\n                    >\n                    and click the button contained in the email.\n                  </p>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"Send Your First Invoice\">\n                <div class=\"mw-800\">\n                  <h4>Sending Invoices</h4>\n                  <p>\n                    Once you have setup your business profile and enabled\n                    payments, you are ready to send your first invoice. If you\n                    have not already, you will need to\n                    <a [routerLink]=\"['/auth/invoices']\" color=\"warn\">\n                      create an invoice\n                    </a>\n                    first.\n                  </p>\n                  <p>\n                    Invoices can be sent via email, direct mail, and text\n                    message. In order to send your first invoice, you simply\n                    <b>Send Invoice</b> on an open invoice.\n                  </p>\n                  <a\n                    [routerLink]=\"['/auth/invoices']\"\n                    mat-raised-button\n                    color=\"warn\"\n                  >\n                    Send invoices <mat-icon>trending_flat</mat-icon>\n                  </a>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"Invite team member\">\n                <div class=\"mw-800\">\n                  <h4>Invite Team Members</h4>\n                  <p>\n                    Do other team members within your organization participate\n                    in invoicing and collections? Add them to your Invoiced\n                    account to start collaborating and get paid faster.\n                  </p>\n                  <p>\n                    Invoiced has many features that get even better in a\n                    multi-user environment, like follow up notes, the activity\n                    log, account managers, and Smart Chasing.\n                  </p>\n                  <a\n                    [routerLink]=\"['/auth/team']\"\n                    mat-raised-button\n                    color=\"warn\"\n                  >\n                    Invite team member <mat-icon>trending_flat</mat-icon>\n                  </a>\n                </div>\n              </mat-tab>\n            </mat-tab-group>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard .mat-subheader {\n  margin-top: 0; }\n\n.dashboard .sample-img {\n  width: 300px;\n  border: 2px solid #ccc; }\n\n.dashboard .mw-800 {\n  max-width: 800px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGFBQWEsRUFBQTs7QUFGckI7RUFLSSxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBTjFCO0VBU0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XG4gICAgLm1hdC1zdWJoZWFkZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAuc2FtcGxlLWltZ3tcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgfVxuICAubXctODAwe1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");





var appRoutes = [
    {
        path: "",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
            imports: [_base_base_module__WEBPACK_IMPORTED_MODULE_4__["BaseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes)]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map