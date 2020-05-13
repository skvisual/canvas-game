import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";

function Waiting() {

  const { socket, setImageData } = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  socket.on('guess-image', (data) => {
    setImageData(data)
    console.log(data)
    setGameState(2)
  })

  if(gameState === 1){
    return <Redirect to="/drawing" />
  }
  else if (gameState === 2){
    return <Redirect to="/guessing" />
  }

  return (
    <Container>
      <div>
        <p className="text-center">Waiting Screen</p>
      </div>
      <div>
        <h4 className="text-center">Please wait while...</h4>
      </div>
    </Container>
  );

}

export default Waiting;