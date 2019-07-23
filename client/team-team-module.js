(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"],{

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <p>\n    <span class=\"title\">Team</span>\n    <button mat-raised-button color=\"primary\" (click)=\"addNewUser()\">\n      <mat-icon>add_box</mat-icon> Invite Member\n    </button>\n  </p>\n  <div class=\"subtitle\">\n    Grant others access to your business on Ind-Invoices.\n  </div>\n</div>\n<div class=\"table-wrapper\" *ngIf=\"dataSource.data.length > 0\">\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n    </ng-container>\n\n    <!-- Email Address Column -->\n    <ng-container matColumnDef=\"emailAddress\">\n      <mat-header-cell *matHeaderCellDef> Email address </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.emailAddress }}</mat-cell>\n    </ng-container>\n\n    <!-- Role Column -->\n    <ng-container matColumnDef=\"role\">\n      <mat-header-cell *matHeaderCellDef> Role </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"\n        ><span class=\"tax-mode\">{{ element.role }}</span>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element; let index\">\n        <div>\n          <mat-icon (click)=\"editUser(element)\" matTooltip=\"edit\"\n            >edit</mat-icon\n          >\n          <mat-icon color=\"warn\" (click)=\"deleteUser(index)\" matTooltip=\"delete\"\n            >delete_forever</mat-icon\n          >\n        </div>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n  </mat-table>\n</div>\n\n<div *ngIf=\"dataSource.data.length === 0\" class=\"mat-elevation-z1\">\n  <p class=\"p20\">No Tax Found</p>\n</div>\n"

/***/ }),

/***/ "./src/app/team/team.component.scss":
/*!******************************************!*\
  !*** ./src/app/team/team.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header p {\n  margin: 20px 20px 20px 20px; }\n  .header p .title {\n    font-size: 1.6rem;\n    padding-right: 10px; }\n  .header p button {\n    float: right; }\n  .header .subtitle {\n  margin: 20px;\n  font-size: small; }\n  .table-wrapper {\n  overflow: auto;\n  max-height: 600px; }\n  .table-wrapper .mat-table {\n    margin: 20px; }\n  .table-wrapper .mat-table .mat-header-cell {\n      font-size: 1rem; }\n  .table-wrapper .mat-table .mat-row:hover {\n      background-color: #f5f5f5; }\n  .table-wrapper .cdk-column-action mat-icon {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    margin-right: 10px;\n    padding: 5px;\n    border-radius: 4px;\n    height: 20px;\n    width: 20px;\n    font-size: 20px;\n    background: #f5f5f5;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkJBQTJCLEVBQUE7RUFGL0I7SUFJTSxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7RUFMekI7SUFRTSxZQUFZLEVBQUE7RUFSbEI7RUFZSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHcEI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7RUFGbkI7SUFJSSxZQUFZLEVBQUE7RUFKaEI7TUFNTSxlQUFlLEVBQUE7RUFOckI7TUFTTSx5QkFBeUIsRUFBQTtFQVQvQjtJQWNNLHlIQUMwRTtJQUMxRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHAge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuICAuc3VidGl0bGUge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG59XG4udGFibGUtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgLm1hdC10YWJsZSB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAubWF0LXJvdzpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgfVxuICAuY2RrLWNvbHVtbi1hY3Rpb24ge1xuICAgIG1hdC1pY29uIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs */ "./src/app/dialogs/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var TEAM_DATA = [
    { id: 1, name: 'abc', emailAddress: 'abc@gmail.com', role: 'admin' },
    { id: 2, name: 'xyz', emailAddress: 'xyz@gmail.com', role: 'readOnly' },
    { id: 3, name: 'pqr', emailAddress: 'pqr@gmail.com', role: 'employee' }
];
var TeamComponent = /** @class */ (function () {
    function TeamComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['name', 'emailAddress', 'role', 'action'];
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](TEAM_DATA);
    };
    TeamComponent.prototype.addNewUser = function () {
        var _this = this;
        _dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"].data = null;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_3__["TeamDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"]);
        dialogRef
            .afterClosed()
            .toPromise()
            .then(function (result) {
            if (result) {
                result.id = TEAM_DATA.length + 1;
                TEAM_DATA.push(result);
                _this.dataSource.data = TEAM_DATA;
            }
        }, function (err) { return console.log(err); });
    };
    TeamComponent.prototype.deleteUser = function (index) {
        TEAM_DATA.splice(index, 1);
        this.dataSource.data = TEAM_DATA;
    };
    TeamComponent.prototype.editUser = function (user) {
        _dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"].data = user;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_3__["TeamDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"]);
        dialogRef
            .afterClosed()
            .toPromise()
            .then(function (result) {
            if (result) {
                for (var _i = 0, TEAM_DATA_1 = TEAM_DATA; _i < TEAM_DATA_1.length; _i++) {
                    var item = TEAM_DATA_1[_i];
                    if (item.id === result.id) {
                        item.role = result.role;
                    }
                }
            }
        }, function (err) { return console.log(err); });
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/team/team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/team/team.module.ts":
/*!*************************************!*\
  !*** ./src/app/team/team.module.ts ***!
  \*************************************/
/*! exports provided: TeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");





var appRoutes = [
    {
        path: "",
        component: _team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"]
    }
];
var TeamModule = /** @class */ (function () {
    function TeamModule() {
    }
    TeamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"]],
            imports: [_base_base_module__WEBPACK_IMPORTED_MODULE_4__["BaseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes)]
        })
    ], TeamModule);
    return TeamModule;
}());



/***/ })

}]);
//# sourceMappingURL=team-team-module.js.map