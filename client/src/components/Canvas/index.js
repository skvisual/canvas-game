import React, { useContext } from 'react';
import SocketContext from "../../utils/socket";
import './style.css'

// import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'


function Canvas() {
var canvasWidth = 430;
  if (window.innerWidth<400){
       canvasWidth = 300;
  }
  else if (window.innerWidth<500){
     canvasWidth = 350;
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
      <SignatureCanvas penColor='black' backgroundColor ='white'
        canvasProps={{ width: canvasWidth, height: 200, id: 'canvas', className: 'sigCanvas' }} />

      <button className = "btn btn-dark btn-block custom-button" onClick={submit}>Submit Drawing</button>
      <button className = "btn btn-dark btn-block custom-button" onClick={clearScreen}>Clear</button>
    </div>
  )
}

export default Canvas;