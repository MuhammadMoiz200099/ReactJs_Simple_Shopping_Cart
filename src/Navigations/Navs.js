import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductsShow from "../Products/ProductsShow";
import Add_to_cart from "../Products/Add_to_cart";
import Landing from "../Landing";
import ProductDetials from "../Products/ProductDetails";

function Navs() {
  return (
    <Router>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            Shopping Home
          </Link>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/add_to_cart">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/productDetails/:id" component={ProductDetials} />
        <Route path="/products/" component={ProductsShow}></Route>
        <Route path="/add_to_cart" component={Add_to_cart}></Route>
      </Switch>
    </Router>
  );
}

export default Navs;
