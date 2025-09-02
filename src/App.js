import React from "react";
import "./App.css";
import About from "./components/About";
import Store from "./components/Home/StoreItem";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
