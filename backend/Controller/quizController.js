import quizModel from '../Models/appliedjobModel'

exports.createQuiz = (req, res) => {
  const quiz = new quizModel(req.body);

  quiz.save((err, newQuiz) => {
    if (err) {
      return res.status(400).json({
        error: 'Could not create quiz',
      });
    }
    res.json({ quiz: newQuiz });
  });
};

exports.getQuiz = (req, res) => {
  const quizId = req.params.id;

  Quiz.findById(quizId, (err, quiz) => {
    if (err || !quiz) {
      return res.status(400).json({
        error: 'Quiz not found',
      });
    }
    res.json({ quiz });
  });
};

exports.getAllQuizzes = (req, res) => {
  Quiz.find((err, quizzes) => {
    if (err) {
      return res.status(400).json({
        error: 'Could not fetch quizzes',
      });
    }
    res.json({ quizzes });
  });
};

exports.updateQuiz = (req, res) => {
  const quizId = req.params.id;
  const updates = req.body;

  Quiz.findByIdAndUpdate(quizId, updates, { new: true }, (err, updatedQuiz) => {
    if (err) {
      return res.status(400).json({
        error: 'Could not update quiz',
      });
    }
    res.json({ quiz: updatedQuiz });
  });
};

exports.deleteQuiz = (req, res) => {
  const quizId = req.params.id;

  Quiz.findByIdAndRemove(quizId, (err, deletedQuiz) => {
    if (err) {
      return res.status(400).json({
        error: 'Could not delete quiz',
      });
    }
    res.json({ quiz: deletedQuiz });
  });
};
