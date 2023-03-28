import mongoose from "mongoose";


// Defining Schema:

const quizSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'quizQuestion',
      required: true,
    },
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  job: {
    type: mongoose.Schema.ObjectId,
    ref: "job",
    required: true,
},


})


// Creating a Model of schema:

const quizModel = mongoose.model("quiz",quizSchema)

export default quizModel