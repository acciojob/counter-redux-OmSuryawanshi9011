
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../state/counterSlice";
const App = () => {

  const count = useSelector((state) => state.counter.value)
  return (
    <div>
        <div>
          <h1>{count}</h1>
        </div>
        <div>
          <button>Increment By One</button>
        </div>
        <div>
          <button>Decrement By One</button>
    
        </div>
    </div>
  )
}

export default App
