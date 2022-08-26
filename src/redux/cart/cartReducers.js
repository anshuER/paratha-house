import { addItemToCart, removeItem, totalItems } from "./cartFunctions";
import {
  ADD_ADDON,
  ADD_ITEM_IN_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_ADDON,
  TOTAL_COUNT,
} from "./cartTypes";

const INITIAL_STATE = {
  cartItems: [],
  addonsItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    case TOTAL_COUNT:
      return {
        ...state,
        cartItems: totalItems(state.cartItems, action.payload),
      };

    case ADD_ADDON:
      return {
        ...state,
        addonsItems: addItemToCart(state.addonsItems, action.payload),
      };

    case REMOVE_ADDON:
      return {
        ...state,
        addonsItems: removeItem(state.addonsItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
