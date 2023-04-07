import userModel from '../Models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import catchAsyncErrors from '../Middleware/catchAsyncErrors.js'
import transporter from '../config/emailConfig.js'
import pdfUpload from '../utils/pdfUpload.js'
import { v2 as cloudinary } from 'cloudinary';
import path from 'path'

class userController {

    // Regestration of the user:
    static userRegistration = catchAsyncErrors(async (req, res, next) => {
        // console.log("Is that good", Object.fromEntries(req.body.entries()));
        // Take the input from the frontend

        // console.log("Is that good", Object.fromEntries(req.body.entries()));
        const { fullName, email, password, passwordConfirmation, role, document } = req.body
        // console.log("THis is the Document", document);
        const existingUser = await userModel.find({ email: email })
        console.log(existingUser.length)


        // check the password and conformation password are same or not:
        if (fullName && email && password && passwordConfirmation && role) {

            if (existingUser.length != 0) {

                console.log("pp not match");
                res.status(401).json({
                    success: false,
                    message: "Email already exist"

                });


            } else {

                console.log("yo nani ko sirai ma indra komal full hlyo")

                if (password === passwordConfirmation) {

                    console.log("J payo tai")
                    if (password.length >= 8) {


                        try {
                            var myCloud = await cloudinary.uploader.upload(document, {
                                // public_id: document.name.split(".")[0],
                                allowed_formats: ['jpeg', 'jpg', 'png'],
                                folder: "document",
                                width: 150,
                                crop: "scale",
                            });
                            console.log("Document upload successful:", myCloud);
                            res.status(401).json({
                                success: true,
                                myCloud,
                                message: "Document upload successful"

                            });
                        } catch (error) {
                            res.status(401).json({
                                success: false,
                                message: "File Formate is Not match"

                            });
                        }



                        // hash the password: 
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        let user
                        if (document) {
                            user = new userModel({
                                fullName: fullName,
                                email: email,
                                password: hashPassword,
                                document: {

                                    public_id: myCloud.public_id,
                                    url: myCloud.url,
                                },
                                role: role,
                            });
                        } else {
                            user = new userModel({
                                fullName: fullName,
                                email: email,
                                password: hashPassword,
                                role: role,
                            });
                        }

                        await user.save()
                        console.log("Name", fullName);

                        // use JWT Token:
                        const saved_user = await userModel.findOne({ email: email })
                        // Generate JWT Token:
                        const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });

                        res.status(201).json({
                            success: true,
                            message: "Successfully Sign Up",
                            user,
                            token,
                        });


                    } else {


                        res.status(401).json({
                            success: false,
                            message: "Password should be greater then 8 digits"

                        });


                    }



                }
                else {
                    res.status(401).json({
                        success: false,
                        message: "Password and Confirm Password doesn't match"

                    });


                }


            }
        }
        else {

            res.status(401).json({
                success: false,
                message: "Please Enter all Details"

            });

        }




    })

    static uploadDocument = catchAsyncErrors(async (req, res, next) => {



        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const document = req.files?.document;
        if (!document) {
            return res.status(400).json({ message: "Document file is required" });
        }

        // Check if the uploaded file is a valid document file
        const allowedExtensions = [".pdf", ".doc", ".docx", ".png"];
        const fileExtension = path.extname(document.name).toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            return res.status(400).json({ message: "Invalid document file type" });
        }

        document.mv(`uploads/document/${document.name}`, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Failed to upload document" });
            }

            await userModel.findByIdAndUpdate(req.params.id, { document: document.name });
            return res.status(200).json({ message: "Document file uploaded successfully" });

        })
    })
    static getAllUser = catchAsyncErrors(async (req, res, next) => {

        // check if the user exists in the database:
        const user = await userModel.find()
        res.status(201).json({
            success: true,
            user,

        });


    })

    static companyRejectApproved = catchAsyncErrors(async (req, res, next) => {

        const companyID = req.body["companyId"];
        const status = req.body["status"];
        console.log("this is n th body", companyID)
        console.log("this is n uith body", status)
        // check if the user exists in the database:
        const company = await userModel.findById(companyID)



        const updatedCompany = await userModel.findByIdAndUpdate(companyID, { status }, { new: true });
        if (status === '1') {
            updatedCompany.status = 'approved';
        } else if (status === '0') {
            updatedCompany.status = 'rejected';
        } else {
            updatedCompany.status = 'pending';
        }

        await updatedCompany.save();

        res.status(200).json({
            success: true,
            message: 'Company status updated successfully',
            company: updatedCompany
        });
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
                    } else if (user.role === 'company' && user.status === "approved") {
                        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
                        res.send({ "status": "success", "message": "Login Success", "token": token, "role": user.role })
                        console.log("company");
                    } else if (user.role === 'company' && user.status === "rejected") {
                        console.log("Your Request in Rejected");
                        res.send({ "status": "failed", "message": "Your request is Rejected" })
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
            console.log("this is user", user)
            if (user) {
                const secret = user._id + process.env.JWT_SECRET_KEY
                console.log(process.env.JWT_SECRET_KEY)
                // const secret= crypto.randomBytes(32).toString('hex');
                const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
                const encodedToken = Buffer.from(token).toString('base64');
                const link = `http://localhost:5174/api/user/reset-password/${user._id}/${encodedToken}`
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
            const decodedToken = Buffer.from(token, 'base64').toString('utf-8');
            jwt.verify(decodedToken, newSecret)
            if (password && passwordConfirmation) {
                if (password !== passwordConfirmation) {
                    console.log(password);
                    console.log(passwordConfirmation)
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
