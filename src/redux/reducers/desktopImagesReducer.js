import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function desktopImagesReducer(state = initialState.desktopImages, action) {
    switch (action.type) {
        case types.SET_DESKTOP_IMAGES: 
            return action.desktopImages;
        default:
            return state;
    }
}