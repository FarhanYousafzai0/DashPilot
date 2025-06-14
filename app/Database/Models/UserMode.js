import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    role: {
      type: Boolean,
      default: false, 
    },

    status: {
      type: Boolean,
      default: true, 
    },
  },
  {
    timestamps: true,
  }
);


export const User = mongoose.models.User || mongoose.model("User", UserSchema);
