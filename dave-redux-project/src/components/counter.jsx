import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../store/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>

      <div>
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
