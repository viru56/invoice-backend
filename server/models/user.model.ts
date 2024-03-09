import { Schema, model} from "mongoose";
import { hashPassword } from "../services";

const UserSchema = new Schema(
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
    company: {
      type:Schema.Types.ObjectId,
      ref: "Company"
    },
    password: String,
    isDeleted: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      enum: ["active", "inActive"],
      default: "inActive"
    },
    role: {
      type: String,
      enum: ["admin", "employee", "readOnly"],
      default: "admin"
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
      type:Schema.Types.ObjectId,
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

UserSchema.pre("validate", function() {
  this.password = hashPassword(this.password);
});

export const User = model("User", UserSchema);
