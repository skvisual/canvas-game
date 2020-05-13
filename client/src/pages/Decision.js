import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import Button from "../components/Button"
import { Redirect } from "react-router-dom";

function Decision() {

  const { socket, allGuesses, imageData, room, setWinner } = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  const theWinner = (username, guess) => {
    console.log('the winner', username)
    socket.emit('the-winner', {username, guess, room})
  }

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
        <p className="text-center">Decision</p>
      </div>
      <div>
        <h4 className="text-center">Make your decision.</h4>
      </div>
      <div>
          <img src={imageData} alt='user image'/>
      </div>
      {allGuesses.map((guess, i) => (<div><Button key={i} name={guess.guess} onClick={() => theWinner(guess.username, guess.guess)}/></div>))}
    </Container>
  );

}

export default Decision;