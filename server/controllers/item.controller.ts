import { Request, Response } from "express";
import { logger, parseItem } from "../services";
import { Item } from "../models";
export class ItemController {
  public static async addItem(req: Request, res: Response) {
    try {
      logger.info("/item", "post", "addItem", req.body.name);
      req.body.createdBy = req.params.userId;
      const item = new Item(req.body);
      const newItem = await item.save();
      return res.status(200).json(parseItem(newItem));
    } catch (error) {
      logger.error("falied to create new item, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getItem(req: Request, res: Response) {
    try {
      logger.info("/item/:id", "get", "getItem", req.params.id);
      const item = Item.findOne(
        { _id: req.params.id, isDeleted: false },
        { name: 1, description: 1, taxable: 1, unitCost: 1 }
      );
      return res.status(200).json(item);
    } catch (error) {
      logger.error("falied to get item, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getAllItems(req: Request, res: Response) {
    try {
      logger.info("/item", "get", "getAllItems", req.params.userId);
      const items = await Item.find(
        { isDeleted: false },
        { name: 1, description: 1, taxable: 1, unitCost: 1 }
      );
      return res.status(200).json(items);
    } catch (error) {
      logger.error("falied to get all items, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async upadateItem(req: Request, res: Response) {
    try {
      logger.info("/item", "put", "updateItem", req.body.id);
      req.body.updatedBy = req.params.userId;
      req.body.updatedAt = new Date();
      const result = await Item.updateOne({ _id: req.body.id }, req.body, {
        runValidators: true
      });
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update item, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async deleteItem(req: Request, res: Response) {
    try {
      logger.info("/item", "delete", "deleteItem", req.params.userId);
      const item = {
        isDeleted: true,
        updatedBy: req.params.userId,
        updatedAt: new Date()
      };
      const result = await Item.updateOne({ _id: req.params.id }, item);
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update item, reason:- ", error);
      return res.status(400).json(error);
    }
  }
}
