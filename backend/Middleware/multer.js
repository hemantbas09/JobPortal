import multer from 'multer';
import sharp from 'sharp';
import path from 'path';

// Create a storage engine that only allows PDF files
const multerStorage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, "../uploads");
        console.log("pdf kinavayana");
    },
    filename: function (req, file, cb) {
        const documentName=`image ${Date.now()} - ${file.originalname}`;
        cb(null, documentName);
        console.log(`Document name is ${documentName}`);
    },
});

const multerFilter = function (req, file, cb) {
    // Accept pdf files only
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
        console.log("pdf kinavayana");
    } else {
        cb(new Error("Invalid file type, only PDF files are allowed!"), false);
        console.log("pdf kinavayana");
    }
};

const uploaPhoto = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    // limits:{fieldSize:5000000}
}).single("document")

export default uploaPhoto;
