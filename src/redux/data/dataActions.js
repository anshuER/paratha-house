import { SET_ADD_ONS_LIST, SET_DISTANCE_LIST } from "./dataTypes";

export const set_Addons = (addOn) => ({
  type: SET_ADD_ONS_LIST,
  payload: addOn,
});

export const set_distanceList = (distance) => ({
  type: SET_DISTANCE_LIST,
  payload: distance,
});