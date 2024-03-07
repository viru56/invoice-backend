"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const cluster = require("cluster");
const config_1 = require("./config/config");
const services_1 = require("./services");
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname + '/config/' + 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname + '/config/' + 'cert.pem'))
};
const init = () => {
    http.createServer(app_1.default).listen(config_1.config.httpPort, () => {
        services_1.logger.log('The HTTP server is running on port ' + config_1.config.httpPort + ' - ' + config_1.config.envName);
    });
    if (process.env.NODE_ENV === "production") {
        https.createServer(httpsOptions, app_1.default).listen(config_1.config.httpsPort, () => {
            console.log('\x1b[36m%s\x1b[0m', 'The HTTPS server is running on port ' + config_1.config.httpsPort + ' - ' + config_1.config.envName);
        });
    }
};
if (cluster.isMaster && process.env.START_WITH_CLUSTER) {
    // Fork workers.
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('starting a new cluster');
        cluster.fork();
    });
}
else {
    //start the sever
    init();
}
;
//# sourceMappingURL=server.js.map