import { Request, Response } from "express";
import { logger, parseTax } from "../services";
import { Tax } from "../models";
export class TaxController {
  public static async addTaxItem(req: Request, res: Response) {
    try {
      logger.info("/tax", "post", "addTaxItem", req.body.name);
      req.body.createdBy = req.params.userId;
      req.body.company = req.params.companyId;
      const item = new Tax(req.body);
      const newItem = await item.save();
      return res.status(200).json(parseTax(newItem));
    } catch (error) {
      logger.error("falied to create new tax item, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static getTaxItem(req: Request, res: Response) {
    try {
      logger.info("/tax/:id", "get", "getTaxItem", req.params.id);
      const item = Tax.findOne(
        { _id: req.params.id, isDeleted: false },
        { name: 1, description: 1, taxMode: 1, amount: 1 }
      );
      return res.status(200).json(item);
    } catch (error) {
      logger.error("falied to get tax item, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getAllTaxItems(req: Request, res: Response) {
    try {
      logger.info("/item", "get", "getTaxAllItems", req.params.userId);
      const items = await Tax.find(
        { isDeleted: false,company:req.params.companyId },
        { name: 1, description: 1, taxMode: 1, amount: 1 }
      );
      return res.status(200).json(items);
    } catch (err) {
      logger.error("falied to get all tax items, reason:- ", err);
      return res.status(400).json(err);
    }
  }
  public static async upadateTaxItem(req: Request, res: Response) {
    try {
      logger.info("/tax", "put", "updateTaxItem", req.body.id);
      req.body.updatedBy = req.params.userId;
      req.body.updatedAt = new Date();
      const result = await Tax.updateOne({ _id: req.body.id }, req.body, {
        runValidators: true
      });
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update tax item, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async deleteTaxItem(req: Request, res: Response) {
    try {
      logger.info("/tax", "delete", "deleteItem", req.params.userId);
      const item = {
        isDeleted: true,
        updatedBy: req.params.userId,
        updatedAt: new Date()
      };
      const result = await Tax.updateOne({ _id: req.params.id }, item);
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update tax item, reason:- ", error);
      return res.status(400).json(error);
    }
  }
}
