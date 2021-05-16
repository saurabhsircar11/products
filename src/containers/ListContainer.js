import { connect } from "react-redux";
import { addItem, fetchData } from "../redux/actions/actions";
import ListComponent from "../components/ListComponents";

function mapStateToProps(state) {
  return {
    productsList: state.products.data,
    cartItems: state.cart.totalItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    addItem: (product) => {
      dispatch(addItem(product));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
