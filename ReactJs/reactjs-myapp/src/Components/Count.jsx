import React from "react";
import useCounter from "./Hooks/useCounter"; // ✅ Default import (no curly braces)

const Count = () => {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h1>Custom Hooks</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
