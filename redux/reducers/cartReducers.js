import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [
    { name: "dell", id: 1 },
    { name: "lenevo", id: 2 },
    { name: "hp", id: 3 },
    { name: "asus", id: 4 },
    { name: "apple", id: 5 },
    { name: "duel", id: 6 },
  ],
};
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cart: [...state.cart, action.id] };
    case REMOVE_FROM_CART:
      return { cart: state.cart?.filter((item) => item !== action.id) };

    default:
      return state;
  }
};
export default cartReducers;
