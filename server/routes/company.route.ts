import * as multer from "multer";
import { CompanyController } from "../controllers";
import { validateToken } from "../services";

const upload = multer({
  dest: "uploads/",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
}).single("logo");

export class CompanyRoutes {
  public static routes(app): void {
    //get all companies
    app
      .route("/company")
      .get(validateToken, CompanyController.getCompany)
      //create new company
      .post(CompanyController.addNewComapny)
      // update a specific company
      .put(upload, validateToken, CompanyController.updateCompany)
      // delete specific company
      .delete(validateToken, CompanyController.deleteCompany);
    //get all companies
    app.route("/company/all").get(validateToken, CompanyController.getCompany);
  }
}
