import React, { useState, useEffect, useContext } from 'react';
import SocketContext from "../../utils/socket";
// import CanvasComponent from './components/CanvasComponent';
import './style.css'

// import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'


function Canvas() {

  const { imageData, setImageData } = useContext(SocketContext)

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
      
      <SignatureCanvas penColor='black'
        canvasProps={{ width: 430, height: 200, id: 'canvas', className: 'sigCanvas' }} />

      <button className = "btn btn-dark btn-block custom-button" onClick={submit}>Submit Drawing</button>
      <button className = "btn btn-dark btn-block custom-button" onClick={clearScreen}>Clear</button>

    </div>
  )

}



export default Canvas;
