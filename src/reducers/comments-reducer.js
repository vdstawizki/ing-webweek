import { FETCH_COMMENTS_START, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR, ADD_COMMENT_START, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_ERROR } from '../actions/action-types';

const initialState = {
  comments: [],
  isFetching: false,
  isSubmitting: false,
  error: null,
};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case FETCH_COMMENTS_START:
      return { ...state, isFetching: true, error: null };

    case FETCH_COMMENTS_SUCCESS:
      return { ...state, isFetching: false, error: null, comments: payload };

    case FETCH_COMMENTS_ERROR:
      return { ...state, isFetching: false, error: payload };

    case ADD_COMMENT_START:
      return { ...state, isSubmitting: true, error: null };

    case ADD_COMMENT_SUCCESS:
      const newComments = [...state.comments, payload];
      return { ...state, comments: newComments, isSubmitting: false, error: null };

    case ADD_COMMENT_ERROR:
      return { ...state, isSubmitting: false, error: payload };

    case DELETE_COMMENT_SUCCESS:
      return { ...state, comments: state.comments.filter(c => c.id !== parseInt(payload.id, 10)) };

    case DELETE_COMMENT_ERROR:
      return { ...state, error: payload };

    default:
      return initialState;
  }
};
