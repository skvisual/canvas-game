import React from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"

function Winner() {

  return (
    <Container>
      <div>
        <p className="text-center">Winner</p>
      </div>
      <div>
        <h4 className="text-center">Player 2 is the winner with "cat bazooka"</h4>
      </div>
      <div>
        <Button name={"Ready"}/>
      </div>
    </Container>
  );

}

export default Winner;