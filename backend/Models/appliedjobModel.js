import mongoose from "mongoose";
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
        company: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
            required: true
        },
        resume: {
            public_id: {
                type: String,
                required: true

            },
            url: {
                type: String,
                required: true

            },
        },

        applyDate: {
            type: Date,
            default: Date.now
        }
    },
)



const appliedJobModel = mongoose.model("appliedJob", appliedJobSchema);

export default appliedJobModel