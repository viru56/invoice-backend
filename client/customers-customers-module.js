(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <p>\n    <span class=\"title\">Customers</span>\n\n    <button mat-raised-button color=\"primary\" (click)=\"addNewCustomer()\">\n      <mat-icon>add_box</mat-icon> New Customer\n    </button>\n  </p>\n</div>\n<div class=\"mat-elevation-z1\" *ngIf=\"dataSource.data.length>0\">\n  <div>\n    <mat-form-field class=\"filter\">\n      <input\n        matInput\n        (keyup)=\"applyFilter($event.target.value)\"\n        placeholder=\"Filter\"\n        autocomplete=\"off\"\n      />\n    </mat-form-field>\n    <mat-form-field class=\"startdate\">\n      <input matInput [matDatepicker]=\"satrtDate\" placeholder=\"start date\" autocomplete=\"off\">\n      <mat-datepicker-toggle matSuffix [for]=\"satrtDate\"></mat-datepicker-toggle>\n      <mat-datepicker #satrtDate></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field class=\"enddate\">\n      <input matInput [matDatepicker]=\"endDate\" placeholder=\"end date\" autocomplete=\"off\">\n      <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n      <mat-datepicker #endDate></mat-datepicker>\n    </mat-form-field>\n  </div>\n<div class=\"table-wrapper\">\n  <mat-table [dataSource]=\"dataSource\" matSort>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        Name\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"collections\">\n      <mat-header-cell *matHeaderCellDef>\n        Collections\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.collections }} </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <mat-icon (click)=\"editCustomer(element)\" matTooltip=\"edit\">edit</mat-icon>\n        <mat-icon color=\"primary\" (click)=\"generateReoprt(element.id)\" matTooltip=\"Generate report\"\n          >description</mat-icon\n        >\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n  </mat-table>\n</div>\n</div>\n<div class=\"mat-elevation-z1\" *ngIf=\"dataSource.data.length===0\">\n  <p class=\"p20\">No Customer Found</p>\n</div>"

/***/ }),

