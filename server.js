const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}
const { sendEmail } = require("./mail");

app.post("/api/sendMail", (req, res) => {
  console.log(req.body);
  sendEmail(req.body.email, req.body.name, req.body.body, "hello");
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
