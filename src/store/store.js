import { configureStore } from '@reduxjs/toolkit';

import authReducer from '@/features/auth/authSlice';
import toastReducer from '@/features/toastSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
  },
});
