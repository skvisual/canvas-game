import React from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"

function Guessing() {

  return (
    <Container>
      <div>
        <p className="text-center">Guessing</p>
      </div>
      <div>
        <h4 className="text-center">Make your guess.</h4>
      </div>
      <div>
          <p>*Image goes here*</p>
      </div>
      <div>
        <input type="text" placeholder="guess" className="form-control" />
      </div>
      <div>
        <Button name={"Submit"}/>
      </div>
    </Container>
  );

}

export default Guessing;