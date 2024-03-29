"use strict";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import fs from "fs";
import { logger } from "./logger.service";

export async function mailService(mailOptions, callback?) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASSWORD
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
    else logger.log("mail info", info);
  } catch (error) {
    if (callback) callback(error);
    else logger.error("mail error", error);
  }
}
