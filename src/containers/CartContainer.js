import { connect } from "react-redux";
import CartComponent from "../components/CartComponent";

function mapStateToProps(state) {
  let { items } = state.cart;
  let listOfItems = Object.values(items);
  let total = listOfItems.reduce((acc, curr) => {
    let { quantity, price } = curr;
    return acc + quantity * price;
  }, 0);
  return {
    listOfItems,
    total,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
