(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoices-invoices-module"],{

/***/ "./src/app/invoices/invoices.component.html":
/*!**************************************************!*\
  !*** ./src/app/invoices/invoices.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <p>\n    <span class=\"title\">Invoices</span>\n\n    <a [routerLink]=\"['new']\" mat-raised-button color=\"primary\">\n      New Invoice\n    </a>\n  </p>\n</div>\n<div class=\"mat-elevation-z1\" *ngIf=\"dataSource.data.length>0\">\n  <div style=\"display: flex\">\n    <mat-form-field class=\"filter\">\n      <input\n        matInput\n        (keyup)=\"applyFilter($event.target.value)\"\n        placeholder=\"Filter\"\n        autocomplete=\"off\"\n      />\n    </mat-form-field>\n    <mat-form-field class=\"status\" style=\"width: 115px;\">\n        <mat-select placeholder=\"Status\" [(ngModel)]=\"status\" (selectionChange)=\"changeStatus()\">\n            <mat-option *ngFor=\"let st of statusData\" [value]=\"st\">\n                      {{ st}}\n            </mat-option>\n          </mat-select>\n    </mat-form-field>\n  </div>\n<div class=\"table-wrapper\">\n  <mat-table [dataSource]=\"dataSource\" matSort>\n    <!-- Invoice Number Column -->\n    <ng-container matColumnDef=\"invoiceNumber\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        Invoice\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        {{ element.invoiceNumber }}\n      </mat-cell>\n    </ng-container>\n\n    <!-- Customer Column -->\n    <ng-container matColumnDef=\"customer\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        Customer\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.customer }} </mat-cell>\n    </ng-container>\n    <!-- date Column -->\n    <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        Date\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.date }} </mat-cell>\n    </ng-container>\n\n    <!-- Total Column -->\n    <ng-container matColumnDef=\"total\">\n      <mat-header-cell *matHeaderCellDef>\n        Total\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.total }} </mat-cell>\n    </ng-container>\n\n    <!-- Balance Column -->\n    <ng-container matColumnDef=\"balance\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>\n        Balance\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.balance }} </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <div style=\"display: flex;\">\n\n          <mat-icon\n            (click)=\"editInvoice(element.id)\"\n            *ngIf=\"element.balance > 0\"\n            matTooltip=\"edit\"\n            >edit</mat-icon\n          >\n          <mat-icon (click)=\"duplicateInvoice(element.id)\" matTooltip=\"duplicate\"\n            >file_copy</mat-icon\n          >\n          <mat-icon (click)=\"downloadInvoice(element.id)\" matTooltip=\"download\"\n            >vertical_align_bottom</mat-icon\n          >\n          <mat-icon\n            color=\"primary\"\n            (click)=\"sendInvoice(element.id)\"\n            matTooltip=\"send\"\n            >send</mat-icon\n          >\n          <mat-icon\n            class=\"payment\"\n            (click)=\"receivePayment(element.id)\"\n            *ngIf=\"element.balance > 0\"\n            matTooltip=\"receive payment\"\n            >payment</mat-icon\n          >\n          <mat-icon\n            color=\"warn\"\n            (click)=\"deleteTaxRate(element.id)\"\n            matTooltip=\"delete\"\n            >delete_forever</mat-icon\n          >\n        </div>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n  </mat-table>\n</div>\n</div>\n<div class=\"mat-elevation-z1\" *ngIf=\"dataSource.data.length===0\">\n<p class=\"p20\">No Invoice Found</p>\n</div>"

/***/ }),

