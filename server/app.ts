import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Routes } from "./routes";
import { config } from "./config";
import { logger } from "./services";
class App {
  public app: express.Application;
  //public mongoUrl: string = 'mongodb://localhost:27017/yoga';
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
      extensions: ["htm", "html", "css"],
      index: false,
      maxAge: "1d",
      redirect: false,
      setHeaders: function(res, path, stat) {
        res.set("x-timestamp", Date.now());
      }
    };
    this.app.use(express.static("client", options));
  }
  private async mongoSetup(): Promise<void> {
    try {
      // mongoose.Promise = global.Promise;
      await mongoose.connect(this.mongoUrl, {
        useNewUrlParser: true
      });
      logger.log("connected to mongodb...:)");
    } catch (error) {
      logger.error("mongo connection error, reason:- ", error.toString());
    }
  }
    
}

export default new App().app;
