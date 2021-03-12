const mailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const Hello = require("./helloTemplate");
require("dotenv").config();

const oauth2Client = new OAuth2(
  "677716646288-l9cq339ahs0tdmujth2nll9jjdjahcci.apps.googleusercontent.com", // ClientID
  "mP-cevlJ8uI9YtWD4SNpmPcc", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token:
    "1//04-Ww9EwdbQVoCgYIARAAGAQSNwF-L9IrCvxsuv9b1pwnAYyY_RokAFz-6bv9L0N-w12Kp74xMuOKBIWk6PmNj4B-zQC--FHSCuU",
});
const accessToken = oauth2Client.getAccessToken();

const getEmailData = (to, name, body) => {
  console.log();
  let data = {
    from: "Lauren Hutchinson <lbhutchinson022@gmail.com>",
    to: "lbhutchinson022@gmail.com",
    subject: `Hey ${name}, lets connect.`,
    html: Hello(name, body, to),
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
        "1//04-Ww9EwdbQVoCgYIARAAGAQSNwF-L9IrCvxsuv9b1pwnAYyY_RokAFz-6bv9L0N-w12Kp74xMuOKBIWk6PmNj4B-zQC--FHSCuU",
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
