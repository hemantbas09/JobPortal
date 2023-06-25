import express from "express";
import cors from "cors";
import userRoute from "./Routes/userRoute.js";
import jobRoute from "./Routes/jobRoute.js";
import quizRoute from "./Routes/quizRoute.js";
import passport from "passport";
import cookieSession from "cookie-session";
import * as passportSetup from "./config/passport.js";

// creating a Object of the express:
const app = express();
// use CORS Policy
app.use(cors());

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Use JSON:
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/job", jobRoute);
app.use("/api/quiz", quizRoute);

export default app;
