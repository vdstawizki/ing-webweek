export const initialState = {
  comments: [],
  isFetching: false,
  isSubmitting: false,
  error: null,
};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    default:
      return initialState;
  }
};
