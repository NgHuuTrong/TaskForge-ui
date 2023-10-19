import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './features/example/exampleSlice';
import sidebarSlice from './features/Sidebar/sidebarSlice';

const store = configureStore({
  reducer: {
    example: exampleSlice,
    sidebar: sidebarSlice
  },
});

export default store;
