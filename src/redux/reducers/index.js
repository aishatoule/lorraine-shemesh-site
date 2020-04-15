import { combineReducers } from 'redux';
import desktopImages from './desktopImagesReducer';
import mobileImages from './mobileImagesReducer';

const rootReducer = combineReducers({
    desktopImages,
    mobileImages
  });
  

export default rootReducer;
