const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/sendMail", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("server running at 5000");
});
