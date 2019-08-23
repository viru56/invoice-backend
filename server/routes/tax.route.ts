import { TaxController } from "../controllers";
import { validateToken } from "../services";
export class TaxRoutes {
  public static routes(app): void {
    app
      .route("/tax")
      //get all items
      .get(validateToken, TaxController.getAllTaxItems)
      //create new item
      .post(validateToken, TaxController.addTaxItem)
      // update a specific item
      .put(validateToken, TaxController.upadateTaxItem);
    //get specific item details
    app.route("/tax/:id").get(validateToken, TaxController.getTaxItem);
    // delete specific item
    app.route("/tax/:id").delete(validateToken, TaxController.deleteTaxItem);
  }
}
