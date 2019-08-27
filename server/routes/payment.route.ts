import { PaymentController } from "../controllers";
import { validateToken } from "../services";
export class PaymentRoutes {
  public static routes(app): void {
    app
      .route("/payment")
      //get all payments
      .get(validateToken, PaymentController.getAllPayments)
      //create new payment
      .post(validateToken, PaymentController.addPayment)
      // update a specific item
      .put(validateToken, PaymentController.upadatePayment);
    //get specific item details
    app.route("/payment/:id").get(validateToken, PaymentController.getPayment);
    app.route("/payment/company/:id").get(validateToken, PaymentController.getAllCompanyPayments);
  }
}
