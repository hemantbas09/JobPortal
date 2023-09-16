import mongoose from "mongoose";
import validator from "validator";

// Defining Schema:

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["candidate", "admin", "company"],
    required: true,
  },
  status: {
    type: String,
    enum: ["blocked", "active", "pending"],
    default: "pending",
  },
  DateOfBirth: {
    type: String,
  },
  verificationToken: String,
  verificationTokenExpires: Date,
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creating a Model of schema:

const userModel = mongoose.model("user", userSchema);

export default userModel;
