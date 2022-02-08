import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = (props) => {
  const product = props.product;
  console.log("object is ", product);
  const products = [];
  return (
    <div>
      <h1>This is Shop</h1>
      {product.map((product) => (
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
