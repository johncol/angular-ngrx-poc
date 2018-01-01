import { AuthState } from "./app-state";
import { AuthenticationService } from "../services/authentication.service";
import { AuthAction, AuthActionType, LoginAction } from "./auth.actions";

const initialState: AuthState = {
  authenticated: false,
  user: null
};

export function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
  switch(action.type) {
    case AuthActionType.LOGIN:
      return {
        ...state,
        authenticated: true,
        user: (<LoginAction>action).payload
      };

    case AuthActionType.LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: null
      };

    default:
      return state;
  }
}
