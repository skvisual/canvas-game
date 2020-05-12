import React, { useState, useContext } from "react";
import { Container } from "../components/Container";
import { Link, Redirect } from "react-router-dom";
import Button from "../components/Button";
import SocketContext from "../utils/socket";

function Lobby() {
  const [gameState, setGameState] = useState(false)

  if(gameState === true){
    return <Redirect to="/drawing" />
  }

  const startGame = () => {
    setGameState(true);
  }

  const { onMessage, populatePlayerNames, playerNames, room } = useContext(SocketContext)

  populatePlayerNames();

  onMessage();

  // useEffect(() => {
  //   socket.on('message', (data) => {
  //     console.log(data)
  //   })
  // }, [])

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
        <Link to="/Drawing">
          <Button name={"Start"}/>
        </Link>
      </div>
      <div>
        <button onClick={startGame}>Start Game</button>
      </div>
    </Container>
  );

}

export default Lobby;