import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, grabEnvSecret } from "@/lib/api";
import nodemailer from 'nodemailer';
import * as yup from 'yup';
import validator from 'validator';
import { verifyHCaptcha } from "@/lib/hcaptcha";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const APP_AWS_REGION = grabEnvSecret("APP_AWS_REGION");
const SMTP_AWS_KEY = grabEnvSecret("SMTP_AWS_KEY");
const SMTP_AWS_SECRET = grabEnvSecret("SMTP_AWS_SECRET");

// Create SES service object.
const sesClient = new SESv2Client({
    apiVersion: "2010-12-01",
    region: APP_AWS_REGION,
    credentials: {
        accessKeyId: SMTP_AWS_KEY,
        secretAccessKey: SMTP_AWS_SECRET,
    },
});

// Create an SES transporter using nodemailer
const transporter = nodemailer.createTransport({
    SES: { sesClient, SendEmailCommand },
});

// Define schema for request
const messageSchema = yup.object({
    name: yup.string().required().max(50),
    email: yup.string().required().email(),
    message: yup.string().required().max(1024),
});

interface ContactBody {
    name: string;
    email: string;
    message: string;
    "h-captcha-response"?: string;
}

type ValidatedMessage = yup.InferType<typeof messageSchema>;

const jsonResp = (statusCode: number, status: string, errors: unknown[], message: string, data: unknown = null): NextResponse =>
    NextResponse.json({ status, errors, message, data }, { status: statusCode });

export async function POST(request: NextRequest): Promise<NextResponse> {
    const body: ContactBody = await request.json();
    const hcaptcha_token = body["h-captcha-response"] ?? "";

    try {
        const hcaptcha = await verifyHCaptcha(hcaptcha_token);
        if (!hcaptcha.success) {
            console.warn("HCaptcha verification was not successful", hcaptcha);
            throw (hcaptcha.errors || ["Unsuccessful HCaptcha challenge"]).join("; ");
        }
    } catch (err: unknown) {
        console.warn("HCaptcha verification failed:", err);
        return jsonResp(400, "FAILURE", [err], "Failed to validate you're not a robot =[");
    }

    let message: ValidatedMessage;

    try {
        const sanitized: ContactBody = {
            name: validator.trim(escapeHtml(body.name)),
            email: validator.trim(escapeHtml(body.email)),
            message: validator.trim(escapeHtml(body.message.replace(/\r\n/, "<br />"))),
        };
        message = await messageSchema.validate(sanitized);
    } catch (err: unknown) {
        console.warn("Failed to validate contact request body:", err, body);

        let errors: unknown[] = ["invalid input"];
        if (err instanceof yup.ValidationError)
            errors = err.errors;

        return jsonResp(400, "FAILURE", errors, "Invalid input");
    }

    try {
        const info = await transporter.sendMail({
            from: '"Hexonite" <hello@hexonite.net>',
            to: '"Sebastian Stefaniuk" <sebboness@gmail.com>',
            subject: `${message.name} says hello on Hexonite`,
            html: `<p>${message.name}<br />${message.email}</p><p>${message.message}</p>`,
        });

        console.log("Contact message sent: %s", info.messageId);
        return jsonResp(200, "SUCCESS", [], "Message has been successfully sent!");
    } catch (err: unknown) {
        console.warn("Failed to send contact email:", err);
        return jsonResp(500, "FAILURE", [err], "Failed to send email");
    }
}
