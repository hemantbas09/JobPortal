import mongoose from "mongoose";


// Defining Schema:

const quizQuestionSchema = new mongoose.Schema({

    question: {
        type: String,
        required: true
    },

    firstOption: {
        type: String,
        
        
    },
    secondOption: {
        type: String,
        
        
    },
    thirdOption: {
        type: String,
        
        
    },
    fourthOption: {
        type: String,
        
        
    },
    correctAnswer: {
        type: String,
        required: true
    },
    time:{
        type:String,
        required:true
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "user",
    //     required: true,
    // },
    job: {
        type: mongoose.Schema.ObjectId,
        ref: "job",
        required: true,
    },
})


// Creating a Model of schema:

const quizQuestionModel = mongoose.model("quizQuestion", quizQuestionSchema)

export default quizQuestionModel