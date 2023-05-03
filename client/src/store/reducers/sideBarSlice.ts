import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideBarOpen: true,
  };
  
  export const sideBarSlice = createSlice({
    name: "isSideBarOpen",
    initialState,
    reducers: {
      toggleSideBar: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.isSideBarOpen = !state.isSideBarOpen;
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { toggleSideBar } = sideBarSlice.actions;
  
  export default sideBarSlice.reducer;