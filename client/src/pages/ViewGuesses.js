import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";

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
        <p className="text-center">View Guesses</p>
      </div>
      <div>
        {allGuesses.map((guess, i) => (<p key={i}>{guess.guess}</p>))}
      </div>
    </Container>
  );

}

export default ViewGuesses;