import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    if (isNaN(incrementAmount)) {
      return;
    } else {
      dispatch(counterActions.increase(incrementAmount));
    }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  const incremenetByAmountChangeHandler = (e) => {
    setIncrementAmount(parseInt(e.target.value));
  };

  return (
    <main className={classes.counter}>
      {show && (
        <div>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
          </div>
          <div>
            <input type="number" onChange={incremenetByAmountChangeHandler} />
            <button onClick={increaseHandler}>
              Increment by {!isNaN(incrementAmount) ? incrementAmount : 0}
            </button>
          </div>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
