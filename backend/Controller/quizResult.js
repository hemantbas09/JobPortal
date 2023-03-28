const Quiz = require('../models/quiz');

exports.takeQuiz = async (req, res) => {
  try {
    // Get quiz details
    const quiz = await Quiz.findById(req.params.quizId);

    // Validate user input
    const { answers } = req.body;
    if (!answers || !Array.isArray(answers) || answers.length !== quiz.questions.length) {
      throw new Error('Invalid user input');
    }

    // Calculate quiz result
    let score = 0;
    const results = [];
    quiz.questions.forEach((question, i) => {
      const selectedAnswer = answers[i];
      const correctAnswer = question.options.find(option => option.isCorrect);
      const result = {
        question: question.question,
        selectedAnswer,
        correctAnswer: correctAnswer.option,
        isCorrect: selectedAnswer === correctAnswer.option,
      };
      results.push(result);
      if (result.isCorrect) {
        score++;
      }
    });
    const quizResult = {
      quizId: quiz._id,
      user: req.user._id,
      score,
      results,
    };

    // Save quiz attempt
    await User.findByIdAndUpdate(req.user._id, {
      $addToSet: { quizAttempted: quizResult },
    });

    // Return quiz result
    res.json({ score, results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
