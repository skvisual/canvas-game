import React, { useContext } from "react";
import SocketContext from "../utils/socket";
import { Container } from "../components/Container";
import Button from "../components/Button"

function Guessing() {

  const { imageData } = useContext(SocketContext)

  return (
    <Container>
      <div>
        <p className="text-center">Guessing</p>
      </div>
      <div>
        <h4 className="text-center">Make your guess.</h4>
      </div>
      <div>
          <img src={imageData} alt='user image'/>
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