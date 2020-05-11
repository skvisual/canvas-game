import React, { useState, useEffect, useContext } from "react";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button"
import SocketContext from "../utils/Socket.js";

function JoinGame() {

  const [username, setUsername] = useState();
  const [room, setRoom] = useState();

  const { joinRoom } = useContext(SocketContext)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleRoomChange = (event) => {
    setRoom(event.target.value)
  }

  const handleJoinRoom = () => {
    joinRoom(username, room)
  }

  return (
    <Container>
      <div>
        <p className="text-center">Join Game</p>
      </div>
      <div>
        <input type="text" placeholder="room code" className="form-control" onChange={handleRoomChange}/>
      </div>
      <div>
        <input type="text" placeholder="username" className="form-control" onChange={handleUsernameChange}/>
      </div>
      <div>
        <Link to="/lobby">
          <Button name={"Lobby"} onClick={handleJoinRoom}/>
        </Link>
      </div>
    </Container>
  );

}

export default JoinGame;
