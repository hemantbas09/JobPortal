import mongoose from "mongoose";


// Defining Schema:

const quizQuestionSchema = new mongoose.Schema({
    questions:
        [{
            question: {
                type: String,
                required: true
            },
            options: [{
                type: String,
                required: true
            }],
            correctAnswer: {
                type: String,
                required: true
            },
        }]
    ,
    job: {
        type: mongoose.Schema.ObjectId,
        ref: "job",
        required: true,
    },
    passMark: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },


    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },

})


// Creating a Model of schema:

const quizQuestionModel = mongoose.model("quizQuestion", quizQuestionSchema)

export default quizQuestionModel