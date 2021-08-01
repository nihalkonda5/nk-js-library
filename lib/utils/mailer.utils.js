"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.loadMailerAPI = void 0;
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
console.log(nodemailer, smtpTransport);
let transporter;
const loadMailerAPI = (email = "starlight.mailer.service@gmail.com", password = "Mailer@Starlight*com") => {
    transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: email,
            pass: password
        }
    }));
    console.log(transporter);
};
exports.loadMailerAPI = loadMailerAPI;
const sendMail = ({ from, to, subject, text }) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from,
            to,
            subject,
            text
        }, function (error, response) {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        });
    });
};
exports.sendMail = sendMail;
