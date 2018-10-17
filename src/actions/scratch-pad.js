// export const fetchComments = () => {
//   return asyncAction(fetch('http://localhost:3000/comments'), FETCH_COMMENTS);
// }

// export const addComment = (comment) => {
//   return asyncAction(fetch('http://localhost:3000/comments', {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(comment),
//   }), ADD_COMMENT);
// };

// export const deleteComment = (id) => {
//   return asyncAction(fetch(`http://localhost:3000/comments/${id}`, {
//     method: 'delete',
//   }), DELETE_COMMENT, id);
// };


// export const FETCH_COMMENTS = 'FETCH_COMMENTS';
// export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START';
// export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
// export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR';

// export const ADD_COMMENT = 'ADD_COMMENT';
// export const ADD_COMMENT_START = 'ADD_COMMENT_START';
// export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
// export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';

// export const DELETE_COMMENT = 'DELETE_COMMENT';
// export const DELETE_COMMENT_START = 'DELETE_COMMENT_START';
// export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
// export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';


// import { FETCH_COMMENTS_START, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR, ADD_COMMENT_START, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_ERROR, DELETE_COMMENT, DELETE_COMMENT_START } from '../actions/action-types';

// export const initialState = {
//   comments: [],
//   isFetching: false,
//   isSubmitting: false,
//   error: null,
// };

// export default (state = initialState, { type, payload = {} }) => {
//   switch (type) {
//     case FETCH_COMMENTS_START:
//       return { ...state, isFetching: true, error: null };

//     case FETCH_COMMENTS_SUCCESS:
//       return { ...state, isFetching: false, error: null, comments: payload };

//     case FETCH_COMMENTS_ERROR:
//       return { ...state, isFetching: false, error: payload };

//     case ADD_COMMENT_START:
//       return { ...state, isSubmitting: true, error: null };

//     case ADD_COMMENT_SUCCESS: {
//       const newComments = [...state.comments, payload];
//       return { ...state, comments: newComments, isSubmitting: false, error: null };
//     }

//     case ADD_COMMENT_ERROR:
//       return { ...state, isSubmitting: false, error: payload };

//     case DELETE_COMMENT_START:
//       return { ...state, isSubmitting: true, error: null };

//     case DELETE_COMMENT_SUCCESS:
//       return {
//         ...state,
//         isSubmitting: false,
//         comments: state.comments.filter(c => c.id !== parseInt(payload, 10)),
//       };

//     case DELETE_COMMENT_ERROR:
//       return { ...state, isSubmitting: false, error: payload };

//     default:
//       return initialState;
//   }
// };
