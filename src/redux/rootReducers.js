import { combineReducers } from "redux";
import dataListReducer from "./data/dataReducers";
import cartReducer from "./cart/cartReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  dataList: dataListReducer,
});

export default rootReducer;
