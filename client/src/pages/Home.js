import React from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"
import { Link } from "react-router-dom";
import logo from "../assets/images/squigglepig_clear.png"

function Home() {

  return (
    <Container>
      <img id="logo" src={logo} alt="Squigglepig Logo"/>
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
