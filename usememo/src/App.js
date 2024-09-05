import React, { useState, useMemo } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [num, setNum] = useState("");
  const [dark, setDark] = useState(false);

  const memoCalculations = useMemo(() => {
    return expensiveCalculation(num);
  }, [num]);

  // const expensive = expensiveCalculation(num)

  const darkStyle = {
    color: dark ? "white" : "black",
    backgroundColor: dark ? "black" : "white",
  };

  return (
    <>
      <div style={darkStyle}>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <h2>Calculations: {memoCalculations}</h2>
        {/* <h2>Calculations: {expensive}</h2> */}
        <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
      </div>
      <hr/>
      <div>
        <TodoList/>
      </div>
    </>
  );
};

function expensiveCalculation(num) {
  console.log("Loop Started");
  for (let i = 0; i < 100000; i++) {}
  return num;
}

export default App;
