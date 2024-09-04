import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [newdata, setData] = useState([]);

  useEffect(() => {
    const funName = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos/";
      const options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    funName();
  }, []);

  return (
    <div className="container">
      <h1>Here are the Title and Status</h1>
      {newdata.slice(0,5).map((data) => (
        <div key={data.id}>
          <h2>Status: {data.title}</h2>
          <p>Status: {data.status ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
