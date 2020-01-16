const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const bodyParser = require("body-parser");

var db = admin.firestore();
router.use(bodyParser.json());

router.post("/graph", (req, res) => {
  let result = {
    nodes: [
      {
        id: "Course 1",
        val: 1,
        color: "red"
      },
      {
        id: "Course 2",
        val: 10,
        color: "blue"
      }
    ],
    links: [
      {
        source: "Course 1",
        target: "Course 2"
      }
    ]
  };

  return res.send(result);
});

router.post("/upload", async (req, res) => {
  var body;
  try {
    body = JSON.parse(req.body);
  } catch (err) {
    body = req.body;
  }
  console.log("req.body", body);
  await db
    .collection("Course")
    .doc(body.courseId)
    .set(body.data);
  return res.send("sucess");
});

router.get("/:courseId", async (req, res) => {
  var courseData = await db
    .collection("Course")
    .doc(req.params.courseId)
    .get();
  if (!courseData.exists) {
    return res.send("course doesn't exist");
  }
  courseData = await courseData.data();
  return res.send(courseData);
});

module.exports = router;
