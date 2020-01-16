const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const bodyParser = require("body-parser");
const cors = require("cors")({ origin: true });
const express = require("express");
const app = express();
const coursesApi = require("./courses");
const userApi = require("./user");
const attentionApi = require("./attentionAnalytics");

app.use(cors);
app.use(bodyParser.json());
app.use("/courses", coursesApi);
app.use("/user", userApi);
app.use("/attention", attentionApi);

app.get("/", (req, res) => {
  return res.send("api");
});

exports.app = functions.https.onRequest(app);

exports.createUser = functions.auth.user().onCreate(async user => {
  let db = admin.firestore();
  console.log("user details", user);
  await db
    .collection("Users")
    .doc(user.uid)
    .set({
      details: {
        email: user.providerData[0].email
      },
      currCourse: [],
      prevCourse: [],
      scores: {},
      notes: {}
    });
});
