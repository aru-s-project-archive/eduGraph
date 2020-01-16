var player = document.getElementById('player');
var play = document.getElementById('play');
var end = document.getElementById('end');
var awayTimer = 0;
var awayTimes = []
var timeAway = 0
var inter = null
var yawnCounter = 0
var falseYawnCounter = 0
var yawns = 0
var yawning = false

// const startTime = new Date
// var base = window.location.href;
// var array = base.split("/");

var url = "https://cors-anywhere.herokuapp.com/edugraph-78964.firebaseapp.com/models/"


function startVideo() {
  var handleSuccess = function (stream) {
    player.srcObject = stream;
    console.log(player.srcObject)
  };

  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then(handleSuccess)
}

play.onclick = () => {
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(url),
    faceapi.nets.faceLandmark68Net.loadFromUri(url),
    faceapi.nets.faceRecognitionNet.loadFromUri(url),
    faceapi.nets.faceExpressionNet.loadFromUri(url)
  ]).then(startVideo)
  // const canvas = faceapi.createCanvasFromMedia(player)
  // document.body.append(canvas)
  //const displaySize = { width: player.width, height: player.height }
  // faceapi.matchDimensions(canvas, displaySize)
  inter = setInterval(async () => {
    awayTimer++
    //console.log("player", player)
    const detections = await faceapi.detectAllFaces(player, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
    //const resizedDetections = faceapi.resizeResults(detections, displaySize)
    //console.log(detections)

    if (detections.length) {
      if (awayTimer > 50) {
        timeAway = awayTimer * 100 //converting frames to milliseconds
        awayTimes.push(
          {
            timeAway: timeAway,
            endTime: Date.now()
          }
        )
      }
      awayTimer = 0
      //console.log(detections[0].landmarks.getMouth())
      var mouthPoints = detections[0].landmarks.getMouth()
      var currentYawn = isYawning(mouthPoints)
      if (currentYawn) {
        falseYawnCounter = 0
        yawnCounter++
        if (!yawning) {
          yawning = true
        }
      } else if (yawning) {
        falseYawnCounter++
        if (falseYawnCounter > 10) {
          yawning = false
          falseYawnCounter = 0
          yawnCounter = 0
          yawns++
        }
      }

      console.log(isYawning(detections[0].landmarks.getMouth()))
    }
    // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    // console.log(Date.now())
    // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)

  }, 100)
}


end.onclick = () => {
  console.log(yawns)
  clearInterval(inter)
  inter = null;
}

function isYawning(mouth) {
  var left = mouth[0]
  var top = mouth[3]
  var right = mouth[6]
  var bottom = mouth[9]
  var ratio = faceapi.euclideanDistance([top._x, top._y], [bottom._x, bottom._y]) / faceapi.euclideanDistance([left._x, left._y], [right._x, right._y])
  return ratio > 0.9
}

// player.addEventListener('play', () => {
//   const canvas = faceapi.createCanvasFromMedia(player)
//   document.body.append(canvas)
//   const displaySize = { width: player.width, height: player.height }
//   faceapi.matchDimensions(canvas, displaySize)
//   setInterval(async () => {
//     const detections = await faceapi.detectAllFaces(player, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
//     const resizedDetections = faceapi.resizeResults(detections, displaySize)
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
//     console.log(resizedDetections)
//     faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
//   }, 100)
// })