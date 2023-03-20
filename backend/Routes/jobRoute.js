import express from 'express'
const router = express.Router();
import jobController from '../Controller/jobController.js';
import checkUserAuth from '../Middleware/authMiddleware.js'

// Route level Middleware - TO Protect Route
router.use('/changepassword', checkUserAuth)
router.post('/new', checkUserAuth);



//public Routes:
router.post('/new', jobController.jobCreate);
router.get('/alljobs', jobController.getAllJob);
router.get('/:id', jobController.getjobByID)
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);



//Private Routes:



export default router