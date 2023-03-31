const mongoose = require("mongoose");

const appliedJobSchema = mongoose.Schema(
    {

        job: {
            type: mongoose.Schema.ObjectId,
            ref: 'job',
            required: true
        },
        candidate: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
            required: true
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
            required: true
        },
        resume: {
            type: String,
            required: true
        },
        applyDate: {
            type: Date,
            default: Date.now
        }
    },


    {
        timestamps: true
    })



const appliedJobModel = mongoose.model("appliedJob", appliedJobSchema);

export default appliedJobModel