const mailer = require("nodemailer");
const { Hello } = require("./hello_template");
require("dotenv").config();

const getEmailData = (to, name, template) => {
  let data = null;

  switch (template) {
    case "hello":
      data = {
        from: "Lauren Hutchinson <lbhutchinson022@gmail.com>",
        to,
        subject: `hello ${name}`,
        html: Hello(),
      };
      break;
    case "thanks":
      data = {
        from: "Lauren Hutchinson <lbhutchinson022@gmail.com>",
        to,
        subject: `hello ${name}`,
        html: THanks(),
      };
      break;

    default:
      break;
  }

  return data;
};

const sendEmail = (to, name, type) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "lbhutchinson022@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mail = getEmailData(to, name, type);

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("emailed sent successfully");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
