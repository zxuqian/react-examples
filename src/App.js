import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "components/Nav";
import { ButtonDemo } from "examples";
import Layout from "components/Layout";
import GradientDemo from "examples/02-React-State-Event";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Nav />
        </Route>
        <Layout>
          <Route exact path="/button">
            <ButtonDemo />
          </Route>
          <Route exact path="/gradient">
            <GradientDemo />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
