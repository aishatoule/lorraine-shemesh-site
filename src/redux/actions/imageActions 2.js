// import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_DESKTOP_IMAGES, SET_MOBILE_IMAGES } from "./actionTypes";

// let nextTodoId = 0;

// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });

// export const addDesktopImages = images => ({
//     type: SET_DESKTOP_IMAGES,
//     payload: { images }
// })

// export const addMobileImages = images => ({
//     type: SET_MOBILE_IMAGES,
//     payload: { images }
// })


// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

import * as types from "./actionTypes";

export function addDesktopImages(images) {
  return { type: types.SET_DESKTOP_IMAGES, images };
}
export function addMobileImages(images) {
  return { type: types.SET_MOBILE_IMAGES, images };
}
