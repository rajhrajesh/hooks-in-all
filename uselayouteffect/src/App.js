import React, { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import FrictionOn from "./componets/Frictions";

const App = () => {
  const [rect, setRect] = useState({});
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setRect(rect);
      console.log(rect)
    }
  }, []);

  return (
    <>
    <div  ref={divRef} className="box-container">This is a box</div>
    <p>Width: {rect.width}</p>
    <p>Height: {rect.height}</p>
    <p>Top: {rect.width}</p>
    <p>Bottom: {rect.bottom}</p>
    <br/>
    <FrictionOn/>
    </>
  );
};

export default App;
