"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const services_1 = require("../services");
class UserRoutes {
    constructor() {
        this.userController = new controllers_1.UserController();
    }
    static routes(app) {
        app
            .route("/user")
            //get all users
            .get(services_1.validateToken, controllers_1.UserController.getUser)
            //create new user
            .post(services_1.validateToken, controllers_1.UserController.addNewUser)
            // update a specific user
            .put(services_1.validateToken, controllers_1.UserController.updateUser);
        //get specific user details
        app.route("/user/all").get(services_1.validateToken, controllers_1.UserController.getUsers);
        app
            .route("/user/forgotpassword")
            .put(services_1.validateForgotPasswordToken, controllers_1.UserController.userForgotPassword);
        app
            .route("/user/resetpassword")
            .put(services_1.validateToken, controllers_1.UserController.userResetPassword);
        app
            .route("/user/accountactivation")
            .put(services_1.validateActivationToken, controllers_1.UserController.accountActivation);
        // update user role
        app
            .route("/user/role")
            .put(services_1.validateAdminToken, controllers_1.UserController.userRoleUpdate);
        // delete specific user
        app
            .route("/user/:id")
            .delete(services_1.validateAdminToken, controllers_1.UserController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user.route.js.map