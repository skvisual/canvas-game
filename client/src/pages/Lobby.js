import React from "react";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {

  return (
    <Container>
      <div>
        <p className="text-center">Lobby</p>
      </div>
      <div>
        <h4 className="text-center">Game Code:</h4>
        <h3 className="text-center">AF3T</h3>
      </div>
      <div>
        <p className="text-center">Player 1</p>
        <p className="text-center">Player 2</p>
        <p className="text-center">Player 3</p>
        <p className="text-center">Player 4</p>
      </div>
      <div>
        <Link to="/Game">
          <Button name={"Start"}/>
        </Link>
      </div>
    </Container>
  );

}

export default Home;