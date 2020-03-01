import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/main_components/navbar";
import Todolist from "./components/main_components/todolist";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Navbar />
      <div class="container columns">
        <div class="column">
          <Todolist />
        </div>
        <div class="column"></div>
      </div>
    </React.Fragment>
  );
};

export default App;
