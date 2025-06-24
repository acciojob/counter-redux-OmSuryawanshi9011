
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../state/counterSlice";
const App = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
        <div>
          <h1>{count}</h1>
        </div>
        <div>
          <button onClick={() => dispatch(increment())}>Increment By One</button>
        </div>
        <div>
          <button onClick={() => dispatch(decrement())}>Decrement By One</button>
          <button>Decrement By One</button>
    
        </div>
    </div>
  )
}

export default App
