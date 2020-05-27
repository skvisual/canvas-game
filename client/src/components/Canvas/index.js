import React, { useContext, useEffect, useState } from 'react';
import SocketContext from "../../utils/socket";
import './style.css';
import pigCanvas from "../../assets/images/canvas_pig.png";

// import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'


function Canvas() {
var canvasWidth = 425;
var sigCanvas = {};
  // if (window.innerWidth<400){
  //      canvasWidth = 300;
  // }
  var tempImages = [];
  const [lastDrawing, setLastDrawing] = useState();
  const [undoCount, setUndoCount] = useState(1);


  useEffect(()=>{

    console.log("UseEffect")
    console.log(document.getElementById('canvas').toDataURL())
    document.getElementById('canvas').addEventListener("click", handleImageChange)

  }, [])

  

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
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    tempImages = []
    console.log("should be nothing")
    console.log(tempImages)
    undo();
  }

  function undo() {
    // console.log(tempImages)
    canvas = document.getElementById('canvas');
    // // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    // var img = new Image();
    // console.log("last in array")
    // const last = tempImages[tempImages.length-2]
    // console.log(last)
    // setLastDrawing(last)


    // img.src = lastDrawing;
    // console.log("last drawing")
    // console.log(lastDrawing)
    // 
    // console.log(tempImages[tempImages.length-2])
    // console.log(typeof tempImages[tempImages.length-2])

    // setLastDrawing(tempImages[0])
    // canvas.getContext("2d").drawImage(lastDrawing, canvas.width, canvas.height)
    let undoData = [];
    if (tempImages){
    for (let i=0; i<tempImages.length-1; i++){
      undoData.push(tempImages[i])
    }

    }

    // setLastDrawing(undoData)
    // setUndoCount(undoCount+1)
    sigCanvas.fromData(undoData)
    console.log("temp")
    console.log(tempImages)
  }

  function handleImageChange(){
    canvas = document.getElementById('canvas');
    setUndoCount(1);
    // tempImages.push(canvas.toDataURL())
    tempImages = sigCanvas.toData()
    console.log("Temp Images")
    console.log(tempImages)

    // setLastDrawing(tempImages)

  }



  return (
    <div className="App" > 
    <img className="text-center" id="pigCanvas" src={pigCanvas} alt="Squigglepig Logo"/>
      <SignatureCanvas penColor='black' ref={(ref) => {sigCanvas = ref }} 
        canvasProps={{ width: canvasWidth, height: 200, id: 'canvas', className: 'sigCanvas', onEnd: handleImageChange }} />

      <button className = "btn btn-outline-dark btn-block custom-button" onClick={submit}>Submit Drawing</button>
      <button className = "btn btn-outline-dark btn-block custom-button" onClick={clearScreen}>Clear</button>
      <button className = "btn btn-outline-dark btn-block custom-button" onClick={undo}>Undo</button>

    </div>
  )
}

export default Canvas;