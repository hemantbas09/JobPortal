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
router.use("/new", checkUserAuth);
router.use("/new", upload.none());
router.use("/jobbycompanyid", checkUserAuth);
router.use("/update/:id", checkUserAuth);
router.use("/appliedjob/:id", checkUserAuth);
router.use("/applied/job", checkUserAuth);

//public Routes:
router.post("/new", jobController.jobCreate);
router.get("/alljobs", jobController.getAllJob);
router.get("/jobbycompanyid", jobController.getjobByCompanyID);
router.get("/:id", jobController.getjobByID);
router.put("/update/:id", jobController.updateJob);
router.delete("/:id", jobController.deleteJob);
router.post("/appliedjob/:id", appliedjobController.jobApplied);
router.get("/applied/job", appliedjobController.getAppliedJobByCompany);
router.get("/search/job", jobController.searchJob);
router.get("/filter/job", jobController.filterJob);
router.post("/reject/job", appliedjobController.rejectJob);
router.post("/accept/job", appliedjobController.acceptJob);
router.post("/delete/job", appliedjobController.deleteJob);
router.get("/allapplied/job", appliedjobController.getAllAppliedJobs);


//Private Routes:

export default router;
