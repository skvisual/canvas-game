import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";
import logo from "../assets/images/squigglepig.gif"

function Waiting() {

  const { socket, setImageData, setWinner, setAllGuesses } = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  console.log('Waiting game state:', gameState);

  socket.on('guess-image', (data) => {
    if (data !== 'wait'){
      setImageData(data)
    }
    setGameState(2)
  })

  socket.on('all-guesses', (data) => {
    setGameState(1)
    setAllGuesses(data)
  })

  socket.on('winner-result', (data) => {
    setWinner(data)
    setGameState(3)
  })

  if(gameState === 1){
    return <Redirect to="/viewguesses" />
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
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      <br></br>
      <div>
        <h4 className="text-center">Please wait while the genius is at work.</h4>
      </div>
    </Container>
  );

}

export default Waiting;