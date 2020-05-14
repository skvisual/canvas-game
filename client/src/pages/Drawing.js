import React, { useContext, useEffect, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";
import Canvas from "../components/Canvas";
import UIfx from 'uifx';
import buttonconfirm from '../assets/sounds/buttonconfirm.mp3'


function Drawing() {

  const buttonConfirm = new UIfx(
    buttonconfirm,
    {
      volume: 1.0
    }
  )


  console.log('Drawing Page Mount')

  const { imageData, socket, room } = useContext(SocketContext)

  const [gameState, setGameState] = useState(0)

  console.log('Drawing game state:', gameState);

  useEffect(() => {
    if(imageData){
      console.log('imageData', imageData);
      console.log('image has been submitted');
      submitImage();
    }
  }, [imageData])

  socket.on('guess-image', (data) => {
    setGameState(2)
  })

  const submitImage = () => {
    buttonConfirm.play();
    // e.preventDefault();
    console.log('submitting image')
    socket.emit('image-submitted', {imageData, room});
  }

  if(gameState === 1){
    return (<Redirect to="/drawing" />)
  }
  else if (gameState === 2){
    return (<Redirect to="/waitingforguesses" />)
  }

  return (
    <Container>
      <div>
        <p className="text-center">In Game</p>
      </div>
      <div>
        <h4 className="text-center">Your turn to draw</h4>
      </div>
      <div>
        <Canvas />
      </div>
    </Container>
  );

}

export default Drawing;