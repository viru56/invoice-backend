import { Request, Response } from "express";
import { logger, parseItem } from "../services";
import { Payment, Invoice } from "../models";
export class PaymentController {
  public static async addPayment(req: Request, res: Response) {
    try {
      logger.info("/payment", "post", "addPayment", req.params.companyId);
      req.body.createdBy = req.params.userId;
      req.body.company = req.params.companyId;
      const payment = await new Payment(req.body).save();
      console.log(payment);
      if (req.body.paymentFor && req.body.paymentFor === "invoice") {
        req.body.notes = null;
        const invoice = await Invoice.findOne({
          _id: req.body.invoice,
          isDeleted: false
        });
        invoice.balanceDue -= req.body.amount;
        invoice.amountPaid += req.body.amount;
        await invoice.save();
        return res
          .status(200)
          .json({
            id: req.body.invoice,
            amountPaid: invoice.amountPaid,
            balanceDue: invoice.balanceDue
          });
      }
      return res.status(200).json(parseItem(payment));
    } catch (error) {
      logger.error("falied to create new payment, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getPayment(req: Request, res: Response) {
    try {
      logger.info("/payment/:id", "get", "getPayment", req.params.id);
      const payment = Payment.findOne({ _id: req.params.id, isDeleted: false });
      return res.status(200).json(payment);
    } catch (error) {
      logger.error("falied to get payment, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getAllPayments(req: Request, res: Response) {
    try {
      logger.info("/payment", "get", "getAllPayment", req.params.userId);
      const payments = await Payment.find({ isDeleted: false });
      return res.status(200).json(payments);
    } catch (error) {
      logger.error("falied to get all payments, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getAllCompanyPayments(req: Request, res: Response) {
    try {
      logger.info("/payment", "get", "getAllCompanyPayment", req.params.userId);
      const payments = await Payment.find({
        isDeleted: false,
        company: req.params.companyId
      });
      return res.status(200).json(payments);
    } catch (error) {
      logger.error("falied to get all company payments, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async upadatePayment(req: Request, res: Response) {
    try {
      logger.info("/payment", "put", "updatePayment", req.body.id);
      req.body.updatedBy = req.params.userId;
      req.body.updatedAt = new Date();
      const result = await Payment.updateOne({ _id: req.body.id }, req.body, {
        runValidators: true
      });
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update payment, reason:- ", error);
      return res.status(400).json(error);
    }
  }
}
