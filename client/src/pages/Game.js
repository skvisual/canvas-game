import React from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"
import { Link } from "react-router-dom";
import Canvas from "../components/Canvas";

function Game() {

  return (
    <Container>
      <div>
        <p className="text-center">In Game</p>
      </div>
      <div>
        <h4 className="text-center">We made it!</h4>
      </div>
      <div>
        <Canvas />
      </div>
      <div>
        <Link to="/">
          <Button name={"Home"}/>
        </Link>
      </div>
    </Container>
  );

}

export default Game;