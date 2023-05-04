import { Middleware } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { setIsAuthenticated } from '../reducers/authSlice';

export const checkAuthMiddleware: Middleware = ({ getState, dispatch }) => (
  next
) => (action) => {
  const isAuthenticated = getState().auth.isAuthenticated;
  const navigate = useNavigate();

  if (action.meta?.requiresAuth && !isAuthenticated) {
    dispatch(setIsAuthenticated(false));
    navigate('/login');
  }

  return next(action);
};
