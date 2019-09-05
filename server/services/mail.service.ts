"use strict";
import * as nodemailer from "nodemailer";
import * as ejs from "ejs";
import * as path from "path";
import * as fs from "fs";
import { logger } from "./logger.service";

export async function mailService(mailOptions, callback?) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "no.reply.onestopyoga",
        pass: "aA@121234"
      }
    });

    const ejsFilePath = path.join(
      __dirname,
      "../",
      "../",
      "views",
      mailOptions.template || "general-mail.ejs"
    );
    const compiled = ejs.compile(fs.readFileSync(ejsFilePath, "utf8"));
    // send mail with defined transport object
    mailOptions.html = compiled(mailOptions);
    if (mailOptions.filename) {
      mailOptions.attachments = [
        {
          filename: mailOptions.filename,
          path: path.join(__dirname, "../", "../", "invoice.pdf")
        }
      ];
    }
    const info = await transporter.sendMail(mailOptions);
    if (callback) callback(info);
    else logger.error("mail info", info);
  } catch (error) {
    if (callback) callback(error);
    else logger.error("mail error", error);
  }
}
