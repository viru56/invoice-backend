"use strict";
// containter for all environments
Object.defineProperty(exports, "__esModule", { value: true });
const environments = {
    development: {},
    production: {},
    testing: {}
};
// development environment (default)
environments.development = {
    httpPort: 3000,
    httpsPort: 3001,
    envName: 'development',
    secret: 'thisisasecret',
    mongoUrl: "mongodb://virendernehra:virendernehra@cluster0-shard-00-00-6sviv.mongodb.net:27017,cluster0-shard-00-01-6sviv.mongodb.net:27017,cluster0-shard-00-02-6sviv.mongodb.net:27017/yoga?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
};
// production environment
environments.production = {
    httpPort: 5000,
    httpsPort: 5001,
    envName: 'production',
    secret: 'thisisasecret',
    mongoUrl: "mongodb://virendernehra:virendernehra@cluster0-shard-00-00-6sviv.mongodb.net:27017,cluster0-shard-00-01-6sviv.mongodb.net:27017,cluster0-shard-00-02-6sviv.mongodb.net:27017/yoga?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
};
// testing environment
environments.testing = {
    httpPort: 1000,
    httpsPort: 1001,
    envName: 'testing',
    secret: 'thisistestingsecret',
    mongoUrl: "mongodb://virendernehra:virendernehra@cluster0-shard-00-00-6sviv.mongodb.net:27017,cluster0-shard-00-01-6sviv.mongodb.net:27017,cluster0-shard-00-02-6sviv.mongodb.net:27017/yoga?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
};
// determine which environment was passed as a command-line argument
const currentEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV : '';
//chech that the current environment is one of the environments above, if not, default to development
// export the module
exports.config = typeof (environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.development;
//# sourceMappingURL=config.js.map