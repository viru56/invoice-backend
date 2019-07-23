"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes_1 = require("./routes");
const config_1 = require("./config/config");
const services_1 = require("./services");
class App {
    constructor() {
        this.routes = new routes_1.Routes();
        //public mongoUrl: string = 'mongodb://localhost:27017/yoga';
        this.mongoUrl = config_1.config.mongoUrl;
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routes.routes(this.app);
    }
    config() {
        //support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true }, (err) => {
            if (err) {
                services_1.logger.error("failed to connect to mongodb", this.mongoUrl);
            }
            else {
                services_1.logger.log("connected to mongodb...:)");
            }
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map