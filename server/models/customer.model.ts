import {Schema, model} from "mongoose";

export const CustomerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "name is required"],
      minlength: [2, "name can not less than 2 chars"],
      maxlength: [250, "name can not greater than 250 chars"],
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      match: [/^[0-9]{10}$/, "phone should have 10 digits only"]
    },
    email: {
      type: String,
      required: [true, "email is required"],
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "not a valid email address"
      ],
      unique: true,
      lowercase: true,
      trim: true
    },
    taxId: String,
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Company is required"]
    },
    accountId: Number, //auto increment field
    notes: String,
    attentionTo: String,
    address_1: String,
    address_2: String,
    city: String,
    state: String,
    postalCode: Number,
    country: String,
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
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      transform: function(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      }
    }
  }
);
export const Customer = model("Customer", CustomerSchema);
