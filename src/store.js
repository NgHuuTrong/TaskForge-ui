import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './features/example/exampleSlice';
import sidebarSlice from './features/Sidebar/sidebarSlice';
import boardSlice from './features/Boards/boardSlice';

const store = configureStore({
  reducer: {
    example: exampleSlice,
    sidebar: sidebarSlice,
    board: boardSlice
  },
});

export default store;
