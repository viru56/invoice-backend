import { CompanyController } from '../controllers';
import { validateToken} from '../services';
export class CompanyRoutes {
    public static routes(app): void {
        app.route('/company')
            //get all companies
            .get(validateToken, CompanyController.getAllCompanies)
            //create new company
            .post(CompanyController.addNewComapny)
            // update a specific company
            .put(validateToken, CompanyController.updateCompany)
            // delete specific company
            .delete(validateToken, CompanyController.deleteCompany);
        app.route('/company/:id')
            //get specific company details
            .get(validateToken, CompanyController.getCompany);
    }
};