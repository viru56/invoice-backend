(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"],{

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <p>\n    <span class=\"title\">Items</span>\n    <button mat-raised-button color=\"primary\" (click)=\"addNewItem()\">\n      <mat-icon>add_box</mat-icon> New item\n    </button>\n  </p>\n  <div class=\"subtitle\">\n    Add and manage items.\n  </div>\n</div>\n<div class=\"table-wrapper\" *ngIf=\"dataSource.data.length>0\">\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n    </ng-container>\n\n    <!-- Description Column -->\n    <ng-container matColumnDef=\"description\">\n      <mat-header-cell *matHeaderCellDef>\n        <span></span> Description\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.description }}</mat-cell>\n    </ng-container>\n\n    <!-- Type Column -->\n    <!-- <ng-container matColumnDef=\"type\">\n      <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.type }} </mat-cell>\n    </ng-container> -->\n\n    <!-- Unit Cost Column -->\n    <ng-container matColumnDef=\"unitCost\">\n      <mat-header-cell *matHeaderCellDef> Unit cost </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">Rs {{ element.unitCost }} </mat-cell>\n    </ng-container>\n\n    <!-- Taxable Column -->\n    <ng-container matColumnDef=\"taxable\">\n      <mat-header-cell *matHeaderCellDef> Taxable </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span *ngIf=\"element.taxable\">Yes</span>\n        <span *ngIf=\"!element.taxable\">No</span>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element; let index\">\n        <mat-icon (click)=\"editItem(element)\" matTooltip=\"edit\">\n          edit\n        </mat-icon>\n        <mat-icon color=\"warn\" (click)=\"deleteItem(index)\" matTooltip=\"delete\">\n          delete_forever\n        </mat-icon>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n  </mat-table>\n</div>\n<div *ngIf=\"dataSource.data.length===0\" class=\"mat-elevation-z1\">\n    <p class=\"p20\">No Item Found</p>\n</div>\n"

/***/ }),

