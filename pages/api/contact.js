import { escapeHtml, resp200OK, resp400InvalidInput, resp404NotFound, resp500ServerError } from "./_default"
import nodemailer from 'nodemailer';
import * as yup from 'yup';
import validator from 'validator';
import { verifyHCaptcha } from "./_hcaptcha";
const AWS = require("@aws-sdk/client-ses");

const { APP_AWS_REGION, SMTP_AWS_KEY, SMTP_AWS_SECRET, HCAPTCHA_SECRET } = process.env;

// Create SES service object.
const ses = new AWS.SES({
    apiVersion: "2010-12-01",
    region: APP_AWS_REGION,
    credentials: {
        accessKeyId: SMTP_AWS_KEY,
        secretAccessKey: SMTP_AWS_SECRET,
    },
});
  
// Create an SES transporter using nodemailer
const transporter = nodemailer.createTransport({
    SES: { ses, aws: AWS },
});

// Define schema for request
const messageSchema = yup.object({
    name: yup.string().required().max(50),
    email: yup.string().required().email(),
    message: yup.string().required().max(1024),
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        resp404NotFound(res)
        return
    }

    const hcaptcha_token = req.body["h-captcha-response"];
    try {
        const hcaptcha = await verifyHCaptcha(hcaptcha_token)
        if (!hcaptcha.success)
            throw (hcaptcha.errors || ["Unsuccessful HCaptcha challenge"]).join("; ")
    } catch (err) {
        resp400InvalidInput(res, [err, HCAPTCHA_SECRET], "Failed to validate you're not a robot =[");
        return
    }

    let message = req.body;

    try {
        message.name = validator.trim(escapeHtml(message.name));
        message.email = validator.trim(escapeHtml(message.email));
        message.message = validator.trim(escapeHtml(message.message.replace(/\r\n/, "<br />")));
        message = await messageSchema.validate(message);
    } catch (err) {
        let errors = ["invalid input"];
        if (err.errors)
            errors = err.errors;
        else if (err.err)
            errors = [err];

        resp400InvalidInput(res, errors);
        return
    }

    try {
        const info = await transporter.sendMail({
            from: '"Hexonite" <hello@hexonite.net>',
            to: '"Sebastian Stefaniuk" <sebboness@gmail.com>',
            subject: `${message.name} says hello on Hexonite`,
            html: `<p>${message.name}<br />${message.email}</p><p>${message.message}</p>`,
          });
        
        // console.log("Message sent: %s", info.messageId);
        resp200OK(res, "Message has been successfully sent!")
    } catch (err) {
        resp500ServerError(res, [err.err || err], "Failed to send email")
    }
    
    return
  }