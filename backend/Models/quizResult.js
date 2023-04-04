import mongoose from "mongoose";


// Defining Schema:

const quizResultSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },
    job: {
        type: mongoose.Schema.ObjectId,
        ref: "job",
        required: true,
    },
    score: {
        type: Number,
        required: true
    },
    quiz: {
        type: mongoose.Schema.ObjectId,
        ref: "quiz",
        required: true,
    },
    attemptAnswer: [{
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: String
        }
    }],
    attempt: {
        type: Number,
        default: 0
    },
    attemptDate: {
        type: Date,
        default: Date.now
    }
})


// Creating a Model of schema:

const quizResultModel = mongoose.model("quizResult", quizResultSchema)

export default quizResultModel