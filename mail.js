const mailer = require("nodemailer");
require("dotenv").config();

const sendEmail = (to, name, type) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "lbhutchinson022@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mail = getEmailData(to, name, type);
};
