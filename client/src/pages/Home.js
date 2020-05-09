import React from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"
import { Link } from "react-router-dom";

function Home() {

  return (
    <Container>
      <div>
        <p className="text-center">Home Page</p>
      </div>
      <div>
        <Link to="/joingame">
          <Button name={"Join Game"}/>
        </Link>
      </div>
      <div>
        <Link to="/creategame">
          <Button name={"Create Game"}/>
        </Link>
      </div>
    </Container>
  );

}

export default Home;
