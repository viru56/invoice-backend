import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: [true, "Company name is required"],
    minlength: [4, "First Name can not less than 4 chars"],
    maxlength: [250, "First name can not greater than 250 chars"],
    lowercase: true,
    trim: true,
    unique:true
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "not a valid email address"],
    unique: true,
    lowercase: true,
    trim: true
  },
  sendTo: {
    type: String
  },
  logoUrl: String,
  address: String,
  city: String,
  state: String,
  postalCode: Number,
  taxId: String,
  subscription: {
    type: String,
    enum: ["trial", "monthly", "yearly"],
    default: "trial"
  },
  subscriptionStartDate: {
    type: Date,
    default: new Date().toISOString()
  },
  subscriptionEndDate: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString()
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const Company = mongoose.model("Company", CompanySchema);
