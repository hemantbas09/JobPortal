import quizQuestionModel from "../Models/quizQuestion.js";
import * as cron from "node-cron";
import catchAsyncErrors from "../Middleware/catchAsyncErrors.js";
import quizResultModel from "../Models/quizResult.js";
import jobModel from "../Models/jobModel.js";
class quizController {
  // Create a new Quiz:
  static quizCreate = catchAsyncErrors(async (req, res, next) => {
    const { time, passMark, questions } = req.body;
    console.log(questions);
    const quiz = new quizQuestionModel({
      questions: questions,
      time,
      passMark,
      user: req.user.id,
      job: req.params.id,
    });

    const isJobExisting = await jobModel.findById(req.params.id);

    if (!isJobExisting) {
      return res.status(400).json({
        success: false,
        message: "Please Enter the Job First for Adding Quiz",
      });
    }

    if (questions.length >= 1) {
      await quiz.save();

      return res.status(201).json({
        success: true,
        quiz,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Please Enter more than 6 Questions",
      });
    }
  });
  //  get all the quiz:
  static getAllQuize = catchAsyncErrors(async (req, res, next) => {
    // select all job:
    const quizs = await quizQuestionModel.find();

    // response the client:
    res.status(201).json({
      success: true,
      quizs,
    });
  });

  // get the quiz by using job id:
  static getquizByID = catchAsyncErrors(async (req, res, next) => {
    // select job by Id:

    const quiz = await quizQuestionModel.find({ job: req.params.id });

    const shuffledQuestions = quiz[0].questions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 10);
    if (!quiz) {
      res.status(404).json({
        success: false,
        message: "quizs is not found",
      });
    } else {
      // response the client:
      res.status(200).json({
        success: true,
        quizId: quiz[0]._id,
        selectedQuestions,
      });
    }
  });

  // static getquizByJobID = catchAsyncErrors(async (req, res, next) => {

  //     // select job by Id:
  //     const quiz = await quizQuestionModel.find({ job: req.params.id });
  //     console.log(req.params.id)
  //     // check job is found or not:
  //     if (!quiz) {
  //         res.status(404).json({
  //             success: false,
  //             message: "Jobs is not found"
  //         });

  //     }

  //     // response the client:
  //     res.status(200).json({
  //         success: true,
  //         quiz,
  //     });

  // });

  //Update Job:
  static updatequiz = catchAsyncErrors(async (req, res, next) => {
    // Select the job by if:
    let job = await quizQuestionModel.findById(req.params.id);

    // check the job is find or not
    if (!job) {
      res.status(200).json({
        success: true,
        message: "Job not found",
      });
    }

    // update the job:
    job = await quizQuestionModel.findByIdAndUpdate(req.params.id, req.body, {
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
  static deletequiz = catchAsyncErrors(async (req, res, next) => {
    // find job in database
    let job = await quizQuestionModel.findById(req.params.id);

    // check job is found or not
    if (!job) {
      res.status(401).json({
        success: true,
        message: "Job  not found",
      });
    } else {
      // Delete the Job
      job = await quizQuestionModel.findByIdAndDelete(req.params.id);
    }
    // response
    res.status(200).json({
      success: true,
      message: "Successfually Deleted",
    });
  });

 
}

export default quizController;
