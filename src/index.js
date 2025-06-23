import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";



ReactDOM.render(<App />, document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            
        </Provider>
    </React.StrictMode>
)
