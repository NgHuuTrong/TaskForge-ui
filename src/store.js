import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './features/example/exampleSlice';
import boardSlice from './features/Boards/boardSlice';

const store = configureStore({
  reducer: {
    example: exampleSlice,
    board: boardSlice,
  },
});

export default store;
