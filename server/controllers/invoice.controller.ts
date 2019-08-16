import { Request, Response } from "express";
import * as PDFDocument from "pdfkit";
import * as fs from "fs";
import * as path from "path";
import * as moment from "moment";
import { applicationData } from "../config";
import { mailService, logger } from "../services";
export class InvoiceController {
  public static sendInvocie(req: Request, res: Response) {
    createInvoce(req, res, "mail");
  }
  public static downloadInvoice(req: Request, res: Response) {
    createInvoce(req, res, "download");
  }
  public static async addInvoice(req: Request, res: Response) {
    try {
      logger.info("/invoice", "post", "addInvoice", req.body.name);
      
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
  public static getAllInvoices(req: Request, res: Response) {
    try {
      logger.info("/invoice", "get", "getAllInvoices", req.params.userId);
    } catch (error) {
      logger.error("falied to get all invoices, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static updateInvoice(req: Request, res: Response) {
    try {
      logger.info("/invoice", "put", "updateInvoice", req.params.userId);
    } catch (error) {
      logger.error("falied to update invoice, reason:- ", error);
      return res.status(400).json(error);
    }
  }
  public static deleteInvoice(req: Request, res: Response) {
    try {
      logger.info("/invoice", "delete", "deleteInvoice", req.params.userId);
    } catch (error) {
      logger.error("falied to delete invoice, reason:- ", error);
      return res.status(400).json(error);
    }
  }
}

const createInvoce = async (
  req: Request,
  res: Response,
  invoiceType: string
) => {
  try {
    const invoice = JSON.parse(req.body.invoice);
    // console.log(invoice);
    const normalFont = path.join(
      __dirname,
      "../",
      "fonts",
      "XeroxSansSerifWide.ttf"
    );
    const boldFont = path.join(
      __dirname,
      "../",
      "fonts",
      "XeroxSansSerifWideBold.ttf"
    );
    const lightColor = "#6D6D6D";
    const darkColor = "#212121";
    let lheight = 100;
    let rheight = 30;
    const ml30 = 30;
    const mr10 = 10;
    const ml350 = 350;
    // Create a document
    const doc: PDFDocument = new PDFDocument();
    // Add an image
    // font - 'Helvetica' | 'Helvetica-Bold' | 'Helvetica-Oblique' | 'Helvetica-BoldOblique'
    doc.fontSize(10).font(boldFont);
    doc
      .image(req["file"].buffer, ml30, 15, {
        width: 150,
        height: lheight,
        align: "left",
        valign: "top"
      })
      // name of company and address
      .fillColor(darkColor)
      .text(invoice.sender, ml30, lheight + 25);
    lheight += 40;
    // doc.font(normalFont).fontSize(8).text("#203/hoorian arcade, kempana main road", ml30, lheight, {
    //   align: "left"
    // });
    // lheight += 10;
    // doc.text("vignana nagar, malleshpalya", ml30, lheight, { align: "left" });
    // lheight += 10;
    // doc.text("Bengaluru, Karnataka 560075", ml30, lheight, { align: "left" });
    // lheight += 10;
    // doc.text("GSTIN: 45345345", ml30, lheight, { align: "left" });
    //invoice name
    doc
      .fontSize(32)
      .font(boldFont)
      .text(invoice.invoiceName, 0, rheight, {
        align: "right"
      });
    // invoice number
    rheight += 30;
    doc
      .fontSize(10)
      .font(normalFont)
      .fillColor(lightColor)
      .text(invoice.invoiceNumber, 0, rheight, { align: "right" });
    rheight += 60;
    // date
    doc.fontSize(12).text(invoice.label.date, ml350, rheight);
    doc
      .fillColor(darkColor)
      .text(moment(invoice.date).format("ll"), mr10, rheight, {
        align: "right"
      });
    rheight += 25;
    // due date
    doc.fillColor(lightColor).text(invoice.label.dueDate, ml350, rheight);
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
    lheight += 20;
    // doc
    //   .fontSize(8)
    //   .fillColor(darkColor)
    //   .text("ATTN: virender", ml30, lheight, { align: "left" });
    lheight += 10;
    doc.font(boldFont).text(invoice.receiver, ml30, lheight, { align: "left" });
    //   lheight += 10;
    // doc
    //   .font(normalFont)
    //   .text("#203/hoorian arcade, kempana main road", ml30, lheight, {
    //     align: "left"
    //   });
    //   lheight += 10;
    // doc.text("vignana nagar, malleshpalya", ml30, lheight, { align: "left" });
    // lheight += 10;
    // doc.text("Bengaluru, Karnataka 560075", ml30, lheight, { align: "left" });
    // lheight += 10;
    // doc.text("GSTIN: 45345345", 30, lheight, { align: "left" });
    lheight += 30;
    // line items header
    doc
      .fillColor("#000")
      .fontSize(10)
      .text(invoice.label.lineItemName, ml30, lheight);
    doc.fontSize(10).text(invoice.label.lineItemQuantity, ml30 + 250, lheight);
    doc.fontSize(10).text(invoice.label.lineItemRate, ml30 + 350, lheight);
    doc.fontSize(10).text(invoice.label.lineItemAmount, ml30 + 450, lheight);
    doc
      .rect(20, lheight - 5, 550, 20)
      .fillOpacity("0.1")
      .fillAndStroke(darkColor, lightColor);

    // line Data -1
    lheight += 30;

    for (let item of invoice.lineItem) {
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
        doc.fontSize(10).text(`Rs ${item.rate}`, ml30 + 350, lheight);
        doc.fontSize(10).text(`Rs ${item.amount}`, ml30 + 450, lheight);
        lheight += 20;
      }
    }

    rheight = lheight + 50;
    // subtotal
    doc
      .fontSize(12)
      .fillColor(lightColor)
      .text(`${invoice.label.subtotal}:`, ml350, rheight);
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.subtotal}`, mr10, rheight, { align: "right" });
    rheight += 25;

    // Discount
    doc
      .fillColor(lightColor)
      .text(
        invoice.discount.type == "flat"
          ? invoice.label.discount
          : `${invoice.label.discount}(${invoice.discount.value}%):`,
        ml350,
        rheight
      );
    doc
      .fillColor(darkColor)
      .text(
        invoice.discount.type == "flat"
          ? `Rs ${invoice.discount.value}`
          : (invoice.subtotal * invoice.discount.value) / 100,
        mr10,
        rheight,
        { align: "right" }
      );
    rheight += 25;
    // tax
    doc
      .fillColor(lightColor)
      .text(`${invoice.label.tax}(${invoice.tax[0].amount}%)`, ml350, rheight);
    doc
      .fillColor(darkColor)
      .text(
        "Rs " + (invoice.tax[0].amount * invoice.subtotal) / 100,
        mr10,
        rheight,
        { align: "right" }
      );
    rheight += 25;

    // shipping
    doc
      .fillColor(lightColor)
      .text(`${invoice.label.shipping}:`, ml350, rheight);
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.shipping}`, mr10, rheight, { align: "right" });
    rheight += 25;

    // amount paid
    doc
      .fillColor(lightColor)
      .text(`${invoice.label.amountPaid}:`, ml350, rheight);
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.amountPaid}`, mr10, rheight, { align: "right" });
    rheight += 25;
    // total
    doc.fillColor(lightColor).text(`${invoice.label.total}:`, ml350, rheight);
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.total}`, mr10, rheight, { align: "right" });
    rheight += 25;
    // balance due
    doc
      .font(boldFont)
      .fillColor(darkColor)
      .text(`${invoice.label.balanceDue}:`, ml350, rheight);
    doc
      .fillColor(darkColor)
      .text(`Rs ${invoice.balanceDue}`, mr10, rheight, { align: "right" });
    doc
      .rect(345, rheight - 5, 200, 20)
      .fillOpacity("0.1")
      .fillAndStroke(darkColor, "#999");
    lheight = rheight + 50;
    //Notes
    doc
      .font(normalFont)
      .fillOpacity("1")
      .fillColor(lightColor)
      .text(`${invoice.label.notes}:`, ml30, lheight);
    lheight += 20;
    doc.fillColor(darkColor).text(invoice.notes, ml30, lheight);
    lheight += 30;
    //Terms
    doc.fillColor(lightColor).text(`${invoice.label.terms}:`, ml30, lheight);
    lheight += 20;
    doc.fillColor(darkColor).text(invoice.terms, ml30, lheight);

    // Pipe its output somewhere, like to a file or HTTP response
    if (invoiceType === "mail") {
      //save pdf file
      const docStream = doc.pipe(fs.createWriteStream("invoice.pdf"));
      docStream.on("finish", () => {
        const mailOptions = {
          userName: invoice.receiver,
          to: invoice.mail.receiver,
          subject: `${applicationData.invoiceDemo.subject} ${invoice.sender} ${
            invoice.invoiceNumber
          }`,
          text1: invoice.mail.message || applicationData.invoiceDemo.text1,
          text2: applicationData.invoiceDemo.text2,
          text3: `${applicationData.invoiceDemo.text3} ${invoice.mail.sender} via indi-invoice.com`,
          template: applicationData.invoiceDemo.template,
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
    console.log(err);
  }
};
