import React, { createContext, useState } from "react";
import "./App.css";
import Ladoos from "./components/Ladoo";


export const UserContext = createContext();

const App = () => {
  const [value, setValue] = useState("Hello to nice to meet you");

  const changethe = () =>{
    setValue("No wAy am busy now!")
  }

  const original = () =>{
    setValue("Hwlo is this oiginal now!")
  }

  return (
    <UserContext.Provider value={value}>
      <div>
        <h1>UseContext in a new Way {value}</h1><br/>
        <button onClick={changethe}>Change The Button</button>
        <button onClick={original}>Original The Button</button>
        <p>Nice to meet you</p>
        <Ladoos/>
      </div>

    </UserContext.Provider>
  );
};

export default App;
