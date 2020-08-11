import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/Header";

import Shop from "./components/shop";
import Cart from "./components/cart";

import "./styles.css";

class App extends React.Component {
  state = {
    products: false
  };
  async componentDidMount() {
    const listofProducts = await fetch("https://be98d3032ad3.ngrok.io/products")
      .then(response => response.json())
      .then(response => response.products);

    this.setState({
      products: listofProducts
    });
    // console.log(data);
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/shop" />
          </Route>
          <Route path="/shop">
            <Shop products={this.state.products} />
          </Route>
          <Route path="/cart">
            <Cart products={this.state.products} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
