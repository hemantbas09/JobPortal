import jobModel from "../Models/jobModel.js";
import quizQuestionModel from "../Models/quizQuestion.js";
import * as cron from "node-cron";
import catchAsyncErrors from "../Middleware/catchAsyncErrors.js";

class jobController {
  // post a new Job
  static jobCreate = catchAsyncErrors(async (req, res, next) => {
    // for store the user information:
    // req.body.user = req.user;
    req.body.user = req.user.id;
    console.log("This is request user", req.body);

    // creating a object or instace of the JobModal:
    const job = new jobModel(req.body);

    // save in the database
    await job.save();

    // for the response:
    res.status(201).json({
      success: true,
      job,
    });
  });

  //  get all the job
  static getAllJob = catchAsyncErrors(async (req, res, next) => {
    // select all job:
    const jobs = await jobModel.find();
    console.log(jobs);
    // response the client:
    res.status(201).json({
      success: true,
      jobs,
    });
  });

  // get the job by using job id:
  static getjobByID = catchAsyncErrors(async (req, res, next) => {
    // select job by Id:
    console.log("What happen to this",req.params.id);
    const job = await jobModel.findById(req.params.id);
    // check job is found or not:
    if (!job) {
      res.status(404).json({
        success: false,
        message: "Jobs is not found",
      });
    }

    // response the client:
    res.status(200).json({
      success: true,
      job,
    });
  });

  // get the job by using Company Id:
  static getjobByCompanyID = catchAsyncErrors(async (req, res, next) => {
    // Select jobs by user ID
    const jobs = await jobModel.find({ user: req.user.id });

    // Check if jobs are found
    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Jobs not found",
      });
    }

    // Get job IDs
    const jobIds = jobs.map((job) => job._id);

    // Find quiz questions based on job IDs
    const quizQuestions = await quizQuestionModel.find({ job: { $in: jobIds } });

    // Update jobs with quiz IDs
    const jobData = jobs.map((job) => {
      const matchingQuiz = quizQuestions.find((question) => question.job.toString() === job._id.toString());
      const quizId = matchingQuiz ? matchingQuiz._id.toString() : '';

      return {
        ...job._doc,
        quizId,
      };
    });

    // Response to the client
    res.status(200).json({
      success: true,
      jobs: jobData,
      quizQuestions,
    });
  });


  //Update Job:
  static updateJob = catchAsyncErrors(async (req, res, next) => {
    // Select the job by if:
    let job = await jobModel.findById(req.params.id);
    console.log(job)
    // check the job is find or not
    if (!job) {
      res.status(200).json({
        success: true,
        message: "Job not found",
      });
    }

    // update the job:
    job = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    // response to the client
    res.status(200).json({
      success: true,
      job,
    });
  });

  // Manage the Job status status:

  // Delete Job:
  static deleteJob = catchAsyncErrors(async (req, res, next) => {
    // find job in database
    let job = await jobModel.findById(req.params.id);

    // check job is found or not
    if (!job) {
      res.status(401).json({
        success: true,
        message: "Job  not found",
      });
    } else {
      // Delete the Job
      job = await jobModel.findByIdAndDelete(req.params.id);
    }
    // response
    res.status(200).json({
      success: true,
      message: "Successfually Deleted",
    });
  });
}


export default jobController;
