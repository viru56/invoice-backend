import * as crypto from "crypto";
import { config } from "../config";
export const hashPassword = (password: string) => {
  if (password && password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    return crypto
      .createHmac("sha256", config.secret)
      .update(password)
      .digest("hex");
  } else {
    return '';
  }
};

export const parseUser = (user: any) => {
  return {
    id: user.id,
    fullName: user.fullName,
    phone: user.phone,
    email: user.email,
    status: user.status,
    role: user.role
  };
};

export const parseItem = (item: any) => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    taxable: item.taxable,
    unitCost: item.unitCost,
    quantity:item.quantity
  };
};

export const parseTax = (tax: any) => {
  return {
    id: tax.id,
    name: tax.name,
    taxMode: tax.taxMode,
    amount: tax.amount
  };
};

export const parseCustomer = (customer: any) => {
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
