import express from "express";
const router = express.Router();
import userController from "../Controller/userController.js";
import checkUserAuth from "../Middleware/authMiddleware.js";
import multer from "multer";
const upload = multer();
// Route level Middleware - TO Protect Route
router.use("/changepassword", checkUserAuth);
router.use("/loggedUser", checkUserAuth);
router.use("/register", upload.none());
router.use("/approvedReject", upload.none());

//public Routes:
router.post("/register", userController.userRegistration);

router.post("/login", userController.userLogin);

router.post(
  "/sendresetpasswordEmail",
  userController.sendUserPasswordResetEmail
);

router.post("/reset-password/:id/:token", userController.userPasswordReset);
router.post("/verify", userController.verifyEmail);

//Private Routes:
router.post("/changepassword", userController.changeuserPassword);
router.get("/loggedUser", userController.loggedUser);
router.get("/getalluser", userController.getAllUser);
router.post("/approvedReject", userController.companyRejectApproved);

router.delete("/:id", userController.deleteUser);
router.post("/resetpassword/:id", userController.resetPassword);

// Google login:
// router.get("/login/success", userController.loginSuccess);
// router.get("/login/failed", userController.loginFailed);
router.get("/auth/google", userController.googleAuth);
// router.get("/google/callback", userController.googleCallback);
// router.get("/logout", userController.logout);
router.post("user/profile", userController.userProfile);

export default router;
