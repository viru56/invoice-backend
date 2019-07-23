"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const services_1 = require("../services");
class UserController {
    addNewUser(req, res) {
        services_1.logger.info('/user', 'post', 'addNewUser', req.body.email);
        services_1.logger.log('body', req.body);
        const newUser = new models_1.User(req.body);
        if (newUser.password) {
            newUser.save((err, user) => {
                if (!err && user) {
                    services_1.logger.log('new user added');
                    res.status(200).json({ message: "your account is created please check your mail to activate account" });
                    const token = services_1.jwtToken({ id: user._id, type: 'activation', email: user.email });
                    const mailOptions = {
                        userName: user.firstName,
                        link: `http://localhost:3000/user/accountActivation/?token=${token}`,
                        linkDescription: 'Click here to activate your account',
                        to: user.email,
                        subject: 'Activation Account',
                        text1: 'Welcome to onestopyoga, You have registered successfully in onestopyoga. Click here to confirm your registration.',
                        text2: 'Once you confirm, Your account will be activated.'
                    };
                    services_1.mailService(mailOptions, (info) => services_1.logger.log('mail response', info));
                    services_1.logger.log('sending mail to user mailOptions', mailOptions);
                }
                else {
                    res.status(400).json(err);
                    services_1.logger.error('falied to create new user, reason:- ', err);
                }
            });
        }
        else {
            res.status(400).json({ message: 'Password should have minimum eight characters, at least one letter and one number' });
            services_1.logger.error('password validation failed');
        }
    }
    ;
    getUsers(req, res) {
        services_1.logger.info('/user', 'get', 'getUsers', req.params.email);
        models_1.User.find({ isDeleted: false }, { firstName: 1, lastName: 1, phone: 1, email: 1 }, (err, users) => {
            if (!err && users) {
                res.status(200).json(users);
                services_1.logger.error('users found');
            }
            else {
                res.status(400).json(err);
                services_1.logger.error('err ', err);
            }
        });
    }
    ;
    getUser(req, res) {
        services_1.logger.info('/user/userdetail', 'get', 'getUser', req.params.email);
        models_1.User.findOne({ _id: req.params.id, isDeleted: false }, { firstName: 1, lastName: 1, phone: 1, email: 1 }, (err, user) => {
            if (!err && user) {
                res.status(200).json(user);
                services_1.logger.log('user found');
            }
            else {
                res.status(400).json(err);
                services_1.logger.error('err ', err);
            }
        });
    }
    ;
    updateUser(req, res) {
        services_1.logger.info('/user', 'put', 'updateUser', req.params.email);
        services_1.logger.log('req.body', req.body);
        models_1.User.findOne({ _id: req.params.id, isDeleted: false }, (err, user) => {
            if (!err && user) {
                services_1.logger.log('user found');
                if (req.body.firstName) {
                    user.firstName = req.body.firstName;
                }
                if (req.body.lastName) {
                    user.lastName = req.body.lastName;
                }
                if (req.body.phone) {
                    user.phone = req.body.phone;
                }
                if (req.body.email) {
                    user.lastName = req.body.email;
                }
                user.save((err, user) => {
                    if (!err && user) {
                        res.status(200).json(services_1.parseUser(user));
                        services_1.logger.log('user updated');
                    }
                    else {
                        res.status(400).json(err);
                        services_1.logger.error('user.save - err ', err);
                    }
                });
            }
            else {
                res.status(400).json(err);
                services_1.logger.error('err ', err);
            }
        });
    }
    ;
    deleteUser(req, res) {
        services_1.logger.info('/user', 'delete', 'deleteUser', req.params.email);
        models_1.User.deleteOne({ _id: req.params.id }, (err, info) => {
            if (!err && info) {
                res.status(200).json({ message: `user deleted - ${info.n}` });
                services_1.logger.log('delete user ', info);
            }
            else {
                res.status(400).json(err);
                services_1.logger.error('err ', err);
            }
        });
    }
    ;
    userLogin(req, res) {
        services_1.logger.info('/api/login', 'post', 'userLogin', req.body.email);
        if (req.body.email && req.body.password) {
            models_1.User.findOne({ email: req.body.email, isDeleted: false }, (err, user) => {
                if (!err && user) {
                    services_1.logger.log('user exists');
                    if (user.status !== "Active") {
                        res.status(400).json({ message: "your account is not active" });
                        services_1.logger.error('user account inactive');
                    }
                    if (services_1.hashPassword(req.body.password) !== user.password) {
                        res.status(400).json({ message: 'password did not match' });
                        services_1.logger.error('password did not match');
                    }
                    else {
                        const token = services_1.jwtToken({ id: user._id, type: 'login', email: user.email });
                        res.status(200).json({ user: services_1.parseUser(user), token });
                        services_1.logger.log('token generated');
                    }
                }
                else {
                    res.status(400).json({ 'message': 'user not exists' });
                    services_1.logger.error('user not exist');
                }
            });
        }
        else {
            res.status(400).json({ message: 'missing required fields' });
        }
    }
    ;
    userForgotPassword(req, res) {
        services_1.logger.info('/user/forgotPassword', 'put', 'userForgotPassword', req.params.email);
        if (req.body.password) {
            models_1.User.findOne({ _id: req.params.id, isDeleted: false }, (err, user) => {
                if (!err && user) {
                    user.password = req.body.password;
                    user.status = 'Active';
                    user.save((err, user) => {
                        if (!err && user) {
                            res.status(200).json({ message: 'password is updated' });
                            services_1.logger.log('password updated');
                        }
                        else {
                            res.status(400).json({ message: 'error in update password', err });
                            services_1.logger.error('error in update password', err);
                        }
                    });
                }
                else {
                    res.status(400).json({ message: 'can not update password', err });
                    services_1.logger.error('can not update password', err);
                }
            });
        }
        else {
            res.status(400).json({ message: 'missing required filed - password' });
        }
    }
    ;
    // required field - password, newPassword, id
    userResetPassword(req, res) {
        services_1.logger.info('/user/resetPassword', 'put', 'userResetPassword', req.params.email);
        if (req.body.password && req.body.newPassword) {
            models_1.User.findOne({ _id: req.params.id, isDeleted: false }, (err, user) => {
                if (!err && user) {
                    if (services_1.hashPassword(req.body.password) !== user.password) {
                        res.status(400).json({ message: 'password did not match' });
                        services_1.logger.error('password did not match');
                    }
                    else {
                        user.password = req.body.newPassword;
                        user.save((err, updatedUser) => {
                            if (!err && updatedUser) {
                                res.status(200).json({ "message": 'password updated' });
                                services_1.logger.log('password changed');
                            }
                            else {
                                res.status(400).json(err);
                                services_1.logger.error('failed to change password', err);
                            }
                        });
                    }
                }
                else {
                    res.status(400).json({ message: 'error in finding user', err });
                    services_1.logger.error('error in finding user', err);
                }
            });
        }
        else {
            res.status(400).json({ message: 'missing required filed - password and newPassword' });
        }
    }
    ;
    accountActivation(req, res) {
        services_1.logger.info('/user/accountActivation', 'put', 'accountActivation', req.params.email);
        models_1.User.updateOne({ _id: req.params.id, isDeleted: false }, { $set: { status: 'Active' } }, (err, updated) => {
            if (!err && updated) {
                res.status(200).json({ message: 'your account is activated.' });
                services_1.logger.error('your account is activated', updated);
            }
            else {
                res.status(400).json({ message: 'can not activate account', err });
                services_1.logger.error('can not activate account', err);
            }
        });
    }
    ;
    sendForgotPasswordMail(req, res) {
        services_1.logger.info('/api/forgotPassword', 'put', 'sendForgotPasswordMail', req.body.email);
        const email = req.body.email || req.params.email;
        if (email) {
            models_1.User.findOne({ email, isDeleted: false }, (err, user) => {
                if (!err && user) {
                    res.status(200).json({ message: "We have sent you a link for reset password,please check you mail inbox " });
                    const token = services_1.jwtToken({ id: user._id, type: 'forgot', email: user.email });
                    const mailOptions = {
                        userName: user.firstName,
                        link: `http://localhost:3000/user/forgotPassword/?token=${token}`,
                        linkDescription: 'Click here to reset your password',
                        to: user.email,
                        subject: 'Reset Password',
                        text1: 'We have received the request to reset your password associated with this e-mail address and have created the reset password link.',
                        text2: 'If you have not requested for your password reset, you can safely ignore this email. Rest assured your customer account is safe.'
                    };
                    services_1.logger.log('forgot password mail options', mailOptions);
                    services_1.mailService(mailOptions, (info) => services_1.logger.log('mail response', info));
                }
                else {
                    res.status(400).json({ message: 'no user found', err });
                    services_1.logger.error('no user found', err);
                }
            });
        }
        else {
            res.status(400).json({ message: 'missing required field - email' });
        }
    }
}
exports.UserController = UserController;
;
//# sourceMappingURL=user.controller.js.map