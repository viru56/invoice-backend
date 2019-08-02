import * as multer from "multer";
import { InvoiceController } from "../controllers";
//import { validateToken ,validateActivationToken,validateForgotPasswordToken} from '../services';

const upload = multer({ storage: multer.memoryStorage() }).single("file");
export class InvoiceRoutes {
  public static routes(app): void {
    app
      .route("/invoice")
      //create new invoice
      .post(upload, InvoiceController.createInvocie);
  }
}
