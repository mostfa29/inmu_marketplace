import { RootState } from "../reducers/rootReducer";

export const selectIsSidebarOpen = (state: RootState) => state.sidebar.isSideBarOpen;
