import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [welcome, setWelcome] = useState(true);

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const handleSqrt = () => {
    try {
      setDisplay(Math.sqrt(eval(display)).toString());
    } catch {
      setDisplay("Error");
    }
  };

  if (welcome) {
    return (
      <div className="welcome-page">
        <h1>Welcome!</h1>
        <p>Click below to start using the calculator.</p>
        <button className="start-btn" onClick={() => setWelcome(false)}>
          Start
        </button>
      </div>
    );
  }

  return (
    <div className="calculator">
      <h2> Calculator</h2>
      <input className="display" type="text" value={display} readOnly />
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("(")}>(</button>
        <button onClick={() => handleClick(")")}>)</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>×</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleSqrt}>√</button>
        <button className="equal" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}

export default Calculator;