import React from "react";

function Count({count,increment,decrement}) {
  return <div>
    <h1>{count}</h1>
    {increment && <button onClick={increment}>Increment</button>}
    {decrement && <button onClick={decrement}>Decrement</button>}
  </div>;
}

export default Count;
