import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "components/Nav";
import { ButtonDemo } from "examples";
import Layout from "components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Nav}></Route>
          <Route exact path="/button" component={ButtonDemo}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
