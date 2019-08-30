import { Request, Response } from "express";
import { logger, parseItem } from "../services";
import { Payment, Invoice, Company } from "../models";
import { braintreeGateway } from "../services";
import { config } from "../config";
import * as moment from "moment";
export class PaymentController {
  public static async addPayment(req: Request, res: Response) {
    try {
      logger.info("/payment", "post", "addPayment", req.params.companyId);
      req.body.createdBy = req.params.userId;
      req.body.company = req.params.companyId;
      const payment = await new Payment(req.body).save();
      if (req.body.paymentFor && req.body.paymentFor === "invoice") {
        req.body.notes = null;
        const invoice = await Invoice.findOne({
          _id: req.body.invoice,
          isDeleted: false
        });
        invoice.balanceDue -= req.body.amount;
        invoice.amountPaid += req.body.amount;
        await invoice.save();
        return res.status(200).json({
          id: req.body.invoice,
          amountPaid: invoice.amountPaid,
          balanceDue: invoice.balanceDue
        });
      } else if (
        req.body.paymentFor &&
        req.body.paymentFor === "subscription"
      ) {
        const company = await Company.findOne({
          _id: req.params.companyId,
          isDeleted: false
        });
        company.subscriptionEndDate =
          req.body.subscription.toLowerCase() === "monthly"
            ? moment(company.subscriptionEndDate).add(1, "M")
            : moment(company.subscriptionEndDate).add(1, "y");
        await company.save();
        return res
          .status(200)
          .json({
            id: company.id,
            subscriptionEndDate: company.subscriptionEndDate,
            subscription:company.subscription
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
  public static async paymentToken(req: Request, res: Response) {
    try {
      logger.info("/paymentToken", "get", "paymentToken", req.params.userId);
      // const result = await braintreeGateway.clientToken.generate({});
      return res.status(200).json(config.tokenizationKeys);
    } catch (error) {
      logger.error("falied to generate token, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async checkout(req: Request, res: Response) {
    try {
      logger.info("/payment/checkout", "post", "checkout", req.params.userId);
      req.body.amount =
        req.body.subscription.toLowerCase() === "monthly" ? 1000 : 10000;
      const result = await braintreeGateway.transaction.sale({
        amount: req.body.amount,
        paymentMethodNonce: req.body.nonce,
        options: {
          submitForSettlement: true
        }
      });
      if (result.success || result.transaction) {
        req.body.txnid = result.transaction.id;
        return PaymentController.addPayment(req, res);
      } else {
        return res.status(400).json(result.errors.deepErrors());
      }
    } catch (error) {
      console.log(error);
      logger.error("falied to checkout, reason:- ", error);
      return res.status(400).json(error);
    }
  }
}
