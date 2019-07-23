import { CompanyController } from '../controllers';
import { validateToken} from '../services';
export class CompanyRoutes {
    public companyController: CompanyController = new CompanyController();
    public routes(app): void {
        app.route('/company')
            //get all companies
            .get(validateToken, this.companyController.getAllCompanies)
            //create new user
            .post(this.companyController.addNewComapny)
            // update a specific user
            .put(validateToken, this.companyController.updateCompany)
            // delete specific user
            .delete(validateToken, this.companyController.deleteCompany);
        app.route('/company/companydetails')
            //get specific user details
            .get(validateToken, this.companyController.getCompany);
    }
};