import {Schema, model} from "mongoose";

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
      minlength: [4, "Company Name can not less than 4 chars"],
      maxlength: [250, "Company name can not greater than 250 chars"],
      lowercase: true,
      trim: true,
      unique: true
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
    sendTo: {
      type: String
    },
    logoUrl: String,
    logo: { data: Buffer, contentType: String },
    address: String,
    city: String,
    state: String,
    postalCode: Number,
    taxId: String,
    subscription: {
      type: String,
      enum: ["Trial", "Monthly", "Yearly"],
      default: "Trial"
    },
    subscriptionStartDate: {
      type: Date,
      default: new Date().toISOString()
    },
    subscriptionEndDate: {
      type: Date,
      default: new Date(
        new Date().setDate(new Date().getDate() + 14)
      ).toISOString()
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
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    status: {
      type: String,
      enum: ["active", "inActive"],
      default: "active"
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

export const Company = model("Company", CompanySchema);
