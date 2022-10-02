import { createSlice } from "@reduxjs/toolkit";

type AuthTypes = {
  showAuthModal: boolean;
};

const initialState = {
  showAuthModal: false,
} as AuthTypes;

const AuthModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setShowAuthModal: (state) => {
      state.showAuthModal = !state.showAuthModal;
    },

    closeShowAuthModal: (state) => {
      state.showAuthModal = false;
    },
  },
});

export const { setShowAuthModal, closeShowAuthModal } = AuthModalSlice.actions;

export default AuthModalSlice.reducer;
