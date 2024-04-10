import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.herokuapp.com"
const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};
export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
      try {
          const response = await axios.post('/users/signup', userInfo);
           setAuthHeader(response.data.token);
          return response.data;
 
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message })
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
    async (userInfo, thunkAPI) => {
      console.log(userInfo)
    try {
        const response = await axios.post("/users/login", userInfo);
        setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
      clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
    async (_, thunkAPI) => {
        console.log("refreshUser", thunkAPI.getState())
        const redaxState = thunkAPI.getState();
       const savedToken = redaxState.auth.token;
        setAuthHeader(savedToken);
      const response = await axios.get("/users/current");
      return response.data;
  },
  {
    condition: (_, { getState }) => {
      const redaxState = getState();
       const savedToken = redaxState.auth.token;
      return savedToken !== null;

    },
  }
);
