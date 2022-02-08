import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = (props) => {
  console.log("object", props);
  const products = [
    { name: "dell", id: 1 },
    { name: "lenevo", id: 2 },
    { name: "hp", id: 3 },
    { name: "asus", id: 4 },
    { name: "apple", id: 5 },
    { name: "duel", id: 6 },
  ];
  return (
    <div>
      <h1>This is Shop</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    product: state.products,
  };
};
const mapDispatchToProps = { addToCart: addToCart };
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
