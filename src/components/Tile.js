import * as React from "react";
export const Tile = props => {
  const { name, price, imageURL, horizontal, children, ...otherProps } = props;

  return (
    <div
      className={`standard-tile${
        horizontal ? " standard-tile-horizontal" : ""
      }`}
      {...otherProps}
    >
      <div className="standard-tile-image">
        <div
          className="responsive-image-wrapper"
          style={{ paddingBottom: "100%" }}
        >
          <img className="responsive-image" src={imageURL} alt={name} />
        </div>
      </div>
      <div className="standard-tile-contents">
        <div className="standard-tile-name">{name}</div>
        <div className="standard-tile-price">
          <span className="pricing">
            <span className="list-price">{price}</span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};
