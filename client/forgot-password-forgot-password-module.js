(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"column\"\n  fxFlexFill\n  fxLayoutAlign=\"start center\"\n  fxLayoutAlign.lt-sm=\"start center\"\n  style=\"background-color:#F8F8F8; padding: 5%;\"\n>\n<h2>Indi-Invoice</h2>\n  <div class=\"forgot-password-box\">\n    <mat-card>\n      <mat-card-title>Forget Password\n                </mat-card-title>\n      <mat-card-content>\n          <h5>Tell us the email address you registered with and <br /> we will send a link to change your password.\n            </h5>\n        <form\n          fxLayout=\"column\"\n          fxLayoutAlign=\"start stretch\"\n          [formGroup]=\"userForm\"\n          (ngSubmit)=\"submit()\"\n        >\n          <mat-form-field class=\"full-width\">\n            <input\n              type=\"email\"\n              id=\"email\"\n              class=\"input\"\n              placeholder=\"Please enter your email\"\n              formControlName=\"email\"\n              required\n              matInput\n              autocomplete=\"off\"\n            />\n          </mat-form-field>\n          <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n            {{ formErrors.email }}\n          </div>\n          <div>\n            <a\n            [routerLink]=\"['/login']\"\n              mat-raised-button\n              color=\"secondary\"\n              class=\"forgot-password\"\n            >\n            <mat-icon class=\"navigate_before\"\n              >navigate_before</mat-icon\n            >\n              Log In\n          </a>\n              <button\n              mat-raised-button\n              color=\"primary\"\n              type=\"submit\"\n              style=\"float:right\"\n              [disabled]=\"!userForm.valid\" \n            >\n            Submit\n            </button>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotpassword-conainer {\n  min-height: 100%;\n  background-size: cover;\n  padding: 100px; }\n\n.forgotpassword-main {\n  position: relative;\n  margin: 0 auto;\n  width: 500px; }\n\n.forgot-password-box {\n  margin-right: 30px; }\n\n.forgot-password-box .mat-card {\n    width: 100%; }\n\n.forgot-password-box .mat-card .navigate_before {\n      width: 15px;\n      font-size: 20px; }\n\n.forgot-password-box .mat-card .is-danger {\n      color: #f44336;\n      padding-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUdJLFdBQVcsRUFBQTs7QUFIZjtNQUtNLFdBQVc7TUFDWCxlQUFlLEVBQUE7O0FBTnJCO01BU00sY0FBYTtNQUNiLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmF5LWxpZ2h0ZXI6ICNlY2VlZWYgIWRlZmF1bHQ7XG4kaW1hZ2VfcGF0aDogXCIvYXNzZXRzL1wiICFkZWZhdWx0O1xuXG4kcHJlZml4OiAnZm9yZ290cGFzc3dvcmQnO1xuXG4uI3skcHJlZml4fSB7XG5cbiAgJi1jb25haW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDEwMHB4O1xuICB9XG5cbiAgJi1tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG59XG4uZm9yZ290LXBhc3N3b3JkLWJveHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAubWF0LWNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLm5hdmlnYXRlX2JlZm9yZXtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuaXMtZGFuZ2VyIHtcbiAgICAgIGNvbG9yOiNmNDQzMzY7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.formErrors = {
            'email': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Please enter your email',
                'email': 'please enter your vaild email'
            }
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ForgotPasswordComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(18)
                ]
            ],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ForgotPasswordComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    ForgotPasswordComponent.prototype.submit = function () {
        this.router.navigate(['/login']);
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var appRoutes = [
    {
        path: "",
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
    }
];
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(appRoutes), _base_base_module__WEBPACK_IMPORTED_MODULE_3__["BaseModule"]]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map