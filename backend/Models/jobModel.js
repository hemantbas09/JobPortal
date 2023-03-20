import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({


    jobTitle: {
        type: String,
        required: [true, "Please Enter Job Title"],
        trim: true
    },
    jobDescription: {
        type: String,
        required: [true, "Please Enter Job Description"]
    },
    jobCategory: {
        type: String,
        required: [true, "Please Enter Job Category"]
    },
    jobType: {
        type: String,
        required: [true, "Please Enter Job Type"]
    },
    salaryType: {
        type: String,
        required: [true, "Please Enter Salary Type"]
    },
    maxSalary: {
        type: Number,
        required: [true, "Please Enter Product Price"]
    },
    minSalary: {
        type: Number,
        required: [true, "Please Enter Product Price"]
    },
    gender: {
        type: String,
        required: [true, "Please Enter Your Gender"],
        default: "both"
    },

    experience: {
        type: Number,
        required: [true, "Please Enter Experience"]
    },
    location: {
        type: String,
        required: [true, "Please Enter Company Location"]
    },
    featureImages:
    {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    videos: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    deadlineDate: {
        type: Date,
        required: true,
       

    },
    forEnquiry: {
        type: Number,
        required: [true, "Please Enter Enquiry Contact Number"]
    },
    active: {
        type: Boolean,
        default: true
    }
});

const jobModel = mongoose.model("job", jobSchema);

export default jobModel