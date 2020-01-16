const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const cors = require("cors")({ origin: true });
const express = require("express");
const app = express();
const coursesApi = require("./courses");
const userApi = require("./user");

app.use(cors);
app.use(bodyParser.json());
app.use("/courses", coursesApi);
app.use("/user", userApi);

app.get("/", (req, res) => {
  return res.send("api");
});

exports.app = functions.https.onRequest(app);
