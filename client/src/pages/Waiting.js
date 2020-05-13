import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";

function Waiting() {

  const { socket, setImageData, setWinner } = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  console.log('Waiting game state:', gameState);

  socket.on('guess-image', (data) => {
    if (data !== 'wait'){
      setImageData(data)
    }
    setGameState(2)
  })

  socket.on('all-guesses', () => {
    setGameState(1)
  })

  socket.on('winner-result', (data) => {
    setWinner(data)
    setGameState(3)
  })

  if(gameState === 1){
    return <Redirect to="/waiting" />
  }
  else if (gameState === 2){
    return <Redirect to="/guessing" />
  }
  else if (gameState === 3){
    return <Redirect to="/winner" />
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