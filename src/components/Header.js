import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,

      backgroundColor: "#0099e0",
      color: "white",

      marginBottom: 32
    }}
  >
    <div style={{ fontSize: "2em" }}>Vistaprint</div>
    <nav>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li style={{ paddingRight: 8 }}>
          <Link style={{ color: "inherit" }} to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link style={{ color: "inherit" }} to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
