import { Action } from "@ngrx/store";

export class AuthActionType {
  static LOGIN: string = 'LOGIN';
  static LOGOUT: string = 'LOGOUT';
}

export class LoginAction implements Action {
  readonly type: string = AuthActionType.LOGIN;

  constructor(
    public payload: string
  ) { }
}

export class LogoutAction implements Action {
  readonly type: string = AuthActionType.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;
