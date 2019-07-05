import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import About from "./components/about";
import Lorem from "./components/lorem";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <img src={logo} style={{ width: "10%" }} />
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/lorem" component={Lorem} />
      </Switch>
    </div>
  );
}

export default App;
