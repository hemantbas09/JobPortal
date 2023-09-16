import userModel from "../Models/userModel.js";
import CompanyProfile from "../Models/companyProfile.js";
import userProfileModel from "../Models/userProfile.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import catchAsyncErrors from "../Middleware/catchAsyncErrors.js";
import transporter from "../config/emailConfig.js";
import generateVerificationToken from "../Middleware/helpers.js";
import passport from "passport";
import cloudinary from "../config/cloudinary.js";

class userController {
  // Start the Regestration:
  static async sendEmailVerification(user, verificationToken) {
    const encodedToken = verificationToken;
    const verificationLink = `http://localhost:5173/verify?token=${encodedToken}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Email Verification",
      html: `
        <div style="font-family: Arial, sans-serif; text-align: justify;">
          <h3 style="text-align: center;">Email Verification</h3>
          <p style="font-size: 16px;">
            Dear ${user.fullName},
          </p>
          <p style="font-size: 16px;">
            Thank you for registering with our website. To activate your account, please click the button below to verify your email address.
          </p>
          <p style="text-align: center;">
            <a href="${verificationLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; cursor: pointer;">
              Verify Email
            </a>
          </p>
          <p style="font-size: 16px;">
            If you did not create an account on our website, please disregard this email.
          </p>
          <p style="font-size: 16px;">
            If you have any questions or need further assistance, please don't hesitate to contact our support team at support@example.com. We're here to help you.
          </p>
          <p style="font-size: 16px;">
            Thank you for choosing our services.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  }

