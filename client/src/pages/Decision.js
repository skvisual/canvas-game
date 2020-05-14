import React, { useContext, useState } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import Button from "../components/Button"
import Image from "../components/Image"
import { Redirect } from "react-router-dom";
import UIfx from 'uifx';
import winnermp3 from '../assets/sounds/winner.mp3'
import logo from "../assets/images/squigglepig_raise_hand.png"

function Decision() {

  const { socket, allGuesses, imageData, room, setWinner } = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  const winnerTone = new UIfx(
    winnermp3,
    {
      volume: 0.4    
    }
  )

  const theWinner = (username, guess) => {
    console.log('the winner', username)
    socket.emit('the-winner', {username, guess, room})
  }

  socket.on('winner-result', (data) => {
    winnerTone.play();
    console.log('winner-result')
    setWinner(data)
    setGameState(1)
  })

  if(gameState === 1){
    return <Redirect to="/winner" />
  }

  return (
    <Container>
      <div className="text-center">
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      <div>
        <h4 className="text-center">Choose your favorite.</h4>
      </div>
      <div>
          <Image image={imageData} />
      </div>
      {allGuesses.map((guess, i) => (<div><Button key={i} name={guess.guess} onClick={() => theWinner(guess.username, guess.guess)}/></div>))}
    </Container>
  );

}

export default Decision;