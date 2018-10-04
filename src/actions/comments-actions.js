import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
} from './action-types';

const asyncAction = (promise, actionName, optionalPayload = null) => (dispatch) => {
  dispatch({
    type: `${actionName}_START`,
  });

  promise.then((res) => {
    if (!res.ok) {
      throw new Error('Looks like there ware a problem:', res.statusText);
    }
    return res.json();
  }).then((data) => {
    dispatch({
      type: `${actionName}_SUCCESS`,
      payload: Object.keys(data).length ? data : optionalPayload,
    });
  }).catch((error) => {
    dispatch({
      type: `${actionName}_ERROR`,
      payload: error,
    });
  });
};

export const fetchComments = () => {
  return asyncAction(fetch('http://localhost:3000/comments'), FETCH_COMMENTS);
}

export const addComment = (comment) => {
  return asyncAction(fetch('http://localhost:3000/comments', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  }), ADD_COMMENT);
};

export const deleteComment = (id) => {
  return asyncAction(fetch(`http://localhost:3000/comments/${id}`, {
    method: 'delete',
  }), DELETE_COMMENT, id);
};
