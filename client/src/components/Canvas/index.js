import React, { useState, useEffect } from 'react';
// import CanvasComponent from './components/CanvasComponent';
import './style.css'

// import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'


function Canvas() {

  var canvas = document.getElementById('canvas');


  const [imageData, setImageData] = useState();




  function log() {
    canvas = document.getElementById('canvas');

    var dataURL = canvas.toDataURL();

    setImageData(dataURL)

    // console.log("image")
    // console.log("image", imageData)

  }

  function clearScreen() {
    canvas = document.getElementById('canvas');
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)


    
  }

  useEffect(() => {
    if (imageData) {

      console.log("effect", imageData)

    }
  }, [imageData])

  // TODO: Make Canvas resize to fit screen size
  return (
    <div className="App">
      
      <SignatureCanvas penColor='black'
        canvasProps={{ width: 420, height: 200, id: 'canvas', className: 'sigCanvas' }} />
      {/* <SignatureCanvas ref={(ref) => { this.sigCanvas = ref }} /> */}

      <button className = "btn btn-dark btn-block custom-button" onClick={log}>Submit Drawing</button>
      <button className = "btn btn-dark btn-block custom-button" onClick={clearScreen}>Clear</button>

      {/* <img src={imageData} alt="drawing"></img> */}
    </div>
  )

}



export default Canvas;
