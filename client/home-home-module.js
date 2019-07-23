(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-toolbar\">\n  <mat-toolbar-row>\n    <h1 class=\"logo\">\n      IND-INVOICES\n    </h1>\n    <span fxFlex></span>\n    <a [routerLink]=\"['/login']\" mat-raised-button class=\"auth-btn log-in\">\n      Log In</a\n    >\n    <a [routerLink]=\"['/register']\" mat-raised-button class=\"auth-btn sign-up\">\n      Sign Up</a\n    >\n  </mat-toolbar-row>\n</mat-toolbar>\n<form [formGroup]=\"invoiceForm\" (keydown.enter)=\"$event.preventDefault()\">\n  <div\n    fxLayout=\"row\"\n    fxLayoutAlign=\"space-between stretch\"\n    fxFlexFil\n    fxFill\n    class=\"components-container-gt-xs \"\n    fxLayoutGap=\"20px\"\n    fxLayout.lt-sm=\"column\"\n    fxLayout.lt-xs=\"column\"\n    style=\"background:#F8F8F8;\"\n  >\n    <div\n      fxFlex.xs=\"100\"\n      fxFlex.lg=\"80\"\n      fxFlex.md=\"80\"\n      fxFlex.sm=\"100\"\n      class=\"mat-elevation-z2 invoice-container\"\n      fxLayout=\"column\"\n    >\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayout.lt-xs=\"column\">\n        <div\n          fxFlex.xs=\"100\"\n          fxFlex.lg=\"80\"\n          fxFlex.md=\"70\"\n          fxFlex.sm=\"50\"\n          class=\"invoice-logo\"\n        >\n          <div *ngIf=\"!fileToUpload\">\n            <input\n              type=\"file\"\n              name=\"file\"\n              id=\"file\"\n              class=\"inputfile\"\n              accept=\"images/*\"\n              (change)=\"handleFileInput($event.target.files)\"\n            />\n            <label for=\"file\">+ Add your logo</label>\n          </div>\n          <div class=\"img-container\" *ngIf=\"fileToUpload\">\n            <img [src]=\"fileToUpload\" alt=\"fileTOUpload\" class=\"logoPreview\" />\n            <mat-icon class=\"clear-icon\" (click)=\"clearLogoPreview()\"\n              >clear</mat-icon\n            >\n          </div>\n        </div>\n\n        <div\n          fxFlex.xs=\"100\"\n          fxFlex.lg=\"20\"\n          fxFlex.md=\"30\"\n          fxFlex.sm=\"50\"\n          fxLayoutAlign.lt.sm=\"start start\"\n          fxLayout.lt-sm=\"column\"\n          fxLayoutAlign=\"space-around start\"\n        >\n          <div>\n            <div class=\"invoice-name\">\n              <h2\n                contenteditable=\"true\"\n                [textContent]=\"invoice.label.invoiceName\"\n                (input)=\"invoice.label.invoiceName = $event.target.textContent\"\n              >\n                INVOICE\n              </h2>\n            </div>\n            <div>\n              <span style=\"padding: 4px;\">#</span>\n              <mat-form-field class=\"invoice-number\">\n                <input\n                  matInput\n                  type=\"number\"\n                  placeholder=\"Invoice number\"\n                  formControlName=\"invoiceNumber\"\n                  autocomplete=\"off\"\n                />\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n        <div fxFlex.xs=\"100\" fxFlex.lg=\"60\" fxFlex.md=\"50\" fxFlex.sm=\"40\">\n          <div>\n            <mat-form-field class=\"sender-email\">\n              <input\n                matInput\n                type=\"text\"\n                placeholder=\"Who is this invoice from?\"\n                formControlName=\"sender\"\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field class=\"reveiver-email\">\n              <input\n                matInput\n                type=\"text\"\n                placeholder=\"Who is this invoice to?\"\n                formControlName=\"receiver\"\n                autocomplete=\"off\"\n              />\n            </mat-form-field>\n          </div>\n        </div>\n        <div\n          fxFlex.xs=\"100\"\n          fxFlex.lg=\"40\"\n          fxFlex.md=\"50\"\n          fxFlex.sm=\"60\"\n          style=\"text-align:right\"\n          fxLayout=\"column\"\n          fxLayoutAlign=\"space-around end\"\n        >\n          <div class=\"dflex\">\n            <div class=\"editable-content\">\n              <h4\n                contenteditable=\"true\"\n                [textContent]=\"invoice.label.date\"\n                (input)=\"invoice.label.date = $event.target.textContent\"\n              >\n                Date\n              </h4>\n            </div>\n            <mat-form-field class=\"date\">\n              <input\n                matInput\n                [matDatepicker]=\"picker\"\n                formControlName=\"date\"\n                autocomplete=\"off\"\n                type=\"text\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"picker\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <!-- <div class=\"dflex\">\n            <div class=\"editable-content\">\n              <h4\n                contenteditable=\"true\"\n                [textContent]=\"invoice.label.paymentTerms\"\n                (input)=\"invoice.label.paymentTerms = $event.target.textContent\"\n              >\n                Payment Terms\n              </h4>\n            </div>\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"paymentTerms\"\n                autocomplete=\"off\"\n                type=\"text\"\n              />\n            </mat-form-field>\n          </div> -->\n          <div class=\"dflex\">\n            <div class=\"editable-content\">\n              <h4\n                contenteditable=\"true\"\n                [textContent]=\"invoice.label.dueDate\"\n                (input)=\"invoice.label.dueDate = $event.target.textContent\"\n              >\n                Due Date\n              </h4>\n            </div>\n            <mat-form-field class=\"date\">\n              <input\n                matInput\n                [matDatepicker]=\"picker1\"\n                formControlName=\"dueDate\"\n                autocomplete=\"off\"\n                type=\"text\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"picker1\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #picker1></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"item-list\">\n        <div fxFlex=\"100\" class=\"item-header\" fxLayoutGap=\"10px\">\n          <div\n            fxFlex=\"40\"\n            contenteditable=\"true\"\n            [textContent]=\"invoice.label.lineItemName\"\n            (input)=\"invoice.label.lineItemName = $event.target.textContent\"\n          >\n            Item\n          </div>\n          <div\n            fxFlex=\"20\"\n            contenteditable=\"true\"\n            [textContent]=\"invoice.label.lineItemQuantity\"\n            (input)=\"invoice.label.lineItemQuantity = $event.target.textContent\"\n          >\n            Quantity\n          </div>\n          <div\n            fxFlex=\"20\"\n            contenteditable=\"true\"\n            [textContent]=\"invoice.label.lineItemRate\"\n            (input)=\"invoice.label.lineItemRate = $event.target.textContent\"\n          >\n            Rate\n          </div>\n          <div\n            fxFlex=\"20\"\n            contenteditable=\"true\"\n            [textContent]=\"invoice.label.lineItemAmount\"\n            (input)=\"invoice.label.lineItemAmount = $event.target.textContent\"\n          >\n            Amount\n          </div>\n        </div>\n      </div>\n      <div\n        fxLayout=\"row\"\n        fxLayoutAlign=\"start center\"\n        class=\"item\"\n        formArrayName=\"lineItems\"\n      >\n        <div fxFlex=\"100\" fxLayoutGap=\"10px\">\n          <div\n            *ngFor=\"let item of lineItems.controls; let itemIndex = index\"\n            [formGroupName]=\"itemIndex\" class=\"item-row\"\n          >\n            <div fxFlex=\"40\">\n              <mat-form-field>\n                <input\n                  matInput\n                  placeholder=\"Item\"\n                  formControlName=\"name\"\n                  autocomplete=\"off\"\n                  type=\"text\"\n                />\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"20\">\n              <mat-form-field>\n                <input\n                  matInput\n                  placeholder=\"Quantity\"\n                  formControlName=\"quantity\"\n                  (keyup)=\"updateLineItemAmount(itemIndex)\"\n                  autocomplete=\"off\"\n                  type=\"number\"\n                />\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"20\">\n              <mat-form-field>\n                <input\n                  matInput\n                  type=\"number\"\n                  placeholder=\"Rate\"\n                  formControlName=\"rate\"\n                  (keyup)=\"updateLineItemAmount(itemIndex)\"\n                  autocomplete=\"off\"\n                />\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"20\" style=\"display:flex\">\n              <h4 style=\"display:flex\" [ngStyle]=\"{'margin-left':itemIndex === lineItems.controls.length-1?'-8px':0}\">\n                Rs\n                <input\n                  readonly\n                  type=\"number\"\n                  style=\"margin: 0 0 5px 5px;\"\n                  matInput\n                  formControlName=\"amount\"\n                  autocomplete=\"off\"\n                />\n              </h4>\n              <div\n                style=\"padding-top:20px\"\n                *ngIf=\"\n                itemIndex !== 0\n                \"\n              > \n                <mat-icon class=\"clear-icon\" (click)=\"removeLineItem(itemIndex)\"\n                  >clear</mat-icon\n                >\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"item\">\n        <button mat-raised-button color=\"primary\" (click)=\"addLineItem()\" type=\"button\">\n          + Line Item\n        </button>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end start\">\n        <div class=\"invoice-balance\">\n          <div class=\"balance-name\">\n            <h4\n              contenteditable=\"true\"\n              [textContent]=\"invoice.label.subtotal\"\n              (input)=\"invoice.label.subtotal = $event.target.textContent\"\n            >\n              Subtotal\n            </h4>\n          </div>\n          <div class=\"balance-amount\">Rs {{ invoice.subtotal }}</div>\n        </div>\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"space-evenly end\">\n        <div style=\"padding:5px\">\n          <button\n            mat-raised-button\n            color=\"primary\"\n            *ngIf=\"!showDiscount\"\n            (click)=\"showDiscount = !showDiscount\"\n            type=\"button\"\n          >\n            + Discount\n          </button>\n          <div *ngIf=\"showDiscount\" class=\"dflex\">\n            <div class=\"dflex discount\">\n              <div class=\"editable-content\">\n                <h4\n                  contenteditable=\"true\"\n                  [textContent]=\"invoice.label.discount\"\n                  (input)=\"invoice.label.discount = $event.target.textContent\"\n                >\n                  Discount\n                </h4>\n              </div>\n              <mat-form-field style=\"width:100px;\">\n                <input\n                  matInput\n                  type=\"number\"\n                  formControlName=\"discount\"\n                  (keyup)=\"updateTotal()\"\n                  autocomplete=\"off\"\n                />\n              </mat-form-field>\n              <mat-form-field style=\"width:50px;padding-left:5px;\">\n                <mat-select\n                  formControlName=\"discount_type\"\n                  (selectionChange)=\"updateTotal()\"\n                >\n                  <mat-option value=\"flat\">Rs</mat-option>\n                  <mat-option value=\"percentage\">%</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <mat-icon\n              class=\"clear-icon mt20\"\n              (click)=\"showDiscount = !showDiscount\"\n              >clear</mat-icon\n            >\n          </div>\n        </div>\n        <div style=\"padding:5px\">\n          <button\n            mat-raised-button\n            color=\"primary\"\n            *ngIf=\"!showTax\"\n            (click)=\"showTax = !showTax\"\n            type=\"button\"\n          >\n            + Tax\n          </button>\n          <div *ngIf=\"showTax\" class=\"dflex\">\n            <div class=\"dflex tax\">\n              <div class=\"editable-content\">\n                <h4\n                  contenteditable=\"true\"\n                  [textContent]=\"invoice.label.tax\"\n                  (input)=\"invoice.label.tax = $event.target.textContent\"\n                >\n                  Tax\n                </h4>\n              </div>\n              <mat-form-field style=\"width:100px;\">\n                <input\n                  matInput\n                  type=\"number\"\n                  placeholder=\"percentage\"\n                  formControlName=\"tax\"\n                  (keyup)=\"updateTotal()\"\n                  autocomplete=\"off\"\n                /> \n              </mat-form-field>\n              <!-- <mat-form-field style=\"width:50px;padding-left:5px;\">\n                <mat-select\n                  formControlName=\"tax_type\"\n                  (selectionChange)=\"updateTotal()\"\n                >\n                  <mat-option selected value=\"flat\">Rs</mat-option>\n                  <mat-option value=\"percentage\">%</mat-option>\n                </mat-select>\n              </mat-form-field> -->\n            </div>\n            <mat-icon class=\"clear-icon mt20\" (click)=\"showTax = !showTax\"\n              >clear</mat-icon\n            >\n          </div>\n        </div>\n        <div style=\"padding:5px\">\n          <button\n            mat-raised-button\n            color=\"primary\"\n            *ngIf=\"!showShipping\"\n            (click)=\"showShipping = !showShipping\"\n            type=\"button\"\n          >\n            + Shipping\n          </button>\n          <div *ngIf=\"showShipping\" class=\"dflex\">\n            <div class=\"dflex shipping\">\n              <div class=\"editable-content\">\n                <h4\n                  contenteditable=\"true\"\n                  [textContent]=\"invoice.label.shipping\"\n                  (input)=\"invoice.label.shipping = $event.target.textContent\"\n                >\n                  Shipping\n                </h4>\n              </div>\n              <mat-form-field style=\"width:140px;\">\n                <input\n                  matInput\n                  type=\"number\"\n                  formControlName=\"shipping\"\n                  (keyup)=\"updateTotal()\"\n                  autocomplete=\"off\"\n                />\n              </mat-form-field>\n            </div>\n            <mat-icon\n              class=\"clear-icon mt20\"\n              (click)=\"showShipping = !showShipping\"\n              >clear</mat-icon\n            >\n          </div>\n        </div>\n        <div class=\"dflex amount-paid\">\n          <div class=\"editable-content\">\n            <h4\n              contenteditable=\"true\"\n              [textContent]=\"invoice.label.amountPaid\"\n              (input)=\"invoice.label.amountPaid = $event.target.textContent\"\n            >\n              Amount Paid\n            </h4>\n          </div>\n          <mat-form-field style=\"width:140px;\">\n            <input\n              matInput\n              type=\"number\"\n              formControlName=\"amountPaid\"\n              (keyup)=\"updateTotal()\"\n              autocomplete=\"off\"\n            />\n          </mat-form-field>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end start\">\n        <div class=\"invoice-balance\">\n          <div class=\"balance-name\">\n            <h4\n              contenteditable=\"true\"\n              [textContent]=\"invoice.label.total\"\n              (input)=\"invoice.label.total = $event.target.textContent\"\n            >\n              Total\n            </h4>\n          </div>\n          <div class=\"balance-amount\">Rs {{ invoice.total }}</div>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end start\">\n        <div class=\"invoice-balance\">\n          <div class=\"balance-name\">\n            <h4\n              contenteditable=\"true\"\n              [textContent]=\"invoice.label.balanceDue\"\n              (input)=\"invoice.label.balanceDue = $event.target.textContent\"\n            >\n              Balance Due\n            </h4>\n          </div>\n          <div class=\"balance-amount\">Rs {{ invoice.balanceDue }}</div>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"20px\">\n        <div class=\"invoice-balance\">\n          <div class=\"balance-name\">\n            <h4\n              contenteditable=\"true\"\n              [textContent]=\"invoice.label.notes\"\n              (input)=\"invoice.label.notes = $event.target.textContent\"\n            >\n              Notes\n            </h4>\n          </div>\n        </div>\n        <mat-form-field style=\"width:80%\">\n          <textarea\n            matInput\n            type=\"text\"\n            matTextareaAutosize\n            matAutosizeMinRows=\"2\"\n            matAutosizeMaxRows=\"5\"\n            formControlName=\"notes\"\n            placeholder=\"Notes - any relevant information not already covered\"\n            autocomplete=\"off\"\n          ></textarea>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"20px\">\n        <div class=\"invoice-balance\">\n          <div class=\"balance-name\">\n            <h4\n              contenteditable=\"true\"\n              [textContent]=\"invoice.label.terms\"\n              (input)=\"invoice.label.terms = $event.target.textContent\"\n            >\n              Terms\n            </h4>\n          </div>\n        </div>\n        <mat-form-field style=\"width:80%\">\n          <textarea\n            matInput\n            type=\"text\"\n            matTextareaAutosize\n            matAutosizeMinRows=\"2\"\n            matAutosizeMaxRows=\"5\"\n            formControlName=\"terms\"\n            placeholder=\"Terms and conditions - late fees, payment methods, delivery schedule\"\n            autocomplete=\"off\"\n          ></textarea>\n        </mat-form-field>\n      </div>\n      <!-- <mat-divider></mat-divider> -->\n    </div>\n    <div\n      fxFlex.xs=\"100\"\n      fxFlex.lg=\"20\"\n      fxFlex.md=\"20\"\n      fxFlex.sm=\"100\"\n      fxLayout=\"column\"\n      style=\"background: #eee;\"\n    >\n      <div\n        fxLayout=\"100\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"start center\"\n        fxLayoutGap=\"20px\"\n        fxLayout.lt-sm=\"row\"\n        fxLayoutAlign.lt-sm=\"center center\"\n        style=\"margin:20px auto\"\n      >\n        <button\n          mat-raised-button\n          color=\"primary\"\n          type=\"submit\"\n          (click)=\"onSubmit()\"\n        >\n          Send Invoice\n        </button>\n        <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"downloadInvoice()\">\n          <mat-icon class=\"clear-icon\">cloud_download</mat-icon> Download\n          Invoice\n        </button>\n      </div>\n      <div\n        fxLayout=\"100\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"start center\"\n        fxLayout.lt-sm=\"row\"\n        fxLayoutAlign.lt-sm=\"center center\"\n      >\n        <div>\n          <h4>Currency: INR</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar .auth-btn {\n  box-shadow: none;\n  background-color: #42a5f5;\n  color: #fff; }\n\n.mat-toolbar .log-in {\n  margin-right: 5px; }\n\n.mat-toolbar .log-in:hover, .mat-toolbar .sign-up:hover {\n  text-decoration: underline; }\n\n.mat-toolbar .sign-up {\n  border: 1px solid #fff; }\n\n.full {\n  width: 100%; }\n\n.invoice-container {\n  background-color: white;\n  padding: 10px; }\n\n.invoice-container .mat-title:hover,\n  .invoice-container .mat-title:focus {\n    border: 1px solid #ccc;\n    outline: none;\n    border-radius: 4px; }\n\n.invoice-container .clear-icon {\n    background-color: #eee;\n    cursor: pointer;\n    height: 20px;\n    width: 20px;\n    font-size: 20px;\n    border-radius: 4px; }\n\n.invoice-container .clear-icon:hover {\n    background-color: #42a5f5; }\n\n.invoice-container .invoice-logo {\n    position: relative; }\n\n.invoice-container .invoice-logo label {\n      padding: 60px 30px; }\n\n.invoice-container .invoice-logo .inputfile {\n      width: 0.1px;\n      height: 0.1px;\n      opacity: 0;\n      overflow: hidden;\n      position: absolute;\n      z-index: -1; }\n\n.invoice-container .invoice-logo .inputfile + label {\n      font-size: 1.25em;\n      font-weight: 700;\n      background-color: #eee;\n      display: inline-block;\n      cursor: pointer;\n      border-radius: 4px; }\n\n.invoice-container .invoice-logo .inputfile + label * {\n      pointer-events: none; }\n\n.invoice-container .invoice-logo .img-container {\n      position: relative; }\n\n.invoice-container .invoice-logo .img-container .logoPreview {\n        max-height: 150px;\n        max-width: 200px;\n        cursor: pointer;\n        display: inline-block;\n        border-radius: 4px; }\n\n.invoice-container .invoice-logo .img-container .clear-icon {\n        position: absolute;\n        top: 0;\n        left: 0; }\n\n.invoice-container .sender-email .mat-form-field-infix,\n  .invoice-container .reveiver-email .mat-form-field-infix {\n    min-width: 200px; }\n\n.invoice-container .sender-email .mat-form-field-flex,\n  .invoice-container .reveiver-email .mat-form-field-flex {\n    padding-top: 1rem; }\n\n.invoice-container .invoice-name {\n    padding: 10px;\n    outline-width: 0;\n    border: 1px solid #fff;\n    border-radius: 4px; }\n\n.invoice-container .invoice-name h2 {\n      margin: 0;\n      outline-width: 0; }\n\n.invoice-container .invoice-name:hover,\n  .invoice-container .invoice-name:focus {\n    border-color: #ccc; }\n\n.invoice-container .date .mat-form-field-infix {\n    width: 150px; }\n\n.invoice-container .editable-content {\n    outline-width: 0; }\n\n.invoice-container .editable-content h4 {\n      border: 1px solid #fff;\n      padding: 10px 10px 5px 10px;\n      border-radius: 4px;\n      margin-top: 12px;\n      outline-width: 0; }\n\n.invoice-container .editable-content h4:hover,\n    .invoice-container .editable-content h4:focus {\n      border-color: #ccc; }\n\n.invoice-container .item-list .item-header {\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-top: 10px;\n    background: #ccc;\n    padding: 5px; }\n\n.invoice-container .item-list .item-header div {\n      outline-width: 0;\n      padding: 5px; }\n\n.invoice-container .item-list .item-header div:hover,\n    .invoice-container .item-list .item-header div:focus {\n      background: #eee;\n      border-radius: 4px; }\n\n.invoice-container .item {\n    padding: 5px; }\n\n.invoice-container .item mat-form-field {\n      width: 80%; }\n\n.invoice-container .item .clear-icon {\n      display: none; }\n\n.invoice-container .item .item-row:hover .clear-icon {\n      display: block; }\n\n.invoice-container .invoice-balance {\n    padding: 10px;\n    display: flex; }\n\n.invoice-container .invoice-balance h4 {\n      margin: 0;\n      outline-width: 0; }\n\n.invoice-container .invoice-balance .balance-amount {\n      padding: 10px; }\n\n.invoice-container .invoice-balance .balance-name {\n      border: 1px solid #fff;\n      border-radius: 4px;\n      padding: 10px;\n      outline-width: 0; }\n\n.invoice-container .invoice-balance .balance-name:hover,\n    .invoice-container .invoice-balance .balance-name:focus {\n      border-color: #ccc; }\n\n.invoice-container .tax {\n    margin-right: 10px; }\n\n.invoice-container .discount,\n  .invoice-container .shipping,\n  .invoice-container .amount-paid {\n    margin-right: 10px; }\n\n.invoice-container .discount .mat-form-field,\n    .invoice-container .shipping .mat-form-field,\n    .invoice-container .amount-paid .mat-form-field {\n      text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pNTAyMzA2L0RvY3VtZW50cy9pbnZvaWNlL2ludm9pY2UtY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUVJLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUpmO0VBT0ksaUJBQWlCLEVBQUE7O0FBUHJCO0VBVUksMEJBQTBCLEVBQUE7O0FBVjlCO0VBYUksc0JBQXNCLEVBQUE7O0FBSTFCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTs7QUFGZjs7SUFLSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQixFQUFBOztBQVB0QjtJQVVJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBZnRCO0lBa0JJLHlCQUF5QixFQUFBOztBQWxCN0I7SUFxQkksa0JBQWtCLEVBQUE7O0FBckJ0QjtNQXVCTSxrQkFBa0IsRUFBQTs7QUF2QnhCO01BMEJNLFlBQVk7TUFDWixhQUFhO01BQ2IsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsV0FBVyxFQUFBOztBQS9CakI7TUFrQ00saUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixrQkFBa0IsRUFBQTs7QUF2Q3hCO01BMENNLG9CQUFvQixFQUFBOztBQTFDMUI7TUE2Q00sa0JBQWtCLEVBQUE7O0FBN0N4QjtRQStDUSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsa0JBQWtCLEVBQUE7O0FBbkQxQjtRQXNEUSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU8sRUFBQTs7QUF4RGY7O0lBK0RNLGdCQUFnQixFQUFBOztBQS9EdEI7O0lBa0VNLGlCQUFpQixFQUFBOztBQWxFdkI7SUFzRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7O0FBekV0QjtNQTJFTSxTQUFTO01BQ1QsZ0JBQWdCLEVBQUE7O0FBNUV0Qjs7SUFpRkksa0JBQWtCLEVBQUE7O0FBakZ0QjtJQXFGTSxZQUFZLEVBQUE7O0FBckZsQjtJQXlGSSxnQkFBZ0IsRUFBQTs7QUF6RnBCO01BMkZNLHNCQUFzQjtNQUN0QiwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTs7QUEvRnRCOztNQW1HTSxrQkFBa0IsRUFBQTs7QUFuR3hCO0lBd0dNLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBNUdsQjtNQThHUSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBOztBQS9HcEI7O01BbUhRLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTs7QUFwSDFCO0lBeUhJLFlBQVksRUFBQTs7QUF6SGhCO01BMkhNLFVBQVUsRUFBQTs7QUEzSGhCO01BOEhNLGFBQWEsRUFBQTs7QUE5SG5CO01Ba0lRLGNBQWMsRUFBQTs7QUFsSXRCO0lBdUlJLGFBQWE7SUFDYixhQUFhLEVBQUE7O0FBeElqQjtNQTBJTSxTQUFTO01BQ1QsZ0JBQWdCLEVBQUE7O0FBM0l0QjtNQThJTSxhQUFhLEVBQUE7O0FBOUluQjtNQWlKTSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixnQkFBZ0IsRUFBQTs7QUFwSnRCOztNQXdKTSxrQkFBa0IsRUFBQTs7QUF4SnhCO0lBNEpJLGtCQUFrQixFQUFBOztBQTVKdEI7OztJQWlLSSxrQkFBa0IsRUFBQTs7QUFqS3RCOzs7TUFtS00saUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gaG9tZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgW25vLW92ZXItZmxvd10ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnJvdXRlci1vdXRsZXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICB9XG4gIC5zcGFjZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubWF0LXRvb2xiYXIge1xuICAuYXV0aC1idG4ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTVmNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAubG9nLWlue1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC5sb2ctaW46aG92ZXIsIC5zaWduLXVwOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5zaWduLXVwe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIH1cbn1cblxuLmZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICAubWF0LXRpdGxlOmhvdmVyLFxuICAubWF0LXRpdGxlOmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5jbGVhci1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuY2xlYXItaWNvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTVmNTtcbiAgfVxuICAuaW52b2ljZS1sb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGFiZWwge1xuICAgICAgcGFkZGluZzogNjBweCAzMHB4O1xuICAgIH1cbiAgICAuaW5wdXRmaWxlIHtcbiAgICAgIHdpZHRoOiAwLjFweDtcbiAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgLmlucHV0ZmlsZSArIGxhYmVsICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC5sb2dvUHJldmlldyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgICAgLmNsZWFyLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnNlbmRlci1lbWFpbCxcbiAgLnJldmVpdmVyLWVtYWlsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB9XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICB9XG4gIC5pbnZvaWNlLW5hbWUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3V0bGluZS13aWR0aDogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoMiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgIH1cbiAgfVxuICAuaW52b2ljZS1uYW1lOmhvdmVyLFxuICAuaW52b2ljZS1uYW1lOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gIH1cbiAgLmRhdGUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxuICB9XG4gIC5lZGl0YWJsZS1jb250ZW50IHtcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgIGg0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgb3V0bGluZS13aWR0aDogMDtcbiAgICB9XG4gICAgaDQ6aG92ZXIsXG4gICAgaDQ6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIH1cbiAgfVxuICAuaXRlbS1saXN0IHtcbiAgICAuaXRlbS1oZWFkZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZGl2IHtcbiAgICAgICAgb3V0bGluZS13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgfVxuICAgICAgZGl2OmhvdmVyLFxuICAgICAgZGl2OmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaXRlbSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5jbGVhci1pY29ue1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLml0ZW0tcm93OmhvdmVye1xuICAgICAgLmNsZWFyLWljb257XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaW52b2ljZS1iYWxhbmNlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaDQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgb3V0bGluZS13aWR0aDogMDtcbiAgICB9XG4gICAgLmJhbGFuY2UtYW1vdW50IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIC5iYWxhbmNlLW5hbWUge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgIH1cbiAgICAuYmFsYW5jZS1uYW1lOmhvdmVyLFxuICAgIC5iYWxhbmNlLW5hbWU6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIH1cbiAgfVxuICAudGF4e1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZGlzY291bnQsXG4gIC5zaGlwcGluZyxcbiAgLmFtb3VudC1wYWlkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(sanitizer, fb) {
        this.sanitizer = sanitizer;
        this.fb = fb;
        this.fileToUpload = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.showDiscount = false;
        this.showTax = false;
        this.showShipping = false;
        this.invoice = {
            label: {
                invoiceName: "INVOICE",
                date: "Date",
                paymentTerms: "Payment terms",
                dueDate: "Due date",
                lineItemName: "Item",
                lineItemQuantity: "Quantity",
                lineItemRate: "Rate",
                lineItemAmount: "Amount",
                subtotal: "Subtotal",
                discount: "Discount",
                tax: "Tax",
                shipping: "Shipping",
                total: "Total",
                amountPaid: "Amount paid",
                balanceDue: "balance due",
                notes: "Notes",
                terms: "Terms"
            },
            invoiceName: "INVOICE",
            invoiceNumber: Date.now(),
            sender: "",
            receiver: "",
            lineItem: {
                name: "",
                unitCost: 0,
                quantity: 0,
                amount: 0.0,
                taxable: true
            },
            tax: [{
                    name: "",
                    amount: 0,
                    inclusive: false
                }],
            subtotal: 0.0,
            total: 0.0,
            balanceDue: 0.0,
            amountPaid: 0.0,
            discount: {
                type: "flat",
                value: 0
            },
            shipping: 0,
            paymentTerms: "",
            date: new Date().toISOString(),
            dueDate: new Date().toISOString(),
            notes: "",
            terms: ""
        };
        this.invoiceForm = this.fb.group({
            invoiceNumber: [this.invoice.invoiceNumber],
            sender: [this.invoice.sender, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            receiver: [this.invoice.receiver, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: [this.invoice.date],
            paymentTerms: [this.invoice.paymentTerms],
            dueDate: [this.invoice.dueDate],
            lineItems: this.fb.array([
                this.fb.group({
                    name: [this.invoice.lineItem.name],
                    quantity: [this.invoice.lineItem.quantity],
                    rate: [this.invoice.lineItem.unitCost],
                    amount: [this.invoice.lineItem.amount]
                })
            ]),
            discount: [this.invoice.discount.value],
            discount_type: [this.invoice.discount.type],
            tax: [this.invoice.tax[0].amount],
            shipping: [this.invoice.shipping],
            notes: [this.invoice.notes],
            terms: [this.invoice.terms],
            amountPaid: [this.invoice.amountPaid]
        });
    };
    Object.defineProperty(HomeComponent.prototype, "lineItems", {
        get: function () {
            return this.invoiceForm.get("lineItems");
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        if (files.item(0)) {
            var fileSize = parseFloat((files.item(0).size / (1000 * 1024)).toFixed(2));
            if (files.item(0).type.indexOf("image") == -1) {
                alert("The file you have seleted is not an image");
            }
            else if (fileSize > 2) {
                alert("The image you have selected is too large. It must be 1MB or less");
            }
            else {
                var file = files.item(0);
                var reader_1 = new FileReader();
                reader_1.onload = function (e) {
                    _this.fileToUpload = _this.sanitizer.bypassSecurityTrustResourceUrl(reader_1.result);
                };
                reader_1.readAsDataURL(file);
            }
        }
    };
    HomeComponent.prototype.clearLogoPreview = function () {
        this.fileToUpload = null;
    };
    HomeComponent.prototype.addLineItem = function () {
        this.lineItems.push(this.fb.group({
            name: [this.invoice.lineItem.name],
            quantity: [this.invoice.lineItem.quantity],
            rate: [this.invoice.lineItem.unitCost],
            amount: [this.invoice.lineItem.amount]
        }));
    };
    HomeComponent.prototype.removeLineItem = function (index) {
        this.lineItems.removeAt(index);
        this.updateSubtotal();
    };
    HomeComponent.prototype.showShippingInp = function () {
        this.showShipping
            ? (this.showShipping = false)
            : (this.showShipping = true);
    };
    HomeComponent.prototype.updateLineItemAmount = function (index) {
        this.lineItems.controls[index]
            .get("amount")
            .setValue(Math.round(this.lineItems.controls[index].get("rate").value *
            this.lineItems.controls[index].get("quantity").value));
        this.updateSubtotal();
    };
    HomeComponent.prototype.updateSubtotal = function () {
        this.invoice.subtotal = 0;
        for (var _i = 0, _a = this.lineItems.controls; _i < _a.length; _i++) {
            var item = _a[_i];
            this.invoice.subtotal += item.value.amount;
        }
        this.updateTotal();
    };
    HomeComponent.prototype.updateTotal = function () {
        this.invoice.total = this.invoice.subtotal;
        if (this.invoiceForm.value.discount_type === "percentage") {
            this.invoice.total =
                this.invoice.total -
                    (this.invoice.total * this.invoiceForm.value.discount) / 100;
        }
        else if (this.invoiceForm.value.discount_type === "flat") {
            this.invoice.total = this.invoice.total - this.invoiceForm.value.discount;
        }
        this.invoice.total =
            this.invoice.total -
                (this.invoice.total * this.invoiceForm.value.tax) / 100;
        this.invoice.total = this.invoice.total - this.invoiceForm.value.shipping;
        this.invoice.balanceDue =
            this.invoice.total - this.invoiceForm.value.amountPaid;
    };
    HomeComponent.prototype.onSubmit = function () {
        this.invoice.sender = this.invoiceForm.value.sender;
        this.invoice.receiver = this.invoiceForm.value.receiver;
        this.invoice.date = this.invoiceForm.value.date;
        this.invoice.dueDate = this.invoiceForm.value.dueDate;
        // this.invoice.paymentTerms = this.invoiceForm.value.paymentTerms;
        this.invoice.invoiceNumber = this.invoiceForm.value.invoiceNumber;
        this.invoice.lineItem = this.invoiceForm.value.lineItems;
        this.invoice.discount = {
            type: this.invoiceForm.value.discount_type,
            value: this.invoiceForm.value.discount
        };
        this.invoice.tax = [{
                amount: this.invoiceForm.value.tax,
                inclusive: false,
                name: ""
            }];
        this.invoice.shipping = this.invoiceForm.value.shipping;
        this.invoice.amountPaid = this.invoiceForm.value.amountPaid;
        this.invoice.notes = this.invoiceForm.value.notes;
        this.invoice.terms = this.invoiceForm.value.terms;
        console.log(this.invoice);
    };
    HomeComponent.prototype.downloadInvoice = function () {
        console.log("download invoice");
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");





var appRoutes = [
    {
        path: "",
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes), _base_base_module__WEBPACK_IMPORTED_MODULE_4__["BaseModule"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map