import React from "react";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button"

function JoinGame() {

  return (
    <Container>
      <div>
        <p className="text-center">Join Game</p>
      </div>
      <div>
        <input type="text" placeholder="room code" className="form-control" />
      </div>
      <div>
        <input type="text" placeholder="username" className="form-control" />
      </div>
      <div>
        <Link to="/lobby">
          <Button name={"Lobby"}/>
        </Link>
      </div>
    </Container>
  );

}

export default JoinGame;
