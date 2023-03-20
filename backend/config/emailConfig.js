import dotenv from 'dotenv'
dotenv.config({ path: "config/config.env" });
import nodemailer from 'nodemailer'
console.log("rt",process.env.EMAIL_PORT);
let transporter = nodemailer.createTransport({
    service:'gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Admin Gmail ID
        pass: process.env.EMAIL_PASS, // Admin Gmail Password
    },
})

export default transporter