import { ADD_ITEM } from "../../constants/actionConstants";

const initialState = {
  items: {},
  totalItems: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      let product = action.payload;
      let { items, totalItems } = state;
      if (items[product.id]) {
        let item = items[product.id];
        item = { ...item, quantity: item.quantity + 1 };
        items = { ...items, [product.id]: item };
      } else {
        items[product.id] = { ...product, quantity: 1 };
      }

      return {
        ...state,
        items,
        totalItems: totalItems + 1,
      };
    }

    default:
      return state;
  }
}
