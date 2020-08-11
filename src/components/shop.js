import React from "react";
import { Tile } from "./Tile";
import { Button } from "./Button";

class Shop extends React.Component {
  // state = {
  //   data: false
  // };

  // async componentDidMount() {
  //   const listofProducts = await fetch("https://be98d3032ad3.ngrok.io/products")
  //     .then(response => response.json())
  //     .then(response => response.products);

  //   this.setState({
  //     data: listofProducts
  //   });
  //   // console.log(data);
  // }

  productGenrator = () => {
    const list = this.props.products.map(({ _id, name, price, imageURL }) => (
      <div key={_id} style={{ margin: "5px" }}>
        <Tile imageURL={imageURL} name={name} price={`$${price}`}>
          <Button variant="primary" onClick={() => this.addItemToCart(_id)}>
            Add to cart
          </Button>
        </Tile>
      </div>
    ));

    return list;
  };

  addItemToCart = id => {
    const data = {
      productId: id,
      quantity: 1
    };
    fetch("https://be98d3032ad3.ngrok.io/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => console.log("Added to cart", response));
  };

  render() {
    return (
      <div>
        <h1 style={{ marginBottom: 32 }}>Shop</h1>
        <div className="grid-container">
          <div className="row card-set">
            {this.props.products ? this.productGenrator() : "Loading!!!"}
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
