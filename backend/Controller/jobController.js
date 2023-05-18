import jobModel from "../Models/jobModel.js";
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
    console.log("This is id", req.params.id);
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
    // select job by Id:
    console.log(req.user._id);
    const job = await jobModel.find({ user: req.user._id });

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

  //Update Job:
  static updateJob = catchAsyncErrors(async (req, res, next) => {
    // Select the job by if:
    let job = await jobModel.findById(req.params.id);

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

// Manage the status of the job:
/*
try {

    cron.schedule('* * * * *', async () => {
        const jobs = await jobModel.find();
        for (const job of jobs) {
            const currentDate = new Date()
            console.log(currentDate)
            console.log(currentDate > job.deadlineDate);
            if (currentDate > job.deadlineDate) {
                job.active = false
                await job.save();
                console.log("Nepal");
            }
            else{
                job.active=true
                await job.save();
            }
        }
    });

} catch (error) {
    console.log(error);
}
*/

export default jobController;
