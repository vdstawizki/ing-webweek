import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
} from './action-types';

const asyncAction = (responsePromise, actionName, optionalPayload = null) => async (dispatch) => {
  try {
    dispatch({
      type: `${actionName}_START`,
    });

    const response = await responsePromise;

    if (!response.ok) {
      throw new Error(`Looks like there ware a problem: ${response.status} ${response.statusText}`);
    }

    const payload = await response.json();
    dispatch({
      type: `${actionName}_SUCCESS`,
      payload: Object.keys(payload).length ? payload : optionalPayload,
    });
  } catch (error) {
    dispatch({
      type: `${actionName}_ERROR`,
      payload: error,
    });
  }
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
