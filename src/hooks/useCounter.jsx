import React, { useState } from "react";

function useCounter({ defaultValue = 0 }) {
  const [count, setCount] = useState(defaultValue);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return { count, increment, decrement };
}

export default useCounter;
