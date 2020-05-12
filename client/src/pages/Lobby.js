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

  const { onMessage, room, username, playerList } = useContext(SocketContext)

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
        <p className="text-center">{username}</p>
        <p className="text-center">{playerList}</p>
        <p className="text-center">Player 2</p>
        <p className="text-center">Player 3</p>
        <p className="text-center">Player 4</p>
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