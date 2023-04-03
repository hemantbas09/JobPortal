import mongoose from "mongoose";
import validator from "validator";

// Defining Schema:

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name Cannot exceed 30 character"],
        minLength: [2, "Name should have more than 2 character"],
        trim: true,
    },

    email: {
        type: String,
        required: [true, "Please Enter Your Valid Email"],
        unique: true,
        trim: true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },

    password: {
        type: String,
        required: [true, "Please Enter Password"],
        trim: true,
        minLength: [8, "Password should be greater than 8 characters"]
    },

    document: {
        public_id: {
            type: String,
          
        },
        url: {
            type: String,
           
        },
    },


    role: {
        type: String,
        required: true
    },



    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: 'pending'
    }


})


// Creating a Model of schema:

const userModel = mongoose.model("user", userSchema)

export default userModel 