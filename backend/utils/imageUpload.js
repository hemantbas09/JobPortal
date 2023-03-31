const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Initialize upload
const upload = multer({ storage: storage }).single('image');

// Handle image upload
exports.uploadImage = function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(400).json({
        success: false,
        message: 'Error uploading image: ' + err.message
      });
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(500).json({
        success: false,
        message: 'Error uploading image: ' + err.message
      });
    } else {
      // Image uploaded successfully.
      res.status(200).json({
        success: true,
        message: 'Image uploaded successfully',
        imageUrl: req.file.path
      });
    }
  });
};
