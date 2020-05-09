import React from "react";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button"

function CreateGame() {

  return (
    <Container>
      <div>
        <p className="text-center">Create Game</p>
      </div>
      <div>
        <p className="text-center">A game code will be generated for you</p>
      </div>
      <div>
        <input type="text" placeholder="username" class="form-control" />
      </div>
      <div>
        <Link to="/lobby">
          <Button name={"Create"}/>
        </Link>
      </div>
    </Container>
  );

}

export default CreateGame;