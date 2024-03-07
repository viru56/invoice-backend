import { Request, Response } from "express";
import * as PDFDocument from "pdfkit";
import * as fs from "fs";
import * as path from "path";
import * as moment from "moment";
import { applicationData, config } from "../config";
import { mailService, logger } from "../services";
import { Invoice } from "../models";
export class InvoiceController {
  public static async sendInvoice(req: Request, res: Response) {
    try {
      // authorized user
      if (req.body.id) {
        const invoice = await Invoice.findOne({ _id: req.body.id })
          .populate("customer")
          .populate("company").lean();
        // send mail to customer
        await Invoice.updateOne({ _id: req.body.id }, { status: "Sent" });
        // invoice.mail = req.body;
        const invoiceData = {
          ...invoice,
          mail: req.body
        };
        return createInvoice(req, res, invoiceData, "mail");
      } // unauthorized user
      else {
        return createInvoice(req, res, JSON.parse(req.body.invoice), "mail");
      }
    } catch (error) {
      logger.error("falied to send invoice, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async downloadInvoice(req: Request, res: Response) {
    try {
      // authorized user
      if (req.params.id) {
        const invoice = await Invoice.findOne({ _id: req.params.id })
          .populate("customer")
          .populate("company");
        // send invoice to customer
        return createInvoice(req, res, invoice, "download");
      } // unauthorized user
      else {
        return createInvoice(req, res, JSON.parse(req.body.invoice), "download");
      }
    } catch (error) {
      console.log(error);
      logger.error("falied to download invoice, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async addInvoice(req: Request, res: Response) {
    try {
      logger.info("/invoice", "post", "addInvoice", req.params.userId);
      let taxableAmount = 0;
      let nonTaxableAmount = 0;
      req.body.subtotal = 0;
      req.body.total = 0;
      let exclusiveTax = 0;
      let inclusiveTax = 0;
      for (let item of req.body.lineItems) {
        if (item.taxable) {
          taxableAmount += item.amount;
        } else {
          nonTaxableAmount += item.amount;
        }
      }
      req.body.subtotal = taxableAmount + nonTaxableAmount;
      if (taxableAmount && req.body.taxItems && req.body.taxItems.length > 0) {
        for (let tax of req.body.taxItems) {
          if (tax.taxMode === "Exclusive") {
            exclusiveTax += Number(
              ((taxableAmount * tax.amount) / 100).toFixed(2)
            );
          } else if (tax.taxMode === "Inclusive") {
            inclusiveTax += Number(
              (
                (100 / (taxableAmount + (taxableAmount * tax.amount) / 100)) *
                taxableAmount
              ).toFixed(2)
            );
          }
        }
      }
      req.body.subtotal -= inclusiveTax;
      req.body.total = req.body.subtotal + exclusiveTax;
      if (req.body.discountType === "percentage") {
        req.body.total =
          req.body.total - (req.body.total * req.body.discountValue) / 100;
      } else if (req.body.discountType === "flat") {
        req.body.total = Number(
          (req.body.total - req.body.discountValue).toFixed(2)
        );
      }
      req.body.balanceDue = req.body.total - req.body.amountPaid;
      if (req.body.balanceDue === 0) req.body.status = "Paid";
      req.body.company = req.params.companyId;
      req.body.createdBy = req.params.userId;
      const invoice = await new Invoice(req.body).save();
      return res.status(200).json(invoice);
    } catch (error) {
      logger.error("falied to create new invoice, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static getInvoice(req: Request, res: Response) {
    try {
      logger.info("/invoice/:id", "get", "getInvoice", req.params.userId);
    } catch (error) {
      logger.error("falied to get invoice, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async getAllInvoices(req: Request, res: Response) {
    try {
      logger.info("/invoice", "get", "getAllInvoices", req.params.userId);
      const invoices = await Invoice.find({
        company: req.params.companyId,
        isDeleted: false
      });
      return res.status(200).json(invoices);
    } catch (error) {
      logger.error("falied to get all invoices, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async updateInvoice(req: Request, res: Response) {
    try {
      logger.info("/invoice", "put", "updateInvoice", req.params.userId);
      let taxableAmount = 0;
      let nonTaxableAmount = 0;
      req.body.subtotal = 0;
      req.body.total = 0;
      let exclusiveTax = 0;
      let inclusiveTax = 0;
      if (req.body.lineItems && req.body.lineItems.length > 0) {
        for (let item of req.body.lineItems) {
          if (item.taxable) {
            taxableAmount += item.amount;
          } else {
            nonTaxableAmount += item.amount;
          }
        }
        req.body.subtotal = taxableAmount + nonTaxableAmount;
      }
      if (taxableAmount && req.body.taxItems && req.body.taxItems.length > 0) {
        for (let tax of req.body.taxItems) {
          if (tax.taxMode === "Exclusive") {
            exclusiveTax += Number(
              ((taxableAmount * tax.amount) / 100).toFixed(2)
            );
          } else if (tax.taxMode === "Inclusive") {
            inclusiveTax += Number(
              (
                (100 / (taxableAmount + (taxableAmount * tax.amount) / 100)) *
                taxableAmount
              ).toFixed(2)
            );
          }
        }
      }
      req.body.total = req.body.subtotal + exclusiveTax;
      req.body.subtotal -= inclusiveTax;
      if (req.body.discountType === "percentage") {
        req.body.total =
          req.body.total - (req.body.total * req.body.discountValue) / 100;
      } else if (req.body.discountType === "flat") {
        req.body.total = Number(
          (req.body.total - req.body.discountValue).toFixed(2)
        );
      }
      req.body.balanceDue = req.body.total - req.body.amountPaid;
      if (req.body.balanceDue === 0) req.body.status = "Paid";
      req.body.company = req.params.companyId;
      req.body.updatedBy = req.params.userId;
      req.body.updatedAt = new Date();
      const result = await Invoice.updateOne({ _id: req.body.id }, req.body, {
        runValidators: true
      });
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to update invoice, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static async deleteInvoice(req: Request, res: Response) {
    try {
      logger.info("/invoice", "delete", "deleteInvoice", req.params.userId);
      const result = await Invoice.deleteOne({ _id: req.params.id });
      logger.log("invoice is deleted", req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      logger.error("falied to delete invoice, reason:- ", error);
      return res.status(400).json(error);
    }
  }
}

const createInvoice = async (
  req: Request,
  res: Response,
  invoice: any,
  invoiceType: string
) => {
  try {
    const basePath = path.join(__dirname, "../", "../");
    const normalFont = `${basePath}/fonts/XeroxSansSerifWide.ttf`;
    const boldFont = `${basePath}/fonts/XeroxSansSerifWideBold.ttf`;
    const lightColor = "#6D6D6D";
    const darkColor = "#212121";
    let lheight = 30;
    let rheight = 30;
    const ml30 = 30;
    const mr10 = 10;
    const ml330 = 330;
    let taxableAmount = 0;
    // Create a document
    const doc: PDFDocument = new PDFDocument();
    // Add an image
    // font - 'Helvetica' | 'Helvetica-Bold' | 'Helvetica-Oblique' | 'Helvetica-BoldOblique'
    doc.fontSize(10).font(boldFont);
    let file = null;
    if (req["file"]) {
      file = req["file"].buffer;
    } else if (invoice.company && invoice.company.logoUrl) {
      file = fs.existsSync(`${basePath}${invoice.company.logoUrl}`)
        ? `${basePath}${invoice.company.logoUrl}`
        : null;
    }
    if (file) {
      lheight += 70;
      doc.image(file, ml30, 15, {
        width: 150,
        height: lheight,
        align: "left",
        valign: "top"
      });
    }
    console.log('####### createInvoice #######');
    // name of company and address
    if (invoice.company) {
      console.log('🚀 ~ invoice.company:', invoice.company)
      
      doc.fillColor(darkColor).text(invoice.company.name, ml30, lheight + 25);
      lheight += 40;
      if (invoice.company.address) {
        doc
          .font(normalFont)
          .fontSize(8)
          .text(invoice.company.address, ml30, lheight, {
            align: "left"
          });
      }
      if (
        invoice.company.city &&
        invoice.company.state &&
        invoice.company.postalCode
      ) {
        lheight += 10;
        doc.text(
          `${invoice.company.city}, ${invoice.company.state} ${invoice.company.postalCode}`,
          ml30,
          lheight,
          { align: "left" }
        );
      }
      if (invoice.company.taxId) {
        lheight += 10;
        doc.text(`GSTIN: ${invoice.company.taxId}`, ml30, lheight, {
          align: "left"
        });
      }
    } else if (invoice.sender) {
      console.log('🚀 ~ invoice.sender:', invoice.sender)
      doc.fillColor(darkColor).text(invoice.sender, ml30, lheight + 25);
      lheight += 40;
    }
    //invoice name
    console.log('####### createInvoice invoice.name #######', invoice.name);
    doc
      .fontSize(32)
      .font(boldFont)
      .text(invoice.name, 0, rheight, {
        align: "right"
      });
    // invoice number
    rheight += 30;
    doc
      .fontSize(10)
      .font(normalFont)
      .fillColor(lightColor)
      .text(invoice.number, 0, rheight, { align: "right" });
    rheight += 60;
    // date
    doc
      .fontSize(12)
      .text(invoice.label ? invoice.label.date : "Date", ml330, rheight);
    doc
      .fillColor(darkColor)
      .text(moment(invoice.date).format("ll"), mr10, rheight, {
        align: "right"
      });
    rheight += 25;
    // due date
    doc
      .fillColor(lightColor)
      .text(invoice.label ? invoice.label.dueDate : "Due Date", ml330, rheight);
    doc
      .fillColor(darkColor)
      .text(moment(invoice.dueDate).format("ll"), mr10, rheight, {
        align: "right"
      });
    lheight += 20;
    // bill To
    doc
      .fillColor(lightColor)
      .text("Bill To:", ml30, lheight, { align: "left" });
    if (invoice.customer) {
      if (invoice.customer.attentionTo) {
        lheight += 20;
        doc
          .fontSize(8)
          .fillColor(darkColor)
          .text(`ATTN: ${invoice.attentionTo}`, ml30, lheight, {
            align: "left"
          });
      }
      if (invoice.customer.address_1) {
        lheight += 10;
        doc.font(normalFont).text(invoice.customer.address_1, ml30, lheight, {
          align: "left"
        });
      }
      if (invoice.customer.address_2) {
        lheight += 10;
        doc.text(invoice.customer.address_2, ml30, lheight, { align: "left" });
      }
      if (
        invoice.customer.city &&
        invoice.customer.state &&
        invoice.customer.postalCode
      ) {
        lheight += 10;
        doc.text(
          `${invoice.customer.city}, ${invoice.customer.state} ${invoice.customer.postalCode}`,
          ml30,
          lheight,
          { align: "left" }
        );
      }
      if (invoice.customer.taxId) {
        lheight += 10;
        doc.text(`GSTIN: ${invoice.customer.taxId}`, 30, lheight, {
          align: "left"
        });
      }
    } else if (invoice.receiver) {
      lheight += 20;
      doc
        .fontSize(8)
        .fillColor(darkColor)
        .text(`${invoice.receiver}`, ml30, lheight, {
          align: "left"
        });
      lheight += 60;
    }
    lheight += 30;
    // line items header
    doc
      .fillColor("#000")
      .fontSize(10)
      .text(invoice.label ? invoice.label.lineItemName : "Item", ml30, lheight);
    doc
      .fontSize(10)
      .text(
        invoice.label ? invoice.label.lineItemQuantity : "Quantity",
        ml30 + 250,
        lheight
      );
    doc
      .fontSize(10)
      .text(
        invoice.label ? invoice.label.lineItemRate : "Rate",
        ml30 + 350,
        lheight
      );
    doc
      .fontSize(10)
      .text(
        invoice.label ? invoice.label.lineItemAmount : "Amount",
        ml30 + 450,
        lheight
      );
    doc
      .rect(20, lheight - 5, 550, 20)
      .fillOpacity("0.1")
      .fillAndStroke(darkColor, lightColor);

    // line Data
    lheight += 30;

    for (let item of invoice.lineItems) {
      if (item) {
        doc
          .fillOpacity("1")
          .fillColor(darkColor)
          .fontSize(10)
          .text(item.name, ml30 - 5, lheight, { width: 250 });
        doc
          .fillColor(lightColor)
          .fontSize(10)
          .text(item.quantity, ml30 + 250, lheight);
        doc.fontSize(10).text(`Rs ${item.unitCost}`, ml30 + 350, lheight);
        doc.fontSize(10).text(`Rs ${item.amount}`, ml30 + 450, lheight);
        lheight += 20;
        if (item.taxable) {
          taxableAmount += item.amount;
        }
      }
    }

    rheight = lheight + 50;
    // subtotal
    doc
      .fontSize(12)
      .fillColor(lightColor)
      .text(
        invoice.label ? invoice.label.subtotal : "Subtotal",
        ml330,
        rheight
      );
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.subtotal}`, mr10, rheight, { align: "right" });
    rheight += 25;

    // Discount
    const discountText = invoice.label ? invoice.label.discount : "Discount";
    doc
      .fillColor(lightColor)
      .text(
        invoice.discountType === "flat"
          ? discountText
          : `${discountText}(${invoice.discountValue}%)`,
        ml330,
        rheight
      );
    doc
      .fillColor(darkColor)
      .text(
        invoice.discountType === "flat"
          ? `Rs ${invoice.discountValue}`
          : (invoice.subtotal * invoice.discountValue) / 100,
        mr10,
        rheight,
        { align: "right" }
      );
    // tax
    if (invoice.taxItems && invoice.taxItems.length > 0) {
      for (let tax of invoice.taxItems) {
        if (tax) {
          rheight += 25;
          doc
            .fillColor(lightColor)
            .text(`${tax.name}(${tax.amount}%) ${tax.taxMode}`, ml330, rheight);
          if (tax.taxMode === "Exclusive") {
            doc
              .fillColor(darkColor)
              .text(
                "Rs " + taxableAmount
                  ? ((tax.amount * taxableAmount) / 100).toFixed(2)
                  : 0,
                mr10,
                rheight,
                {
                  align: "right"
                }
              );
          } else {
            doc
              .fillColor(darkColor)
              .text(
                "Rs " + taxableAmount
                  ? (
                      (100 /
                        (taxableAmount + (taxableAmount * tax.amount) / 100)) *
                      taxableAmount
                    ).toFixed(2)
                  : 0,
                mr10,
                rheight,
                {
                  align: "right"
                }
              );
          }
        }
      }
    }
    rheight += 25;

    // shipping
    if (invoice.shipping) {
      doc
        .fillColor(lightColor)
        .text(
          invoice.label ? invoice.label.shipping : "Shipping",
          ml330,
          rheight
        );
      doc
        .fillColor(darkColor)
        .text(`Rs ${invoice.shipping}`, mr10, rheight, { align: "right" });
      rheight += 25;
    }

    // amount paid
    doc
      .fillColor(lightColor)
      .text(
        invoice.label ? invoice.label.amountPaid : "Amount Paid",
        ml330,
        rheight
      );
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.amountPaid}`, mr10, rheight, { align: "right" });
    rheight += 25;
    // total
    doc
      .fillColor(lightColor)
      .text(invoice.label ? invoice.label.total : "Total", ml330, rheight);
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.total}`, mr10, rheight, { align: "right" });
    rheight += 25;
    // balance due
    doc
      .font(boldFont)
      .fillColor(darkColor)
      .text(
        invoice.label ? invoice.label.balanceDue : "Balance Due",
        ml330,
        rheight
      );
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.balanceDue}`, mr10, rheight, { align: "right" });
    doc
      .rect(325, rheight - 5, 220, 20)
      .fillOpacity("0.1")
      .fillAndStroke(darkColor, "#999");
    lheight = rheight + 50;
    //Notes
    if (invoice.notes) {
      doc
        .font(normalFont)
        .fillOpacity("1")
        .fillColor(lightColor)
        .text(invoice.label ? invoice.label.notes : "Notes", ml30, lheight);
      lheight += 20;
      doc.fillColor(darkColor).text(invoice.notes, ml30, lheight);
      lheight += 30;
    }
    //Terms
    if (invoice.terms) {
      doc
        .fillColor(lightColor)
        .text(invoice.label ? invoice.label.terms : "Terms", ml30, lheight);
      lheight += 20;
      doc.fillColor(darkColor).text(invoice.terms, ml30, lheight);
    }

    // Pipe its output somewhere, like to a file or HTTP response
    console.log('mailing invoice');
    if (invoiceType === "mail") {
      //save pdf file
      const docStream = doc.pipe(fs.createWriteStream("invoice.pdf"));
      docStream.on("finish", () => {
        const mailOptions = {
          userName: invoice.mail.userName,
          to: invoice.mail.to,
          bcc: invoice.mail.bcc,
          subject:
            invoice.mail.subject ||
            `${applicationData.invoice.subject} ${invoice.sender ||
              invoice.company.name} ${invoice.number}`,
          text1: invoice.mail.message || applicationData.invoice.text1,
          text2: applicationData.invoice.text2,
          text3: `${applicationData.invoice.text3} ${
            invoice.company ? invoice.company.name : invoice.mail.from
          } via ${config.hostName}`,
          template: applicationData.invoice.template,
          hostName:applicationData.invoice.hostName,
          link: null,
          linkDescription: null,
          filename: "invoice.pdf"
          // userId:`http://localhost:3000/${invoice.invoiceNumber}/tracker.png`
        };
        mailService(mailOptions, info => console.log(info));
        res.status(200).json({ message: "invoice mailed" });
      });
    } else {
      res.status(200);
      res.setHeader("Content-type", "application/pdf");
      doc.pipe(res);
    }
    // Finalize PDF file
    doc.end();
  } catch (err) {
    console.log('error',err);
    return res.status(400).json(err);
  }
};
