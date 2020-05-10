import React from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"
import { Link } from "react-router-dom";
import Canvas from "../components/Canvas";

function Drawing() {

  return (
    <Container>
      <div>
        <p className="text-center">In Game</p>
      </div>
      <div>
        <h4 className="text-center">Your turn to draw</h4>
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

export default Drawing;