import nodemailer from "nodemailer";

const dotenv = require("dotenv");

const transporter = nodemailer.createTransport({
  host: "smtp.aruba.it",
  port: "465",
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PSW,
  },
});

export default async (req, res) => {
  const {
    name = senderEmail.match(regex).toString(),
    senderMail,
    subject,
    recipientMail,
    content,
  } = req.body;

  const mailerRes = await mailerRes({
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
    replyTo: senderEmail,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
