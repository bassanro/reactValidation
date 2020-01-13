import React from "react";

const validationComponent = (props) => {
  let text = props.length > 5 ? "Text long enough" : "Text too short";
  return <p>{text}</p>;
};

export default validationComponent;
