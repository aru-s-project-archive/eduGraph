import React from "react";

import * as faceapi from 'face-api.js';


class temp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.awayTimer = 0;
        this.awayTimes = []
        this.timeAway = 0
        this.inter = null
        this.yawnCounter = 0
        this.falseyawnCounter = 0
        this.yawns = 0
        this.yawning = false;
        this.url = "https://cors-anywhere.herokuapp.com/edugraph-78964.firebaseapp.com/models/"
        this.player = React.createRef();
    }

    startVideo = () => {
        console.log("player", this.player)
        var handleSuccess = (stream) => {
            console.log('hello')
            this.player.current.srcObject = stream;
            console.log(this.player.current.srcObject)
        };

        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then(handleSuccess)
    }


    startOnClick = () => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(this.url),
            faceapi.nets.faceLandmark68Net.loadFromUri(this.url),
            faceapi.nets.faceRecognitionNet.loadFromUri(this.url),
            faceapi.nets.faceExpressionNet.loadFromUri(this.url)
        ]).then(this.startVideo)
        this.inter = setInterval(async () => {
            console.log('hi')
            this.awayTimer++
            let detections = await faceapi.detectAllFaces(this.player.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
            //const resizedDetections = faceapi.resizeResults(detections, displaySize)
            // console.log(faceapi.detectAllFaces);


            if (detections.length) {
                if (this.awayTimer > 50) {
                    this.timeAway = this.awayTimer * 100 //converting frames to milliseconds
                    this.awayTimes.push(
                        {
                            timeAway: this.timeAway,
                            endTime: Date.now()
                        }
                    )
                }
                this.awayTimer = 0
                //console.log(detections[0].landmarks.getMouth())
                var mouthPoints = detections[0].landmarks.getMouth()
                var currentYawn = this.isthis.yawning(mouthPoints)
                if (currentYawn) {
                    this.falsethis.yawnCounter = 0
                    this.yawnCounter++
                    if (!this.yawning) {
                        this.yawning = true
                    }
                } else if (this.yawning) {
                    this.falsethis.yawnCounter++
                    if (this.falsethis.yawnCounter > 10) {
                        this.yawning = false
                        this.falsethis.yawnCounter = 0
                        this.yawnCounter = 0
                        this.yawns++
                    }
                }

                console.log(this.yawning(detections[0].landmarks.getMouth()))
            }
            // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
            // console.log(Date.now())
            // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)

        }, 100)
    }

    render = () => {
        return (<div>
            <button onClick={this.startOnClick} >hullo</button>
            <video id="player" ref={this.player} />
        </div>)
    }
}

export default temp;