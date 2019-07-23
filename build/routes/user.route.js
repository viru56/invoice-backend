"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const services_1 = require("../services");
class UserRoutes {
    constructor() {
        this.userController = new controllers_1.UserController();
    }
    routes(app) {
        app.route('/user')
            //get all users
            .get(services_1.validateToken, this.userController.getUsers)
            //create new user
            .post(this.userController.addNewUser)
            // update a specific user
            .put(services_1.validateToken, this.userController.updateUser)
            // delete specific user
            .delete(services_1.validateToken, this.userController.deleteUser);
        app.route('/user/userdetails')
            //get specific user details
            .get(services_1.validateToken, this.userController.getUser);
        app.route('/user/forgotPassword').put(services_1.validateForgotPasswordToken, this.userController.userForgotPassword);
        app.route('/user/resetPassword').put(services_1.validateToken, this.userController.userResetPassword);
        app.route('/user/accountActivation').put(services_1.validateActivationToken, this.userController.accountActivation);
    }
}
exports.UserRoutes = UserRoutes;
;
//# sourceMappingURL=user.route.js.map