import { configureStore } from "@reduxjs/toolkit";
import AuthModalReducer from "./redux/features/AuthModalSlice";
import UserReducer from "./redux/features/UserSlice";
//import RootReducer from "./redux/reducers";

export const store = configureStore({
  reducer: {
    auth: AuthModalReducer,
    user: UserReducer,
  },
});
