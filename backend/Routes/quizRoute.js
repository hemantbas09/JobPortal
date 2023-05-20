import express from "express";
const router = express.Router();
import quizController from "../Controller/quizQuestionController.js";
import quizAttemptController from "../Controller/quizResult.js";
import checkUserAuth from "../Middleware/authMiddleware.js";
import multer from "multer";
const upload = multer();
// Route level Middleware - TO Protect Route
// router.use('/changepassword', checkUserAuth)
// router.post('/new/:id', checkUserAuth);
router.use('/quizresult/:id', checkUserAuth);
router.use("/quizattem/:id", checkUserAuth);
router.use("/quizattem/:id", upload.none());
router.use("/new/:id", upload.none());

//public Routes:
router.post("/new/:id", quizController.quizCreate);
router.get("/allquizs", quizController.getAllQuize);
// router.get('/:id', quizController.getquizByID);
router.get("/:id", quizController.getquizByID);
router.put("/:id", quizController.updatequiz);
router.delete("/:id", quizController.deletequiz);
router.post("/quizattem/:id", quizAttemptController.quizAttempt);
router.get("/quizresult/all", quizAttemptController.quizAllResult);
router.get("/quizresult/:id", quizAttemptController.quizResultById);
//Private Routes:

export default router;
