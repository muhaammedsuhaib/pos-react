import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';
const createInitialState = (message = 'Not Loaded', loading = false) => ({
  data: {},
  status: false,
  message,
  loading,
});
const initialState = {
  user: createInitialState(),
  superVisorPassword: createInitialState(),
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearCheckPasswords: (state, action) => {
      const superVisorPassword = createInitialState();
      return { ...state, superVisorPassword: superVisorPassword };
    },
    clearAllLogin: (state) => {
      return { ...state, ...initialState };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.loginRequestFromToken.fulfilled, (state, action) => {
        const user = action.payload;
        return { ...state, user: { ...user, loading: false } };
      })
      .addCase(actions.loginRequestFromToken.pending, (state, action) => {
        const user = {
          data: action.payload,
          status: false,
          loading: true,
          message: 'Loading...',
        };
        return { ...state, user: { ...user, loading: true } };
      })
      .addCase(actions.loginRequestFromToken.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          user: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected',
          }
        };
      });

    builder
      .addCase(actions.checkSupervisorPassword.fulfilled, (state, action) => {
        const superVisorPassword = action.payload;
        return { ...state, superVisorPassword: { ...superVisorPassword, loading: false } };
      })
      .addCase(actions.checkSupervisorPassword.pending, (state) => {
        const superVisorPassword = {
          data: null,
          status: false,
          loading: true,
          message: 'Loading...',
        };
        return { ...state, superVisorPassword: { ...superVisorPassword, loading: true } };
      })
      .addCase(actions.checkSupervisorPassword.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          superVisorPassword: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected',
          }
        };
      });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

export const selectUserToken = (state) => state.user.user
export const selectSuperVisorPassword = (state) => state.user.superVisorPassword