import mongoose from "mongoose";

// Define the profile schema
const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  address: {
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  workExperience: [
    {
      company: { type: String, required: true },
      jobTitle: { type: String, required: true },
      joinDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
    },
  ],
  skills: [{ type: String }],
  github: { type: String },
});

// Create and export the Profile model
const userProfileModel= mongoose.model("Profile", profileSchema);
export default userProfileModel;