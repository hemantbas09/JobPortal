import multer from 'multer';
import path from 'path';
import catchAsyncErrors from '../Middleware/catchAsyncErrors.js';

// Create a storage engine that only allows PDF files
const pdfStorage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, "../uploads");
        console.log("pdf kinavayana");
    },
    filename: function (req, file, cb) {
        const documentName=`pdf ${Date.now()} - ${file.originalname}`;
        cb(null, documentName);
        console.log(`Document name is ${documentName}`);
    },
});

const pdfFilter = function (req, file, cb) {
    // Accept pdf files only
    if (file.mimetype.startsWith("pdf")) {
        cb(null, true);
        console.log("pdf kinavayana");
    } else {
        cb(new Error("Invalid file type, only PDF files are allowed!"), false);
        console.log("pdf kinavayana");
    }
};

const pdfUpload = multer({
    storage: pdfStorage,
    fileFilter: pdfFilter,
}).single("document")

export default pdfUpload;
