import userModel from '../Models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import catchAsyncErrors from '../Middleware/catchAsyncErrors.js'
import transporter from '../config/emailConfig.js'

class userController {

    // Regestration of the user:
    static userRegistration = catchAsyncErrors(async (req, res, next) => {

        // Take the input from the frontend
        const { fullName, email, password, passwordConfirmation, document, profileImages, role, termCondition } = req.body
        console.log("The term and condition is",termCondition);
        // check the password and conformation password are same or not:
        if (fullName && email && password && passwordConfirmation && role && termCondition) {
            if (password === passwordConfirmation) {
                if (termCondition == "true") {
                    // hash the password: 
                    const salt = await bcrypt.genSalt(10)
                    const hashPassword = await bcrypt.hash(password, salt)
                    const user = new userModel({
                        fullName: fullName,
                        email: email,
                        password: hashPassword,
                        document: document,
                        profileImages: profileImages,
                        role: role,
                        termCondition: termCondition,
                    })
                    await user.save()
                    console.log("Name",fullName);

                    // use JWT Token:
                    const saved_user = await userModel.findOne({ email: email })
                    // Generate JWT Token:
                    const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });

                    res.status(201).json({
                        success: true,
                        user,
                        token,
                    });
                } else {
                    res.send({ "status": "failed", "message": "Please accept term and condition" })
                    console.log("term condition 88");
                }


            }
            else {


                res.send({ "status": "failed", "message": "Password and Confirm Password doesn't match" })
                console.log("pp not match");
            }
        }
        else {
            res.send({ "status": "failed", "message": "Please Enter all Details" })
            console.log("Enter all Details");
        }

    })

    static companyRegister = catchAsyncErrors(async (req, res, next) => {
        const { userID, action } = req.body;

        // check if the user exists in the database:
        const user = await userModel.findById(userID)

        if (action === 'accept') {
            user.status = 'approved';
        } else if (action === 'reject') {
            user.status = 'rejectd'
        } else {
            user.status = 'pending'
        }
    })

    static userLogin = catchAsyncErrors(async (req, res, next) => {

        // take input from the user login form:
        const { email, password } = req.body

        // conform email and password is not empety:
        if (email && password) {

            // check the email in the database
            const user = await userModel.findOne({ email: email })
            // console.log("this is user", user.role);
            if (user != null) {
                const isMatch = await bcrypt.compare(password, user.password)
                console.log(isMatch);
                if ((user.email === email) && isMatch) {
                    // use JWT Token:
                    const saved_user = await userModel.findOne({ email: email })
                    
                    // Generate JWT Token:
                    if (user.role === 'admin' || user.role === 'user') {
                        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
                        res.send({ "status": "success", "message": "Login Success", "token": token, "role": user.role })
                        console.log("admin or user");
                    } else if (user.role === 'company' && user.status === "active") {
                        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
                        res.send({ "status": "success", "message": "Login Success", "token": token, "role": user.role })
                        console.log("company");
                    } else if (user.role === 'company' && user.status === "pending") {
                        console.log("Your Request in Pending");
                        res.send({ "status": "failed", "message": "Your request is pending" })
                    }

                    else {
                        res.send({ "status": "failed", "message": "Your request is pending" })
                        console.log("Error");
                    }


                } else {
                    res.send({ "status": "failed", "message": "Email or Password is not Valid" })
                    console.log("Pass is not valid");
                }
            } else {
                res.send({ "status": "failed", "message": "You are not a Registered User" })
                console.log("Not register User")
            }
        } else {
            res.send({ "status": "failed", "message": "All Fields are Required" })
            console.log("All field required")
        }

    })

    static changeuserPassword = catchAsyncErrors(async (req, res, next) => {
        const { password, passwordConfirmation } = req.body
        console.log(req.body)
        if (password && passwordConfirmation) {

            if (password !== passwordConfirmation) {

                res.send({
                    "status": "failed",
                    "message": "New Password and Confirm Password are not matched"
                })
            } else {
                const salt = await bcrypt.genSalt(10)
                const newhashPassword = await bcrypt.hash(password, salt)
                console.log(newhashPassword)
                await userModel.findByIdAndUpdate(req.user._id, {
                    $set: {
                        password: newhashPassword
                    }
                })
                res.send({
                    "status": "success",
                    "message": "Password change SUccesfully"
                })

            }

        } else {
            res.send({
                "status": "failed",
                "message": "All Fields are Required"
            })
        }
    })

    static loggedUser = catchAsyncErrors(async (req, res, next) => {

        res.send({ "user": req.user })
    })

    static sendUserPasswordResetEmail = async (req, res, next) => {
        // email taken from user:
        const { email } = req.body
        if (email) {
            const user = await userModel.findOne({ email: email })
            if (user) {
                const secret = user._id + process.env.JWT_SECRET_KEY
                const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
                const link = `http://127.0.0.1:4000/api/user/reset/${user._id}/${token}`
                console.log(link)
                // Send Email:

                await transporter.sendMail({
                    from: process.env.EMAIL_FROM,
                    to: user.email,
                    subject: "Hemant - Password Reset Link",
                    html: `<a href=${link}>Click Here</a> to Reset Your Password`
                })
                res.send({
                    "status": "success",
                    "message": "Password Reset Email Sent... Please Check Your Email"
                })
            } else {
                res.send({
                    "status": "failed",
                    "message": "Email doesn't exists"
                })
            }
        } else {
            res.send({ "status": "failed", "message": "Email Field is Required" })
        }
    }

    static userPasswordReset = catchAsyncErrors(async (req, res, next) => {

        const { password, passwordConfirmation } = req.body
        const { id, token } = req.params
        const user = await userModel.findById(id)
        const newSecret = user._id + process.env.JWT_SECRET_KEY
        try {
            jwt.verify(token, newSecret)
            if (password && passwordConfirmation) {
                if (password !== passwordConfirmation) {
                    res.send({
                        "status": "failed",
                        "message": "New Password and Confirm New Password doesn't match"
                    })
                } else {
                    const salt = await bcrypt.genSalt(10)
                    const newHashPassword = await bcrypt.hash(password, salt)
                    await userModel.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } })
                    res.send({
                        "status": "success",
                        "message": "Password Reset Successfully"
                    })
                }
            } else {
                res.send({
                    "status": "failed",
                    "message": "All Fields are Required"
                })
            }
        } catch (error) {
            console.log(error)
            res.send({ "status": "failed", "message": "Invalid Token" })
        }
    }
    )
}


export default userController
