import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('user/getAllUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  });

  const data = response.json();
  return data;
});
