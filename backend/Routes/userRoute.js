import express from 'express'
const router = express.Router();
import userController from '../Controller/userController.js';
import checkUserAuth from '../Middleware/authMiddleware.js'

// Route level Middleware - TO Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggedUser', checkUserAuth)


//public Routes:
router.post('/register', userController.userRegistration);

router.post('/login', userController.userLogin);

router.post('/sendresetpasswordEmail', userController.sendUserPasswordResetEmail)

router.post('/resetpassword/:id/:token',userController.userPasswordReset)
//Private Routes:
router.post('/changepassword', userController.changeuserPassword);
router.get('/loggedUser', userController.loggedUser)


export default router