const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

var db = admin.firestore();

router.get("/:userId", async (req, res) => {
  var userData = await (
    await db
      .collection("Users")
      .doc(req.params.userId)
      .get()
  ).data();
  let courses = userData.currCourse;
  let result = [];
  for (let i = 0; i < courses.length; i++) {
    var currCourse = courses[i];
    var currCourseGet = await db
      .collection("Course")
      .doc(currCourse)
      .get();
    if (currCourseGet.exists) {
      var currCourseData = await currCourseGet.data();
      if (currCourseData.topics) {
        for (let j = 0; j < Object.keys(currCourseData.topics).length; j++) {
          result.push(Object.keys(currCourseData.topics)[j]);
        }
      }
    }
  }
  return res.send(result);
});

router.post("/uploadDetails", async (req, res) => {
  var body;
  try {
    body = JSON.parse(req.body);
  } catch (err) {
    body = req.body;
  }

  var userData = await (
    await db
      .collection("Users")
      .doc(body.userId)
      .get()
  ).data();
  if (!userData.scores.attention) {
    userData.scores.attention = [];
  }
  userData.scores.attention.push(body.data);
  await db
    .collection("Users")
    .doc(body.userId)
    .set(userData);
  return res.send("success");
});

module.exports = router;
