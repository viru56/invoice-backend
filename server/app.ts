import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import 'dotenv/config';
import { Routes } from "./routes";
import { config } from "./config";
import { logger } from "./services";
class App {
  public app: express.Application;
  public mongoUrl: string = config.mongoUrl;
  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    Routes.routes(this.app);
  }
  private config(): void {
    //support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
    // support for html
    const options = {
      dotfiles: "ignore",
      etag: false,
      extensions: ["htm", "html", "css", "png", "jpg"],
      index: false,
      maxAge: "1d",
      redirect: false,
      setHeaders: function(res) {
        res.set("x-timestamp", Date.now());
      }
    };
    // for css files
    this.app.use(express.static(path.join(__dirname, "../client"), options));
    // for images
    this.app.use("/uploads",express.static(path.join(__dirname, "../uploads")));
  }
  private async mongoSetup(): Promise<void> {
    try {
      // mongoose.Promise = global.Promise;
      mongoose.set('strictQuery', true)
      await mongoose.connect(this.mongoUrl);
      logger.log("connected to mongodb...");
    } catch (error) {
      logger.error("mongo connection error, reason:- ", error.toString());
    }
  }
}

export default new App().app;
