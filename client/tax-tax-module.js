(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tax-tax-module"],{

/***/ "./src/app/tax/tax.component.html":
/*!****************************************!*\
  !*** ./src/app/tax/tax.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <p>\n    <span class=\"title\">Taxes</span>\n\n    <button mat-raised-button color=\"primary\" (click)=\"addNewTaxRate()\">\n      <mat-icon>add_box</mat-icon> New Tax Rate\n    </button>\n  </p>\n  <div class=\"subtitle\">\n    You can create tax rates that can be applied to line items and subtotals.\n  </div>\n</div>\n<div class=\"table-wrapper\" *ngIf=\"dataSource.data.length>0\">\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n    </ng-container>\n  \n    <!-- Amount Column -->\n    <ng-container matColumnDef=\"amount\">\n      <mat-header-cell *matHeaderCellDef> Amount </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.amount }} %</mat-cell>\n    </ng-container>\n  \n    <!-- Tax mode Column -->\n    <ng-container matColumnDef=\"taxMode\">\n      <mat-header-cell *matHeaderCellDef> Tax mode </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"\n        ><span\n          class=\"tax-mode\"\n          *ngIf=\"element.taxMode\"\n          style=\"border-color:green;color:green\"\n          > &nbsp;Inclusive</span\n        >\n        <span\n          class=\"tax-mode\"\n          *ngIf=\"!element.taxMode\"\n          >Exclusive</span\n        >\n      </mat-cell>\n    </ng-container>\n  \n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element;let index\">\n        <mat-icon (click)=\"editTaxRate(element)\" matTooltip=\"edit\">edit</mat-icon>\n        <mat-icon color=\"warn\" (click)=\"deleteTaxRate(index)\" matTooltip=\"delete\"\n          >delete_forever</mat-icon\n        >\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n  </mat-table>\n</div>\n\n<div *ngIf=\"dataSource.data.length===0\" class=\"mat-elevation-z1\">\n    <p class=\"p20\">No Tax Found</p>\n</div>\n"

/***/ }),

/***/ "./src/app/tax/tax.component.scss":
/*!****************************************!*\
  !*** ./src/app/tax/tax.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header p {\n  margin: 20px 20px 20px 20px; }\n  .header p .title {\n    font-size: 1.6rem;\n    padding-right: 10px; }\n  .header p button {\n    float: right; }\n  .header .subtitle {\n  margin: 20px;\n  font-size: small; }\n  .table-wrapper {\n  overflow: auto;\n  max-height: 600px; }\n  .table-wrapper .mat-table {\n    margin: 20px; }\n  .table-wrapper .mat-table .mat-header-cell {\n      font-size: 1rem; }\n  .table-wrapper .mat-table .mat-row:hover {\n      background-color: #f5f5f5; }\n  .table-wrapper .mat-table .tax-mode {\n      background: #f5f5f5;\n      padding: 5px;\n      border: 1px solid #ccc;\n      border-radius: 4px; }\n  .table-wrapper .cdk-column-action mat-icon {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    margin-right: 10px;\n    padding: 5px;\n    border-radius: 4px;\n    height: 20px;\n    width: 20px;\n    font-size: 20px;\n    background: #f5f5f5;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvdGF4L3RheC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJCQUEyQixFQUFBO0VBRi9CO0lBSU0saUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0VBTHpCO0lBUU0sWUFBWSxFQUFBO0VBUmxCO0VBWUksWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBRm5CO0lBSUksWUFBWSxFQUFBO0VBSmhCO01BTU0sZUFBZSxFQUFBO0VBTnJCO01BU00seUJBQXlCLEVBQUE7RUFUL0I7TUFZTSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixrQkFBa0IsRUFBQTtFQWZ4QjtJQW9CTSx5SEFDMEU7SUFDMUUsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RheC90YXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgcCB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cbn1cbi50YWJsZS13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAubWF0LXRhYmxlIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5tYXQtcm93OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgfVxuICAgIC50YXgtbW9kZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbiAgLmNkay1jb2x1bW4tYWN0aW9uIHtcbiAgICBtYXQtaWNvbiB7XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/tax/tax.component.ts":
/*!**************************************!*\
  !*** ./src/app/tax/tax.component.ts ***!
  \**************************************/
/*! exports provided: TaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxComponent", function() { return TaxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs */ "./src/app/dialogs/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var TAX_DATA = [
    { id: 1, name: "C GST", amount: 5, inclusive: false },
    { id: 2, name: "G GST", amount: 5, inclusive: false },
    { id: 3, name: "service tax", amount: 8, inclusive: true }
];
var TaxComponent = /** @class */ (function () {
    function TaxComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ["name", "amount", "taxMode", "action"];
    }
    TaxComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](TAX_DATA);
    };
    TaxComponent.prototype.addNewTaxRate = function () {
        var _this = this;
        _dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"].data = null;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_3__["TaxDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"]);
        dialogRef
            .afterClosed()
            .toPromise()
            .then(function (result) {
            if (result) {
                result.id = TAX_DATA.length + 1;
                TAX_DATA.push(result);
                _this.dataSource.data = TAX_DATA;
            }
        }, function (err) { return console.log(err); });
    };
    TaxComponent.prototype.deleteTaxRate = function (index) {
        TAX_DATA.splice(index, 1);
        this.dataSource.data = TAX_DATA;
    };
    TaxComponent.prototype.editTaxRate = function (taxData) {
        _dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"].data = taxData;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_3__["TaxDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogConfig"]);
        dialogRef
            .afterClosed()
            .toPromise()
            .then(function (result) {
            if (result) {
                for (var _i = 0, TAX_DATA_1 = TAX_DATA; _i < TAX_DATA_1.length; _i++) {
                    var item = TAX_DATA_1[_i];
                    if (item.id === result.id) {
                        item.name = result.name;
                        item.inclusive = result.taxMode;
                        item.amount = result.amount;
                    }
                }
            }
        }, function (err) { return console.log(err); });
    };
    TaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tax",
            template: __webpack_require__(/*! ./tax.component.html */ "./src/app/tax/tax.component.html"),
            styles: [__webpack_require__(/*! ./tax.component.scss */ "./src/app/tax/tax.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TaxComponent);
    return TaxComponent;
}());



/***/ }),

/***/ "./src/app/tax/tax.module.ts":
/*!***********************************!*\
  !*** ./src/app/tax/tax.module.ts ***!
  \***********************************/
/*! exports provided: TaxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxModule", function() { return TaxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tax_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax.component */ "./src/app/tax/tax.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");





var appRoutes = [
    {
        path: "",
        component: _tax_component__WEBPACK_IMPORTED_MODULE_2__["TaxComponent"]
    }
];
var TaxModule = /** @class */ (function () {
    function TaxModule() {
    }
    TaxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tax_component__WEBPACK_IMPORTED_MODULE_2__["TaxComponent"]],
            imports: [
                _base_base_module__WEBPACK_IMPORTED_MODULE_4__["BaseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes)
            ]
        })
    ], TaxModule);
    return TaxModule;
}());



/***/ })

}]);
//# sourceMappingURL=tax-tax-module.js.map