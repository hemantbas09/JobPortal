import express from 'express';
import cors from 'cors'
import userRoute from './Routes/userRoute.js'
import jobRoute from './Routes/jobRoute.js'
import quizRoute from './Routes/quizRoute.js'
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import expressformData from 'express-form-data'
import cloudinary from './config/cloudinary.js';
// creating a Object of the express:
const app = express();

// use CORS Policy
app.use(cors());
// app.use(bodyParser.json({ type: 'application/*+json' }))
// app.use(expressformData.parse());
// Use JSON:
app.use(express.json());

// loads Routes:

app.use("/api/user", userRoute)
app.use("/api/job", jobRoute)
app.use("/api/quiz", quizRoute)

export default app 