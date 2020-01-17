import React, { createRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import Gif from '/Users/Swa/Documents/CODING/SCSE HACK 2020/eduGraph/front-end/src/giphy.gif';



class Main extends React.Component {

    mystyle = {
        fontSize: 60,
        fontFamily: "ChalkboardSE-Bold"
      };

    gifpos ={
        padding : 150
    }

    navstyle = {
        width : 50,
        height : 50,
        position : 'absolute',
        paddingRight : 10,
        top : 30
    }

    buttonstyle = {
        position : 'absolute',
        top : 35,
        right : 35
    }

    parastyle = {
        position: 'absolute',
        top:105,
        fontFamily : "Noteworthy-Bold",
        fontSize : 15,
        textAlign: 'center',
        padding : 30
    }

    parastyle1 = {
        position: 'absolute',
        top:200,
        fontFamily : "Noteworthy-Bold",
        fontSize : 15,
        textAlign: 'center',
        padding: 30
    }


    render () {
        return [
            <p style={this.mystyle}>eduGraph</p>,
            <p style = {this.parastyle}>EduGraph is a software that makes learning efforless and tranquil. We build a knowledge graph for each course which helps better tracking of topics and helps assosiate different concepts </p>,
            <p style = {this.parastyle1}>EduGraph also tracks your attention at different levels and gives you a score based on your attention and grades. With eduGraph, learning is accelerated and simplified </p>,
            <img style={this.gifpos} src = {Gif} />,
            <Button style={this.buttonstyle} variant="secondary">Log In</Button>
            
        ]
      }

}

export default Main;