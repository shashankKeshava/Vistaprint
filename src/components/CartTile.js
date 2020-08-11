import * as React from "react";
export const ProductTile = props => {
  const { productName, price, imageURL, ...otherProps } = props;

  return (
    <div className="standard-tile" {...otherProps}>
      <div className="standard-tile-image">
        <div
          className="responsive-image-wrapper"
          style={{ paddingBottom: "100%" }}
        >
          <img className="responsive-image" src={imageURL} alt={productName} />
        </div>
      </div>
      <div className="standard-tile-contents">
        <div className="standard-tile-name">{productName}</div>
        <div className="standard-tile-description">{price}</div>
      </div>
    </div>
  );
};
