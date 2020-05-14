// eslint-disable-next-line
import React, { useContext } from "react";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button"
import SocketContext from "../utils/socket.js";
import logo from "../assets/images/squigglepig_join_game_clear.png"

function JoinGame() {

  const { joinRoom, username, setUsername, room, setRoom } = useContext(SocketContext)


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleRoomChange = (event) => {
    setRoom(event.target.value)
  }

  const handleJoinRoom = () => {
    joinRoom(username, room)
    // setRoom(room);
  }

  return (
    <Container>
      <div>
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
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
