import React, { useState, useRef, useEffect } from "react";

const PersistValue = () => {
  const [value, setValue] = useState();
  const previousValue = useRef();

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  const removeAll = () =>{
    setValue("")
  }

  return (
    <div>
      <h1>PersistValue Now in good..</h1>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <h2>Current Value: {value}</h2>
      <h3>Previous Value: {previousValue.current}</h3>
      <button onClick={removeAll}>Clear</button>
    </div>
  );
};

export default PersistValue;
