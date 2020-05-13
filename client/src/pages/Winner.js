import React, { useContext } from "react";
import { Container } from "../components/Container";
import Button from "../components/Button"
import SocketContext from "../utils/socket";

function Winner() {

  const { winner, imageData } = useContext(SocketContext)

  console.log(winner)

  return (
    <Container>
      <div>
        <p className="text-center">Winner</p>
      </div>
      <div>
        <h3 className="text-center">{winner.username}</h3>
        <h4 className="text-center">is the winner with</h4>
        <h3 className="text-center">{winner.guess}</h3>
      </div>
      <div>
          <img src={imageData} alt='user image'/>
      </div>
      <div>
        <Button name={"Ready"}/>
      </div>
    </Container>
  );

}

export default Winner;