  static userRegistration = catchAsyncErrors(async (req, res, next) => {
    const { fullName, email, password, passwordConfirmation, role } = req.body;
    if (password !== passwordConfirmation) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password do not match.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password should be at least 8 characters long.",
      });
    }

    // Email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    if (fullName.length < 2 || fullName.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Full name should be between 2 and 50 characters long.",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const verificationToken = generateVerificationToken();
    const verificationTokenExpires = Date.now() + 24 * 60 * 60 * 1000;

    const user = new userModel({
      fullName,
      email,
      password: hashPassword,
      role,
      status: "pending",
      verificationToken,
      verificationTokenExpires,
    });

    await user.save();

    await userController.sendEmailVerification(user, verificationToken);

    res.status(201).json({
      success: true,
      message:
        "Successfully registered. Please check your email to verify your account.",
      user,
    });
  });

  static verifyEmail = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.body;

    const user = await userModel.findOneAndUpdate(
      {
        verificationToken: token,
        verificationTokenExpires: { $gt: Date.now() },
      },
      {
        $set: {
          status: "active",
          verificationToken: undefined,
          verificationTokenExpires: undefined,
          isVerified: true,
        },
      },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification token.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Email verified. You can now login to your account.",
      user,
    });
  });

  // End of the Regestration:

  static googleAuth = catchAsyncErrors(async (req, res, next) => {
    passport.authenticate("google", { scope: ["profile", "email"] })(
      req,
      res,
      next
    );
  });

  // Get all the User:
  static getAllUser = catchAsyncErrors(async (req, res, next) => {
    // check if the user exists in the database:
    const user = await userModel.find();
    res.status(201).json({
      success: true,
      user,
    });
  });

  // Approve, Reject or block user and compeny:
  static companyRejectApproved = catchAsyncErrors(async (req, res, next) => {
    const companyID = req.body["companyId"];
    const status = req.body["status"];
    console.log("this is n th body", companyID);
    console.log("this is n uith body", status);
    // check if the user exists in the database:
    const company = await userModel.findById(companyID);

    const updatedCompany = await userModel.findByIdAndUpdate(
      companyID,
      { status },
      { new: true }
    );
    if (status === "0") {
      updatedCompany.status = "active";
    } else if (status === "1") {
      updatedCompany.status = "blocked";
    }

    await updatedCompany.save();

    res.status(200).json({
      success: true,
      message: "Company status updated successfully",
      company: updatedCompany,
    });
  });

  static userLogin = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (email && password) {
      const user = await userModel.findOne({ email: email });

      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);

        if (user.email === email && isMatch) {
          // Check if the user is activated
          if (user.status === "active") {
            // Generate JWT Token
            const token = jwt.sign(
              { userID: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );

            res.status(201).json({
              success: true,
              token,
              role: user.role,
              message: "Login Success",
            });
          } else {
            res.status(401).json({
              success: false,
              message: "Your account is not Verified. Please Check your Email:",
            });
          }
        } else {
          res.status(401).json({
            success: false,
            message: "Email or Password are not valid",
          });
        }
      } else {
        res.status(401).json({
          success: false,
          message: "Email or Password are not valid",
        });
      }
    } else {
      res.status(401).json({
        success: false,
        message: "All Fields are Required",
      });
    }
  });

  static changeuserPassword = catchAsyncErrors(async (req, res, next) => {
    const { password, passwordConfirmation } = req.body;
    console.log(req.body);
    if (password && passwordConfirmation) {
      if (password !== passwordConfirmation) {
        res.send({
          status: "failed",
          message: "New Password and Confirm Password are not matched",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const newhashPassword = await bcrypt.hash(password, salt);
        console.log(newhashPassword);
        await userModel.findByIdAndUpdate(req.user._id, {
          $set: {
            password: newhashPassword,
          },
        });
        res.send({
          status: "success",
          message: "Password change SUccesfully",
        });
      }
    } else {
      res.send({
        status: "failed",
        message: "All Fields are Required",
      });
    }
  });

  static loggedUser = catchAsyncErrors(async (req, res, next) => {
    res.send({ user: req.user });
  });

  static sendUserPasswordResetEmail = async (req, res, next) => {
    // email taken from user:
    const { email } = req.body;
    if (email) {
      const user = await userModel.findOne({ email: email });
      console.log("this is user", user);
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY;
        console.log(process.env.JWT_SECRET_KEY);
        // const secret= crypto.randomBytes(32).toString('hex');
        const token = jwt.sign({ userID: user._id }, secret, {
          expiresIn: "15m",
        });
        const encodedToken = Buffer.from(token).toString("base64");
        const link = `http://localhost:5173/api/user/reset-password/${user._id}/${encodedToken}`;
        console.log(link);
        // Send Email:
        console.log("hemant pitai khanxas", user.fullName);
        await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: user.email,
          subject: "Password Reset Link",
          html: `
              <div style="font-family: Arial, sans-serif; text-align: justify;">
                <h3 style="text-align: center;">Password Reset Link</h3>
                <p style="font-size: 16px;">
                  Dear ${user.fullName},
                </p>
                <p style="font-size: 16px;">
                  We recently received a request to reset your password for your account. To proceed with the password reset, please click on the link provided below:
                </p>
                
                <p style="text-align: center;">
                  <a href=${link} style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
                    Click Here
                  </a>
                </p>
                <p style="font-size: 16px;">
                  If you did not request a password reset or believe this email was sent to you by mistake, please disregard it. Your current password will remain unchanged.
                </p>
                <p style="font-size: 16px;">
                  If you have any questions or need further assistance, please don't hesitate to contact our support team at buranjobportal61@gmail.com. We're here to help you.
                </p>
               
                <p style="font-size: 16px;">
                  Thank you for choosing our services.
                </p>
              </div>
            `,
        });

        res.send({
          status: "success",
          message: "Password Reset Email Sent... Please Check Your Email",
        });
      } else {
        res.send({
          status: "failed",
          message: "Email doesn't exists",
        });
      }
    } else {
      res.send({ status: "failed", message: "Email Field is Required" });
    }
  };

  static userPasswordReset = catchAsyncErrors(async (req, res, next) => {
    const { password, passwordConfirmation } = req.body;

    const { id, token } = req.params;
    const user = await userModel.findById(id);
    const newSecret = user._id + process.env.JWT_SECRET_KEY;
    try {
      const decodedToken = Buffer.from(token, "base64").toString("utf-8");
      jwt.verify(decodedToken, newSecret);
      if (password && passwordConfirmation) {
        if (password !== passwordConfirmation) {
          console.log(password);
          console.log(passwordConfirmation);
          res.send({
            status: "failed",
            message: "New Password and Confirm New Password doesn't match",
          });
        } else {
          const salt = await bcrypt.genSalt(10);
          const newHashPassword = await bcrypt.hash(password, salt);
          await userModel.findByIdAndUpdate(user._id, {
            $set: { password: newHashPassword },
          });
          res.send({
            status: "success",
            message: "Password Reset Successfully",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "All Fields are Required",
        });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Invalid Token" });
    }
  });

  // Delete the User:
  static deleteUser = catchAsyncErrors(async (req, res, next) => {
    const userId = req.params.id; // Extract the user ID from the request parameters
    const user = await userModel.findById(userId); // Use the extracted user ID
    console.log("This is User", user);
    console.log(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  });

  static resetPassword = catchAsyncErrors(async (req, res, next) => {
    const { password, passwordConfirmation, oldpassword } = req.body;

    if (password !== passwordConfirmation) {
      res.status(400).json({
        success: false,
        message: "Password and confirm password must match.",
      });
    }

    // Validate request
    if (!password || !oldpassword) {
      res.status(400).json({
        success: false,
        message: "Both old password and new password are required.",
      });
    }
    // Validate request

    // Find the user based on user ID

    const { id } = req.params;
    const user = await userModel.findById(id);

    // Compare old password with stored password
    const isPasswordValid = await bcrypt.compare(oldpassword, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      res.status(400).json({
        success: false,
        message: "Invalid old password.",
      });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(password, salt);

    // Update the user's password
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successful.",
    });
  });

  static userProfile = catchAsyncErrors(async (req, res, next) => {
    const profileData = req.body;
    const userId = req.user.id;
    // Check if the user already has a profile
    let existingProfile = await userProfileModel.findOne({ user: userId });
    console.log("This is data", profileData);
    // If a profile already exists, update the existing profile
    if (existingProfile) {
      // Update profile picture
      if (profileData.profilePicture) {
        const profilePictureUpload = await cloudinary.uploader.upload(
          profileData.profilePicture,
          {
            allowed_formats: ["jpeg", "jpg", "png"],
          }
        );

        profileData.profilePicture = {
          public_id: profilePictureUpload.public_id,
          url: profilePictureUpload.url,
        };
      }

      // Update cover picture
      if (profileData.coverPicture) {
        const coverPictureUpload = await cloudinary.uploader.upload(
          profileData.coverPicture,
          {
            allowed_formats: ["jpeg", "jpg", "png"],
          }
        );

        profileData.coverPicture = {
          public_id: coverPictureUpload.public_id,
          url: coverPictureUpload.url,
        };
      }

      // Update the existing profile with the new data
      existingProfile.set(profileData);
      await existingProfile.save();

      res.status(200).json({
        success: true,
        message: "Company profile updated successfully",
        company: existingProfile,
      });
    } else {
      // Create a new profile if no existing profile is found
      profileData.user = userId;

      // Create a new instance of the CompanyProfile model with the incoming data
      const newCompanyProfile = new userProfileModel(profileData);

      // Save the company profile to the database
      await newCompanyProfile.save();

      res.status(201).json({
        success: true,
        message: "Company profile created successfully",
        company: newCompanyProfile,
      });
    }
  });

  static companyProfile = catchAsyncErrors(async (req, res, next) => {
    const profileData = req.body;
    const userId = req.user.id;

    // Check if the user already has a profile
    let existingProfile = await CompanyProfile.findOne({ user: userId });

    // If a profile already exists, update the existing profile
    if (existingProfile) {
      // Update profile picture
      if (profileData.profilePicture) {
        const profilePictureUpload = await cloudinary.uploader.upload(
          profileData.profilePicture,
          {
            allowed_formats: ["jpeg", "jpg", "png"],
          }
        );

        profileData.profilePicture = {
          public_id: profilePictureUpload.public_id,
          url: profilePictureUpload.url,
        };
      }

      // Update cover picture
      if (profileData.coverPicture) {
        const coverPictureUpload = await cloudinary.uploader.upload(
          profileData.coverPicture,
          {
            allowed_formats: ["jpeg", "jpg", "png"],
          }
        );

        profileData.coverPicture = {
          public_id: coverPictureUpload.public_id,
          url: coverPictureUpload.url,
        };
      }

      // Update the existing profile with the new data
      existingProfile.set(profileData);
      await existingProfile.save();

      res.status(200).json({
        success: true,
        message: "Company profile updated successfully",
        company: existingProfile,
      });
    } else {
      // Create a new profile if no existing profile is found
      profileData.user = userId;

      // Create a new instance of the CompanyProfile model with the incoming data
      const newCompanyProfile = new CompanyProfile(profileData);

      // Save the company profile to the database
      await newCompanyProfile.save();

      res.status(201).json({
        success: true,
        message: "Company profile created successfully",
        company: newCompanyProfile,
      });
    }
  });
  static getCompanyProfile = catchAsyncErrors(async (req, res, next) => {
    const userId = req.params.userId;
    const companyProfile = await CompanyProfile.find({ userId });
    res.status(200).json({
      success: true,
      message: "successfully",
      companyProfile: companyProfile,
    });
  });
  static getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const userId = req.params.userId;
    const userProfile = await userProfileModel.find({ userId });
    console.log(userId);
    res.status(200).json({
      success: true,
      message: "successfully",
      userProfile: userProfile,
    });
  });
}

export default userController;
