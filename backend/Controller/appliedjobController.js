import appliedJobModel from "../Models/appliedjobModel.js";
import catchAsyncErrors from '../Middleware/catchAsyncErrors.js'
import multer from 'multer'
import path from "path";
import fs from "fs"

class appliedjobController {

    static bookmarkjob = async (req, res, next) => {

        try {
            const jobId = req.params.jobId;
            const userId = req.user.id; // Assuming user authentication is implemented
            const job = await Job.findById(jobId);

            if (!job) {
                return res.status(404).json({
                    success: false,
                    message: 'Job not found'
                });
            }

            // Check if job is already bookmarked
            if (job.bookmarks.includes(userId)) {
                return res.status(400).json({
                    success: false,
                    message: 'Job already bookmarked'
                });
            }

            // Add user to bookmarks array
            job.bookmarks.push(userId);
            await job.save();

            res.status(200).json({
                success: true,
                message: 'Job bookmarked successfully'
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Server error'
            });
        }
    };



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