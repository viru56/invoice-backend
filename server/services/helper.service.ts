import * as crypto from "crypto";
import { config } from "../config";
export const hashPassword = (password: string) => {
  if (password && password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    return crypto
      .createHmac("sha256", config.secret)
      .update(password)
      .digest("hex");
  } else {
    return false;
  }
};

export const parseUser = (user: any) => {
  return {
    id: user.id,
    fullName: user.fullName,
    phone: user.phone,
    email: user.email
  };
};

export const parseItem = (item: any) => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    taxable: item.taxable,
    unitCost: item.unitCost
  };
};
