import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contactSlice';

export const store = configureStore({
  reducer: {
    contactsReduser,
  },
});
