import nodemailer from "nodemailer";

const isDev = process.env.NODE_ENV == "development";

const transporter = nodemailer.createTransport({
  host: "smtps.aruba.it",
  port: "465",
  logger: isDev,
  debug: isDev,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PSW,
  },
  tls: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: !isDev,
  },
});

export default async (req, res) => {
  // COMMENT OUT EVERYTHING ELSE FOR TESTING (PROVISORY)
  //   let fakeStatus = { status: "success" };
  //   let response = await setTimeout(() => res.json(fakeStatus), 2000);

  //   response;
  // };

  const { name, senderMail, subject, content } = req.body;
  const username = name || senderMail.match(/.+?(?=@)/).toString();
  const from = `${username} <${senderMail}>`;
  const message = {
    from,
    to: process.env.CONTACT_EMAIL,
    subject,
    text: content,
    replyTo: senderMail,
  };

  transporter.sendMail(message, (err, data) => {
    if (err) {
      res.json({ status: "fail", error: err });
    } else {
      res.json({ status: "success" });
    }
  });
};
