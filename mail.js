const mailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const { Hello } = require("./helloTemplate");
// const { Thanks } = require("./thanksTemplate");
require("dotenv").config();

const oauth2Client = new OAuth2(
  "677716646288-l9cq339ahs0tdmujth2nll9jjdjahcci.apps.googleusercontent.com", // ClientID
  "mP-cevlJ8uI9YtWD4SNpmPcc", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token:
    "1//04pdbMO19AyTwCgYIARAAGAQSNwF-L9IrbBcqJ2O1hMKeRhY1y3aK0JcbSJRblCEbnDSLIlS725nlNjYYuTejZb0IYqcQROek8wM",
});
const accessToken = oauth2Client.getAccessToken();

const getEmailData = (to, name) => {
  let data = {
    from: "Lauren Hutchinson <lbhutchinson022@gmail.com>",
    to: to,
    subject: `Hello ${name} !`,
    html: Hello(),
  };

  console.log("console logging data: ", data);
  console.log("console logging 'to': ", to);

  return data;
};

const sendEmail = (to, name, type) => {
  const smtpTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "lbhutchinson022@gmail.com",
      clientId:
        "677716646288-l9cq339ahs0tdmujth2nll9jjdjahcci.apps.googleusercontent.com",
      clientSecret: "mP-cevlJ8uI9YtWD4SNpmPcc",
      refreshToken:
        "1//04pdbMO19AyTwCgYIARAAGAQSNwF-L9IrbBcqJ2O1hMKeRhY1y3aK0JcbSJRblCEbnDSLIlS725nlNjYYuTejZb0IYqcQROek8wM",
      accessToken: accessToken,
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
