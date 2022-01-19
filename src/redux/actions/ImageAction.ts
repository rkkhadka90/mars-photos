import storeApi from "../../apis/StoreApi";
import { ActionTypes } from "../constants/ActionTypes";


export const fetchImages = (rover: string) => async (dispatch: any) => {
    const response = await storeApi.get(`/${rover}/photos?earth_date=2015-6-3&api_key=DEMO_KEY`);
    dispatch({ type: ActionTypes.FETCH_IMAGES, payload: response.data });
};

export const setImagess = (images: []) => {
  return {
    type: ActionTypes.SET_IMAGES,
    payload: images,
  };
};

export const selectedImage = (image: any) => {
  return {
    type: ActionTypes.SELECTED_IMAGE,
    payload: image,
  };
};

