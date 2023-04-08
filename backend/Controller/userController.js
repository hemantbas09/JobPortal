import userModel from '../Models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import catchAsyncErrors from '../Middleware/catchAsyncErrors.js'
import transporter from '../config/emailConfig.js'
import { v2 as cloudinary } from 'cloudinary';
import path from 'path'

class userController {

    // Regestration of the user:
    static userRegistration = catchAsyncErrors(async (req, res, next) => {

        //  Destructing all the value from the body:
        const { fullName, email, password, passwordConfirmation, role, document } = req.body

        // check the user existing or not:
        const existingUser = await userModel.find({ email: email })

        // Check the all field are completed or not:
        if (fullName && email && password && passwordConfirmation && role) {

            // If the register user is exist or not-- already exist:
            if (existingUser.length != 0) {
                res.status(401).json({
                    success: false,
                    message: "Email already exist"
                });


            }
            // If user is not already exist:
            else {

                // Check the password and conformation password matched or not:-->If matched
                if (password === passwordConfirmation) {

                    // Password length must be equal or greater than the 8 digits---> true statement:
                    if (password.length >= 8) {

                        // If the role is Comapny:
                        if (role === "company") {
                            // If document is found:

                            if (document) {
                                try {
                                    var myCloud = await cloudinary.uploader.upload(document, {
                                        allowed_formats: ['jpeg', 'jpg', 'png'],
                                        folder: "document",
                                        width: 150,
                                        crop: "scale",
                                    });

                                    console.log("the document", document)
                                    // hash the password: 
                                    const salt = await bcrypt.genSalt(10)
                                    const hashPassword = await bcrypt.hash(password, salt)
                                    let user
                                    // Make the new Instance of the useModel for the company

                                    user = new userModel({
                                        fullName: fullName,
                                        email: email,
                                        password: hashPassword,
                                        status: "pending",
                                        document: {

                                            public_id: myCloud.public_id,
                                            url: myCloud.url,
                                        },
                                        role: role,
                                    });
                                    // Save the user or company:
                                    await user.save()
                                    // use JWT Token:
                                    const saved_user = await userModel.findOne({ email: email })
                                    // Generate JWT Token:
                                    const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
                                    // Give Response:
                                    res.status(201).json({
                                        success: true,
                                        message: "Successfully Sign Up",
                                        user,
                                        token,
                                    });
                                } catch (error) {
                                    res.status(401).json({
                                        success: false,
                                        message: "Document File Formate is not Matched",
                                    });
                                }
                            } else {
                                console.log("Document File Formate is not Matched")
                                res.status(401).json({
                                    success: false,
                                    message: "Please Upload the Document",
                                });

                            }
                        }
                        // If the role is User:
                        else {

                            // hash the password: 
                            const salt = await bcrypt.genSalt(10)
                            const hashPassword = await bcrypt.hash(password, salt)

                            // Making New Instance of the userModel:
                            let user = new userModel({
                                fullName: fullName,
                                email: email,
                                password: hashPassword,
                                role: role,
                                status: "active"
                            });


                            // to save the user
                            await user.save()


                            // use JWT Token:
                            const saved_user = await userModel.findOne({ email: email })
                            // Generate JWT Token:
                            const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });

                            // Give response:
                            res.status(201).json({
                                success: true,
                                message: "Successfully Sign Up",
                                user,
                                token,
                            });
                        }
                    }
                    // If length of passowrd is samller than 8 digits:
                    else {

                        res.status(401).json({
                            success: false,
                            message: "Password should be greater then 8 digits"

                        });


                    }



                }
                // If Password and Conformation are not match:
                else {
                    res.status(401).json({
                        success: false,
                        message: "Password and Confirm Password doesn't match"

                    });


                }


            }
        }
        // If all field are not entered
        else {
            res.status(401).json({
                success: false,
                message: "Please Enter all Details"

            });

        }
    })

    // Get all the User:
    static getAllUser = catchAsyncErrors(async (req, res, next) => {

        // check if the user exists in the database:
        const user = await userModel.find()
        res.status(201).json({
            success: true,
            user,

        });


    })

    // Approve, Reject or block user and compeny:
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
        } else if (status === '3') {
            updatedCompany.status = 'active';

        } else if (status === '4') {
            updatedCompany.status = 'blocked';

        }
        else {
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

                        res.status(201).json({
                            success: true,
                            token,
                            role: user.role,
                            message: "Login Success"

                        });
                    } else if (user.role === 'company' && user.status === "approved") {
                        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });

                        res.status(201).json({
                            success: true,
                            token,
                            role: user.role,
                            message: "Login Success"

                        });
                    } else if (user.role === 'company' && user.status === "rejected") {

                        res.status(401).json({
                            success: false,
                            message: "Your Request is Rejected or Blocked please concern in hemantbasnet61@gmail.com"

                        });
                    }

                    else {
                        res.status(401).json({
                            success: false,
                            message: "Your Request is Pending please Concern in hemantbasnet61@gmail.com"

                        });

                    }


                } else {

                    res.status(401).json({
                        success: false,

                        message: "Email or Password are not valid"

                    });
                }
            } else {

                res.status(401).json({
                    success: false,
                    message: "Email or Password are not valid"

                });
            }
        } else {

            res.status(401).json({
                success: false,
                message: "All Fields are Required"

            });
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

    // Delete the User:
    static deleteUser = catchAsyncErrors(async (req, res, next) => {


        const user = await userModel.findById(req.params.id)
        console.log("This is User", user)
        res.status("Ok")
        if (!user) {
            res.status(401).json({
                success: false,
                message: "User is not found"
            })
        } else {
            await user.deleteOne();
            res.status(200).json({
                success: true,
                message: "User Deleted Successfully"
            })
        }



    })
}


export default userController
