import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";
import logo from "../assets/images/squigglepig_laugh.gif"

function ViewGuesses() {

  const { allGuesses, socket, setWinner } = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  socket.on('winner-result', (data) => {
    console.log('winner-result')
    setWinner(data)
    setGameState(1)
  })

  if(gameState === 1){
    return <Redirect to="/winner" />
  }

  return (
    <Container>
      <div>
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      <div>
        {allGuesses.map((guess, i) => (<div><p key={i}>{guess.guess}</p></div>))}
      </div>
    </Container>
  );

}

export default ViewGuesses;