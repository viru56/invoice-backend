import * as multer from "multer";
import { CompanyController } from "../controllers";
import { validateToken } from "../services";

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
      callback(null, Date.now()+file.originalname);
  }
});

const upload = multer({ storage: storage }).single('logo');
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
