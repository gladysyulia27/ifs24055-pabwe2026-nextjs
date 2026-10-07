import { ActionType } from './action';

type UsersAction = { type?: string; payload?: unknown };

type UsersState = {
  users: unknown[];
  profile: unknown;
  isProfile: boolean;
  isChangeProfile: boolean;
  isChangeProfilePhoto: boolean;
  isChangeProfilePassword: boolean;
};

const initialState: UsersState = {
  users: [] as unknown[],
  profile: null as unknown,
  isProfile: false,
  isChangeProfile: false,
  isChangeProfilePhoto: false,
  isChangeProfilePassword: false,
};

export default function usersReducer(state: UsersState = initialState, action: UsersAction = {}): UsersState {
  const payload = (action.payload ?? {}) as Record<string, unknown>;

  switch (action.type) {
    case ActionType.SET_USERS:
      return { ...state, users: payload.users as unknown[] };
    case ActionType.SET_PROFILE:
      return { ...state, profile: payload.profile };
    case ActionType.SET_IS_PROFILE:
      return { ...state, isProfile: payload.isProfile as boolean };
    case ActionType.SET_IS_CHANGE_PROFILE:
      return { ...state, isChangeProfile: payload.isChangeProfile as boolean };
    case ActionType.SET_IS_CHANGE_PROFILE_PHOTO:
      return { ...state, isChangeProfilePhoto: payload.isChangeProfilePhoto as boolean };
    case ActionType.SET_IS_CHANGE_PROFILE_PASSWORD:
      return {
        ...state,
        isChangeProfilePassword: payload.isChangeProfilePassword as boolean,
      };
    default:
      return state;
  }
}
