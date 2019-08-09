import { Request, Response, NextFunction } from "express";
import { UserRoutes, CompanyRoutes, InvoiceRoutes, ItemRoutes,TaxRoutes } from "./";
import { UserController } from "../controllers";
 import * as cors from 'cors';
import * as path from "path";
export class Routes {
  public static routes(app): void {
     app.use(cors()) // allow request from all origions
    app.route("/").get((req: Request, res: Response, next: NextFunction) => {
      res.sendFile(path.join(__dirname, "../../", "client", "index.html"));
    });
    //traiking if the user open the mail or not future use only
    // app.route("/:id/tracker.png").get((req: Request, res: Response) => {
    //   const id = req.params.userid;
    //   console.log(id);
    //   var buf = Buffer.alloc(1);
    //   res.set("Content-Type", "image/png");
    //   res.end(buf, "binary");
    // });
    app.route("/api/login").post(UserController.userLogin);
    app
      .route("/api/sendforgotpasswordmail")
      .post(UserController.sendForgotPasswordMail);
    app.route("/user", UserRoutes.routes(app));
    app.route("/company", CompanyRoutes.routes(app));
    app.route("/invoice", InvoiceRoutes.routes(app));
    app.route("/item", ItemRoutes.routes(app));
    app.route("/tax", TaxRoutes.routes(app));
  }
}
