import { UserController } from "../controllers";
import {
  validateToken,
  validateActivationToken,
  validateForgotPasswordToken,
  validateAdminToken
} from "../services";
export class UserRoutes {
  public userController: UserController = new UserController();
  public static routes(app): void {
    app
      .route("/user")
      //get all users
      .get(validateToken, UserController.getUser)
      //create new user
      .post(validateToken, UserController.addNewUser)
      // update a specific user
      .put(validateToken, UserController.updateUser);
    //get specific user details
    app.route("/user/all").get(validateToken, UserController.getUsers)
    app
      .route("/user/forgotpassword")
      .put(validateForgotPasswordToken, UserController.userForgotPassword);
    app
      .route("/user/resetpassword")
      .put(validateToken, UserController.userResetPassword);
    app
      .route("/user/accountactivation")
      .put(validateActivationToken, UserController.accountActivation);
    // update user role
    app
      .route("/user/role")
      .put(validateAdminToken, UserController.userRoleUpdate);
    // delete specific user
    app
      .route("/user/:id")
      .delete(validateAdminToken, UserController.deleteUser);
  }
}
