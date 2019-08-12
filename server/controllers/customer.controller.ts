import { Request, Response } from "express";
import { logger, parseCustomer } from "../services";
import { Customer } from "../models";
export class CustomerController {
  public static async addCustomer(req: Request, res: Response) {
    try {
      logger.info("/customer", "post", "addCustomer", req.body.name);
      req.body.createdBy = req.params.userId;
      req.body.company = req.params.companyId;
      const customer = new Customer(req.body);
      const newCustomer = await customer.save();
      return res.status(200).json(parseCustomer(newCustomer));
    } catch (error) {
      logger.error("falied to create new customer, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getCustomer(req: Request, res: Response) {
    try {
      logger.info("/customer/:id", "get", "getItem", req.params.id);
      const customer = Customer.findOne(
        { _id: req.params.id, isDeleted: false }
      );
      return res.status(200).json(customer);
    } catch (error) {
      logger.error("falied to get customer, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getAllCustomers(req: Request, res: Response) {
    try {
      logger.info("/customer", "get", "getAllCustomer", req.params.userId);
      const customers = await Customer.find(
        { isDeleted: false,company:req.params.companyId }
      );
      return res.status(200).json(customers);
    } catch (error) {
      logger.error("falied to get all customers, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async upadateCustomer(req: Request, res: Response) {
    try {
      logger.info("/customer", "put", "updateCustomer", req.body.id);
      req.body.updatedBy = req.params.userId;
      req.body.updatedAt = new Date();
      const result = await Customer.updateOne({ _id: req.body.id }, req.body, {
        runValidators: true
      });
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update customer, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async deleteCustomer(req: Request, res: Response) {
    try {
      logger.info("/customer", "delete", "deleteCustomer", req.params.userId);
      const customer = {
        isDeleted: true,
        updatedBy: req.params.userId,
        updatedAt: new Date()
      };
      const result = await Customer.updateOne({ _id: req.params.id }, customer);
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to delete customer, reason:- ", error);
      return res.status(400).json(error);
    }
  }
}
