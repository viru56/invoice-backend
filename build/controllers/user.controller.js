"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const services_1 = require("../services");
const config_1 = require("../config");
class UserController {
    static addNewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user", "post", "addNewUser", req.body.email);
                services_1.logger.log("body", req.body);
                const newUser = new models_1.User(req.body);
                newUser.company = req.body.company || req.params.companyId;
                newUser.createdBy = req.params.userId;
                const user = yield newUser.save();
                services_1.logger.log("new user added");
                const token = services_1.jwtToken({
                    aud: user.id,
                    type: "activation",
                    email: user.email
                });
                const mailOptions = {
                    userName: req.body.fullName,
                    link: req.body.company
                        ? `${config_1.applicationData.accountCreation.link}${token}`
                        : `${config_1.applicationData.accountActivation.link}${token}`,
                    linkDescription: req.body.company
                        ? config_1.applicationData.accountCreation.linkDescription
                        : config_1.applicationData.accountActivation.linkDescription,
                    to: user.email,
                    subject: req.body.company
                        ? config_1.applicationData.accountCreation.subject
                        : config_1.applicationData.accountActivation.subject,
                    text1: req.body.company
                        ? config_1.applicationData.accountCreation.text1
                        : config_1.applicationData.accountActivation.text1,
                    text2: req.body.company
                        ? config_1.applicationData.accountCreation.text2
                        : config_1.applicationData.accountActivation.text2,
                    text3: req.body.company
                        ? config_1.applicationData.accountCreation.text3
                        : config_1.applicationData.accountActivation.text3,
                    template: req.body.company
                        ? config_1.applicationData.accountCreation.template
                        : config_1.applicationData.accountActivation.template
                };
                services_1.mailService(mailOptions);
                const result = req.params.companyId
                    ? services_1.parseUser(user)
                    : {
                        message: config_1.applicationData.responseMessages.accountCreation.message1
                    };
                return res.status(200).json(result);
            }
            catch (error) {
                services_1.logger.error("falied to create new user, reason:- ", error);
                services_1.logger.log("delete company - : ", req.body.companyName);
                models_1.Company.deleteOne({ _id: req.body.company }, (err, info) => services_1.logger.log(`deleting company - ${req.body.company}`, { err, info }));
                return res.status(400).json(error);
            }
        });
    }
    static getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user/all", "get", "getUsers", req.params.userId);
                const users = yield models_1.User.find({ isDeleted: false, company: req.params.companyId }, { fullName: 1, phone: 1, email: 1, status: 1, role: 1 });
                return res.status(200).json(users);
            }
            catch (error) {
                services_1.logger.error("falied to get all users, reason:- ", error);
                return res.status(400).json(error);
            }
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user", "get", "getUser", req.params.userId);
                const user = yield models_1.User.findOne({ _id: req.params.userId, isDeleted: false }, { fullName: 1, phone: 1, email: 1, role: 1 })
                    .populate("company", [
                    "name",
                    "subscription",
                    "subscriptionEndDate",
                    "email",
                    "logoUrl",
                    "postalCode",
                    "sendTo",
                    "state",
                    "city",
                    "subscriptionStartDate",
                    "taxId",
                    "address"
                ])
                    .exec();
                return res.status(200).json(user);
            }
            catch (error) {
                services_1.logger.error("falied to get user details, reason:- ", error);
                return res.status(400).json(error);
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user", "put", "updateUser", req.params.userId);
                services_1.logger.log("req.body", req.body);
                delete req.body.role;
                req.body.updatedBy = req.params.userId;
                if (req.body.password) {
                    req.body.password = services_1.hashPassword(req.body.password);
                }
                const result = yield models_1.User.updateOne({ _id: req.body.id, isDeleted: false }, req.body, {
                    runValidators: true
                });
                return res.status(200).json(result);
            }
            catch (error) {
                services_1.logger.error("falied to update user, reason:- ", error);
                return res.status(400).json(error);
            }
        });
    }
    static userRoleUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user/role", "put", "userRoleUpdate", req.params.userId);
                req.body.updatedBy = req.params.userId;
                const result = yield models_1.User.updateOne({ _id: req.body.id, isDeleted: false }, req.body, {
                    runValidators: true
                });
                return res.status(200).json(result);
            }
            catch (error) {
                services_1.logger.error("falied to update user role, reason:- ", error);
                return res.status(400).json(error);
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user", "delete", "deleteUser", req.params.userId);
                const result = yield models_1.User.updateOne({ _id: req.params.userId }, { isDeleted: true, updatedBy: req.params.userId });
                return res.status(200).json(result);
            }
            catch (error) {
                services_1.logger.error("falied to delete user, reason:- ", error);
                return res.status(400).json(error);
            }
        });
    }
    static userLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/api/login", "post", "userLogin", req.body.email);
                const user = yield models_1.User.findOne({ email: req.body.email, isDeleted: false }, { fullName: 1, phone: 1, email: 1, role: 1, password: 1, status: 1 })
                    .populate("company", [
                    "name",
                    "subscription",
                    "subscriptionEndDate",
                    "email",
                    "logoUrl",
                    "postalCode",
                    "sendTo",
                    "state",
                    "city",
                    "subscriptionStartDate",
                    "taxId",
                    "address"
                ])
                    .exec();
                if (user.status !== "active") {
                    services_1.logger.error("user account inactive");
                    return res.status(400).json({ message: "your account is not active" });
                }
                if (services_1.hashPassword(req.body.password) !== user.password) {
                    services_1.logger.error("password did not match");
                    return res.status(400).json({
                        message: config_1.applicationData.responseMessages.error.login
                    });
                }
                else {
                    const token = services_1.jwtToken({
                        aud: user.id,
                        org: user.company.id,
                        type: "login",
                        email: req.body.email,
                        role: user.role
                    });
                    services_1.logger.log("token generated");
                    user.password = null;
                    return res.status(200).json({ token, user });
                }
            }
            catch (error) {
                services_1.logger.error("falied to user login, reason:- ", error);
                return res
                    .status(400)
                    .json({ message: config_1.applicationData.responseMessages.error.login });
            }
        });
    }
    static userForgotPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user/forgotPassword", "put", "userForgotPassword", req.params.userId);
                if (req.body.password) {
                    const user = yield models_1.User.findOne({
                        _id: req.params.userId,
                        isDeleted: false
                    });
                    user.password = req.body.password;
                    user.status = "active";
                    user.save((err, user) => {
                        if (!err && user) {
                            res.status(200).json({
                                message: config_1.applicationData.responseMessages.forgotPassword.passwordChanged
                            });
                            services_1.logger.log("password updated");
                        }
                        else {
                            res.status(400).json({ message: "error in update password", err });
                            services_1.logger.error("error in update password", err);
                        }
                    });
                }
                else {
                    res.status(400).json({ message: "missing required filed - password" });
                }
            }
            catch (error) {
                res.status(400).json({ message: "can not update password", error });
                services_1.logger.error("can not update password", error);
            }
        });
    }
    // required field - password, newPassword, id
    static userResetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user/resetPassword", "put", "userResetPassword", req.params.userId);
                if (req.body.password && req.body.newPassword) {
                    const user = yield models_1.User.findOne({
                        _id: req.params.userId,
                        isDeleted: false
                    });
                    if (services_1.hashPassword(req.body.password) !== user.password) {
                        services_1.logger.error("password did not match");
                        return res.status(400).json({ message: "password did not match" });
                    }
                    else {
                        user.password = services_1.hashPassword(req.body.newPassword);
                        yield user.save();
                        return res.status(200).json({ message: "password updated" });
                    }
                }
                else {
                    return res.status(400).json({
                        message: "missing required filed - password and newPassword"
                    });
                }
            }
            catch (error) {
                services_1.logger.error("falied to user reset password, reason:- ", error);
                return res.status(400).json({ message: "error in finding user", error });
            }
        });
    }
    static accountActivation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/user/accountActivation", "put", "accountActivation", req.params.userId);
                const result = yield models_1.User.updateOne({ _id: req.params.userId, isDeleted: false }, { status: "active", password: services_1.hashPassword(req.body.password) });
                services_1.logger.log("your account is activated", result);
                return res.status(200).json({ message: "your account is activated." });
            }
            catch (error) {
                services_1.logger.error("falied to activate user account, reason:- ", error);
                return res
                    .status(400)
                    .json({ message: "can not activate account", error });
            }
        });
    }
    static sendForgotPasswordMail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                services_1.logger.info("/api/forgotPassword", "put", "sendForgotPasswordMail", req.body.email);
                const email = req.body.email || req.params.email;
                if (email) {
                    const user = yield models_1.User.findOne({ email, isDeleted: false });
                    const token = services_1.jwtToken({
                        aud: user.id,
                        type: "forgot",
                        email: user.email
                    });
                    const mailOptions = {
                        userName: user.fullName,
                        link: `${config_1.applicationData.forgotPassword.link}${token}`,
                        linkDescription: config_1.applicationData.forgotPassword.linkDescription,
                        to: user.email,
                        subject: config_1.applicationData.forgotPassword.subject,
                        text1: config_1.applicationData.forgotPassword.text1,
                        text2: config_1.applicationData.forgotPassword.text2,
                        text3: config_1.applicationData.forgotPassword.text3,
                        template: config_1.applicationData.forgotPassword.template
                    };
                    services_1.logger.log("forgot password mail options", mailOptions);
                    services_1.mailService(mailOptions, info => services_1.logger.log("mail response", info));
                    return res.status(200).json({
                        message: config_1.applicationData.responseMessages.forgotPassword.mailSent
                    });
                }
                else {
                    res.status(400).json({ message: "missing required field - email" });
                }
            }
            catch (error) {
                services_1.logger.error("falied to send forgot passward mail, reason:- ", error);
                return res.status(400).json({
                    message: config_1.applicationData.responseMessages.forgotPassword.mailSent,
                    error
                });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map