import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div>counter</div>
      <h4>{counter}</h4>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </>
  );
};

export default Counter;
