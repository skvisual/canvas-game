import React, { useContext } from 'react';
import SocketContext from "../../utils/socket";
import './style.css';
import pigCanvas from "../../assets/images/canvas_pig.png";

// import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'


function Canvas() {
var canvasWidth = 425;
  // if (window.innerWidth<400){
  //      canvasWidth = 300;
  // }
   if (window.innerWidth<500){
     canvasWidth = window.innerWidth - 75;
  }
  const { setImageData } = useContext(SocketContext)
  var canvas = document.getElementById('canvas');
  function submit() {
    canvas = document.getElementById('canvas');
    var dataURL = canvas.toDataURL();
    setImageData(dataURL)
  }

  function clearScreen() {
    canvas = document.getElementById('canvas');
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className="App"> 
    <img className="text-center" id="pigCanvas" src={pigCanvas} alt="Squigglepig Logo"/>
      <SignatureCanvas penColor='black' backgroundColor ='white'
        canvasProps={{ width: canvasWidth, height: 200, id: 'canvas', className: 'sigCanvas' }} />

      <button className = "btn btn-outline-dark btn-block custom-button" onClick={submit}>Submit Drawing</button>
      <button className = "btn btn-outline-dark btn-block custom-button" onClick={clearScreen}>Clear</button>
    </div>
  )
}

export default Canvas;