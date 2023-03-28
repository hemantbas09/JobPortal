import quizQuestionModel from "../Models/quizQuestion.js"
import * as cron from 'node-cron'
import catchAsyncErrors from '../Middleware/catchAsyncErrors.js'

class jobController {

    // post a new Job
    static quizCreate = catchAsyncErrors(async (req, res, next) => {

        // for store the user information:
        req.body.user = req.user;
        req.body.job = req.params.id;

        // creating a object or instace of the JobModal:
        const quiz = new quizQuestionModel(req.body);
        console.log("first", quiz);
        // save in the database
        await quiz.save();

        // for the response:
        res.status(201).json({
            success: true,
            quiz,
        })

    });


    //  get all the job
    static getAllQuize = catchAsyncErrors(async (req, res, next) => {

        // select all job:
        const quizs = await quizQuestionModel.find()

        // response the client:
        res.status(201).json({
            success: true,
            quizs,
        })

    })


    // get the job by using id:
    static getquizByID = catchAsyncErrors(async (req, res, next) => {

        // select job by Id:
        const quiz = await quizQuestionModel.findById(req.params.id);

        // check quiz is found or not:
        if (!quiz) {
            res.status(404).json({
                success: failed,
                message: "quizs is not found"
            });

        }

        // response the client:
        res.status(200).json({
            success: true,
            quiz
        });

    });


    // get the job by using id:
    static getquizByJobID = catchAsyncErrors(async (req, res, next) => {

        // select job by Id:
        const quiz = await quizQuestionModel.find({job:req.params.id});
        console.log(req.params.id)
        // check job is found or not:
        if (!quiz) {
            res.status(404).json({
                success: false,
                message: "Jobs is not found"
            });

        }

        // response the client:
        res.status(200).json({
            success: true,
            quiz,
        });

    });


    //Update Job:
    static updatequiz = catchAsyncErrors(async (req, res, next) => {

        // Select the job by if:
        let job = await quizQuestionModel.findById(req.params.id);

        // check the job is find or not
        if (!job) {
            res.status(200).json({
                success: true,
                message: "Job not found"
            })
        }



        // update the job:
        job = await quizQuestionModel.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true,
                useFindAndModify: false
            });

        // response to the client
        res.status(200).json({
            success: true,
            job
        })
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
                message: "Job  not found"
            })

        } else {
            // Delete the Job
            job = await quizQuestionModel.findByIdAndDelete(req.params.id);
        }
        // response
        res.status(200).json({
            success: true,
            message: "Successfually Deleted"
        })
    });

}



export default jobController