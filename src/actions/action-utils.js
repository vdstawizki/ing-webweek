export default (responsePromise, actionName, optionalPayload = null) => async (dispatch) => {
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
