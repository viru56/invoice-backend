import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

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
      type: Schema.ObjectId,
      ref: "User"
    },
    updatedBy: {
      type: Schema.ObjectId,
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

export const Tax = mongoose.model("Tax", TaxSchema);
