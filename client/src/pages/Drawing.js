import React, { useContext, useEffect, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";
import Canvas from "../components/Canvas";

function Drawing() {

  const { imageData, submitImage, socket } = useContext(SocketContext)

  socket.on('guess-image', (data) => {
    setGameState(2)
  })

  const [gameState, setGameState] = useState(0)

  useEffect(() => {
    if(imageData){
      console.log('image has been submitted');
      submitImage();
    }
  }, [imageData])

  if(gameState === 1){
    return <Redirect to="/drawing" />
  }
  else if (gameState === 2){
    return <Redirect to="/waitingforguesses" />
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