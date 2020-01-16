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
router.get("/allCourses/:userId", async (req, res) => {
  var userData = await (
    await db
      .collection("Users")
      .doc(req.params.userId)
      .get()
  ).data();
  let courses = userData.currCourse;
  let result = {};
  for (let i = 0; i < courses.length; i++) {
    var currCourse = courses[i];
    var currCourseGet = await db
      .collection("Course")
      .doc(currCourse)
      .get();
    if (currCourseGet.exists) {
      var currCourseData = await currCourseGet.data();
      result[currCourse] = currCourseData;
    }
  }
  return res.send(result);
});

router.post("/uploadNotes", async (req, res) => {
  var body;
  try {
    body = JSON.parse(body);
  } catch (err) {
    body = req.body;
  }
  var userInfo = await (
    await db
      .collection("Users")
      .doc(body.userId)
      .get()
  ).data();
  if (!userInfo.notes) {
    userInfo.notes = {};
  }
  if (!userInfo.notes[body.courseId]) {
    userInfo.notes[body.courseId] = {};
  }
  for (let i = 0; i < body.topics.length; i++) {
    let currTopic = body.topics[i];
    if (!userInfo.notes[body.courseId][currTopic]) {
      userInfo.notes[body.courseId][currTopic] = [];
    }
    userInfo.notes[body.courseId][currTopic].push(body.notes);
  }
  await db
    .collection("Users")
    .doc(body.userId)
    .set(userInfo);
  return res.send("success");
});
module.exports = router;
