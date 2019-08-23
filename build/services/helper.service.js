"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const config_1 = require("../config/config");
const jwt = require("jsonwebtoken");
const expiresIn = 60 * 60 * 1000 * 24;
exports.hashPassword = (password) => {
    if (password && password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        return crypto.createHmac('sha256', config_1.config.secret).update(password).digest('hex');
    }
    else {
        return false;
    }
};
exports.parseUser = (user) => {
    return {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email
    };
};
exports.jwtToken = (payload) => {
    var data = {
        aud: payload.id,
        role: payload.role || 'user',
        iss: 'www.onestopyoga.com',
        type: payload.type || 'login',
        email: payload.email || 'Unknown'
    };
    return jwt.sign(data, config_1.config.secret, { expiresIn });
};
exports.validateToken = (req, res, next) => {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config_1.config.secret, function (err, decoded) {
            if (err) {
                if (err.name = 'TokenExpiredError') {
                    return res.status(403).json({ message: 'Token is expired' });
                }
                return res.status(403).json({ message: 'Failed to authenticate token.' });
            }
            else {
                if (decoded.type !== 'login') {
                    return res.status(403).json({ message: 'Not a valid token' });
                }
                // if everything is good, save to request for use in other routes
                req.params.id = decoded.aud;
                req.params.email = decoded.email;
                next();
            }
        });
    }
    else {
        // if there is no token
        // return an error
        return res.status(403).send({
            message: 'No token provided.'
        });
    }
};
exports.validateAdminToken = (req, res, next) => {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config_1.config.secret, function (err, decoded) {
            if (err) {
                if (err.name = 'TokenExpiredError') {
                    return res.status(403).json({ message: 'Token is expired' });
                }
                return res.status(403).json({ message: 'Failed to authenticate token.' });
            }
            else {
                if (decoded.role !== 'admin') {
                    return res.status(403).json({ message: 'Failed to authenticate token.' });
                }
                // if everything is good, save to request for use in other routes
                req.params.id = decoded.aud;
                req.params.email = decoded.email;
                next();
            }
        });
    }
    else {
        // if there is no token
        // return an error
        return res.status(403).send({
            message: 'No token provided.'
        });
    }
};
exports.validateActivationToken = (req, res, next) => {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config_1.config.secret, function (err, decoded) {
            if (err) {
                if (err.name = 'TokenExpiredError') {
                    return res.status(403).json({ message: 'Token is expired' });
                }
                return res.status(403).json({ message: 'Failed to authenticate token.' });
            }
            else {
                if (decoded.type !== 'activation') {
                    return res.status(403).json({ message: 'not a valid token' });
                }
                // if everything is good, save to request for use in other routes
                req.params.id = decoded.aud;
                req.params.email = decoded.email;
                next();
            }
        });
    }
    else {
        // if there is no token
        // return an error
        return res.status(403).send({
            message: 'No token provided.'
        });
    }
};
exports.validateForgotPasswordToken = (req, res, next) => {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config_1.config.secret, function (err, decoded) {
            if (err) {
                if (err.name = 'TokenExpiredError') {
                    return res.status(403).json({ message: 'Token is expired' });
                }
                return res.status(403).json({ message: 'Failed to authenticate token.' });
            }
            else {
                if (decoded.type !== 'forgot') {
                    return res.status(403).json({ message: 'not a valid token' });
                }
                // if everything is good, save to request for use in other routes
                req.params.id = decoded.aud;
                req.params.email = decoded.email;
                next();
            }
        });
    }
    else {
        // if there is no token
        // return an error
        return res.status(403).send({
            message: 'No token provided.'
        });
    }
};
//# sourceMappingURL=helper.service.js.map