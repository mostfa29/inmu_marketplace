import { createAction } from '@reduxjs/toolkit';

export const setIsSidebarOpen = createAction<boolean>('sidebar/setIsOpen');