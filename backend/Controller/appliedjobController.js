import appliedJobModel from "../Models/appliedjobModel.js";
import catchAsyncErrors from '../Middleware/catchAsyncErrors.js'
import jobModel from "../Models/jobModel.js";
import multer from 'multer'
import path from "path";
import fs from "fs"
import { v2 as cloudinary } from 'cloudinary';
import e from "express";
class appliedjobController {

    static jobApplied = catchAsyncErrors(async (req, res, next) => {
        const { resume } = req.body
        console.log("This",req.body)
        const userId = "64305d840dae4c4f629eaf21";
        const jobId = req.params.id;
        const companyId = "64305d840dae4c4f629eaf21"
        // Check if the user has already applied for the job
        const existingApplication = await appliedJobModel.findOne({
            candidate: userId,
            job: jobId
        });


        if (existingApplication) {

            return res.status(400).json({
                success: false,
                message: 'You have already applied for this job'
            });


        } else {

            // upload cv:
            var myCloud = await cloudinary.uploader.upload(resume, {
                allowed_formats: ['jpeg', 'jpg', 'png', 'pdf'],
                folder: "document",
                width: 150,
                crop: "scale",
            });
            // create a new Application:
            const newApplication = new appliedJobModel({
                candidate: userId,
                job: jobId,
                company: companyId,
                resume: {
                    public_id: myCloud.public_id,
                    url: myCloud.url,
                },

            });
            // for saving the application
            await newApplication.save();
            res.status(200).json({
                success: true,
                message: 'Job application submitted successfully'
            });
        }

    });



    static applyJob = async (req, res, next) => {



        // Set storage engine
        const storage = multer.diskStorage({
            destination: './uploads/',
            filename: function (req, file, cb) {
                cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            }
        });

        // Initialize upload
        const upload = multer({
            storage: storage,
            fileFilter: function (req, file, cb) {
                checkFileType(file, cb);
            }
        }).single('pdfFile');

        // Check file type
        function checkFileType(file, cb) {
            const filetypes = /pdf/;
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
            const mimetype = filetypes.test(file.mimetype);

            if (mimetype && extname) {
                return cb(null, true);
            } else {
                cb('Error: PDF file only!');
            }
        }

        // Handle file upload
        const uploadPDF = function (req, res) {
            upload(req, res, function (err) {
                if (err) {
                    res.status(400).json({
                        success: false,
                        message: err
                    });
                } else {
                    // File uploaded successfully
                    res.status(200).json({
                        success: true,
                        message: 'File uploaded successfully'
                    });
                }
            });
        };







    }


    static updateApplyjob = async (req, res, next) => {



        // Set storage engine
        const storage = multer.diskStorage({
            destination: './uploads/',
            filename: function (req, file, cb) {
                cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            }
        });

        // Initialize upload
        const upload = multer({
            storage: storage,
            fileFilter: function (req, file, cb) {
                checkFileType(file, cb);
            }
        }).single('pdfFile');

        // Check file type
        function checkFileType(file, cb) {
            const filetypes = /pdf/;
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
            const mimetype = filetypes.test(file.mimetype);

            if (mimetype && extname) {
                return cb(null, true);
            } else {
                cb('Error: PDF file only!');
            }
        }

        // Handle file update
        exports.updatePDF = function (req, res) {
            // Check if file exists
            const filePath = './uploads/' + req.params.filename;
            if (fs.existsSync(filePath)) {
                // File exists, delete it
                fs.unlinkSync(filePath);
            }

            // Upload new file
            upload(req, res, function (err) {
                if (err) {
                    res.status(400).json({
                        success: false,
                        message: err
                    });
                } else {
                    // File uploaded successfully
                    res.status(200).json({
                        success: true,
                        message: 'File updated successfully'
                    });
                }
            });
        };


    }

    static bookmarkjob = async (req, res, next) => {

    }

}

export default appliedjobController