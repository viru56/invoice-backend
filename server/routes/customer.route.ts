import { CustomerController } from "../controllers";
import { validateToken } from "../services";
export class CustomerRoutes {
  public static routes(app): void {
    app
      .route("/customer")
      //get all customers
      .get(validateToken, CustomerController.getAllCustomers)
      //create new customer
      .post(validateToken, CustomerController.addCustomer)
      // update a specific customer
      .put(validateToken, CustomerController.upadateCustomer);
    //get specific customer detials
    app.route("/customer/:id").get(validateToken, CustomerController.getCustomer);
    // delete specific customer
    app.route("/customer/:id").delete(validateToken, CustomerController.deleteCustomer);
  }
}
