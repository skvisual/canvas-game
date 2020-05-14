import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";
import logo from "../assets/images/squigglepig_laugh.gif"
import Button from "../components/Button"

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
        <h4 className="text-center">See what everyone had to say:</h4>
      </div>
      <div>
        {allGuesses.map((guess, i) => (<div><Button key={i} name={guess.guess}/></div>))}
      </div>
    </Container>
  );

}

export default ViewGuesses;