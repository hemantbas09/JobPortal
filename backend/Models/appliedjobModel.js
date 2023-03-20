const mongoose = require("mongoose");

const appliedJobSchema = mongoose.Schema(
    {

        job: {
            type: mongoose.Schema.ObjectId,
            ref: 'job',
            required: false
        },
        candidate: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
            required: false
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
            required: false
        },
    },
    
    {
        timestamps: true
    })



const appliedJobModel = mongoose.model("appliedJob", appliedJobSchema);

export default appliedJobModel