/***/ "./src/app/item/item.component.scss":
/*!******************************************!*\
  !*** ./src/app/item/item.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header p {\n  margin: 20px 20px 20px 20px; }\n  .header p .title {\n    font-size: 1.6rem;\n    padding-right: 10px; }\n  .header p button {\n    float: right; }\n  .header .subtitle {\n  margin: 20px;\n  font-size: small; }\n  .table-wrapper {\n  overflow: auto;\n  height: 600px; }\n  .table-wrapper .mat-table {\n    margin: 20px; }\n  .table-wrapper .mat-table .mat-header-cell {\n      font-size: 1rem; }\n  .table-wrapper .mat-table .mat-row:hover {\n      background-color: #f5f5f5; }\n  .table-wrapper .cdk-column-action mat-icon {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    margin-right: 10px;\n    padding: 5px;\n    border-radius: 4px;\n    height: 20px;\n    width: 20px;\n    font-size: 20px;\n    background: #f5f5f5;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkJBQTJCLEVBQUE7RUFGL0I7SUFJTSxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7RUFMekI7SUFRTSxZQUFZLEVBQUE7RUFSbEI7RUFZSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHcEI7RUFDRSxjQUFjO0VBQ2QsYUFBYSxFQUFBO0VBRmY7SUFJSSxZQUFZLEVBQUE7RUFKaEI7TUFNTSxlQUFlLEVBQUE7RUFOckI7TUFTTSx5QkFBeUIsRUFBQTtFQVQvQjtJQWNNLHlIQUMwRTtJQUMxRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHAge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuICAuc3VidGl0bGUge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG59XG4udGFibGUtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDYwMHB4O1xuICAubWF0LXRhYmxlIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5tYXQtcm93OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgfVxuICB9XG4gIC5jZGstY29sdW1uLWFjdGlvbiB7XG4gICAgbWF0LWljb24ge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs */ "./src/app/dialogs/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ITEM_DATA = [
    {
        id: 1,
        name: "abc",
        description: "this is a test item",
        unitCost: 100,
        taxable: true
    },
    {
        id: 2,
        name: "work",
        description: "thai adf kladjf kladjf kladfj akldfa klsdfakls ",
        unitCost: 100,
        taxable: true
    },
    {
        id: 3,
        name: "iphone",
        description: "If you do not have an iphone,you do not have an iphone",
        unitCost: 100000,
        taxable: true,
    },
    {
        id: 4,
        name: "qwerty",
        description: "this is a blackberry phone",
        unitCost: 10000,
        taxable: false
    }
];
var ItemComponent = /** @class */ (function () {
    function ItemComponent(mediaObserver, dialog) {
        this.mediaObserver = mediaObserver;
        this.dialog = dialog;
        this.currentScreenWidth = "";
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ITEM_DATA);
        // resize table as device resized
        this.flexMediaWatcher = this.mediaObserver.media$.subscribe(function (mediaChange) {
            if (mediaChange.mqAlias !== _this.currentScreenWidth) {
                _this.currentScreenWidth = mediaChange.mqAlias;
                _this.configTable();
            }
        });
    };
    ItemComponent.prototype.configTable = function () {
        this.displayedColumns = [
            "name",
            "description",
            "unitCost",
            "taxable",
            "action"
        ];
        if (this.currentScreenWidth === "xs" || this.currentScreenWidth === "sm") {
            this.displayedColumns = ["name", "unitCost", "taxable", "action"];
        }
    };
    ItemComponent.prototype.addNewItem = function () {
        var _this = this;
        _dialogs__WEBPACK_IMPORTED_MODULE_4__["DialogConfig"].data = null;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_4__["ItemDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_4__["DialogConfig"]);
        dialogRef
            .afterClosed()
            .toPromise()
            .then(function (result) {
            if (result) {
                result.id = ITEM_DATA.length + 1;
                ITEM_DATA.push(result);
                _this.dataSource.data = ITEM_DATA;
            }
        }, function (err) { return console.log(err); });
    };
    ItemComponent.prototype.editItem = function (item) {
        _dialogs__WEBPACK_IMPORTED_MODULE_4__["DialogConfig"].data = item;
        var dialogRef = this.dialog.open(_dialogs__WEBPACK_IMPORTED_MODULE_4__["ItemDialogComponent"], _dialogs__WEBPACK_IMPORTED_MODULE_4__["DialogConfig"]);
        dialogRef
            .afterClosed()
            .toPromise()
            .then(function (result) {
            if (result) {
                for (var _i = 0, ITEM_DATA_1 = ITEM_DATA; _i < ITEM_DATA_1.length; _i++) {
                    var item_1 = ITEM_DATA_1[_i];
                    if (item_1.id === result.id) {
                        item_1.name = result.name;
                        item_1.description = result.description;
                        item_1.taxable = result.taxable;
                        item_1.type = result.type;
                        item_1.unitCost = result.unitCost;
                    }
                }
            }
        }, function (err) { return console.log(err); });
    };
    ItemComponent.prototype.deleteItem = function (index) {
        ITEM_DATA.splice(index, 1);
        this.dataSource.data = ITEM_DATA;
    };
    ItemComponent.prototype.ngOnDestroy = function () {
        this.flexMediaWatcher.unsubscribe();
    };
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-item",
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/item/item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/item/item.module.ts":
/*!*************************************!*\
  !*** ./src/app/item/item.module.ts ***!
  \*************************************/
/*! exports provided: ItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModule", function() { return ItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");





var appRoutes = [
    {
        path: "",
        component: _item_component__WEBPACK_IMPORTED_MODULE_2__["ItemComponent"]
    }
];
var ItemModule = /** @class */ (function () {
    function ItemModule() {
    }
    ItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_item_component__WEBPACK_IMPORTED_MODULE_2__["ItemComponent"]],
            imports: [
                _base_base_module__WEBPACK_IMPORTED_MODULE_4__["BaseModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes)
            ]
        })
    ], ItemModule);
    return ItemModule;
}());



/***/ })

}]);
//# sourceMappingURL=item-item-module.js.map