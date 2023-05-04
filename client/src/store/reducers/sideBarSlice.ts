import { createSlice } from "@reduxjs/toolkit";


  

  interface SidebarState {
    isSideBarOpen: boolean;
  }
  
  const initialState: SidebarState = {
    isSideBarOpen: true,
  };
  
  export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
      setIsOpen: (state, action) => {
        state.isSideBarOpen = action.payload;
      },
    },
  });
  
  export const { setIsOpen } = sidebarSlice.actions;
  
  export default sidebarSlice.reducer;