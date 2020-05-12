import React, { useState, useContext } from "react";
import { Container } from "../components/Container";
import { Link, Redirect } from "react-router-dom";
import Button from "../components/Button";
import SocketContext from "../utils/socket";

function Lobby() {
  const { populatePlayerNames, playerNames, room, startGame, toGame } = useContext(SocketContext)

  populatePlayerNames();

  toGame();

  const [gameState, setGameState] = useState(0)

  if(gameState === 1){
    return <Redirect to="/drawing" />
  }

  // const redirectGame = () => {
  //   setGameState(true);
  // }

  return (
    <Container>
      <div>
        <p className="text-center">Lobby</p>
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