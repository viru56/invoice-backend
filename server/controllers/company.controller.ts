import { Company } from "../models";
import { Request, Response } from "express";
import { UserController } from "./user.controller";
import { logger } from "../services";

export class CompanyController {
  public static async addNewComapny(req: Request, res: Response) {
    try {
      logger.info("/company", "post", "addNewCompany", req.body.companyName);
      logger.log("body", req.body);
      const newCompany = new Company(req.body);
      newCompany.name = req.body.companyName;
      const company = await newCompany.save();
      req.body.company = company.id;
      return UserController.addNewUser(req, res);
    } catch (error) {
      logger.error("falied to create new company, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getCompany(req: Request, res: Response) {
    try {
      logger.info("/company", "get", "getCompany", req.params.userId);
      const comapny = await Company.findOne(
        { _id: req.params.companyId, isDeleted: false },
        {
          name: 1,
          subscription: 1,
          subscriptionEndDate: 1,
          email: 1,
          logoUrl: 1,
          postalCode: 1,
          sendTo: 1,
          state: 1,
          subscriptionStartDate: 1,
          taxId: 1,
          address: 1
        }
      );
      return res.status(200).json(comapny);
    } catch (error) {
      logger.error("falied to get company, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getAllCompanies(req: Request, res: Response) {
    try {
      logger.info("/company/all", "get", "getAllCompanies", req.params.userId);
      const comapnies = await Company.find(
        { isDeleted: false },
        {
          name: 1,
          subscription: 1,
          subscriptionEndDate: 1,
          email: 1,
          logoUrl: 1,
          postalCode: 1,
          sendTo: 1,
          state: 1,
          subscriptionStartDate: 1,
          taxId: 1,
          address: 1,
          city: 1
        }
      );
      return res.status(200).json(comapnies);
    } catch (error) {
      logger.error("falied to get companies, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async updateCompany(req: Request, res: Response) {
    try {
      logger.info("/company", "put", "updateCompany", req.params.userId);
      let company = JSON.parse(req.body.data);
      company.updatedBy = req.params.userId;
      company.updatedAt = new Date();
      if (req["file"]) company.logoUrl = req["file"].path;
      console.log('🚀 ~ req["file"]:', req["file"])
      const result = await Company.updateOne(
        { _id: req.params.companyId },
        company,
        {
          runValidators: true
        }
      );
      return res.status(200).json({ result, logo: company.logoUrl });
    } catch (error) {
      console.log(error);
      logger.error("falied to update company, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async deleteCompany(req: Request, res: Response) {
    try {
      logger.info("/company", "delete", "deleteCompany", req.params.userId);
      const item = {
        isDeleted: true,
        updatedBy: req.params.userId,
        updatedAt: new Date()
      };
      const result = await Company.updateOne({ _id: req.params.id }, item);
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to delete company, reason:- ", error);
      return res.status(400).json(error);
    }
  }
}
