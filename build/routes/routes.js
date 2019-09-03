"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const controllers_1 = require("../controllers");
const cors = require("cors");
const path = require("path");
class Routes {
    static routes(app) {
        app.use(cors()); // allow request from all origions
        app.route("/").get((req, res, next) => {
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
        app.route("/api/login").post(controllers_1.UserController.userLogin);
        app
            .route("/api/sendforgotpasswordmail")
            .post(controllers_1.UserController.sendForgotPasswordMail);
        app.route("/user", _1.UserRoutes.routes(app));
        app.route("/company", _1.CompanyRoutes.routes(app));
        app.route("/invoice", _1.InvoiceRoutes.routes(app));
        app.route("/item", _1.ItemRoutes.routes(app));
        app.route("/tax", _1.TaxRoutes.routes(app));
        app.route("/customer", _1.CustomerRoutes.routes(app));
        app.route("/payment", _1.PaymentRoutes.routes(app));
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map