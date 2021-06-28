import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { history } from '../App';

import { requestUsers, requestCreateUser, requestUpdateUser, requestDeleteUser } from '../network/api';
import { RootState } from './store';

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface AppState {
  users: Record<string, User>; 
}

const initialState: AppState = {
  users: {},
};

export const getUsers = createAsyncThunk(
  'app/requestUsers',
  async () =>  requestUsers()
);

export const updateUser = createAsyncThunk(
  'app/updateUser',
  async (user: Partial<User>) =>  { 
    history.push('/');
    return requestUpdateUser(user);
  }
);

export const createUser = createAsyncThunk(
  'app/createUser',
  async (user: Partial<User>) =>  { 
    history.push('/');
    return requestCreateUser(user);
  }
);

export const deleteUser = createAsyncThunk(
  'app/deleteUser',
  async (userId: string) =>  { 
    history.push('/');
    return requestDeleteUser(userId);
  }
);

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        const user = action.payload;
        state.users[user.id] = user;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const user = action.payload;
        state.users[user.id] = user;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        delete state.users[action.payload];
      });
  },
});


export const users = (state: RootState): User[] => Object.values(state.users);

export default slice.reducer;
