import React, {useContext} from "react";
import "./App.css";
import About from "./components/About";
import Store from "./components/Home/StoreItem";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs";
import productDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Login from "./components/Pages/Login";
import { AuthContext } from "./components/Context/AuthContext";
import { BrowserRouter as Router, Switch, Route, exact, Redirect, useHistory } from "react-router-dom";

function App() {
  const {token} = useContext(AuthContext);
  const history = useHistory();
  return (
    <Router>
      <Switch>
        <Route path="/welcome" exact>
          <Redirect to="/"/>
        </Route>
        <Route path="/" exact component={Home} />
        <Route path='/store'>
					{token ?
						<Store />:<Redirect to="/login" />
					}
				</Route>
         <Route path='/store/:productId'>
					{token ?
						<productDetail />:<Redirect to="/login" />
					}
				</Route>
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
