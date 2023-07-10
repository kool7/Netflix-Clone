import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

export interface UserState {
  user: any
}

export const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
    },
    logout: (state) => {
        state.user = null;
    }
  }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
