import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Invoice name is required"],
      minlength: [2, "Invoice name can not less than 2 chars"],
      maxlength: [250, "Invoice name can not greater than 250 chars"],
      lowercase: true,
      trim: true
    },
    number: { type: String, required: [true, "Invoice number is required"] },
    date: { type: Date, required: [true, "Date is required"] },
    dueDate: { type: Date, required: [true, "Due date is required"] },
    lineItems: { type: Array, required: [true, "Line items are required"] },
    discountType: {
      type: String,
      enum: ["flat", "percentage"]
    },
    discountValue: Number,
    taxItems: Array,
    amountPaid: { type: Number, default: 0 },
    subtotal: Number,
    total: Number,
    shipping: Number,
    balanceDue: Number,
    notes: String,
    terms: String,
    isDeleted: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date
    },
    createdBy: {
      type: Schema.ObjectId,
      ref: "User",
      required: [true, "CreatedBy is required"]
    },
    updatedBy: {
      type: Schema.ObjectId,
      ref: "User"
    },
    company: {
      type: Schema.ObjectId,
      ref: "Company",
      required: [true, "Company is required"]
    },
    customer: {
      type: Schema.ObjectId,
      ref: "Customer",
      required: [true, "Customer is required"]
    },
    status:{
      type:String,
      enum:["Draft", "Sent", "Paid", "Outstanding"],
      default:"Draft"
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

export const Invoice = mongoose.model("Invoice", InvoiceSchema);
