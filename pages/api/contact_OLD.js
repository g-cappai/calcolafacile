import nodemailer from "nodemailer";

const isDev = process.env.NODE_ENV == "development";

// const transporter = nodemailer.createTransport({
//   host: "smtps.aruba.it",
//   port: "465",
//   logger: isDev,
//   debug: isDev,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PSW,
//   },
//   tls: {
//     minVersion: "TLSv1.2",
//     rejectUnauthorized: !isDev,
//   },
// });

export default async (req, res) => {
  const promise = new Promise((resolve, reject) => {
    let error = new Error("Questo è un error obj");

    error ? reject(error) : resolve("Risolto");
  });

  return promise
    .then((response) => res.send(response))
    .catch((error) => {
      res.send(error);
    });
};

//   const { name, senderMail, subject, content } = req.body;

//   const mailerRes = await mailer({
//     name,
//     senderMail,
//     subject,
//     recipientMail: process.env.CONTACT_EMAIL,
//     text: content,
//   });

//   res.send(mailerRes);
// };

// const mailer = ({ name, senderMail, subject, text }) => {
//   const username = name || senderMail.match(/.+?(?=@)/).toString();
//   const from = `${username} <${senderMail}>`;
//   const message = {
//     from,
//     to: process.env.CONTACT_EMAIL,
//     subject,
//     text,
//     replyTo: senderMail,
//   };

//   if (isDev) console.log(message);

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     );
//   });
// };
