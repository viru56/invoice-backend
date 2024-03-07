import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"]
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
    createdBy: {
      type: Schema.ObjectId,
      ref: "User"
    },
    receiveDate:{
      type:Date,
      default: Date.now
    },
    updatedBy: {
      type: Schema.ObjectId,
      ref: "User"
    },
    company: {
      type: Schema.ObjectId,
      ref: "Company"
    },
    invoice: {
      type: Schema.ObjectId,
      ref: "Invoice"
    },
    customer: {
      type: Schema.ObjectId,
      ref: "Customer"
    },
    txnid: {
      type: String,
      unique: true,
      required: [true, "Tax id is required"]
    },
    bank_ref_num: String,
    additional_charges: Number,
    mode: String,
    discount: Number,
    paymentFor: {
      type: String,
      enum: ["subscription", "invoice"],
      default: "subscription"
    },
    notes: String
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

export const Payment = mongoose.model("Payment", PaymentSchema);
