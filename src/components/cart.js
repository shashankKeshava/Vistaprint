import React from "react";
import { Tile } from "./Tile";
import { Button } from "./Button";
// import {CartTile} from './CartTile'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false
    };
    this.removeFromCart = this.removeFromCart.bind(this);
    this.fetchCartItems = this.fetchCartItems.bind(this);
  }

  async fetchCartItems() {
    const listofItemsInCart = await fetch("https://be98d3032ad3.ngrok.io/cart")
      .then(response => response.json())
      .then(response => response.items);

    this.setState({
      data: listofItemsInCart
    });
  }

  async componentDidMount() {
    const listofItemsInCart = await fetch("https://be98d3032ad3.ngrok.io/cart")
      .then(response => response.json())
      .then(response => response.items);

    this.setState({
      data: listofItemsInCart
    });
    // console.log(data);
  }

  fetchProductById = id => {
    const products = this.props.products;
    const product = products.filter(item => item._id === id);
    return product[0];
  };

  async removeFromCart(productId) {
    const url = `https://be98d3032ad3.ngrok.io/cart/${productId}`;
    fetch(url, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(response => console.log("Deleted from cart", response));

    await this.fetchCartItems();
  }

  cartGenerator = () => {
    const list = this.state.data.map(({ _id: cartId, productId }) => {
      const product = this.fetchProductById(productId);
      const { _id, name, price, imageURL } = product;
      return (
        <div key={cartId} style={{ margin: "5px" }}>
          <Tile imageURL={imageURL} name={name} price={`$${price}`}>
            <Button
              variant="primary"
              onClick={() => this.removeFromCart(cartId)}
            >
              Remove
            </Button>
          </Tile>
        </div>
      );
    });

    return list;
  };

  render() {
    const isDataPresent = this.props.products && this.state.data;
    return (
      <div>
        <h1 style={{ marginBottom: 32 }}>Cart</h1>
        <div className="grid-container">
          <div className="row card-set">
            <div className="col-6 col-xs-6">
              {isDataPresent ? this.cartGenerator() : "Loading!!!"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
