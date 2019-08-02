import { CompanyController } from '../controllers';
import { validateToken} from '../services';
export class CompanyRoutes {
    public static routes(app): void {
        app.route('/company')
            //get all companies
            .get(validateToken, CompanyController.getAllCompanies)
            //create new user
            .post(CompanyController.addNewComapny)
            // update a specific user
            .put(validateToken, CompanyController.updateCompany)
            // delete specific user
            .delete(validateToken, CompanyController.deleteCompany);
        app.route('/company/companydetails')
            //get specific user details
            .get(validateToken, CompanyController.getCompany);
    }
};