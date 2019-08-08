import { Request, Response } from "express";
import { UserRoutes, CompanyRoutes, InvoiceRoutes } from "./";
import { UserController } from "../controllers";
// import * as cors from 'cors';
import * as path from "path";
export class Routes {
  public static routes(app): void {
    //  app.use(cors()) // include before other routes
    app.use(function(req, res, next) {
      //set headers to allow cross origin request.
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    app.route("/").get((req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "../../", "client", "index.html"));
    });
    //traiking if the user open the mail or not future use only
    // app.route("/:id/tracker.png").get((req: Request, res: Response) => {
    //   const id = req.params.id;
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
  }
}