/***/ "./src/app/invoices/invoices.component.scss":
/*!**************************************************!*\
  !*** ./src/app/invoices/invoices.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header p {\n  margin: 20px 20px 20px 20px; }\n  .header p .title {\n    font-size: 1.6rem;\n    padding-right: 10px; }\n  .header p a {\n    float: right; }\n  .header .subtitle {\n  margin: 20px;\n  font-size: small; }\n  .filter {\n  margin-left: 20px;\n  width: 85%; }\n  .status {\n  margin-right: 20px;\n  margin-left: 5%; }\n  .mat-elevation-z1 {\n  margin: 0 20px 20px 20px; }\n  .mat-elevation-z1 .table-wrapper {\n    overflow: auto;\n    max-height: 600px; }\n  .mat-elevation-z1 .table-wrapper .mat-table {\n      width: 100%;\n      overflow: auto;\n      min-width: 1350px; }\n  .mat-elevation-z1 .table-wrapper .mat-table .mat-row:hover {\n        background-color: #f5f5f5; }\n  .mat-elevation-z1 .table-wrapper .mat-table .mat-header-cell {\n        font-size: 1rem; }\n  .mat-elevation-z1 .table-wrapper .mat-table .tax-mode {\n        background: #f5f5f5;\n        padding: 5px;\n        border: 1px solid #ccc;\n        border-radius: 4px; }\n  .mat-elevation-z1 .table-wrapper .cdk-column-action mat-icon {\n      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n      margin-right: 10px;\n      padding: 5px;\n      border-radius: 4px;\n      height: 20px;\n      width: 20px;\n      font-size: 20px;\n      background: #f5f5f5;\n      cursor: pointer; }\n  .mat-elevation-z1 .table-wrapper .cdk-column-action .payment {\n      color: #008000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvaW52b2ljZXMvaW52b2ljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyQkFBMkIsRUFBQTtFQUYvQjtJQUlNLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFQUx6QjtJQVFNLFlBQVksRUFBQTtFQVJsQjtFQVlJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7RUFFWjtFQUNFLGtCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFJakI7RUFDRSx3QkFBd0IsRUFBQTtFQUQxQjtJQUdNLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtFQUp2QjtNQU1RLFdBQVc7TUFDWCxjQUFjO01BQ2QsaUJBQWlCLEVBQUE7RUFSekI7UUFVUSx5QkFBeUIsRUFBQTtFQVZqQztRQWFRLGVBQWUsRUFBQTtFQWJ2QjtRQWdCUSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixrQkFBa0IsRUFBQTtFQW5CMUI7TUF3QlEseUhBRXFDO01BQ3JDLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7RUFsQ3ZCO01BcUNRLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VzL2ludm9pY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHAge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBhIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIH1cbiAgLnN1YnRpdGxlIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgfVxufVxuLmZpbHRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB3aWR0aDogODUlO1xufVxuLnN0YXR1c3tcbiAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcblxufVxuXG4ubWF0LWVsZXZhdGlvbi16MSB7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcbiAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAubWF0LXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBtaW4td2lkdGg6IDEzNTBweDtcbiAgICAgIC5tYXQtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICAgIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgICAudGF4LW1vZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNkay1jb2x1bW4tYWN0aW9uIHtcbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLnBheW1lbnQge1xuICAgICAgICBjb2xvcjogIzAwODAwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/invoices/invoices.component.ts":
/*!************************************************!*\
  !*** ./src/app/invoices/invoices.component.ts ***!
  \************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var CUST_DATA = [
    {
        id: 1,
        invoiceNumber: "Virender",
        customer: "nehra",
        status: "paid",
        date: "Jul,5 2019",
        total: 1000,
        balance: 100
    },
    {
        id: 2,
        invoiceNumber: "Virender",
        customer: "viru",
        status: "sent",
        date: "Jul,5 2019",
        total: 2000,
        balance: 1000
    },
    {
        id: 3,
        invoiceNumber: "Virender",
        customer: "jay",
        status: "draft",
        date: "Jul,5 2019",
        total: 4000,
        balance: 2500
    },
    {
        id: 4,
        invoiceNumber: "Virender",
        customer: "viru",
        status: "outstanding",
        date: "Jul,5 2019",
        total: 1000,
        balance: 0
    },
    {
        id: 5,
        invoiceNumber: "Virender",
        customer: "ajay",
        status: "paid",
        date: "Jul,5 2019",
        total: 1000,
        balance: 500
    },
    {
        id: 6,
        invoiceNumber: "Virender",
        customer: "jay",
        status: "sent",
        date: "Jul,5 2019",
        total: 5000,
        balance: 0
    }
];
var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent() {
        this.displayedColumns = [
            "invoiceNumber",
            "customer",
            "date",
            "total",
            "balance",
            "action"
        ];
        this.statusData = ["Draft", "Sent", "Paid", "Outstanding", "All"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](CUST_DATA);
    }
    InvoicesComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    InvoicesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    InvoicesComponent.prototype.deleteTaxRate = function (id) {
        console.log(id);
    };
    InvoicesComponent.prototype.editTaxRate = function (id) {
        console.log(id);
    };
    InvoicesComponent.prototype.newInvoice = function () {
        alert("new invoice");
    };
    InvoicesComponent.prototype.changeStatus = function () {
        this.dataSource.filter = this.status.toLowerCase() !== 'all' ? this.status.toLowerCase() : '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], InvoicesComponent.prototype, "sort", void 0);
    InvoicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-invoices",
            template: __webpack_require__(/*! ./invoices.component.html */ "./src/app/invoices/invoices.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("detailExpand", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: "0px", minHeight: "0", display: "none" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("expanded", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: "*" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("expanded <=> collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
                ])
            ],
            styles: [__webpack_require__(/*! ./invoices.component.scss */ "./src/app/invoices/invoices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ "./src/app/invoices/invoices.module.ts":
/*!*********************************************!*\
  !*** ./src/app/invoices/invoices.module.ts ***!
  \*********************************************/
/*! exports provided: InvoicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _invoices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoices.component */ "./src/app/invoices/invoices.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-invoice/new-invoice.component */ "./src/app/invoices/new-invoice/new-invoice.component.ts");






var appRoutes = [
    {
        path: "",
        component: _invoices_component__WEBPACK_IMPORTED_MODULE_3__["InvoicesComponent"]
    },
    {
        path: "new",
        component: _new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_5__["NewInvoiceComponent"]
    }
];
var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_invoices_component__WEBPACK_IMPORTED_MODULE_3__["InvoicesComponent"], _new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_5__["NewInvoiceComponent"]],
            imports: [_base_base_module__WEBPACK_IMPORTED_MODULE_2__["BaseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(appRoutes)]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ }),

/***/ "./src/app/invoices/new-invoice/new-invoice.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/invoices/new-invoice/new-invoice.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <p>\n    <a [routerLink]=\"['/auth/invoices']\" color=\"primary\">\n      Invoices\n    </a>\n    / New Invoice\n    <mat-form-field class=\"float-right\" style=\"width:200px;\">\n      <input\n        type=\"text\"\n        placeholder=\"Select a Customer\"\n        aria-label=\"customer\"\n        matInput\n        [formControl]=\"seletedCustomer\"\n        [matAutocomplete]=\"auto\"\n      />\n      <mat-autocomplete\n        #auto=\"matAutocomplete\"\n        [displayWith]=\"displayCustFn\"\n        (closed)=\"selectedCustomerValue()\"\n      >\n        <mat-option\n          style=\"line-height: 20px;\n        border-bottom: 1px solid #ccc;\"\n          *ngFor=\"let customer of filteredCustomerOptions | async\"\n          [value]=\"customer\"\n        >\n          {{ customer.name }}\n          <br /><span style=\"font-size:12px\">{{ customer.email }}</span>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </p>\n</div>\n\n<form\n  [formGroup]=\"invoiceForm\"\n  (keydown.enter)=\"$event.preventDefault()\"\n>\n<div fxlayout=\"row\" style=\"width:100%\" class=\"mb20\" fxLayoutGap=\"20px\">\n  <div\n    fxFlex=\"100\"\n    class=\"mat-elevation-z1 new-invoice-container  components-container-gt-xs\"\n    fxLayout=\"column\"\n  >\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayout.lt-xs=\"column\">\n      <div\n        fxFlex.xs=\"100\"\n        fxFlex.lg=\"80\"\n        fxFlex.md=\"70\"\n        fxFlex.sm=\"50\"\n        class=\"invoice-logo\"\n      >\n        <div class=\"img-container\">\n          <img [src]=\"invoiceLogo\" alt=\"invoiceLogo\" class=\"logo-preview\" />\n          <p>Indi-Invoice.com</p>\n        </div>\n      </div>\n\n      <div\n        fxFlex.xs=\"100\"\n        fxFlex.lg=\"20\"\n        fxFlex.md=\"30\"\n        fxFlex.sm=\"50\"\n        fxLayoutAlign.lt.sm=\"start start\"\n        fxLayout.lt-sm=\"column\"\n        fxLayoutAlign=\"space-around start\"\n      >\n        <div>\n          <div class=\"invoice-name\">\n            <mat-form-field class=\"invoice-name wd-150\">\n              <input\n                matInput\n                type=\"text\"\n                placeholder=\"Invoice\"\n                formControlName=\"invoiceName\"\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n          </div>\n          <div>\n            <span style=\"padding: 4px;\">#</span>\n            <mat-form-field class=\"invoice-number wd-150\">\n              <input\n                matInput\n                type=\"text\"\n                placeholder=\"Invoice number\"\n                formControlName=\"invoiceNumber\"\n                autocomplete=\"off\"\n                matTooltip=\"auto generate if blank\"\n              />\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n      <div fxFlex.xs=\"100\" fxFlex.lg=\"60\" fxFlex.md=\"50\" fxFlex.sm=\"40\">\n        <div>\n          <p>Bill To:</p>\n          <p *ngIf=\"seletedCustomer.value && seletedCustomer.value.name\">\n            ATTN: {{ seletedCustomer.value.address.attentionTo }}, <br />\n            {{ seletedCustomer.value.address.address_1 }},\n            {{ seletedCustomer.value.address.address_2 }}, <br />\n            {{ seletedCustomer.value.address.city }}\n            {{ seletedCustomer.value.address.state }}\n            {{ seletedCustomer.value.address.postalCode }}\n          </p>\n          <p *ngIf=\"!(seletedCustomer.value && seletedCustomer.value.name)\">\n            please select a customer\n          </p>\n        </div>\n      </div>\n      <div\n        fxFlex.xs=\"100\"\n        fxFlex.lg=\"40\"\n        fxFlex.md=\"50\"\n        fxFlex.sm=\"60\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"space-around end\"\n      >\n        <div>\n          <mat-form-field class=\"date wd-150\">\n            <input\n              matInput\n              [matDatepicker]=\"picker\"\n              formControlName=\"date\"\n              autocomplete=\"off\"\n              placeholder=\"Date\"\n              type=\"text\"\n            />\n            <mat-datepicker-toggle\n              matSuffix\n              [for]=\"picker\"\n            ></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field class=\"date wd-150\">\n            <input\n              matInput\n              [matDatepicker]=\"picker1\"\n              formControlName=\"dueDate\"\n              autocomplete=\"off\"\n              placeholder=\"Due Date\"\n              type=\"text\"\n            />\n            <mat-datepicker-toggle\n              matSuffix\n              [for]=\"picker1\"\n            ></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"item-list\">\n      <div fxFlex=\"100\" class=\"item-header\" fxLayoutGap=\"10px\">\n        <div fxFlex=\"30\">\n          Item\n        </div>\n        <div fxFlex=\"10\">\n          Taxable\n        </div>\n        <div fxFlex=\"20\">\n          Quantity\n        </div>\n        <div fxFlex=\"20\">\n          Rate\n        </div>\n        <div fxFlex=\"20\">\n          Amount\n        </div>\n      </div>\n    </div>\n    <div\n      fxLayout=\"row\"\n      fxLayoutAlign=\"start center\"\n      class=\"item\"\n      formArrayName=\"lineItems\"\n    >\n      <div fxFlex=\"100\" fxLayoutGap=\"10px\">\n        <div\n          *ngFor=\"let item of lineItems.controls; let itemIndex = index\"\n          [formGroupName]=\"itemIndex\"\n          class=\"item-row\"\n        >\n          <div fxFlex=\"30\">\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Name of the product or service\"\n                formControlName=\"name\"\n                autocomplete=\"off\"\n                type=\"text\"\n              />\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"10\">\n            <section>\n              <mat-checkbox\n                (change)=\"updateSubtotal()\"\n                color=\"primary\"\n                formControlName=\"taxable\"\n              >\n              </mat-checkbox>\n            </section>\n          </div>\n          <div fxFlex=\"20\">\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Quantity\"\n                formControlName=\"quantity\"\n                (keyup)=\"updateLineItemAmount(itemIndex)\"\n                autocomplete=\"off\"\n                type=\"number\"\n              />\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"20\">\n            <mat-form-field>\n              <input\n                matInput\n                type=\"number\"\n                placeholder=\"Rate\"\n                formControlName=\"rate\"\n                (keyup)=\"updateLineItemAmount(itemIndex)\"\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"20\" style=\"display:flex\">\n            <p\n              style=\"display:flex\"\n              [ngStyle]=\"{\n                'margin-left':\n                  itemIndex === lineItems.controls.length - 1 ? '-8px' : 0\n              }\"\n            >\n              Rs\n              <input\n                readonly\n                type=\"number\"\n                style=\"margin: 0 0 15px 5px;\"\n                matInput\n                formControlName=\"amount\"\n                autocomplete=\"off\"\n              />\n            </p>\n            <div style=\"padding-top:20px\">\n              <mat-icon\n                class=\"clear-icon\"\n                (click)=\"removeLineItem(itemIndex)\"\n                >clear</mat-icon\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"item\">\n      <button\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"addLineItem()\"\n        type=\"button\"\n      >\n        + line Item\n      </button>\n      <div class=\"ml20\">\n        <mat-form-field>\n          <mat-select\n            (selectionChange)=\"selectedLineItem()\"\n            placeholder=\"Pick a line item\"\n            formControlName=\"selectedItem\"\n          >\n            <mat-option\n              style=\"line-height: 20px;\n                border-bottom: 1px solid #ccc;\"\n              *ngFor=\"let item of ITEM_DATA\"\n              [value]=\"item\"\n            >\n              {{ item.name }}\n              <br /><span style=\"font-size:12px\">Rs{{ item.unitCost }}</span>\n              <span\n                class=\"float-right\"\n                style=\"font-size:12px\"\n                *ngIf=\"item.taxable\"\n                >Taxable</span\n              >\n              <span\n                class=\"float-right\"\n                style=\"font-size:12px\"\n                *ngIf=\"!item.taxable\"\n                >Non taxable</span\n              >\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n    <div fxLayout=\"column\" fxLayoutAlign=\"start end\">\n      <!-- subtotal -->\n      <div class=\"invoice-balance\">\n        <div class=\"balance-name\">\n          <h4>\n            Subtotal\n          </h4>\n        </div>\n        <div class=\"balance-amount\">Rs {{ invoice.subtotal }}</div>\n      </div>\n      <p style=\"margin:0\">\n        <span style=\"font-size: .75rem;\"\n          >taxable Rs {{ invoice.taxableAmount }}</span\n        ><br /><span style=\"font-size: .75rem;\"\n          >Non taxable amount Rs {{ invoice.nonTaxableAmount }}</span\n        >\n      </p>\n\n      <!--discount-->\n      <div style=\"padding:5px\">\n        <button\n          mat-raised-button\n          color=\"primary\"\n          *ngIf=\"!showDiscount\"\n          (click)=\"showDiscount = !showDiscount\"\n          type=\"button\"\n        >\n          + Discount\n        </button>\n        <div *ngIf=\"showDiscount\" class=\"dflex\">\n          <div class=\"dflex discount\">\n            <h4 style=\"padding-right:5px;\">\n              Discount\n            </h4>\n            <mat-form-field style=\"width:100px; text-align: right\">\n              <input\n                matInput\n                type=\"number\"\n                formControlName=\"discount\"\n                (keyup)=\"updateTotal()\"\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n            <mat-form-field style=\"width:50px;padding-left:5px;\">\n              <mat-select\n                formControlName=\"discount_type\"\n                (selectionChange)=\"updateTotal()\"\n              >\n                <mat-option value=\"flat\">Rs</mat-option>\n                <mat-option value=\"percentage\">%</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <mat-icon class=\"clear-icon mt20\" (click)=\"removeDiscount()\">\n            clear\n          </mat-icon>\n        </div>\n      </div>\n      <!--tax-->\n      <div *ngIf=\"invoice.tax.length > 0\" class=\"dflex\">\n        <div\n          *ngFor=\"let tax of invoice.tax; let index\"\n          class=\"tax-item\"\n        >\n          <p>\n            <span>{{ tax.name }} </span> <span> {{ tax.amount }}%</span>\n          </p>\n          <mat-icon class=\"clear-icon\" (click)=\"removeTaxItem(index)\">\n            clear\n          </mat-icon>\n        </div>\n      </div>\n      <div class=\"ml20\">\n        <mat-form-field style=\"width:150px;\">\n          <mat-select\n            (selectionChange)=\"selectedTaxChange()\"\n            placeholder=\"Apply tax\"\n            formControlName=\"selectedTax\"\n          >\n            <mat-option\n              style=\"line-height: 20px;\n                  border-bottom: 1px solid #ccc;\"\n              *ngFor=\"let item of TAX_DATA;\"\n              [value]=\"item\"\n            >\n              {{ item.name }}\n              <br /><span style=\"font-size:12px\">{{ item.amount }} %</span>\n              <span\n                class=\"float-right\"\n                style=\"font-size:12px\"\n                *ngIf=\"item.inclusive\"\n                >Inclusive</span\n              >\n              <span\n                class=\"float-right\"\n                style=\"font-size:12px\"\n                *ngIf=\"!item.inclusive\"\n                >Exclusive</span\n              >\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <!-- amount paid -->\n      <div class=\"dflex amount-paid mr20\">\n        <h4>\n          Amount Paid\n        </h4>\n        <mat-form-field style=\"width:100px;\">\n          <input\n            matInput\n            type=\"number\"\n            formControlName=\"amountPaid\"\n            (keyup)=\"updateTotal()\"\n            autocomplete=\"off\"\n          />\n        </mat-form-field>\n      </div>\n      <!-- total -->\n      <div class=\"invoice-balance\">\n        <div class=\"balance-name\">\n          <h4>\n            Total\n          </h4>\n        </div>\n        <div class=\"balance-amount\">Rs {{ invoice.total }}</div>\n      </div>\n      <!-- Balance Due -->\n      <div class=\"invoice-balance\">\n        <div class=\"balance-name\">\n          <h4>\n            Balance Due\n          </h4>\n        </div>\n        <div class=\"balance-amount\">Rs {{ invoice.balanceDue }}</div>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"20px\">\n        <div class=\"invoice-balance\">\n          <div class=\"balance-name\">\n            <h4\n            >\n              Notes\n            </h4>\n          </div>\n        </div>\n        <mat-form-field style=\"width:80%\">\n          <textarea\n            matInput\n            type=\"text\"\n            matTextareaAutosize\n            matAutosizeMinRows=\"2\"\n            matAutosizeMaxRows=\"5\"\n            formControlName=\"notes\"\n            placeholder=\"Notes - any relevant information not already covered\"\n            autocomplete=\"off\"\n          ></textarea>\n        </mat-form-field>\n      </div>\n  </div>\n</div>\n  <div fxlayout=\"row\" fxLayoutAlign=\"end start\" class=\"m20\">\n    <button\n      mat-raised-button\n      color=\"primary\"\n      [disabled]=\"!invoiceForm.valid\"\n      (click)=\"onSubmit()\"\n    >\n      Save and Issue\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/invoices/new-invoice/new-invoice.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/invoices/new-invoice/new-invoice.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header p {\n  margin: 20px 20px 20px 20px; }\n  .header p .title {\n    font-size: 1.6rem;\n    padding-right: 10px; }\n  .header p a {\n    color: #42a5f5;\n    text-decoration: none; }\n  .header .subtitle {\n  margin: 20px;\n  font-size: small; }\n  .new-invoice-container {\n  margin: 0 20px; }\n  .new-invoice-container .logo-preview {\n    max-width: 200px;\n    max-height: 150px; }\n  .new-invoice-container .item-list .item-header {\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-top: 10px;\n    background: #ccc;\n    padding: 5px; }\n  .new-invoice-container .item-list .item-header div {\n      outline-width: 0;\n      padding: 5px; }\n  .new-invoice-container .item {\n    padding: 5px; }\n  .new-invoice-container .item mat-form-field {\n      width: 80%; }\n  .new-invoice-container .item .item-row .clear-icon {\n      display: none; }\n  .new-invoice-container .item .item-row section {\n      padding-top: 20px; }\n  .new-invoice-container .item .item-row:hover .clear-icon {\n      display: block; }\n  .new-invoice-container .clear-icon {\n    background-color: #eee;\n    cursor: pointer;\n    height: 20px;\n    width: 20px;\n    font-size: 20px;\n    border-radius: 4px;\n    padding: 0; }\n  .new-invoice-container .clear-icon:hover {\n    background-color: #42a5f5; }\n  .new-invoice-container .invoice-balance {\n    padding: 10px;\n    display: flex; }\n  .new-invoice-container .invoice-balance h4 {\n      margin: 0; }\n  .new-invoice-container .invoice-balance .balance-amount {\n      padding: 10px; }\n  .new-invoice-container .invoice-balance .balance-name {\n      padding: 10px; }\n  .new-invoice-container .amount-paid h4 {\n    padding-right: 5px; }\n  .new-invoice-container .amount-paid .mat-form-field {\n    text-align: right; }\n  .new-invoice-container .tax-item {\n    position: relative; }\n  .new-invoice-container .tax-item p {\n      margin: 5px;\n      border: 1px solid #ccc;\n      padding: 5px;\n      border-radius: 4px;\n      background: #f5f5f5; }\n  .new-invoice-container .tax-item .clear-icon {\n      display: none;\n      position: absolute;\n      top: 5px;\n      right: 5px; }\n  .new-invoice-container .tax-item:hover .clear-icon {\n    display: block; }\n  @media screen and (max-width: 699px) {\n  .new-invoice-container {\n    margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvaW52b2ljZXMvbmV3LWludm9pY2UvbmV3LWludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyQkFBMkIsRUFBQTtFQUYvQjtJQUlNLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFQUx6QjtJQVFNLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTtFQVQzQjtFQWFJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGNBQWMsRUFBQTtFQURoQjtJQUdJLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQUpyQjtJQVFNLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFabEI7TUFjUSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBO0VBZnBCO0lBb0JJLFlBQVksRUFBQTtFQXBCaEI7TUFzQk0sVUFBVSxFQUFBO0VBdEJoQjtNQTBCUSxhQUFhLEVBQUE7RUExQnJCO01BNkJRLGlCQUFpQixFQUFBO0VBN0J6QjtNQWtDUSxjQUFjLEVBQUE7RUFsQ3RCO0lBdUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQ0YsRUFBQTtFQTlDRjtJQWdESSx5QkFBeUIsRUFBQTtFQWhEN0I7SUFtREksYUFBYTtJQUNiLGFBQWEsRUFBQTtFQXBEakI7TUFzRE0sU0FBUyxFQUFBO0VBdERmO01BeURNLGFBQWEsRUFBQTtFQXpEbkI7TUE0RE0sYUFBYSxFQUFBO0VBNURuQjtJQWlFTSxrQkFBa0IsRUFBQTtFQWpFeEI7SUFvRU0saUJBQWlCLEVBQUE7RUFwRXZCO0lBd0VJLGtCQUFrQixFQUFBO0VBeEV0QjtNQTBFTSxXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUE7RUE5RXpCO01BaUZNLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFVBQVUsRUFBQTtFQXBGaEI7SUF5Rk0sY0FBYyxFQUFBO0VBS3BCO0VBQ0k7SUFDSSxTQUFTLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VzL25ldy1pbnZvaWNlL25ldy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHAge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjNDJhNWY1O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuICAuc3VidGl0bGUge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG59XG5cbi5uZXctaW52b2ljZS1jb250YWluZXIge1xuICBtYXJnaW46IDAgMjBweDtcbiAgLmxvZ28tcHJldmlldyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAuaXRlbS1saXN0IHtcbiAgICAuaXRlbS1oZWFkZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZGl2IHtcbiAgICAgICAgb3V0bGluZS13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaXRlbSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5pdGVtLXJvd3tcbiAgICAgIC5jbGVhci1pY29ue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgc2VjdGlvbntcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5pdGVtLXJvdzpob3ZlcntcbiAgICAgIC5jbGVhci1pY29ue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNsZWFyLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDBcbiAgfVxuICAuY2xlYXItaWNvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTVmNTtcbiAgfVxuICAuaW52b2ljZS1iYWxhbmNlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaDQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuYmFsYW5jZS1hbW91bnQge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLmJhbGFuY2UtbmFtZSB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxuICAuYW1vdW50LXBhaWQge1xuICAgIGg0IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgXG4gICAgfVxuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbiAgLnRheC1pdGVte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwe1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICB9XG4gICAgLmNsZWFyLWljb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbiAgLnRheC1pdGVtOmhvdmVye1xuICAgIC5jbGVhci1pY29ue1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgLm5ldy1pbnZvaWNlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/invoices/new-invoice/new-invoice.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/invoices/new-invoice/new-invoice.component.ts ***!
  \***************************************************************/
/*! exports provided: NewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInvoiceComponent", function() { return NewInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NewInvoiceComponent = /** @class */ (function () {
    function NewInvoiceComponent(fb) {
        this.fb = fb;
        this.invoiceLogo = "assets/branding-sample.png";
        this.seletedCustomer = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.CUST_DATA = [
            {
                id: 1,
                name: "Virender nehra",
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
        this.ITEM_DATA = [
            {
                id: 1,
                name: "abc",
                description: "this is a test item",
                type: "service",
                unitCost: 100,
                taxable: true
            },
            {
                id: 2,
                name: "work",
                description: "thai adf kladjf kladjf kladfj akldfa klsdfakls ",
                type: "product",
                unitCost: 100,
                taxable: true
            },
            {
                id: 3,
                name: "iphone",
                description: "If you do not have an iphone,you do not have an iphone",
                type: "product",
                unitCost: 100000,
                taxable: true
            },
            {
                id: 4,
                name: "qwerty",
                description: "this is a blackberry phone",
                type: "product",
                unitCost: 10000,
                taxable: false
            }
        ];
        this.TAX_DATA = [
            { id: 1, name: "C GST", amount: 5, inclusive: false },
            { id: 2, name: "G GST", amount: 5, inclusive: false },
            { id: 3, name: "service tax", amount: 8, inclusive: true }
        ];
    }
    NewInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showDiscount = false;
        this.invoice = {
            invoiceNumber: null,
            invoiceName: "INVOICE",
            sender: "",
            receiver: "",
            date: new Date().toDateString(),
            dueDate: new Date().toString(),
            paymentTerms: null,
            lineItem: {
                name: "",
                quantity: 0,
                unitCost: 0,
                taxable: true,
                amount: 0
            },
            subtotal: 0,
            taxableAmount: 0,
            nonTaxableAmount: 0,
            total: 0,
            balanceDue: 0,
            discount: {
                type: "flat",
                value: 0
            },
            amountPaid: 0,
            shipping: 0,
            notes: "",
            terms: "",
            tax: []
        };
        this.filteredCustomerOptions = this.seletedCustomer.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return (typeof value === "string" ? value : value.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return (name ? _this._filter(name) : _this.CUST_DATA.slice()); }));
        this.invoiceForm = this.fb.group({
            invoiceName: ["INVOICE", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            invoiceNumber: [""],
            date: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dueDate: [
                new Date(new Date().setDate(new Date().getDate() + 7)),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            ],
            selectedItem: [null],
            selectedTax: [null],
            amountPaid: [0],
            lineItems: this.fb.array([
                this.fb.group({
                    name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    quantity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    rate: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    taxable: [true],
                    amount: [0]
                })
            ]),
            discount: [0],
            discount_type: ["flat"],
            notes: [""]
        });
    };
    Object.defineProperty(NewInvoiceComponent.prototype, "lineItems", {
        get: function () {
            return this.invoiceForm.get("lineItems");
        },
        enumerable: true,
        configurable: true
    });
    NewInvoiceComponent.prototype.addLineItem = function (item) {
        this.lineItems.push(this.fb.group({
            name: [item ? item.name : ""],
            quantity: [item ? 1 : 0],
            rate: [item ? item.unitCost : 0],
            amount: [item ? item.unitCost : 0],
            taxable: [item ? item.taxable : true]
        }));
    };
    NewInvoiceComponent.prototype.removeLineItem = function (index) {
        this.lineItems.removeAt(index);
        // this.updateSubtotal();
    };
    NewInvoiceComponent.prototype.displayCustFn = function (customer) {
        return customer ? customer.name : undefined;
    };
    NewInvoiceComponent.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.CUST_DATA.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    NewInvoiceComponent.prototype.selectedCustomerValue = function () {
        console.log(this.seletedCustomer.value);
    };
    NewInvoiceComponent.prototype.selectedLineItem = function () {
        this.addLineItem(this.invoiceForm.value.selectedItem);
        this.invoiceForm.controls["selectedItem"].setValue(null);
        this.updateSubtotal();
    };
    NewInvoiceComponent.prototype.updateLineItemAmount = function (index) {
        this.lineItems.controls[index]
            .get("amount")
            .setValue(Math.round(this.lineItems.controls[index].get("rate").value *
            this.lineItems.controls[index].get("quantity").value));
        this.updateSubtotal();
    };
    NewInvoiceComponent.prototype.updateSubtotal = function () {
        this.invoice.subtotal = 0;
        this.invoice.taxableAmount = 0;
        this.invoice.nonTaxableAmount = 0;
        for (var _i = 0, _a = this.lineItems.controls; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.value.taxable) {
                this.invoice.taxableAmount += item.value.amount;
            }
            else {
                this.invoice.nonTaxableAmount += item.value.amount;
            }
        }
        this.invoice.subtotal =
            this.invoice.taxableAmount + this.invoice.nonTaxableAmount;
        this.updateTotal();
    };
    NewInvoiceComponent.prototype.updateTotal = function () {
        if (this.invoice.subtotal > 0) {
            this.invoice.total = this.invoice.nonTaxableAmount;
            this.invoice.total = this.invoice.total + this.invoice.taxableAmount;
            if (this.invoice.tax.length > 0) {
                for (var _i = 0, _a = this.invoice.tax; _i < _a.length; _i++) {
                    var tax = _a[_i];
                    this.invoice.total =
                        this.invoice.total - (this.invoice.total * tax.amount) / 100;
                }
            }
            if (this.invoiceForm.value.discount_type === "percentage") {
                this.invoice.total =
                    this.invoice.total -
                        (this.invoice.total * this.invoiceForm.value.discount) / 100;
            }
            else if (this.invoiceForm.value.discount_type === "flat") {
                this.invoice.total =
                    this.invoice.total - this.invoiceForm.value.discount;
            }
            if (this.invoiceForm.value.shippin) {
                this.invoice.total -= this.invoiceForm.value.shipping;
            }
            this.invoice.balanceDue =
                this.invoice.total - this.invoiceForm.value.amountPaid;
        }
    };
    NewInvoiceComponent.prototype.removeDiscount = function () {
        this.showDiscount = false;
        this.invoiceForm.controls["discount"].setValue(0);
        this.updateTotal();
    };
    NewInvoiceComponent.prototype.selectedTaxChange = function () {
        var newItem = true;
        for (var _i = 0, _a = this.invoice.tax; _i < _a.length; _i++) {
            var tax = _a[_i];
            if (tax.id === this.invoiceForm.value.selectedTax.id) {
                newItem = false;
            }
        }
        if (newItem) {
            this.invoice.tax.push(this.invoiceForm.value.selectedTax);
            this.updateTotal();
        }
        this.invoiceForm.controls["selectedTax"].setValue(null);
    };
    NewInvoiceComponent.prototype.removeTaxItem = function (index) {
        this.invoice.tax.splice(index, 1);
    };
    NewInvoiceComponent.prototype.onSubmit = function () {
        this.invoice.invoiceName = this.invoiceForm.value.invoiceName;
        this.invoice.invoiceNumber = this.invoiceForm.value.invoiceNumber;
        this.invoice.date = this.invoiceForm.value.date;
        this.invoice.dueDate = this.invoiceForm.value.dueDate;
        this.invoice.lineItem = this.invoiceForm.value.lineItem;
        this.invoice.amountPaid = this.invoiceForm.value.amountPaid;
        this.invoice.discount = {
            value: this.invoiceForm.value.discount,
            type: this.invoiceForm.value.discount_type
        };
        this.invoice.notes = this.invoiceForm.value.notes;
    };
    NewInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-new-invoice",
            template: __webpack_require__(/*! ./new-invoice.component.html */ "./src/app/invoices/new-invoice/new-invoice.component.html"),
            styles: [__webpack_require__(/*! ./new-invoice.component.scss */ "./src/app/invoices/new-invoice/new-invoice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NewInvoiceComponent);
    return NewInvoiceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=invoices-invoices-module.js.map