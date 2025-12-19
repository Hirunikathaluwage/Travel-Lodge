import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      unique: true,
    },

    role: {
      type: String,
      enum: ["Admin", "guest", "Staff"],
      default: "guest",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
