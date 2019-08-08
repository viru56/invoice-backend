import * as multer from "multer";
import { InvoiceController } from "../controllers";
//import { validateToken ,validateActivationToken,validateForgotPasswordToken} from '../services';

const upload = multer({ storage: multer.memoryStorage() }).single("file");
export class InvoiceRoutes {
  public static routes(app): void {
    app
      .route("/invoice/mail")
      //sent new invoice over mail
      .post(upload, InvoiceController.sendInvocie);
      app
      .route("/invoice/download")
      //download new invoice
      .post(upload, InvoiceController.downloadInvoice);
  }
}
