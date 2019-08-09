import { Company } from "../models";
import { Request, Response } from "express";
import { UserController } from "./user.controller";
import { logger } from "../services";

export class CompanyController {
  public static addNewComapny(req: Request, res: Response) {
    logger.info("/company", "post", "addNewCompany", req.body.companyName);
    logger.log("body", req.body);
    const newCompany = new Company(req.body);
    newCompany.name = req.body.companyName;
    newCompany.save((err, company) => {
      if (!err && company) {
        req.body.company = company.id;
        UserController.addNewUser(req, res);
      } else {
        logger.error("falied to create new company, reason:- ", err);
        return res.status(400).json(err);
      }
    });
  }
  public static getCompany(req: Request, res: Response) {
    logger.info("/company/:id", "get", "getCompany", req.params.email);
  }
  public static getAllCompanies(req: Request, res: Response) {
    logger.info("/company", "get", "getAllCompanies", req.params.userId);
  }
  public static updateCompany(req: Request, res: Response) {
    logger.info("/company", "put", "updateCompany", req.params.userId);
  }
  public static deleteCompany(req: Request, res: Response) {
    logger.info("/company", "delete", "deleteCompany", req.params.userId);
  }
}
