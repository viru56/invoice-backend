(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-profile-user-profile-module"],{

/***/ "./src/app/modules/user-profile/user-profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  action=\"submit\"\n  (ngSubmit)=\"submit()\"\n  [formGroup]=\"userProfileForm\"\n  class=\"user-form\"\n>\n  <div\n    fxLayout=\"column\"\n    fxLayoutAlign=\"space-around center\"\n    class=\"components-container-gt-xs mat-elevation-z1\"\n    fxFlex=\"50\"\n    fxFlex.lt-sm=\"80\"\n    style=\"margin:20px auto;\"\n    *ngIf=\"currentUser\"\n  >\n    <div>\n      <mat-form-field style=\"width:250px\">\n        <input\n          matInput\n          placeholder=\"Company\"\n          autocomplete=\"off\"\n          formControlName=\"company\"\n          type=\"text\"\n        />\n      </mat-form-field>\n    </div>\n    <div>\n        <mat-form-field style=\"width:250px\">\n          <input\n            matInput\n            placeholder=\"Email\"\n            autocomplete=\"off\"\n            formControlName=\"email\"\n            type=\"email\"\n          />\n        </mat-form-field>\n      </div>\n    <div>\n      <mat-form-field style=\"width:250px\">\n        <input\n          matInput\n          placeholder=\"Full Name\"\n          autocomplete=\"off\"\n          formControlName=\"fullName\"\n          type=\"text\"\n        />\n      </mat-form-field>\n      <div *ngIf=\"formErrors.fullName\" class=\"is-danger\">\n        {{ formErrors.fullName }}\n      </div>\n    </div>\n    <div>\n      <mat-form-field style=\"width:250px\">\n        <input\n          matInput\n          placeholder=\"Password\"\n          autocomplete=\"off\"\n          formControlName=\"password\"\n          type=\"password\"\n          matTooltip=\"password between 8 to 24 characters which contain at least one numeric digit, one uppercase and one lowercase letter.\"\n        />\n      </mat-form-field>\n      <div *ngIf=\"formErrors.password\" class=\"is-danger\">\n        {{ formErrors.password }}\n      </div>\n    </div>\n    <div>\n      <mat-form-field style=\"width:250px\">\n        <input\n          matInput\n          placeholder=\"Confirm Password\"\n          autocomplete=\"off\"\n          formControlName=\"confirmPassword\"\n          type=\"password\"\n        />\n      </mat-form-field>\n      <div *ngIf=\"formErrors.confirmPassword\" class=\"is-danger\">\n        {{ formErrors.confirmPassword }}\n      </div>\n    </div>\n    <div class=\"is-danger\" *ngIf=\"serverError\">{{ serverError }}</div>\n    <div>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        type=\"submit\"\n        [disabled]=\"!userProfileForm.valid\"\n      >\n        Save\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/user-profile/user-profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header p {\n  margin: 20px 20px 20px 20px; }\n  .header p .title {\n    font-size: 1.6rem;\n    padding-right: 10px; }\n  .header p button {\n    float: right; }\n  .header .subtitle {\n  margin: 20px;\n  font-size: small; }\n  .table-wrapper {\n  overflow: auto;\n  max-height: 80%;\n  margin: 20px; }\n  .table-wrapper .mat-table {\n    width: 100%; }\n  .table-wrapper .mat-table .mat-header-cell {\n      font-size: 1rem;\n      color: rgba(0, 0, 0, 0.87);\n      font-weight: bold;\n      background-color: #fafafa; }\n  .table-wrapper .mat-table .mat-row:hover {\n      background-color: #f5f5f5; }\n  .table-wrapper .mat-table .role {\n      background: #f5f5f5;\n      padding: 5px;\n      border: 1px solid #ccc;\n      border-radius: 4px; }\n  .table-wrapper .cdk-column-action mat-icon {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    margin-right: 10px;\n    padding: 5px;\n    border-radius: 4px;\n    height: 20px;\n    width: 20px;\n    font-size: 20px;\n    background: #f5f5f5;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sMkJBQTJCLEVBQUE7RUFGakM7SUFJUSxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7RUFMM0I7SUFRUSxZQUFZLEVBQUE7RUFScEI7RUFZTSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHcEI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVksRUFBQTtFQUhkO0lBS0ksV0FBVyxFQUFBO0VBTGY7TUFPTSxlQUFlO01BQ2YsMEJBQTBCO01BQzFCLGlCQUFpQjtNQUNqQix5QkFBeUIsRUFBQTtFQVYvQjtNQWFNLHlCQUF5QixFQUFBO0VBYi9CO01BZ0JPLG1CQUFtQjtNQUNwQixZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGtCQUFrQixFQUFBO0VBbkJ4QjtJQXdCTSx5SEFDMEU7SUFDMUUsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIHAge1xuICAgICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIH1cbiAgfVxuICAudGFibGUtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogODAlO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICAubWF0LXRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgfVxuICAgICAgLm1hdC1yb3c6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgfVxuICAgICAgLnJvbGV7XG4gICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNkay1jb2x1bW4tYWN0aW9uIHtcbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/modules/user-profile/user-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(authService, toastr, fb) {
        this.authService = authService;
        this.toastr = toastr;
        this.fb = fb;
        this.formErrors = {
            password: "",
            confirmPassword: "",
            fullName: ""
        };
        this.validationMessages = {
            password: {
                required: "please enter your password",
                pattern: "password is not valid"
            },
            confirmPassword: {
                required: "Please confirm your password",
                mustMatch: "password did not match"
            },
            fullName: {
                required: "Full name is required"
            }
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserDetails().then(function (user) {
            _this.currentUser = user;
            _this.copyForm();
        }, function (err) { return console.log(err); });
        this.initForm();
    };
    UserProfileComponent.prototype.initForm = function () {
        var _this = this;
        this.userProfileForm = this.fb.group({
            company: [{ value: "", disabled: true }],
            fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [{ value: "", disabled: true }],
            password: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,24}$/)]
            ],
            confirmPassword: [null]
        }, { validator: this.mustMatch("password", "confirmPassword") });
        this.userProfileForm.valueChanges.subscribe(function (data) {
            return _this.onValueChanged(data);
        });
        this.onValueChanged();
    };
    UserProfileComponent.prototype.mustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    UserProfileComponent.prototype.onValueChanged = function (data) {
        this.serverError = '';
        if (!this.userProfileForm) {
            return;
        }
        var form = this.userProfileForm;
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
    UserProfileComponent.prototype.copyForm = function () {
        this.userProfileForm.controls["fullName"].setValue(this.currentUser.fullName);
        this.userProfileForm.controls["email"].setValue(this.currentUser.email);
        this.userProfileForm.controls["company"].setValue(this.currentUser.company.name);
    };
    UserProfileComponent.prototype.submit = function () {
        var _this = this;
        var formChange = false;
        if (this.userProfileForm.value.password &&
            !this.userProfileForm.value.confirmPassword.trim()) {
            alert("Confrim password is required");
            return;
        }
        if (this.currentUser.fullName !== this.userProfileForm.value.fullName.trim()) {
            formChange = true;
        }
        if (this.userProfileForm.value.password) {
            formChange = true;
        }
        if (formChange) {
            this.userProfileForm.value.id = this.currentUser.id;
            this.authService.userUpdate(this.userProfileForm.value).then(function (res) {
                _this.toastr.success("User details are updated");
                setTimeout(function () { return window.location.reload(); }, 500);
            }, function (err) {
                console.log(err);
                _this.serverError =
                    err.error.message || "Server error : failed to update user details";
            });
        }
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-profile",
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/modules/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/modules/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-profile/user-profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/modules/user-profile/user-profile.component.ts");





var appRoutes = [{
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]
    }];
var UserProfileModule = /** @class */ (function () {
    function UserProfileModule() {
    }
    UserProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]],
            imports: [
                _base_base_module__WEBPACK_IMPORTED_MODULE_2__["BaseModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes)
            ]
        })
    ], UserProfileModule);
    return UserProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-user-profile-user-profile-module.js.map