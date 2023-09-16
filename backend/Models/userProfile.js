import mongoose from "mongoose";

// Define the profile schema
const profileSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  dateOfBirth: { type: Date },
  address: {
    country: { type: String },
    state: { type: String },
    city: { type: String },
    postalCode: { type: String },
  },
  details: {
    type: String,
  },
  role: {
    type: String,
  },

  skills: [{ type: String }],
  github: { type: String },
  profilePicture: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  coverPicture: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
});

// Create and export the Profile model
const userProfileModel = mongoose.model("Profile", profileSchema);
export default userProfileModel;
