import appliedJobModel from "../Models/appliedjobModel.js";
import catchAsyncErrors from "../Middleware/catchAsyncErrors.js";
import jobModel from "../Models/jobModel.js";
import cloudinary from "../config/cloudinary.js";

class appliedjobController {
  static jobApplied = catchAsyncErrors(async (req, res, next) => {
    const { resume } = req.body;
    const userId = req.user.id;
    const jobId = req.params.id;
    const compenyId = await jobModel.findById(jobId);

    const companyId = compenyId.user;
    // Check if the user has already applied for the job
    const existingApplication = await appliedJobModel.findOne({
      candidate: userId,
      job: jobId,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    } else if (resume) {
      // upload cv:
      var myCloud = await cloudinary.uploader.upload(resume, {
        allowed_formats: ["jpeg", "jpg", "png"],
      });
      // create a new Application:
      const newApplication = new appliedJobModel({
        candidate: userId,
        job: jobId,
        company: companyId,
        resume: {
          public_id: myCloud.public_id,
          url: myCloud.url,
        },
      });

      // for saving the application
      await newApplication.save();
      res.status(200).json({
        success: true,
        message: "Job application submitted successfully",
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Please Upload the Resume",
      });
    }
  });

  // get applied job by the Compeny Id:
  static getAppliedJobByCompany = catchAsyncErrors(async (req, res, next) => {
    const appliedapplicants = await appliedJobModel
      .find({ company: req.user.id })
      .populate({
        path: "candidate",
        model: "user",
        select: "fullName",
      })
      .populate({
        path: "job",
        model: "job",
        select: "jobTitle",
      });

    console.log(appliedapplicants);

    // Check if appliedapplicants are found
    if (!appliedapplicants || appliedapplicants.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No applicants found for this job",
      });
    }

    res.status(200).json({
      success: true,
      appliedapplicants,
      message: "Successfully found the applied applicants",
    });
  });

  static acceptJob = catchAsyncErrors(async (req, res, next) => {
    const appliedJobId = req.body.id;

    const appliedJob = await appliedJobModel.findByIdAndUpdate(
      appliedJobId,
      { status: "accepted" },
      { new: true }
    );

    if (!appliedJob) {
      return res.status(404).json({ message: "Applied job not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job accepted successfully",
    });
  });

  static rejectJob = catchAsyncErrors(async (req, res, next) => {
    const appliedJobId = req.body.id;

    const appliedJob = await appliedJobModel.findByIdAndUpdate(
      appliedJobId,
      { status: "rejected" },
      { new: true }
    );

    if (!appliedJob) {
      return res.status(404).json({ message: "Applied job not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job rejected successfully",
    });
  });

  static deleteJob = catchAsyncErrors(async (req, res, next) => {
    const appliedJobId = req.body.id;
    const deletedJob = await appliedJobModel.findByIdAndDelete(appliedJobId);
    if (!deletedJob) {
      return res.status(404).json({ message: "Applied job not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  });

  static getAllAppliedJobs = catchAsyncErrors(async (req, res, next) => {
    const appliedapplicants = await appliedJobModel
      .find()
      .populate({
        path: "company",
        model: "user",
        select: "fullName",
      })
      .populate({
        path: "job",
        model: "job",
        select: "jobTitle",
      });

    console.log(appliedapplicants);

    // Check if appliedapplicants are found
    if (!appliedapplicants || appliedapplicants.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No applicants found",
      });
    }

    res.status(200).json({
      success: true,
      appliedapplicants,
      message: "Successfully found the applied applicants",
    });
  });
}
export default appliedjobController;
