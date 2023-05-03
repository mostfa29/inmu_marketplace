import { configureStore } from '@reduxjs/toolkit'
import themeSlice from "./reducers/themeSlice";
import sideBarSlice from "./reducers/sideBarSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    sideBar: sideBarSlice
  },
})