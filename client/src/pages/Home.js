import React, { useEffect } from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"
import { Link } from "react-router-dom";
import logo from "../assets/images/squigglepig_clear.png"


function Home() {

  return (
    <Container>
      <div className="text-center">
        <img id="logo" src={logo} alt="Squigglepig Logo"/>
      </div>
      
      <div>
        <Link to="/joingame">
          <Button name={"Join Game"}/>
        </Link>
      </div>
    </Container>
  );

}

export default Home;
