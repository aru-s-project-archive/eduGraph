const admin = require("firebase-admin");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

var db = admin.firestore();

router.use(bodyParser.json());

router.get("/:userId", async (req, res) => {
  var userId = req.params.userId;
  var userRef = db.collection("Users").doc(userId);
  var userData = await (await userRef.get()).data();
  return res.send(userData);
});

router.post("/addCurrCourse", async (req, res) => {
  var body;
  try {
    body = JSON.parse(req.body);
  } catch (err) {
    body = req.body;
  }
  var userRef = db.collection("Users").doc(body.userId);
  var userData = await (await userRef.get()).data();
  if (!userData.currCourse.includes(body.courseId)) {
    userData.currCourse.push(body.courseId);
    await userRef.set(userData);
    return res.send("success");
  } else {
    return res.status(400).send("person already has curr course");
  }
});

router.post("/addPrevCourse", async (req, res) => {
  var body;
  try {
    body = JSON.parse(req.body);
  } catch (err) {
    body = req.body;
  }
  var userRef = db.collection("Users").doc(body.userId);
  var userData = await (await userRef.get()).data();
  let index = userData.currCourse.indexOf(body.courseId);
  if (index > -1) {
    userData.currCourse.splice(index, 1);
    userData.prevCourse.push(body.courseId);
    await userRef.set(userData);
    return res.send("success");
  } else if (index <= -1) {
    return res.status(400).send("person has not currently taken this course");
  }
  return res.status(400);
});

module.exports = router;
