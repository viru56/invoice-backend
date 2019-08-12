import { User, Company } from "../models";
import { Request, Response } from "express";
import {
  hashPassword,
  jwtToken,
  mailService,
  logger,
  parseUser
} from "../services";
import { applicationData } from "../config";
export class UserController {
  public static async addNewUser(req: Request, res: Response) {
    try {
      logger.info("/user", "post", "addNewUser", req.body.email);
      logger.log("body", req.body);
      const newUser = new User(req.body);
      newUser.company = req.body.company || req.params.companyId;
      newUser.createdBy = req.params.userId;
      const user = await newUser.save();
      logger.log("new user added");
      const token = jwtToken({
        id: user.id,
        type: "activation",
        email: user.email
      });
      const mailOptions = {
        userName: req.body.fullName,
        link: req.body.company
          ? `${applicationData.accountCreation.link}${token}`
          : `${applicationData.accountActivation.link}${token}`,
        linkDescription: req.body.company
          ? applicationData.accountCreation.linkDescription
          : applicationData.accountActivation.linkDescription,
        to: user.email,
        subject: req.body.company
          ? applicationData.accountCreation.subject
          : applicationData.accountActivation.subject,
        text1: req.body.company
          ? applicationData.accountCreation.text1
          : applicationData.accountActivation.text1,
        text2: req.body.company
          ? applicationData.accountCreation.text2
          : applicationData.accountActivation.text2,
        text3: req.body.company
          ? applicationData.accountCreation.text3
          : applicationData.accountActivation.text3,
        template: req.body.company
          ? applicationData.accountCreation.template
          : applicationData.accountActivation.template
      };
      mailService(mailOptions);
      const result = req.params.companyId
        ? parseUser(user)
        : {
            message: applicationData.responseMessages.accountCreation.message1
          };
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to create new user, reason:- ", error);
      logger.log("delete company - : ", req.body.companyName);
      Company.deleteOne({ _id: req.body.company }, (err, info) =>
        logger.log(`deleting company - ${req.body.company}`, { err, info })
      );
      return res.status(400).json(error);
    }
  }

