const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicantRatingSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    joobSeekar: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    resume: {
        public_id: {
            type: String,
            required: True,
        },
        url: {
            type: String,
            required: True,

        },

    }
});

module.exports = ApplicantRating = mongoose.model(
    "ApplicantRating",
    ApplicantRatingSchema
);