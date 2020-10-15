import React from "react";
import "../../App.css";
import styled from "@emotion/styled";

const result = (props) => {
  const Result = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;

    text-align: right;
    font-size: 34px;
    font-weight: 500;
    padding: 10px;
    color: #fff;
    padding: 10px;
    padding-top: 15px;

    font-family: -apple-system, "Montserrat", sans-serif;
  `;
  return <Result>{props.children}</Result>;
};

export default result;
