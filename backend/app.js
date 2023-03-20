import express from 'express';
import cors from 'cors'
import userRoute from './Routes/userRoute.js'
import jobRoute from './Routes/jobRoute.js'

// creating a Object of the express:
const app = express();

// use CORS Policy
app.use(cors());

// Use JSON:
app.use(express.json());

// loads Routes:

app.use("/api/user", userRoute)
app.use("/api/job", jobRoute)

export default app 