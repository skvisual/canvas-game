import React from "react";
import "./style.css";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
function Image(props) {
  return (
    <img class="image-class" src={props.image} alt='user drawing'/>
  );
}

export default Image;