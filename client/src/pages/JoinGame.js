// eslint-disable-next-line
import React, { useContext, useState } from "react";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button"
import SocketContext from "../utils/socket.js";
import logo from "../assets/images/squigglepig_join_game_clear.png"
import UIfx from 'uifx';
import buttonconfirm from '../assets/sounds/buttonconfirm.mp3'
import { Redirect } from "react-router-dom";


function JoinGame() {

    const buttonConfirm = new UIfx(
      buttonconfirm,
      {
        volume: 1.0
      }
    )

  const { joinRoom, username, setUsername, room, setRoom } = useContext(SocketContext)
  const [gameState, setGameState] = useState(0)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleRoomChange = (event) => {
    setRoom(event.target.value)
  }

  const handleJoinRoom = () => {
    if (username !== '' && room !== '') {
      buttonConfirm.play()
      joinRoom(username, room)
      setGameState(1)
    }
  }

  if(gameState === 1){
    return <Redirect to="/lobby" />
  }

  return (
    <Container>
      <div className="text-center">
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      <div>
        <input type="text" placeholder="room code" className="form-control" onChange={handleRoomChange}/>
      </div>
      <div>
        <input type="text" placeholder="username" className="form-control" onChange={handleUsernameChange}/>
      </div>
      <div>
        {/* <Link to="/lobby"> */}
          <Button name={"Lobby"} onClick={handleJoinRoom}/>
        {/* </Link> */}
      </div>
    </Container>
  );

}

export default JoinGame;
