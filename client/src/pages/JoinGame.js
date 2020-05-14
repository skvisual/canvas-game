// eslint-disable-next-line
import React, { useContext } from "react";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button"
import SocketContext from "../utils/socket.js";
import logo from "../assets/images/squigglepig_join_game_clear.png"
import UIfx from 'uifx';
import buttonconfirm from '../assets/sounds/buttonconfirm.mp3'


function JoinGame() {

    const buttonConfirm = new UIfx(
      buttonconfirm,
      {
        volume: 1.0
      }
    )

  const { joinRoom, username, setUsername, room, setRoom } = useContext(SocketContext)


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleRoomChange = (event) => {
    setRoom(event.target.value)
  }

  const handleJoinRoom = () => {
    buttonConfirm.play()
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
