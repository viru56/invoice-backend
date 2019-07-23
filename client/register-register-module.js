(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"row\"\n  fxFlexFill\n  fxLayoutAlign=\"start start\"\n  style=\"background-color:#F8F8F8; padding: 5%\"\n>\n  <div\n    fxLayout=\"column\"\n    fxFlex.xs=\"100\"\n    fxFlex.lg=\"50\"\n    fxFlex.md=\"50\"\n    fxFlex.sm=\"100\"\n    fxLayoutAlign=\"start center\"\n  >\n    <h2>Indi-Invoice</h2>\n    <div class=\"register-box\">\n      <mat-card>\n        <mat-card-title>New User </mat-card-title>\n        <mat-card-content>\n          <form\n            fxLayout=\"column\"\n            fxLayoutAlign=\"start stretch\"\n            [formGroup]=\"userForm\"\n            (ngSubmit)=\"submit()\"\n          >\n            <mat-form-field class=\"full-width\">\n              <input\n                type=\"text\"\n                id=\"firstName\"\n                class=\"input\"\n                placeholder=\"Please enter your full name\"\n                formControlName=\"firstName\"\n                required\n                matInput\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n            <div *ngIf=\"formErrors.firstName\" class=\"help is-danger\">\n              {{ formErrors.firstName }}\n            </div>\n            <mat-form-field class=\"full-width\">\n              <input\n                type=\"text\"\n                id=\"companyName\"\n                class=\"input\"\n                placeholder=\"Please enter your company name\"\n                formControlName=\"companyName\"\n                required\n                matInput\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n            <div *ngIf=\"formErrors.companyName\" class=\"help is-danger\">\n              {{ formErrors.companyName }}\n            </div>\n            <mat-form-field class=\"full-width\">\n              <input\n                type=\"email\"\n                id=\"email\"\n                class=\"input\"\n                placeholder=\"Please enter your email\"\n                formControlName=\"email\"\n                required\n                matInput\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n            <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n              {{ formErrors.email }}\n            </div>\n            <mat-form-field class=\"full-width\">\n              <input\n                type=\"password\"\n                id=\"password\"\n                class=\"input\"\n                placeholder=\"please  enter your password\"\n                formControlName=\"password\"\n                required\n                matInput\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n            <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n              {{ formErrors.password }}\n            </div>\n            <button\n              mat-raised-button\n              color=\"primary\"\n              type=\"submit\"\n              [disabled]=\"!userForm.valid\"\n            >\n              Sign Up\n            </button>\n          </form>\n          <div class=\"sign-up\">\n            <span>Already have an account?</span>\n            <a [routerLink]=\"['/login']\" mat-raised-button color=\"secondary\">\n              Sign In\n            </a>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n  <div\n    class=\"column\"\n    fxLayoutAlign=\"start start\"\n    fxFlex.xs=\"0\"\n    fxFlex.lg=\"50\"\n    fxFlex.md=\"50\"\n    fxFlex.sm=\"0\"\n    fxShow.sm=\"false\"\n    fxShow.xs=\"false\"\n    style=\"padding: 5% 5% 0 0\"\n  >\n    <div>\n      <h2>Sign up for a 14-day free trial</h2>\n      <p>\n        No obligation or payment required! \n      </p>\n      <p>When we say free, we really mean it.</p>\n      <h3>\n        Why Invoiced?\n      </h3>\n      <h4>\n        Put billing on autopilot\n      </h4>\n      <h4>\n        Boost cash flow\n      </h4>\n      <p>\n        Businesses on Invoiced get paid 12-16 days faster, on average.\n      </p>\n      <h4>\n        Delight your customers\n      </h4>\n      <p>\n        Today's consumer expects an online experience, even for backoffice\n        functions like billing.\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sigin-conainer {\n  min-height: 100%;\n  background-size: cover;\n  padding: 100px; }\n\n.sigin-main {\n  position: relative;\n  margin: 0 auto;\n  width: 500px; }\n\n.register-box {\n  margin-right: 30px; }\n\n.register-box .mat-card {\n    width: 100%; }\n\n.register-box .mat-card .forgot-password {\n      float: right;\n      box-shadow: none;\n      margin-bottom: 10px; }\n\n.register-box .mat-card .forgot-password:hover {\n      text-decoration: underline;\n      color: #42a5f5; }\n\n.register-box .mat-card .sign-up {\n      margin: 20px; }\n\n.register-box .mat-card .sign-up .mat-raised-button {\n        box-shadow: none;\n        padding-left: 5px;\n        text-decoration: underline;\n        font-weight: bolder; }\n\n.register-box .mat-card .sign-up .mat-raised-button:hover {\n        color: #42a5f5; }\n\n.full-width {\n  width: 100%; }\n\n.is-danger {\n  color: #f44336;\n  padding-bottom: 20px; }\n\n.redirect {\n  font-size: 14px;\n  margin-left: 10px;\n  color: #00AAAA; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFHSSxXQUFXLEVBQUE7O0FBSGY7TUFLTSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBOztBQVB6QjtNQVVJLDBCQUEwQjtNQUMxQixjQUFjLEVBQUE7O0FBWGxCO01BY00sWUFBWSxFQUFBOztBQWRsQjtRQWdCUSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQixtQkFBbUIsRUFBQTs7QUFuQjNCO1FBc0JRLGNBQWMsRUFBQTs7QUFLdEI7RUFDRSxXQUFXLEVBQUE7O0FBT2I7RUFDRSxjQUFhO0VBQ2Isb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmF5LWxpZ2h0ZXI6ICNlY2VlZWYgIWRlZmF1bHQ7XG4kaW1hZ2VfcGF0aDogXCIvYXNzZXRzL1wiICFkZWZhdWx0O1xuXG4kcHJlZml4OiAnc2lnaW4nO1xuXG4uI3skcHJlZml4fSB7XG5cbiAgJi1jb25haW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDEwMHB4O1xuICB9XG5cbiAgJi1tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG59XG4ucmVnaXN0ZXItYm94e1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIC5tYXQtY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuZm9yZ290LXBhc3N3b3Jke1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICM0MmE1ZjU7XG4gICAgfVxuICAgIC5zaWduLXVwe1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICB9XG4gICAgICAubWF0LXJhaXNlZC1idXR0b246aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAjNDJhNWY1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gLmhlbHAge1xuXG4vLyB9XG5cbi5pcy1kYW5nZXIge1xuICBjb2xvcjojZjQ0MzM2O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnJlZGlyZWN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICMwMEFBQUE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.formErrors = {
            email: "",
            password: "",
            firstName: "",
            companyName: ""
        };
        this.validationMessages = {
            firstName: {
                required: "Please enter your name"
            },
            companyName: {
                required: "Please enter your company name"
            },
            email: {
                required: "Please enter your email",
                email: "please enter your vaild email"
            },
            password: {
                required: "please enter your password",
                minlength: "Please enter more than 6 characters",
                maxlength: "Please enter less than 18 characters"
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            companyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(18)]]
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    RegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                this.formErrors[field] = "";
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            this.formErrors[field] += messages[key] + " ";
                        }
                    }
                }
            }
        }
    };
    RegisterComponent.prototype.submit = function () {
        this.router.navigate(["/auth/dashboard"]);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");





var appRoutes = [
    {
        path: "",
        component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]],
            imports: [_base_base_module__WEBPACK_IMPORTED_MODULE_4__["BaseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes)]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map