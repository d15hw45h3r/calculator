import React from "react";
import "../App.css";
import styled from "@emotion/styled";

import Button from "./button";

const keypad = (props) => {
  const Keypad = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 5;
  `;

  return (
    <Keypad className="btn">
      <Button type="action" handlePress={props.handlePress}>
        C
      </Button>
      <Button type="action" handlePress={props.handlePress}>
        del
      </Button>
      <Button type="action" handlePress={props.handlePress}>
        %
      </Button>
      <Button type="action" handlePress={props.handlePress}>
        /
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        1
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        2
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        3
      </Button>
      <Button type="action" handlePress={props.handlePress}>
        *
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        4
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        5
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        6
      </Button>
      <Button type="action" handlePress={props.handlePress}>
        -
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        7
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        8
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        9
      </Button>
      <Button type="action" handlePress={props.handlePress}>
        +
      </Button>
      <Button type="zero" handlePress={props.handlePress}>
        0
      </Button>
      <Button type="num" handlePress={props.handlePress}>
        .
      </Button>
      <Button type="equal" handlePress={props.handlePress}>
        =
      </Button>
    </Keypad>
  );
};

export default keypad;
