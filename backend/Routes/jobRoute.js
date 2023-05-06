import express from "express";
const router = express.Router();
import jobController from "../Controller/jobController.js";
import appliedjobController from "../Controller/appliedjobController.js";
import checkUserAuth from "../Middleware/authMiddleware.js";
import multer from "multer";
const upload = multer({
  limits: { fileSize: 1000000000 },
});

// Route level Middleware - TO Protect Route
// router.use('/changepassword', checkUserAuth)
// router.post('/new', checkUserAuth);
router.use("/new", upload.none());
router.use("/appliedjob/:id", upload.none());

//public Routes:
router.post("/new", jobController.jobCreate);
router.get("/alljobs", jobController.getAllJob);
router.get("/:id", jobController.getjobByID);
router.put("/:id", jobController.updateJob);
router.delete("/:id", jobController.deleteJob);
router.post("/appliedjob/:id", appliedjobController.jobApplied);

//Private Routes:

export default router;
