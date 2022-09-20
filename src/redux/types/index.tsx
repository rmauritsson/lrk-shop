import { AuthTypes } from "./AuthTypes";

export type RootReduxStateType = {
  auth: AuthTypes;
};

export type ReduxActionType<T> = {
  type: string;
  payload: T;
};
