
import multer from 'multer';
import path from 'path';
import catchAsyncErrors from '../Middleware/catchAsyncErrors.js'

// Create a storage engine that only allows PDF files
const pdfStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/pdf");
        console.log("pdf kinavayana")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
        console.log("pdf kinavayana")
    },
});

const pdfFilter = function (req, file, cb) {
    // Accept pdf files only
    if (file.mimetype === "application/pdf") {
        cb(null, true); 
        console.log("pdf kinavayana")
        
    } else {
        cb(new Error("Invalid file type, only PDF files are allowed!"), false);
        console.log("pdf kinavayana")
    }
};

const pdfUpload = multer({
    storage: pdfStorage,
    fileFilter: pdfFilter
}

);







export default pdfUpload
