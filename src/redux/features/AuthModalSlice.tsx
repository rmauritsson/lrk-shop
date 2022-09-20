import { createSlice } from "@reduxjs/toolkit";

type AuthTypes = {
  showAuthModal: boolean;
};

const initialState = {
  showAuthModal: true,
} as AuthTypes;

const AuthModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default AuthModalSlice.reducer;
