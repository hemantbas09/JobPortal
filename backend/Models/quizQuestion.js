import mongoose from "mongoose";


// Defining Schema:

const quizQuestionSchema = new mongoose.Schema({
    quizQuestions:
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
            time: {
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


    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "user",
    //     required: true,
    // },

})


// Creating a Model of schema:

const quizQuestionModel = mongoose.model("quizQuestion", quizQuestionSchema)

export default quizQuestionModel