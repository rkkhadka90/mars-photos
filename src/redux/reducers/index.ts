import { combineReducers } from "redux";
import { imageReducer, selectedImageReducer } from "./ImageReducer";

export const reducers = combineReducers({
  allImages: imageReducer,
  image: selectedImageReducer,
});

export type RootReducers = ReturnType<typeof reducers>;
