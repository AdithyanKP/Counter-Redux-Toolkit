import React from "react";
import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //taking the count value in the store//
  const count = useSelector((state) => state.counter.count);
  console.log(count);

  const dispatch = useDispatch();

  return (
    <>
      <div>counter</div>
      <h4>{count}</h4>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Counter;
