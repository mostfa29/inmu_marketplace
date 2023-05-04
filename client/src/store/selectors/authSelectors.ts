import { RootState } from "../reducers/rootReducer";

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