/***/ "./src/app/customers/customers.component.scss":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header p {\n  margin: 20px 20px 20px 20px; }\n  .header p .title {\n    font-size: 1.6rem;\n    padding-right: 10px; }\n  .header p button {\n    float: right; }\n  .header .subtitle {\n  margin: 20px;\n  font-size: small; }\n  .filter {\n  margin-left: 20px;\n  width: 50%; }\n  .startdate {\n  margin-left: 20px; }\n  .enddate {\n  margin-left: 20px; }\n  .mat-elevation-z1 {\n  margin: 0 20px 20px 20px; }\n  .mat-elevation-z1 .table-wrapper {\n    overflow: auto;\n    max-height: 600px; }\n  .mat-elevation-z1 .table-wrapper .mat-table .mat-header-cell {\n      font-size: 1rem; }\n  .mat-elevation-z1 .table-wrapper .mat-table .mat-row:hover {\n      background-color: #f5f5f5; }\n  .mat-elevation-z1 .table-wrapper .mat-table .tax-mode {\n      background: #f5f5f5;\n      padding: 5px;\n      border: 1px solid #ccc;\n      border-radius: 4px; }\n  .mat-elevation-z1 .table-wrapper .cdk-column-action mat-icon {\n      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n      margin-right: 10px;\n      padding: 5px;\n      border-radius: 4px;\n      height: 20px;\n      width: 20px;\n      font-size: 20px;\n      background: #f5f5f5;\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJCQUEyQixFQUFBO0VBRi9CO0lBSU0saUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0VBTHpCO0lBUU0sWUFBWSxFQUFBO0VBUmxCO0VBWUksWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVUsRUFBQTtFQUVaO0VBQ0UsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSxpQkFBaUIsRUFBQTtFQUduQjtFQUNFLHdCQUF3QixFQUFBO0VBRDFCO0lBR0ksY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBSnJCO01BT1EsZUFBZSxFQUFBO0VBUHZCO01BVVEseUJBQXlCLEVBQUE7RUFWakM7TUFhUSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixrQkFBa0IsRUFBQTtFQWhCMUI7TUFxQlEseUhBRXFDO01BQ3JDLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHAge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuICAuc3VidGl0bGUge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG59XG4uZmlsdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG4uc3RhcnRkYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uZW5kZGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MSB7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcbiAgLnRhYmxlLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIC5tYXQtdGFibGUge1xuICAgICAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5tYXQtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICAgIC50YXgtbW9kZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY2RrLWNvbHVtbi1hY3Rpb24ge1xuICAgICAgbWF0LWljb24ge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs */ "./src/app/dialogs/index.ts");






var CUST_DATA = [
    {
        id: 1,
        name: "Virender",
        collections: 0,
        email: "nehra.virender@gmail.com",
        taxId: "135343",
        account: "#00001",
        notes: "this is private notes for the customer",
        address: {
            attentionTo: "virender",
            address_1: "hoorian arcade",
            address_2: "viganana nagar",
            city: "bangalore",
            state: "karnataka",
            country: "india",
            phone: 8123465672,
            postalCode: 560075
        }
    },
    {
        id: 2,
        name: "ayush",
        collections: 0,
        email: "ayush.yadav@gmail.com",
        taxId: "345345",
        account: "#00002",
        notes: "this is private notes for the customer",
        address: {
            attentionTo: "ayush",
            address_1: "hoorian arcade",
            address_2: "viganana nagar",
            city: "bangalore",
            state: "karnataka",
            country: "india",
            phone: 8123465672,
            postalCode: 560075
        }
    },
    {
        id: 3,
        name: "manoj",
        collections: 0,
        email: "manoj.ojha@gmail.com",
        taxId: "13213",
        account: "#00003",
        notes: "this is private notes for the customer",
        address: {
            attentionTo: "manoj",
            address_1: "hoorian arcade",
            address_2: "viganana nagar",
            city: "bangalore",
            state: "karnataka",
            country: "india",
            phone: 8123465672,
            postalCode: 560075
        }
    }
];
var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ["name", "collections", "action"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](CUST_DATA);
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    CustomersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CustomersComponent.prototype.addNewCustomer = function () {
        var _this = this;
        _dialogs__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"].data = null;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_5__["CustomerDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"]);
        dialogRef
            .afterClosed()
            .toPromise()
            .then(function (result) {
            if (result) {
                result.id = CUST_DATA.length + 1;
                result.collections = 0;
                CUST_DATA.push(result);
                _this.dataSource.data = CUST_DATA;
            }
        }, function (err) { return console.log(err); });
    };
    CustomersComponent.prototype.generateReoprt = function (id) {
        console.log(id);
    };
    CustomersComponent.prototype.editCustomer = function (customer) {
        _dialogs__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"].data = customer;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_5__["CustomerDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"]);
        dialogRef
            .afterClosed()
            .toPromise()
            .then(function (result) {
            if (result) {
                for (var _i = 0, CUST_DATA_1 = CUST_DATA; _i < CUST_DATA_1.length; _i++) {
                    var item = CUST_DATA_1[_i];
                    if (item.id === result.id) {
                        item.name = result.name;
                        item.notes = result.notes;
                        item.taxId = result.taxId;
                        item.email = result.email;
                        item.account = result.account;
                        item.address.address_1 = result.address.address_1;
                        item.address.address_2 = result.address.address_2;
                        item.address.attentionTo = result.address.attentionTo;
                        item.address.city = result.address.city;
                        item.address.country = result.address.country;
                        item.address.phone = result.address.phone;
                        item.address.postalCode = result.address.postalCode;
                        item.address.state = result.address.state;
                    }
                }
            }
        }, function (err) { return console.log(err); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CustomersComponent.prototype, "sort", void 0);
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-customers",
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.scss */ "./src/app/customers/customers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var appRoutes = [{
        path: '',
        component: _customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"]
    }];
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"]],
            imports: [
                _base_base_module__WEBPACK_IMPORTED_MODULE_2__["BaseModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(appRoutes)
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map