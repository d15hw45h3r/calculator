import React from "react";
import "../App.css";
import * as math from "mathjs";

import Screen from "./resultScreen/screen";
import Keypad from "./keypad";

class Calculator extends React.Component {
  state = {
    equation: "",
    result: 0,
  };

  handlePress = (event) => {
    event.preventDefault();
    let equation = this.state.equation;
    const pressedButton = event.target.innerHTML;

    if (pressedButton === "C") return this.clear();
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    )
      equation += pressedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1)
      equation += " " + pressedButton + " ";
    else if (pressedButton === "=") {
      try {
        const evalRes = math.evaluate(equation);
        const result = Number.isInteger(evalRes) ? evalRes : evalRes.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("You entered an invalid equation. Try again.");
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }

    this.setState({ equation: equation });
  };

  clear() {
    this.setState({ equation: "", result: 0 });
  }

  render() {
    return (
      <div className="calculator">
        <Screen result={this.state.result} equation={this.state.equation} />
        <Keypad handlePress={this.handlePress} />
      </div>
    );
  }
}

export default Calculator;
