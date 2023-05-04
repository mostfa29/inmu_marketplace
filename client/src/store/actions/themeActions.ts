import { createAction } from '@reduxjs/toolkit';

export const setIsDarkMode = createAction<boolean>('theme/setIsDarkMode');