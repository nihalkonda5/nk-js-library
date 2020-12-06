import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';
import Mail = require('nodemailer/lib/mailer');

console.log(nodemailer, smtpTransport);

let transporter: Mail;

const loadMailerAPI = (email: string, password: string) => {
    transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: email, //"starlight.mailer.service@gmail.com",
            pass: password //"Mailer@Starlight*com"
        }
    }));

    console.log(transporter);
}


const sendMail = ({
    from,
    to,
    subject,
    text
}: {
    from: string,
    to: string,
    subject: string,
    text: string
}) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from,
            to,
            subject,
            text
        }, function (error, response) {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
}

export {loadMailerAPI,sendMail};