import mongoose from "mongoose";


// Defining Schema:

const quizSchema = new mongoose.Schema({

    question: {
        type: Array,
        required:true
    },

    answer: {
        type: Array,
        required:true
    },
    time: {
        type: String,
        required: true,
    },
    passMarks:{
        type:Number,
        required: true
    },
    job: {
        type: mongoose.Schema.ObjectId,
        ref: "job",
        required: true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})


// Creating a Model of schema:

const quizModel = mongoose.model("quiz", quizSchema)

export default quizModel 