import { Request, Response } from "express";
import { UserRoutes, CompanyRoutes } from "./";
import { UserController } from "../controllers";
import * as path from "path";
export class Routes {
  private userRoutes: UserRoutes = new UserRoutes();
  private companyRoutes: CompanyRoutes = new CompanyRoutes();
  private userController: UserController = new UserController();
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "../../", "client", "index.html"));
    });
    app.route("/api/login").post(this.userController.userLogin);
    app
      .route("/api/forgotPassword")
      .post(this.userController.sendForgotPasswordMail);
    app.route("/user", this.userRoutes.routes(app));
    app.route("/company", this.companyRoutes.routes(app));
  }
}
