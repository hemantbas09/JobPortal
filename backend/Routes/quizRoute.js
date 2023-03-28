import express from 'express'
const router = express.Router();
import quizController from '../Controller/quizController.js';
import checkUserAuth from '../Middleware/authMiddleware.js'

// Route level Middleware - TO Protect Route
// router.use('/changepassword', checkUserAuth)
router.post('/new/:id', checkUserAuth);



//public Routes:
router.post('/new/:id', quizController.quizCreate);
router.get('/allquizs', quizController.getAllQuiz);
router.get('/:id', quizController.getquizByID);
router.put('/:id', quizController.updatequiz);
router.delete('/:id', quizController.deletequiz);



//Private Routes:



export default router