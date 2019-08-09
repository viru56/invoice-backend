import { User, Company } from "../models";
import { Request, Response } from "express";
import { hashPassword, jwtToken, mailService, logger } from "../services";
import { applicationData } from "../config";
export class UserController {
  public static addNewUser(req: Request, res: Response) {
    logger.info("/user", "post", "addNewUser", req.body.email);
    logger.log("body", req.body);
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (!err && user) {
        logger.log("new user added");

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
          text3: applicationData.accountActivation.text3,
          templete:applicationData.accountCreation.template
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
            text3: applicationData.accountCreation.text3,
            templete:applicationData.accountCreation.template
          };
        }
        logger.log("account activation mail options", mailOptions);
        mailService(mailOptions, info => logger.log("mail response", info));
        return res.status(200).json({
          message: req.body.company
            ? applicationData.responseMessages.accountCreation.message1
            : applicationData.responseMessages.accountActivation.message1
        });
      } else {
        logger.error("falied to create new user, reason:- ", err);
        logger.log("delete company - : ", req.body.companyName);
        Company.deleteOne({ _id: req.body.company }, (err, info) =>
          logger.log(`deleting company - ${req.body.company}`, { err, info })
        );
        return res.status(400).json(err);
      }
    });
  }

  public static getUsers(req: Request, res: Response) {
    logger.info("/user", "get", "getUsers", req.params.email);
    User.find({ isDeleted: false,company:req.params.companyId }, { fullName: 1, phone: 1, email: 1 })
      .populate("company", ["name"])
      .exec((err, users) => {
        if (!err && users) {
          logger.error("users found");
          return res.status(200).json(users);
        } else {
          logger.error("err ", err);
          return res.status(400).json(err);
        }
      });
  }
  public static getUser(req: Request, res: Response) {
    logger.info("/user/userdetails", "get", "getUser", req.params.email);
    User.findOne(
      { _id: req.params.userId, isDeleted: false },
      { fullName: 1, phone: 1, email: 1, role: 1 }
    )
      .populate("company")
      .exec((err, user) => {
        if (!err && user) {
          logger.log("user found");
          return res.status(200).json(user);
        } else {
          logger.error("err ", err);
          return res.status(400).json(err);
        }
      });
  }
  public static updateUser(req: Request, res: Response) {
    logger.info("/user", "put", "updateUser", req.params.email);
    logger.log("req.body", req.body);
    User.findOne({ _id: req.params.userId, isDeleted: false }, (err, user) => {
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
            logger.log("user updated");
            return res.status(200).json({ message: "user details is updated" });
          } else {
            logger.error("user.save - err ", err);
            return res.status(400).json(err);
          }
        });
      } else {
        logger.error("err ", err);
        return res.status(400).json(err);
      }
    });
  }
  public static deleteUser(req: Request, res: Response) {
    logger.info("/user", "delete", "deleteUser", req.params.email);
    User.deleteOne({ _id: req.params.userId }, (err, info) => {
      if (!err && info) {
        logger.log("delete user ", info);
        return res.status(200).json({ message: `user deleted - ${info.n}` });
      } else {
        logger.error("err ", err);
        return res.status(400).json(err);
      }
    });
  }
  public static userLogin(req: Request, res: Response) {
    logger.info("/api/login", "post", "userLogin", req.body.email);
    if (req.body.email && req.body.password) {
      User.findOne(
        { email: req.body.email, isDeleted: false },
        { fullName: 1, phone: 1, email: 1, role: 1, password: 1, status: 1 }
      )
        .populate("company",['name','subscription','subscriptionEndDate'])
        .exec((err, user) => {
          if (!err && user) {
            logger.log("user exists");
            if (user.status !== "active") {
              logger.error("user account inactive");
              return res
                .status(400)
                .json({ message: "your account is not active" });
            }
            if (hashPassword(req.body.password) !== user.password) {
              logger.error("password did not match");
              return res.status(400).json({
                message: applicationData.responseMessages.error.login
              });
            } else {
              const token = jwtToken({
                id: user.id,
                org: user.company,
                type: "login",
                email: req.body.email,
                role: user.role
              });
              logger.log("token generated");
               user.password = null;
              return res.status(200).json({ token, user });
            }
          } else {
            logger.error("user not exist");
            return res
              .status(400)
              .json({ message: applicationData.responseMessages.error.login });
          }
        });
    } else {
      return res.status(400).json({ message: "missing required fields" });
    }
  }
  public static userForgotPassword(req: Request, res: Response) {
    logger.info(
      "/user/forgotPassword",
      "put",
      "userForgotPassword",
      req.params.email
    );
    if (req.body.password) {
      User.findOne({ _id: req.params.userId, isDeleted: false }, (err, user) => {
        if (!err && user) {
          user.password = req.body.password;
          user.status = "active";
          user.save((err, user) => {
            if (!err && user) {
              res.status(200).json({
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

  public  static userResetPassword(req: Request, res: Response) {
    logger.info(
      "/user/resetPassword",
      "put",
      "userResetPassword",
      req.params.email
    );
    if (req.body.password && req.body.newPassword) {
      User.findOne({ _id: req.params.userId, isDeleted: false }, (err, user) => {
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

  public static accountActivation(req: Request, res: Response) {
    logger.info(
      "/user/accountActivation",
      "put",
      "accountActivation",
      req.params.email
    );
    User.updateOne(
      { _id: req.params.userId, isDeleted: false },
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
  public static sendForgotPasswordMail(req: Request, res: Response) {
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
            text3: applicationData.forgotPassword.text3,
            template: applicationData.forgotPassword.template
          };
          logger.log("forgot password mail options", mailOptions);
          mailService(mailOptions, info => logger.log("mail response", info));
        } else {
          res.status(400).json({
            message: applicationData.responseMessages.forgotPassword.mailSent,
            err
          });
          logger.error("no user found", err);
        }
      });
    } else {
      res.status(400).json({ message: "missing required field - email" });
    }
  }
}
