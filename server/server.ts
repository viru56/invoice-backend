import app from './app';
// import https from 'https';
import http from 'node:http';
// import fs from 'fs';
// import path from 'path';
import {availableParallelism}  from 'os'
import cluster from 'cluster';
import { config } from './config/config';
import {logger} from './services';
// const httpsOptions = {
//     key: fs.readFileSync(path.join(__dirname + '/config/' + 'key.pem')),
//     cert: fs.readFileSync(path.join(__dirname + '/config/' + 'cert.pem'))
// };
const numCPUs = availableParallelism();

const init = () => {
    http.createServer(app).listen(process.env.port || config.httpPort, () => {
        logger.log('The HTTP server is running on port ' + config.httpPort + ' - ' +config.envName);
    });
    // if(process.env.NODE_ENV==="production"){
    //     https.createServer(httpsOptions, app).listen(config.httpsPort, () => {
    //         console.log('\x1b[36m%s\x1b[0m', 'The HTTPS server is running on port ' + config.httpsPort + ' - ' +config.envName);
    //     });
    // }
};

if (cluster.isPrimary  && process.env.START_WITH_CLUSTER) {
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
    });
} else {
    //start the sever
    init();
};