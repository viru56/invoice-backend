import { ItemController } from "../controllers";
import { validateToken } from "../services";
export class ItemRoutes {
  public static routes(app): void {
    app
      .route("/item")
      //get all items
      .get(validateToken, ItemController.getAllItems)
      //create new item
      .post(validateToken, ItemController.addItem)
      // update a specific item
      .put(validateToken, ItemController.upadateItem);
    //get specific item details
    app.route("/item/:id").get(validateToken, ItemController.getItem);
    // delete specific item
    app.route("/item/:id").delete(validateToken, ItemController.deleteItem);
  }
}
