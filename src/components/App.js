import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/counterSlice";
import './../styles/App.css';
const App = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
        <div>
          <h1>{count}</h1>
        </div>
        <div>
          <button onClick={() => dispatch(increment())}>increment</button>
        </div>
        <div>
          <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    </div>
  )
}

export default App
