import { SET_ADD_ONS_LIST, SET_DISTANCE_LIST } from "./dataTypes";

let initialState = {
  addOnsList: [],
  distanceList: [],
};

const dataListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_ONS_LIST:
      return {
        ...state,
        addOnsList: action.payload,
      };

    case SET_DISTANCE_LIST:
      return {
        ...state,
        distanceList: action.payload,
      };
    default:
      return state;
  }
};
export default dataListReducer;
