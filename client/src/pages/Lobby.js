import React, { useState, useContext } from "react";
import { Container } from "../components/Container";
import { Redirect } from "react-router-dom";
import Button from "../components/Button";
import SocketContext from "../utils/socket";
import logo from "../assets/images/squigglepig_lobby_clear.png"

function Lobby() {
  
  const { populatePlayerNames, playerNames, room, startGame, socket } = useContext(SocketContext)

  populatePlayerNames();

  socket.on('to-game', (data) => {
    setGameState(data);
    console.log('the game is starting', data)
  })

  const [gameState, setGameState] = useState(0)

  if(gameState === 1){
    return <Redirect to="/drawing" />
  }
  else if (gameState === 2){
    return <Redirect to="/waiting" />
  }

  return (
    <Container>
      <div>
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      <div>
        <h4 className="text-center">Game Code:</h4>
        <h3 className="text-center">{room}</h3>
      </div>
      <div>
        {playerNames.map((player, i) => <p key={i}>{player}</p>)}
      </div>
      <div>
        {/* <Link to="/Drawing"> */}
          <Button name={"Start"} onClick={startGame}/>
        {/* </Link> */}
      </div>
      {/* <div> */}
        {/* <button onClick={redirectGame}>Start Game</button> */}
      {/* </div> */}
    </Container>
  );

}

export default Lobby;