import { ActionType } from './action';

type AuthAction = { type?: string; payload?: unknown };

const initialState = {
  isAuthLogin: false,
  isAuthRegister: false,
  isAuthLogout: false,
};

export default function authReducer(state = initialState, action: AuthAction = {}) {
  const payload = (action.payload ?? {}) as Record<string, boolean>;

  switch (action.type) {
    case ActionType.SET_IS_AUTH_LOGIN:
      return { ...state, isAuthLogin: payload.isAuthLogin };
    case ActionType.SET_IS_AUTH_REGISTER:
      return { ...state, isAuthRegister: payload.isAuthRegister };
    case ActionType.SET_IS_AUTH_LOGOUT:
      return { ...state, isAuthLogout: payload.isAuthLogout };
    default:
      return state;
  }
}
