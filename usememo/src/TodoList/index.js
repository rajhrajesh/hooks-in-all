import React, { useMemo, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [count, setCount] = useState(0);

  const memoCalculations = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <br />
      <h2>{memoCalculations}</h2>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Running expensive calculation...");

  for (let i = 0; i < 100000; i++) {
    num += 1;
  }
  return num;
};

export default TodoList;
