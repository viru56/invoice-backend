import { Request, Response } from "express";
import * as PDFDocument from "pdfkit";
import * as fs from "fs";
import * as path from "path";
export class InvoiceController {
  public static createInvocie(req: Request, res: Response) {
    try {
      const normalFont = path.join(__dirname,'../','fonts','XeroxSansSerifWide.ttf');
      const boldFont = path.join(__dirname,'../','fonts','XeroxSansSerifWideBold.ttf');
      const lightColor="#808080";
      const darkColor ="#303030";
      // Create a document
      const doc: PDFDocument = new PDFDocument();
      //save pdf file
      // doc.pipe(fs.createWriteStream("invoice.pdf"));
      // Add an image
      // font - 'Helvetica' | 'Helvetica-Bold' | 'Helvetica-Oblique' | 'Helvetica-BoldOblique'
      console.log(__dirname);
      doc.fontSize(10).font(boldFont);
      doc
        .image(req["file"].buffer, 30, 15, {
          width: 150,
          height: 100,
          align: "left",
          valign: "top"
        })
        // name of company and address
        .fillColor(darkColor)
        .text("Nehra", 30, 125);
      doc.font(normalFont).fontSize(8).text("#203/hoorian arcade, kempana main road", 30, 140, {
        align: "left"
      });
      doc.text("vignana nagar, malleshpalya", 30, 150, { align: "left" });
      doc.text("Bengaluru, Karnataka 560075", 30, 160, { align: "left" });
      doc.text("GSTIN: 45345345", 30, 170, { align: "left" });
      //invoice name
      doc.fontSize(32).font(boldFont).text("INVOICE", 0, 30, {
        align: "right"
      });
      // invoice number
      doc
        .fontSize(10).font(normalFont)
        .fillColor(lightColor)
        .text("#5452234", 0, 60, { align: "right" });
      // date
      doc.fontSize(12).text("Date:", 350, 120);
      doc.fillColor(darkColor).text("Jul 10,1989", 10, 120, { align: "right" });
      // due date
      doc.fillColor(lightColor).text("Due date:", 350, 140);
      doc.fillColor(darkColor).text("Jul 10,1989", 10, 140, { align: "right" });

      // bill To
      doc.fillColor(lightColor).text("Bill To:", 30, 190, { align: "left" });
      doc
        .fontSize(8)
        .fillColor(darkColor)
        .text("ATTN: virender", 30, 210, { align: "left" });
      doc
        .font(boldFont)
        .text("nehra pvt. ltd", 30, 220, { align: "left" });
      doc
        .font(normalFont)
        .text("#203/hoorian arcade, kempana main road", 30, 230, {
          align: "left"
        });
      doc.text("vignana nagar, malleshpalya", 30, 240, { align: "left" });
      doc.text("Bengaluru, Karnataka 560075", 30, 250, { align: "left" });
      doc.text("GSTIN: 45345345", 30, 260, { align: "left" });
      // line items header
      doc
        .fillColor("#000")
        .fontSize(10)
        .text("Item", 30, 290);
      doc.fontSize(10).text("Quantity", 280, 290);
      doc.fontSize(10).text("Rate", 380, 290);
      doc.fontSize(10).text("Amount", 480, 290);
      doc
        .rect(20, 285, 550, 20)
        .fillOpacity("0.1")
        .fillAndStroke(darkColor, lightColor);

      // line Data -1
      doc
        .fillOpacity("1")
        .fillColor(darkColor)
        .fontSize(10)
        .text("this is test item name ", 25, 310, { width: 250 });
      doc.fontSize(10).text("5", 290, 310);
      doc.fontSize(10).text("Rs 1000", 380, 310);
      doc.fontSize(10).text("Rs 5000", 480, 310);
      // line Data -1
      doc
        .fillOpacity("1")
        .fillColor(darkColor)
        .fontSize(10)
        .text("this is test item name ", 25, 330, { width: 250 });
      doc.fontSize(10).text("5", 290, 330);
      doc.fontSize(10).text("Rs 1000", 380, 330);
      doc.fontSize(10).text("Rs 5000", 480, 330);

      // subtotal
      doc .fontSize(12).fillColor(lightColor).text("Subtotal:", 350, 400);
      doc.fillColor(darkColor).text("Rs 10000", 10, 400, { align: "right" });

      // Discount
      doc.fillColor(lightColor).text("Discount(10%):", 350, 425);
      doc.fillColor(darkColor).text("Rs 500", 10, 425, { align: "right" });

      // tax
      doc.fillColor(lightColor).text("Tax(5%):", 350, 450);
      doc.fillColor(darkColor).text("Rs 250", 10, 450, { align: "right" });

      // shipping
      doc.fillColor(lightColor).text("Shipping:", 350, 475);
      doc.fillColor(darkColor).text("Rs 100", 10, 475, { align: "right" });

      // amount paid
      doc.fillColor(lightColor).text("Amount Paid:", 350, 500);
      doc.fillColor(darkColor).text("Rs 0", 10, 500, { align: "right" });

      // total
      doc.fillColor(lightColor).text("Total:", 350, 525);
      doc.fillColor(darkColor).text("Rs 4150", 10, 525, { align: "right" });

      // balance due
      doc.font(boldFont).fillColor(darkColor).text("Balance Due:", 350, 550);
      doc.fillColor(darkColor).text("Rs 4150", 10, 550, { align: "right" });
      doc
      .rect(345, 545, 200, 20)
      .fillOpacity("0.1")
      .fillAndStroke(darkColor, "#999");
      //Notes
      doc.font(normalFont).fillOpacity("1").fillColor(lightColor).text("Notes:", 30, 600);
      doc.fillColor(darkColor).text("these are notes", 30, 620);

      //Terms
      doc.fillColor(lightColor).text("Terms:", 30, 650);
      doc.fillColor(darkColor).text("these are terms", 30, 670);

      // Pipe its output somewhere, like to a file or HTTP response
      res.status(200);
      res.setHeader("Content-type", "application/pdf");
      doc.pipe(res);
      // Finalize PDF file
      doc.end();
      // res.status(200).json({
      //   filename: req["file"].originalname,
      //   size: Math.floor(req["file"].size / 1000) + "kb"
      // });
    } catch (err) {
      console.log(err);
    }
  }
}