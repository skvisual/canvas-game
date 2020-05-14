import React, { useContext, useState } from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"
import Image from "../components/Image"
import SocketContext from "../utils/socket";
import { Redirect } from "react-router-dom";
import UIfx from 'uifx';
import buttonconfirm from '../assets/sounds/pigGrunt.mp3'
import logo from "../assets/images/squigglepig_winner.gif"


function Winner() {


  const buttonConfirm = new UIfx(
    buttonconfirm,
    {
      volume: 0.3
    }
  )

  // useEffect(() => {
  //   winnerTone.play();
  // })

  const { winner, setWinner, imageData, setImageData, socket, room, setMyGuess, setAllGuesses} = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  console.log(winner)

  const readyUp = () => {
    buttonConfirm.play();
    socket.emit('ready-up', room)
    setGameState(3);
  }

  // socket.on('end-round', () => {
  //   setImageData('');
  //   setWinner('');
  //   setMyGuess('')
  //   setAllGuesses([])
  //   setGameState(2);
  // })

  socket.on('to-game', (data) => {
    setImageData('');
    setWinner('');
    setMyGuess('')
    setAllGuesses([])
    
    setGameState(data);
    console.log('the game is starting', data)
  })

  if(gameState === 1){
    return <Redirect to="/drawing" />
  }
  else if (gameState === 2){
    return <Redirect to="/waiting" />
  }

  if(gameState === 3){
    return (
      <Container>
      <div className="text-center">
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
        <div>
          <h3 className="text-center">{winner.username}</h3>
          <h4 className="text-center">is the winner with</h4>
          <h3 className="text-center">{winner.guess}</h3>
        </div>
        <div>
          <Image image={imageData} />
        </div>
        <div>
        <h3 className="text-center">Waiting for others to ready up...</h3>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="text-center">
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      <br></br>
      <div>
        <h3 className="text-center">{winner.username}</h3>
        <h4 className="text-center">is the winner with</h4>
        <h3 className="text-center">{winner.guess}</h3>
      </div>
      <div>
          <Image image={imageData} />
      </div>
      <div>
        <Button name={"Ready"} onClick={readyUp}/>
      </div>
    </Container>
  );

}

export default Winner;