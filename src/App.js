import React from "react";
import "./App.css";

import Calculator from "./components/calculator";

function App() {
  return (
    <div className="App">
      <div className="section-1">
        <h1>Calculator</h1>
        <p>This is my first React project.</p>
      </div>
      <Calculator />
      <div className="section-2">
        <p>Check out my portfolio for more information.</p>
        <a href="https://d15hw45h3r.github.io/portfolio/">My portfolio</a>
      </div>
    </div>
  );
}

export default App;
