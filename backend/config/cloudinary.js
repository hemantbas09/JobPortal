import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Configuration:
dotenv.config({ path: "config/config.env" });
// Configuration 
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

console.log("This is",process.env.cloud_name)
// Upload

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', { public_id: "olympic_flag" })

// res.then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
// }).catch((err) => {
//     console.log(err);
// });


export default cloudinary