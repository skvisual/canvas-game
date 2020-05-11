import React from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"

function Decision() {

  return (
    <Container>
      <div>
        <p className="text-center">Decision</p>
      </div>
      <div>
        <h4 className="text-center">Make your decision.</h4>
      </div>
      <div>
          <p>*Image goes here*</p>
      </div>
      <div>
        <Button name={"Guess 1"}/>
      </div>
      <div>
        <Button name={"Guess 2"}/>
      </div>
      <div>
        <Button name={"Guess 3"}/>
      </div>
    </Container>
  );

}

export default Decision;