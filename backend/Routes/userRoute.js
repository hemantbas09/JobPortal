import express from 'express'
const router = express.Router();
import userController from '../Controller/userController.js';
import checkUserAuth from '../Middleware/authMiddleware.js'
import pdfUpload from '../utils/pdfUpload.js';
import multer from 'multer'
const upload = multer();
// Route level Middleware - TO Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggedUser', checkUserAuth)
router.use('/register', upload.none());
router.use('/approvedReject', upload.none());


//public Routes:
router.post('/register', userController.userRegistration);

router.post('/login', userController.userLogin);

router.post('/sendresetpasswordEmail', userController.sendUserPasswordResetEmail)

router.post('/reset-password/:id/:token', userController.userPasswordReset)
//Private Routes:
router.post('/changepassword', userController.changeuserPassword);
router.get('/loggedUser', userController.loggedUser)
router.get('/getalluser', userController.getAllUser)
router.post('/approvedReject', userController.companyRejectApproved)



export default router