import React from "react";

const Product = ({ name, id }) => {
  return (
    <div style={{ padding: 10, backgroundColor: "goldenrod" }}>
      <h1>This is product</h1>
      <h3>{name}</h3>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
