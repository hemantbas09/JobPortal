import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  firstName: String,
  email: String,
  phoneNumber: String,
  address: {
    country: String,
    state: String,
    city: String,
    postalCode: String,
  },
  github: String,
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
  },
});

const CompanyProfile = mongoose.model("companyProfile", companySchema);

export default CompanyProfile;
