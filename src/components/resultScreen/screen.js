import React from "react";
import "../../App.css";
import styled from "@emotion/styled";

import Result from "./result";
import Calculation from "./calculation";

const screen = (props) => {
  const Screen = styled.div`
    background-color: #94093b;
    width: 280px;
    height: 100px;
  `;
  return (
    <Screen>
      <Result>{props.result}</Result>
      <Calculation>{props.equation}</Calculation>
    </Screen>
  );
};

export default screen;
