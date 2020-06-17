import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function mobileImagesReducer(state = initialState.mobileImages, action) {
    switch (action.type) {
        case types.SET_MOBILE_IMAGES:
            return action.mobileImages;
        default:
            return state;
    }
}