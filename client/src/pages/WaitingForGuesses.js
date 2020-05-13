import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";

function WaitingForGuesses() {

  const { socket, setImageData, setAllGuesses } = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  socket.on('guess-image', (data) => {
    if (data !== 'wait'){
        setImageData(data)
    }
    console.log(data)
    setGameState(2)
  })

  if(gameState === 1){
    return <Redirect to="/decision" />
  }
  else if (gameState === 2){
    return <Redirect to="/guessing" />
  }

  socket.on('all-guesses', (data) => {
    setGameState(1)
    setAllGuesses(data)
  })

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

export default WaitingForGuesses;