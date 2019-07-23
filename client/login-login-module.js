(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"column\"\n  fxFlexFill\n  fxLayoutAlign=\"start center\"\n  style=\"background-color:#F8F8F8; padding: 5%;\"\n>\n<h2>Indi-Invoice</h2>\n  <div class=\"login-box\">\n    <mat-card>\n      <mat-card-title>User login\n                </mat-card-title>\n      <mat-card-content>\n        <form\n          fxLayout=\"column\"\n          fxLayoutAlign=\"start stretch\"\n          [formGroup]=\"userForm\"\n          (ngSubmit)=\"submit()\"\n        >\n          <mat-form-field class=\"full-width\">\n            <input\n              type=\"email\"\n              id=\"email\"\n              class=\"input\"\n              placeholder=\"Please enter your email\"\n              formControlName=\"email\"\n              required\n              matInput\n              autocomplete=\"off\"\n            />\n          </mat-form-field>\n          <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n            {{ formErrors.email }}\n          </div>\n          <mat-form-field class=\"full-width\">\n            <input\n              type=\"password\"\n              id=\"password\"\n              class=\"input\"\n              placeholder=\"please  enter your password\"\n              formControlName=\"password\"\n              required\n              matInput\n              autocomplete=\"off\"\n            />\n          </mat-form-field>\n          <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n            {{ formErrors.password }}\n          </div>\n          <div>\n              <a\n              [routerLink]=\"['/forgotpassword']\"\n                mat-raised-button\n                color=\"secondary\"\n                class=\"forgot-password\"\n              >\n                Forgot password?\n            </a>\n          </div>\n          <button\n                mat-raised-button\n                color=\"primary\"\n                type=\"submit\"\n                [disabled]=\"!userForm.valid\" \n              >\n                Log In\n              </button>\n        </form>\n        <div class=\"sign-up\">\n            <span> Don't have an account? </span> <a\n            [routerLink]=\"['/register']\"\n              mat-raised-button\n              color=\"secondary\"\n            >\n              Sign Up\n          </a>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sigin-conainer {\n  min-height: 100%;\n  background-size: cover;\n  padding: 100px; }\n\n.sigin-main {\n  position: relative;\n  margin: 0 auto;\n  width: 500px; }\n\n.login-box {\n  margin-right: 30px; }\n\n.login-box .mat-card {\n    width: 100%; }\n\n.login-box .mat-card .forgot-password {\n      float: right;\n      box-shadow: none;\n      margin-bottom: 10px; }\n\n.login-box .mat-card .forgot-password:hover {\n      text-decoration: underline;\n      color: #42a5f5; }\n\n.login-box .mat-card .sign-up {\n      margin: 20px; }\n\n.login-box .mat-card .sign-up .mat-raised-button {\n        box-shadow: none;\n        padding-left: 5px;\n        text-decoration: underline;\n        font-weight: bolder; }\n\n.login-box .mat-card .sign-up .mat-raised-button:hover {\n        color: #42a5f5; }\n\n.full-width {\n  width: 100%; }\n\n.is-danger {\n  color: #f44336;\n  padding-bottom: 20px; }\n\n.redirect {\n  font-size: 14px;\n  margin-left: 10px;\n  color: #00AAAA; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFHSSxXQUFXLEVBQUE7O0FBSGY7TUFLTSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBOztBQVB6QjtNQVVJLDBCQUEwQjtNQUMxQixjQUFjLEVBQUE7O0FBWGxCO01BY00sWUFBWSxFQUFBOztBQWRsQjtRQWdCUSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQixtQkFBbUIsRUFBQTs7QUFuQjNCO1FBc0JRLGNBQWMsRUFBQTs7QUFLdEI7RUFDRSxXQUFXLEVBQUE7O0FBT2I7RUFDRSxjQUFhO0VBQ2Isb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmF5LWxpZ2h0ZXI6ICNlY2VlZWYgIWRlZmF1bHQ7XG4kaW1hZ2VfcGF0aDogXCIvYXNzZXRzL1wiICFkZWZhdWx0O1xuXG4kcHJlZml4OiAnc2lnaW4nO1xuXG4uI3skcHJlZml4fSB7XG5cbiAgJi1jb25haW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDEwMHB4O1xuICB9XG5cbiAgJi1tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG59XG4ubG9naW4tYm94e1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIC5tYXQtY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuZm9yZ290LXBhc3N3b3Jke1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICM0MmE1ZjU7XG4gICAgfVxuICAgIC5zaWduLXVwe1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICB9XG4gICAgICAubWF0LXJhaXNlZC1idXR0b246aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAjNDJhNWY1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gLmhlbHAge1xuXG4vLyB9XG5cbi5pcy1kYW5nZXIge1xuICBjb2xvcjojZjQ0MzM2O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnJlZGlyZWN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICMwMEFBQUE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Please enter your email',
                'email': 'please enter your vaild email'
            },
            'password': {
                'required': 'please enter your password',
                'minlength': 'Please enter more than 6 characters',
                'maxlength': 'Please enter less than 18 characters',
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
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
    LoginComponent.prototype.onValueChanged = function (data) {
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
    LoginComponent.prototype.submit = function () {
        this.router.navigate(['/auth/dashboard']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var appRoutes = [
    {
        path: "",
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [_base_base_module__WEBPACK_IMPORTED_MODULE_2__["BaseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map