import { ActionType } from './action';

type PostsAction = { type?: string; payload?: unknown };

type PostsState = {
  posts: unknown[];
  post: unknown;
  isPost: boolean;
  isPostAdd: boolean;
  isPostAdded: boolean;
  isPostChange: boolean;
  isPostChanged: boolean;
  isPostChangeCover: boolean;
  isPostChangedCover: boolean;
  isPostDelete: boolean;
  isPostDeleted: boolean;
  isPostLike: boolean;
  isPostLiked: boolean;
};

const initialState: PostsState = {
  posts: [] as unknown[],
  post: null as unknown,
  isPost: false,
  isPostAdd: false,
  isPostAdded: false,
  isPostChange: false,
  isPostChanged: false,
  isPostChangeCover: false,
  isPostChangedCover: false,
  isPostDelete: false,
  isPostDeleted: false,
  isPostLike: false,
  isPostLiked: false,
};

export default function postsReducer(state: PostsState = initialState, action: PostsAction = {}): PostsState {
  const payload = (action.payload ?? {}) as Record<string, unknown>;

  switch (action.type) {
    case ActionType.SET_POSTS:
      return { ...state, posts: payload.posts as unknown[] };
    case ActionType.SET_POST:
      return { ...state, post: payload.post };
    case ActionType.SET_IS_POST:
      return { ...state, isPost: payload.isPost as boolean };
    case ActionType.SET_IS_POST_ADD:
      return { ...state, isPostAdd: payload.isPostAdd as boolean };
    case ActionType.SET_IS_POST_ADDED:
      return { ...state, isPostAdded: payload.isPostAdded as boolean };
    case ActionType.SET_IS_POST_CHANGE:
      return { ...state, isPostChange: payload.isPostChange as boolean };
    case ActionType.SET_IS_POST_CHANGED:
      return { ...state, isPostChanged: payload.isPostChanged as boolean };
    case ActionType.SET_IS_POST_CHANGE_COVER:
      return { ...state, isPostChangeCover: payload.isPostChangeCover as boolean };
    case ActionType.SET_IS_POST_CHANGED_COVER:
      return { ...state, isPostChangedCover: payload.isPostChangedCover as boolean };
    case ActionType.SET_IS_POST_DELETE:
      return { ...state, isPostDelete: payload.isPostDelete as boolean };
    case ActionType.SET_IS_POST_DELETED:
      return { ...state, isPostDeleted: payload.isPostDeleted as boolean };
    case ActionType.SET_IS_POST_LIKE:
      return { ...state, isPostLike: payload.isPostLike as boolean };
    case ActionType.SET_IS_POST_LIKED:
      return { ...state, isPostLiked: payload.isPostLiked as boolean };
    default:
      return state;
  }
}
