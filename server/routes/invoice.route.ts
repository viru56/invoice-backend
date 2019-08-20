import * as multer from "multer";
import { InvoiceController } from "../controllers";
import { validateToken } from "../services";

const upload = multer({ storage: multer.memoryStorage() }).single("file");
export class InvoiceRoutes {
  public static routes(app): void {
    app
      .route("/invoice")
      // get all invoices
      .get(validateToken, InvoiceController.getAllInvoices)
      //create new invoice
      .post(validateToken, InvoiceController.addInvoice)
      // update a specific invoice
      .put(validateToken, InvoiceController.updateInvoice);
    //get specific invoice details
    app.route("/invoice/:id").get(validateToken, InvoiceController.getInvoice);
    // delete specific invoice
    app
      .route("/invoice/:id")
      .delete(validateToken, InvoiceController.deleteInvoice);
    //sent new invoice over mail
    app.route("/invoice/mail").post(upload, InvoiceController.sendInvocie);
    //download new invoice
    app
      .route("/invoice/download")
      .post(upload, InvoiceController.downloadInvoice);
  }
}
