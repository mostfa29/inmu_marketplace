import { combineReducers } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import sideBarSlice from './sideBarSlice';
import authSlice from './authSlice';


const rootReducer = combineReducers({
  theme: themeSlice,
  sidebar: sideBarSlice,
  auth: authSlice,
});


export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;