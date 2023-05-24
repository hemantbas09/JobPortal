import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, "Please Enter Job Title"],
    trim: true,
  },
  jobDescription: {
    type: String,
    required: [true, "Please Enter Job Description"],
  },
  KeyResponsibilities: {
    type: String,
    required: [true, "Please Enter Key Responsiblity of the EMployee"],
  },
  requiredSkill: {
    type: String,
    required: [true, "Please Enter Required skill for the Eligiable Candidate"],
  },
  jobCategory: {
    type: String,
    required: [true, "Please Enter Job Category"],
  },
  jobType: {
    type: String,
    required: [true, "Please Enter Job Type"],
  },

  minSalary: {
    type: String,
    required: [true, "Please Enter Product Price"],
  },
  gender: {
    type: String,
    required: [true, "Please Enter Your Gender"],
    default: "both",
  },

  experience: {
    type: String,
    required: [true, "Please Enter Experience"],
  },
  location: {
    type: String,
    required: [true, "Please Enter Company Location"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  deadlineDate: {
    type: Date,
    required: true,
  },
  forEnquiry: {
    type: String,
    required: [true, "Please Enter Enquiry Contact Number"],
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const jobModel = mongoose.model("job", jobSchema);

export default jobModel;
