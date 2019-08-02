import { UserController } from '../controllers';
import { validateToken ,validateActivationToken,validateForgotPasswordToken} from '../services';
export class UserRoutes {
    public userController: UserController = new UserController();
    public static routes(app): void {
        app.route('/user')
            //get all users
            .get(validateToken, UserController.getUsers)
            //create new user
            .post(UserController.addNewUser)
            // update a specific user
            .put(validateToken, UserController.updateUser)
            // delete specific user
            .delete(validateToken, UserController.deleteUser);
        app.route('/user/details')
            //get specific user details
            .get(validateToken, UserController.getUser);
        app.route('/user/forgotpassword').put(validateForgotPasswordToken,UserController.userForgotPassword);
        app.route('/user/resetpassword').put(validateToken,UserController.userResetPassword);
        app.route('/user/accountactivation').put(validateActivationToken,UserController.accountActivation);
    }
};