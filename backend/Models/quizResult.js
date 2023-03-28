import mongoose from "mongoose";


// Defining Schema:

const quizResultSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },

    score: {
        type: Number,
        required: true
    },
    job: {
        type: mongoose.Schema.ObjectId,
        ref: "quiz",
        required: true,
    }
})


// Creating a Model of schema:

const quizResultModel = mongoose.model("quizResult", quizResultSchema)

export default quizResultModel