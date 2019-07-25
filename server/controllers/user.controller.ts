import { User, Company } from "../models";
import { Request, Response } from "express";
import {
  parseUser,
  hashPassword,
  jwtToken,
  mailService,
  logger
} from "../services";
import { applicationData } from "../config";
export class UserController {
  public addNewUser(req: Request, res: Response) {
    logger.info("/user", "post", "addNewUser", req.body.email);
    logger.log("body", req.body);
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (!err && user) {
        logger.log("new user added");
        res.status(200).json({
          message: req.body.company
            ? applicationData.responseMessages.accountCreation.message1
            : applicationData.responseMessages.accountActivation.message1
        });
        const token = jwtToken({
          id: user.id,
          type: "activation",
          email: user.email
        });
        let mailOptions = {
          userName: user.fullName,
          link: `${applicationData.accountActivation.link}${token}`,
          linkDescription: applicationData.accountActivation.linkDescription,
          to: user.email,
          subject: applicationData.accountActivation.subject,
          text1: applicationData.accountActivation.text1,
          text2: applicationData.accountActivation.text2,
          text3: applicationData.accountActivation.text3
        };
        if (req.body.company) {
          mailOptions = {
            userName: user.fullName,
            link: `${applicationData.accountCreation.link}${token}`,
            linkDescription: applicationData.accountCreation.linkDescription,
            to: user.email,
            subject: applicationData.accountCreation.subject,
            text1: applicationData.accountCreation.text1,
            text2: applicationData.accountCreation.text2,
            text3: applicationData.accountCreation.text3
          };
        }
        logger.log("account activation mail options", mailOptions);
        mailService(mailOptions, info => logger.log("mail response", info));
      } else {
        res.status(400).json(err);
        logger.error("falied to create new user, reason:- ", err);
        logger.log("delete company - : ", req.body.companyName);
        Company.deleteOne({ _id: req.body.company }, (err, info) =>
          logger.log(`deleting company - ${req.body.company}`, { err, info })
        );
      }
    });
  }

  public getUsers(req: Request, res: Response) {
    logger.info("/user", "get", "getUsers", req.params.email);
    User.find(
      { isDeleted: false },
      { firstName: 1, lastName: 1, phone: 1, email: 1 },
      (err, users) => {
        if (!err && users) {
          res.status(200).json(users);
          logger.error("users found");
        } else {
          res.status(400).json(err);
          logger.error("err ", err);
        }
      }
    );
  }
  public getUser(req: Request, res: Response) {
    logger.info("/user/userdetail", "get", "getUser", req.params.email);
    User.findOne(
      { _id: req.params.id, isDeleted: false },
      { firstName: 1, lastName: 1, phone: 1, email: 1 },
      (err, user) => {
        if (!err && user) {
          res.status(200).json(user);
          logger.log("user found");
        } else {
          res.status(400).json(err);
          logger.error("err ", err);
        }
      }
    );
  }
  public updateUser(req: Request, res: Response) {
    logger.info("/user", "put", "updateUser", req.params.email);
    logger.log("req.body", req.body);
    User.findOne({ _id: req.params.id, isDeleted: false }, (err, user) => {
      if (!err && user) {
        logger.log("user found");
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
        user.save((err: any, user: any) => {
          if (!err && user) {
            res.status(200).json(parseUser(user));
            logger.log("user updated");
          } else {
            res.status(400).json(err);
            logger.error("user.save - err ", err);
          }
        });
      } else {
        res.status(400).json(err);
        logger.error("err ", err);
      }
    });
  }
  public deleteUser(req: Request, res: Response) {
    logger.info("/user", "delete", "deleteUser", req.params.email);
    User.deleteOne({ _id: req.params.id }, (err, info) => {
      if (!err && info) {
        res.status(200).json({ message: `user deleted - ${info.n}` });
        logger.log("delete user ", info);
      } else {
        res.status(400).json(err);
        logger.error("err ", err);
      }
    });
  }
  public userLogin(req: Request, res: Response) {
    logger.info("/api/login", "post", "userLogin", req.body.email);
    if (req.body.email && req.body.password) {
      User.findOne({ email: req.body.email, isDeleted: false }, (err, user) => {
        if (!err && user) {
          logger.log("user exists");
          if (user.status !== "Active") {
            res.status(400).json({ message: "your account is not active" });
            logger.error("user account inactive");
          }
          if (hashPassword(req.body.password) !== user.password) {
            res.status(400).json({ message: "password did not match" });
            logger.error("password did not match");
          } else {
            const token = jwtToken({
              id: user._id,
              type: "login",
              email: user.email
            });
            res.status(200).json({ user: parseUser(user), token });
            logger.log("token generated");
          }
        } else {
          res.status(400).json({ message: "user not exists" });
          logger.error("user not exist");
        }
      });
    } else {
      res.status(400).json({ message: "missing required fields" });
    }
  }
  public userForgotPassword(req: Request, res: Response) {
    logger.info(
      "/user/forgotPassword",
      "put",
      "userForgotPassword",
      req.params.email
    );
    if (req.body.password) {
      User.findOne({ _id: req.params.id, isDeleted: false }, (err, user) => {
        if (!err && user) {
          user.password = req.body.password;
          user.status = "active";
          user.save((err, user) => {
            if (!err && user) {
              res
                .status(200)
                .json({
                  message:
                    applicationData.responseMessages.forgotPassword
                      .passwordChanged
                });
              logger.log("password updated");
            } else {
              res
                .status(400)
                .json({ message: "error in update password", err });
              logger.error("error in update password", err);
            }
          });
        } else {
          res.status(400).json({ message: "can not update password", err });
          logger.error("can not update password", err);
        }
      });
    } else {
      res.status(400).json({ message: "missing required filed - password" });
    }
  }

  // required field - password, newPassword, id

  public userResetPassword(req: Request, res: Response) {
    logger.info(
      "/user/resetPassword",
      "put",
      "userResetPassword",
      req.params.email
    );
    if (req.body.password && req.body.newPassword) {
      User.findOne({ _id: req.params.id, isDeleted: false }, (err, user) => {
        if (!err && user) {
          if (hashPassword(req.body.password) !== user.password) {
            res.status(400).json({ message: "password did not match" });
            logger.error("password did not match");
          } else {
            user.password = req.body.newPassword;
            user.save((err, updatedUser) => {
              if (!err && updatedUser) {
                res.status(200).json({ message: "password updated" });
                logger.log("password changed");
              } else {
                res.status(400).json(err);
                logger.error("failed to change password", err);
              }
            });
          }
        } else {
          res.status(400).json({ message: "error in finding user", err });
          logger.error("error in finding user", err);
        }
      });
    } else {
      res
        .status(400)
        .json({ message: "missing required filed - password and newPassword" });
    }
  }

  public accountActivation(req: Request, res: Response) {
    logger.info(
      "/user/accountActivation",
      "put",
      "accountActivation",
      req.params.email
    );
    User.updateOne(
      { _id: req.params.id, isDeleted: false },
      { $set: { status: "active", password: req.body.password } },
      (err, updated) => {
        if (!err && updated) {
          res.status(200).json({ message: "your account is activated." });
          logger.error("your account is activated", updated);
        } else {
          res.status(400).json({ message: "can not activate account", err });
          logger.error("can not activate account", err);
        }
      }
    );
  }
  public sendForgotPasswordMail(req: Request, res: Response) {
    logger.info(
      "/api/forgotPassword",
      "put",
      "sendForgotPasswordMail",
      req.body.email
    );
    const email = req.body.email || req.params.email;
    if (email) {
      User.findOne({ email, isDeleted: false }, (err, user) => {
        if (!err && user) {
          res.status(200).json({
            message: applicationData.responseMessages.forgotPassword.mailSent
          });
          const token = jwtToken({
            id: user._id,
            type: "forgot",
            email: user.email
          });
          const mailOptions = {
            userName: user.fullName,
            link: `${applicationData.forgotPassword.link}${token}`,
            linkDescription: applicationData.forgotPassword.linkDescription,
            to: user.email,
            subject: applicationData.forgotPassword.subject,
            text1: applicationData.forgotPassword.text1,
            text2: applicationData.forgotPassword.text2,
            text3: applicationData.forgotPassword.text3
          };
          logger.log("forgot password mail options", mailOptions);
          mailService(mailOptions, info => logger.log("mail response", info));
        } else {
          res.status(400).json({ message: "no user found", err });
          logger.error("no user found", err);
        }
      });
    } else {
      res.status(400).json({ message: "missing required field - email" });
    }
  }
}
