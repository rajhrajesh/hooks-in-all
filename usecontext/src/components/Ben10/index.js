import React, { useContext } from "react";
import { UserContext } from "../../App";

const Ben10 = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Ben10</h1>
      <p>Nice to meet you {user}</p>
    </div>
  );
};

export default Ben10;
