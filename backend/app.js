import express from "express";
import cors from "cors";
import userRoute from "./Routes/userRoute.js";
import jobRoute from "./Routes/jobRoute.js";
import quizRoute from "./Routes/quizRoute.js";
// import passport from "./config/passport.js";

// Creating an instance of the express app
const app = express();

// Enable CORS globally
app.use(cors());

// Initialize Passport.js
// app.use(passport.initialize());
// app.use(passport.session());

// Use JSON
app.use(express.json());

// Define routes
app.use("/api/user", userRoute);
app.use("/api/job", jobRoute);
app.use("/api/quiz", quizRoute);

export default app;
