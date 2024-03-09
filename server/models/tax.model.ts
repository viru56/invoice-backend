import { Schema, model} from "mongoose";

const TaxSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Tax name is required"],
      minlength: [2, "Item Name can not less than 2 chars"],
      maxlength: [250, "Item name can not greater than 250 chars"],
      lowercase: true,
      trim: true,
      unique: true
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"]
    },
    taxMode: {
      type: String,
      enum: ["Inclusive", "Exclusive"],
      default: "Exclusive"
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
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Company is required"]
    },
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

export const Tax = model("Tax", TaxSchema);
