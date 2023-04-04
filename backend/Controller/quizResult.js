import quizResultModel from '../Models/quizResult.js';
import quizQuestionModel from '../Models/quizQuestion.js';

import catchAsyncErrors from '../Middleware/catchAsyncErrors.js'

class jobAtemptController {

  // post a new Job
  static quizAttempt = catchAsyncErrors(async (req, res, next) => {
    // Get quiz details
    const { user, job, quiz, attemptAnswer } = req.body;
    // Get the quiz questions from the database
    const questions = await quizQuestionModel.findById(quiz);
    console.log(questions)
    const quizQuestions = questions.quizQuestions;
    console.log(attemptAnswer)
    console.log(quizQuestions)
    // Calculate the score based on the user's answers to each question
    let score = 0;
    const answers = attemptAnswer.map(attempt => {
      const question = quizQuestions.find(q => q._id == attempt.questionId);
      console.log(question);
      const answer = attempt.answer;
      if (question) {
        const isCorrect = answer === question.correctAnswer;
        console.log(isCorrect);
        if (isCorrect) {
          score++;
        }
        return { 
          question: question.question, 
          answer: answer, 
          isCorrect: isCorrect,
          correctAnswer: question.correctAnswer
        };
      } else {
        return { 
          question: null, 
          answer: answer, 
          isCorrect: false,
          correctAnswer: null
        };
      }
    });
    
  
    // Find or create a quiz result document and update its attempt and score fields
    quizResultModel.findOneAndUpdate(
      { quiz: quiz, user: user },
      { $inc: { attempt: 1 }, $set: { score: score, job: job, attemptAnswer: answers } },
      { new: true, upsert: true }
    )
      .then(updatedQuizResult => {
        console.log('Quiz result attempt count updated:', updatedQuizResult);
        res.status(200).json({ score: updatedQuizResult.score });
      })
      .catch(error => {
        console.error('Error updating quiz result attempt count:', error);
        res.status(500).send('Error updating quiz result attempt count');
      });
  });
  


}

export default jobAtemptController