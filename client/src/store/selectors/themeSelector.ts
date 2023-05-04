import { RootState } from "../reducers/rootReducer";

export const selectIsDarkMode = (state: RootState) => state.theme.isDarkMode;