  public static async getUsers(req: Request, res: Response) {
    try {
      logger.info("/user", "get", "getUsers", req.params.email);
      const users = await User.find(
        { isDeleted: false, company: req.params.companyId },
        { fullName: 1, phone: 1, email: 1, status: 1, role: 1 }
      );
      return res.status(200).json(users);
    } catch (error) {
      logger.error("falied to get all users, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getUser(req: Request, res: Response) {
    try {
      logger.info("/user/userdetails", "get", "getUser", req.params.email);
      const user = await User.findOne(
        { _id: req.params.userId, isDeleted: false },
        { fullName: 1, phone: 1, email: 1, role: 1 }
      )
        .populate("company")
        .exec();

      return res.status(200).json(user);
    } catch (error) {
      logger.error("falied to get user details, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async updateUser(req: Request, res: Response) {
    try {
      logger.info("/user", "put", "updateUser", req.params.email);
      logger.log("req.body", req.body);
      delete req.body.role;
      req.body.updatedBy = req.params.id;
      const result = await User.updateOne(
        { _id: req.body.id, isDeleted: false },
        req.body,
        {
          runValidators: true
        }
      );
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update user, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async userRoleUpdate(req: Request, res: Response) {
    try {
      logger.info("/user/role", "put", "userRoleUpdate", req.params.email);
      req.body.updatedBy = req.params.id;
      const result = await User.updateOne(
        { _id: req.body.id, isDeleted: false },
        req.body,
        {
          runValidators: true
        }
      );
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update user role, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async deleteUser(req: Request, res: Response) {
    try {
      logger.info("/user", "delete", "deleteUser", req.params.email);
      const result = await User.updateOne(
        { _id: req.params.id },
        { isDeleted: true, updatedBy: req.params.userId }
      );
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to delete user, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async userLogin(req: Request, res: Response) {
    try {
      logger.info("/api/login", "post", "userLogin", req.body.email);
      const user = await User.findOne(
        { email: req.body.email, isDeleted: false },
        { fullName: 1, phone: 1, email: 1, role: 1, password: 1, status: 1 }
      )
        .populate("company", ["name", "subscription", "subscriptionEndDate"])
        .exec();
      if (user.status !== "active") {
        logger.error("user account inactive");
        return res.status(400).json({ message: "your account is not active" });
      }
      if (hashPassword(req.body.password) !== user.password) {
        logger.error("password did not match");
        return res.status(400).json({
          message: applicationData.responseMessages.error.login
        });
      } else {
        const token = jwtToken({
          id: user.id,
          org: user.company.id,
          type: "login",
          email: req.body.email,
          role: user.role
        });
        logger.log("token generated");
        user.password = null;
        return res.status(200).json({ token, user });
      }
    } catch (error) {
      logger.error("falied to user login, reason:- ", error);
      return res
        .status(400)
        .json({ message: applicationData.responseMessages.error.login });
    }
  }
  public static async userForgotPassword(req: Request, res: Response) {
    try {
      logger.info(
        "/user/forgotPassword",
        "put",
        "userForgotPassword",
        req.params.email
      );
      if (req.body.password) {
        const user = await User.findOne({
          _id: req.params.userId,
          isDeleted: false
        });
        user.password = req.body.password;
        user.status = "active";
        user.save((err, user) => {
          if (!err && user) {
            res.status(200).json({
              message:
                applicationData.responseMessages.forgotPassword.passwordChanged
            });
            logger.log("password updated");
          } else {
            res.status(400).json({ message: "error in update password", err });
            logger.error("error in update password", err);
          }
        });
      } else {
        res.status(400).json({ message: "missing required filed - password" });
      }
    } catch (error) {
      res.status(400).json({ message: "can not update password", error });
      logger.error("can not update password", error);
    }
  }

  // required field - password, newPassword, id

  public static async userResetPassword(req: Request, res: Response) {
    try {
      logger.info(
        "/user/resetPassword",
        "put",
        "userResetPassword",
        req.params.email
      );
      if (req.body.password && req.body.newPassword) {
        const user = await User.findOne({
          _id: req.params.userId,
          isDeleted: false
        });
        if (hashPassword(req.body.password) !== user.password) {
          logger.error("password did not match");
          return res.status(400).json({ message: "password did not match" });
        } else {
          user.password = hashPassword(req.body.newPassword);
          await user.save();
          return res.status(200).json({ message: "password updated" });
        }
      } else {
        return res.status(400).json({
          message: "missing required filed - password and newPassword"
        });
      }
    } catch (error) {
      logger.error("falied to user reset password, reason:- ", error);
      return res.status(400).json({ message: "error in finding user", error });
    }
  }

  public static async accountActivation(req: Request, res: Response) {
    try {
      logger.info(
        "/user/accountActivation",
        "put",
        "accountActivation",
        req.params.email
      );
      const result = await User.updateOne(
        { _id: req.params.userId, isDeleted: false },
        { status: "active", password: hashPassword(req.body.password) }
      );
      logger.log("your account is activated", result);
      return res.status(200).json({ message: "your account is activated." });
    } catch (error) {
      logger.error("falied to activate user account, reason:- ", error);
      return res
        .status(400)
        .json({ message: "can not activate account", error });
    }
  }
  public static async sendForgotPasswordMail(req: Request, res: Response) {
    try {
      logger.info(
        "/api/forgotPassword",
        "put",
        "sendForgotPasswordMail",
        req.body.email
      );
      const email = req.body.email || req.params.email;
      if (email) {
        const user = await User.findOne({ email, isDeleted: false });
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
        return res.status(200).json({
          message: applicationData.responseMessages.forgotPassword.mailSent
        });
      } else {
        res.status(400).json({ message: "missing required field - email" });
      }
    } catch (error) {
      logger.error("falied to send forgot passward mail, reason:- ", error);
      return res.status(400).json({
        message: applicationData.responseMessages.forgotPassword.mailSent,
        error
      });
    }
  }
}
