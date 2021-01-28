import nodemailer from "nodemailer";

const dotenv = require("dotenv");

const transporter = nodemailer.createTransport({
  host: "smtps.aruba.it",
  port: "465",
  logger: true,
  secure: true,
  debug: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PSW,
  },
  tls: {
    minVersion: "TLSv1.2",
  },
});

export default async (req, res) => {
  const { name, senderMail, subject, recipientMail, content } = req.query;

  const mailerRes = await mailer({
    name,
    senderMail,
    subject,
    recipientMail,
    text: content,
  });
  res.send(mailerRes);
};

const mailer = ({ name, senderMail, subject, recipientMail, text }) => {
  const from = `${name} <${senderMail}>`;
  const message = {
    from,
    to: process.env.CONTACT_EMAIL,
    subject,
    text,
    replyTo: senderMail,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};
