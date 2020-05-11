import React from "react";
import { Container } from "../components/Container";

function Waiting() {

  return (
    <Container>
      <div>
        <p className="text-center">Waiting Screen</p>
      </div>
      <div>
        <h4 className="text-center">Please wait while...</h4>
      </div>
    </Container>
  );

}

export default Waiting;