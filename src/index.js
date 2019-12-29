import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CreateTodo from "./components/createTodo";
import ListTodo from "./components/listTodo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ul>
        <li>TODO</li>
        <li>
          <a href="/">Create</a>
        </li>
        <li>
          <a href="/view">View</a>
        </li>
        <BrowserRouter>
          <Route exact path="/" component={CreateTodo} />
          <Route exact path="/view" component={ListTodo} />
        </BrowserRouter>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
