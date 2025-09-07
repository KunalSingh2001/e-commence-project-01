import React from "react";
import "./App.css";
import About from "./components/About";
import Store from "./components/Home/StoreItem";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs";
import productDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Login from "./components/Pages/Login";

import { BrowserRouter as Router, Switch, Route, exact, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" exact>
          <Redirect to="/"/>
        </Route>
        <Route path="/" exact component={Home} />
        <Route path="/store" exact component={Store} />
        <Route path="/store/:productId" component={productDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
