import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  images: [],
};
export const imageReducer = (state = initialState, action: {type: any, payload: any }) => {
  switch (action.type) {
    case ActionTypes.SET_IMAGES:
      return { ...state, products: action.payload };
    case ActionTypes.FETCH_IMAGES:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedImageReducer = (state = {}, action: { type: any, payload: any }) => {
  switch (action.type) {
    case ActionTypes.SET_IMAGES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
