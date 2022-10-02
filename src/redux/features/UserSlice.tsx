import { createSlice } from "@reduxjs/toolkit";

type UserTypes = {
  isLoggedIn: boolean;
  isUserExists: boolean;
};

const initialState = {
  isLoggedIn: false,
  isUserExists: false,
} as UserTypes;

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsUserExists: (state) => {
      state.isUserExists = !state.isUserExists;
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setIsLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setIsLoggedIn, setIsLoggedOut } = UserSlice.actions;

export default UserSlice.reducer;
