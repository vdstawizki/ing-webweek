import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  DELETE_COMMENT_SUCCESS,
} from './action-types';

export const fetchComments = () => (dispatch) => {
  dispatch({
    type: FETCH_COMMENTS_START,
  });

  fetch('http://localhost:3000/comments').then((res) => {
    if (res.status !== 200) {
      throw new Error('Looks like there ware a problem:', res.statusText);
    }

    return res.json();
  }).then((data) => {
    setTimeout(() => {
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: data,
      });
    }, 300);
  }).catch((error) => {
    dispatch({
      type: FETCH_COMMENTS_ERROR,
      payload: error,
    });
  });
};

export const addComment = comment => (dispatch) => {
  dispatch({
    type: ADD_COMMENT_START,
  });

  fetch('http://localhost:3000/comments', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
    .then((res) => {
      if (res.status !== 201) {
        throw new Error('Looks like there ware a problem:', res.statusText);
      }

      return res.json();
    })
    .then((data) => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: {
          ...comment,
          id: data.id,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_COMMENT_ERROR,
        payload: error,
      });
    });
};

export const deleteComment = id => (dispatch) => {
  fetch(`http://localhost:3000/comments/${id}`, {
    method: 'delete',
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error('Looks like there ware a problem:', res.statusText);
      }

      return res.json();
    })
    .then(() => {
      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        payload: error,
      });
    });
};
