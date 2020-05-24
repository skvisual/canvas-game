import React, { useContext, useEffect, useState } from 'react';
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
  var tempImages = [];
  const [lastDrawing, setLastDrawing] = useState()



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


  }

  function undo() {
    console.log(tempImages)
    canvas = document.getElementById('canvas');
    // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    var img = new Image();
    console.log("last in array")
    const last = tempImages[tempImages.length-2]
    console.log(last)
    setLastDrawing(last)


    img.src = lastDrawing;
    console.log("last drawing")
    console.log(lastDrawing)
    canvas.getContext("2d").drawImage(img, canvas.width, canvas.height)
    // console.log(tempImages[tempImages.length-2])
    // console.log(typeof tempImages[tempImages.length-2])

  }

  function handleImageChange(){
    canvas = document.getElementById('canvas');
    tempImages.push(canvas.toDataURL())
    console.log("Temp Images")
    console.log(tempImages)

  }

  return (
    <div className="App" > 
    <img className="text-center" id="pigCanvas" src={pigCanvas} alt="Squigglepig Logo"/>
      <SignatureCanvas penColor='black' 
        canvasProps={{ width: canvasWidth, height: 200, id: 'canvas', className: 'sigCanvas' }} />

      <button className = "btn btn-outline-dark btn-block custom-button" onClick={submit}>Submit Drawing</button>
      <button className = "btn btn-outline-dark btn-block custom-button" onClick={clearScreen}>Clear</button>
      <button className = "btn btn-outline-dark btn-block custom-button" onClick={undo}>Undo</button>

    </div>
  )
}

export default Canvas;