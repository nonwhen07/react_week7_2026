import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuth = true;
    },
    logoutAction: (state) => {
      state.isAuth = false;
    },
  },
});

export const { loginSuccess, logoutAction } = authSlice.actions;
export default authSlice.reducer;
