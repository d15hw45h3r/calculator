import React from "react";
import "../../App.css";
import styled from "@emotion/styled";

const calculation = (props) => {
  const Calculation = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;

    text-align: right;
    font-size: 18px;
    padding-right: 10px;
  `;

  return <Calculation>{props.children}</Calculation>;
};

export default calculation;
