import { AuthTypes } from "./AuthTypes";
import { UserTypes } from "./UserTypes";

export type RootReduxStateType = {
  auth: AuthTypes;
  user: UserTypes;
};

export type ReduxActionType<T> = {
  type: string;
  payload: T;
};
