import quizResultModel from "../Models/quizResult.js";
import quizQuestionModel from "../Models/quizQuestion.js";

import catchAsyncErrors from "../Middleware/catchAsyncErrors.js";

class quizAtemptController {
  // post a new Job
  static quizAttempt = catchAsyncErrors(async (req, res, next) => {
    const { quizId, attemptAnswer } = req.body;
    console.log("This is job Id", req.params.id)
    console.log('This is user id ', req.user)
    // Get the quiz questions from the database
    let id = "64473e623ba2132bdf5bd977";
    const questions = await quizQuestionModel.findById(quizId);
    // console.log("This is j hunxa tai user", req.user);
    const quizQuestions = questions.questions;

    // Calculate the score based on the user's answers to each question
    let score = 0;
    if (quizQuestions && attemptAnswer) {
      const answers = attemptAnswer.map((attempt) => {
        const question = quizQuestions.filter(
          (q) => q._id.toString() === attempt.questionId
        )[0];
        const answer = attempt.option;
        if (question) {
          const isCorrect = answer === question.correctAnswer;
          if (isCorrect) {
            score++;
          }
          return {
            question: question.question,
            answer: answer,
            isCorrect: isCorrect,
            correctAnswer: question.correctAnswer,
            passMark: questions.passMark
          };
        } else {
          return {
            question: null,
            answer: answer,
            isCorrect: false,
            correctAnswer: null,
            passMark: questions.passMark,
          };
        }
      });

      // Find or create a quiz result document and update its attempt and score fields
      quizResultModel
        .findOneAndUpdate(
          { quiz: quizId, user: req.user._id },
          {
            $inc: { attempt: 1 },
            $set: {
              score: score,
              job: req.params.id,
              attemptAnswer: answers,
              passMark: questions.passMark

            },
          },
          { new: true, upsert: true }
        )
        .then((updatedQuizResult) => {
          res.status(200).json({ score: updatedQuizResult.score });
        })
        .catch((error) => {
          console.error("Error updating quiz result attempt count:", error);
          res.status(500).send("Error updating quiz result attempt count");
        });
    } else {
      console.log("Quiz Question and Attempt Answer are not found");
    }
  });

  static quizAllResult = catchAsyncErrors(async (req, res, next) => {
    const allQuizResult = await quizResultModel.find({});
    console.log(allQuizResult);
  });

  static quizResultById = catchAsyncErrors(async (req, res, next) => {
    const jobId = req.params.id;
    const userId = req.user.id;
    console.log(jobId)
    // console.log()

    const quizResultById = await quizResultModel.find({ job: jobId, user: userId });
    console.log("FInd THe quiz",quizResultById)
    if (quizResultById) {
      res.status(200).json({
        success: true,
        quizResultById,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No Result is found",
      });
    }

    console.log(quizResultById);
  });
}

export default quizAtemptController;
