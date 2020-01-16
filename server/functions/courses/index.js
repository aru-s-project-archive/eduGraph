const functions = require("firebase-functions");
const express = require("express");
const router = express.Router();

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

module.exports = router;
