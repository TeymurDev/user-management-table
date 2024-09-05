import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './userService';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default UserSlice.reducer;
