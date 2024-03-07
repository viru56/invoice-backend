"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const config_1 = require("../config");
exports.hashPassword = (password) => {
    if (password && password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        return crypto
            .createHmac("sha256", config_1.config.secret)
            .update(password)
            .digest("hex");
    }
    else {
        return false;
    }
};
exports.parseUser = (user) => {
    return {
        id: user.id,
        fullName: user.fullName,
        phone: user.phone,
        email: user.email,
        status: user.status,
        role: user.role
    };
};
exports.parseItem = (item) => {
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        taxable: item.taxable,
        unitCost: item.unitCost,
        quantity: item.quantity
    };
};
exports.parseTax = (tax) => {
    return {
        id: tax.id,
        name: tax.name,
        taxMode: tax.taxMode,
        amount: tax.amount
    };
};
exports.parseCustomer = (customer) => {
    return {
        id: customer.id,
        fullName: customer.fullName,
        phone: customer.phone,
        email: customer.email,
        taxId: customer.taxId,
        accountId: customer.accountId,
        notes: customer.notes,
        attentionTo: customer.attentionTo,
        address_1: customer.address_1,
        address_2: customer.address_2,
        city: customer.city,
        state: customer.state,
        postalCode: customer.postalCode,
        country: customer.country
    };
};
//# sourceMappingURL=helper.service.js.map