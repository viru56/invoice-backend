import  { Schema, model} from "mongoose";

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Item name is required"],
      minlength: [2, "Item Name can not less than 2 chars"],
      maxlength: [500, "Item name can not greater than 500 chars"],
      lowercase: true,
      trim: true
    },
    description: {
      type: String,
      minlength: [2, "Description can not less than 2 chars"],
      maxlength: [1000, "Description can not greater than 1000 chars"],
      lowercase: true,
      trim: true
    },
    unitCost: {
      type: Number,
      required: [true, "Unit cost is required"]
    },
    taxable: Boolean,
    isDeleted: {
      type: Boolean,
      default: false
    },
    quantity:{
      type:Number,
      default:1
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    createdBy:{
        type: Schema.Types.ObjectId, ref: 'User'
    },
    updatedBy:{
      type: Schema.Types.ObjectId, ref: 'User'
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

export const Item = model("Item", ItemSchema);
