import React from "react";
import "../App.css";

const button = (props) => {
  const classes = ["btn"];

  if (typeof props !== "undefined" && typeof props.type !== "undefined")
    classes.push("btn--" + props.type);

  return (
    <button className={classes.join(" ")} onClick={props.handlePress}>
      {props.children}
    </button>
  );
};

export default button;
