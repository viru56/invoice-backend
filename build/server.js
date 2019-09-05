"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const cluster = require("cluster");
const config_1 = require("./config/config");
const services_1 = require("./services");
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '../', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../', 'cert.pem'))
};
const init = () => {
    http.createServer(app_1.default).listen(process.env.port || config_1.config.httpPort, () => {
        services_1.logger.log('The HTTP server is running on port ' + config_1.config.httpPort + ' - ' + config_1.config.envName);
    });
    // if(process.env.NODE_ENV==="production"){
    //     https.createServer(httpsOptions, app).listen(config.httpsPort, () => {
    //         console.log('\x1b[36m%s\x1b[0m', 'The HTTPS server is running on port ' + config.httpsPort + ' - ' +config.envName);
    //     });
    // }
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