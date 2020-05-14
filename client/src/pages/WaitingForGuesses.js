import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";
import logo from "../assets/images/squigglepig.gif"

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
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      <br></br>
      <div>
        <h4 className="text-center">Please wait while the geniuses are at work.</h4>
      </div>
    </Container>
  );

}

export default WaitingForGuesses;