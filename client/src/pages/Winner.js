import React, { useContext, useState } from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"
import SocketContext from "../utils/socket";
import { Redirect } from "react-router-dom";

function Winner() {

  const { winner, setWinner, imageData, setImageData, socket, room, setMyGuess, setAllGuesses} = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  console.log(winner)

  const readyUp = () => {
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
        <div>
          <p className="text-center">Winner</p>
        </div>
        <div>
          <h3 className="text-center">{winner.username}</h3>
          <h4 className="text-center">is the winner with</h4>
          <h3 className="text-center">{winner.guess}</h3>
        </div>
        <div>
            <img src={imageData} alt='user image'/>
        </div>
        <div>
        <h3 className="text-center">Waiting for others to ready up...</h3>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <p className="text-center">Winner</p>
      </div>
      <div>
        <h3 className="text-center">{winner.username}</h3>
        <h4 className="text-center">is the winner with</h4>
        <h3 className="text-center">{winner.guess}</h3>
      </div>
      <div>
          <img src={imageData} alt='user image'/>
      </div>
      <div>
        <Button name={"Ready"} onClick={readyUp}/>
      </div>
    </Container>
  );

}

export default Winner;