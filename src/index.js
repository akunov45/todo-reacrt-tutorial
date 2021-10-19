import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";


const rootElement = document.getElementById("root");
const btn = document.getElementById("btn")
console.log(btn,'bb')

ReactDOM.render(
        <App />,
    rootElement
);
