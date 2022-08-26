import {
  ADD_ADDON,
  ADD_ITEM_IN_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_ADDON,
  TOTAL_COUNT,
} from "./cartTypes";

export const additem = (item) => ({
  type: ADD_ITEM_IN_CART,
  payload: item,
});

export const deleteitem = (item) => ({
  type: DELETE_ITEM_FROM_CART,
  payload: item,
});

export const addAddOn = (item) => ({
  type: ADD_ADDON,
  payload: item,
});

export const removeAddOn = (item) => ({
  type: REMOVE_ADDON,
  payload: item,
});

export const totalOfItems = (item) => ({
  type: TOTAL_COUNT,
  payload: item,
});
