import commentsReducer from './comments-reducer';
import { FETCH_COMMENTS_START, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR, ADD_COMMENT_START, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, DELETE_COMMENT_START, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_ERROR } from '../actions/action-types';

describe('comments reducer', () => {
  const initialState = commentsReducer(null, { type: 'SOMETHING' });

  describe('initial state', () => {
    it('has an empty comments array', () => {
      expect(initialState.comments.length).toEqual(0);
    });
    it('has fetching set to false', () => {
      expect(initialState.isFetching).toBe(false);
    });
    it('has submitting set to false', () => {
      expect(initialState.isSubmitting).toBe(false);
    });
    it('has error set to null', () => {
      expect(initialState.error).toEqual(null);
    });
  });

  describe('fetching', () => {

    describe('on FETCH_COMMENTS_START', () => {
      const state = commentsReducer(initialState, { type: FETCH_COMMENTS_START });

      it('sets isFetching to true', () => {
        expect(state.isFetching).toEqual(true);
      });
    });

    describe('on FETCH_COMMENTS_SUCCESS', () => {
      const payload = ['foo', 'bar'];
      const state = commentsReducer(initialState, { type: FETCH_COMMENTS_SUCCESS, payload });

      it('sets isFetching to false', () => {
        expect(state.isFetching).toBe(false);
      });

      it('sets comments to the payload', () => {
        expect(state.comments).toEqual(payload);
      });

      it('sets error to null', () => {
        expect(state.error).toEqual(null);
      });
    });

    describe('on FETCH_COMMENTS_ERROR', () => {
      const payload = 'ERROR! STOP THE ENGINES!!1111';
      const state = commentsReducer(initialState, { type: FETCH_COMMENTS_ERROR, payload });

      it('sets the error to the payload', () => {
        expect(state.error).toEqual(payload);
      });

      it('sets isFetching to false', () => {
        expect(state.isFetching).toBe(false);
      });
    });
  });

  describe('adding', () => {
    describe('on ADD_COMMENTS_START', () => {
      const state = commentsReducer(initialState, { type: ADD_COMMENT_START });

      it('sets to isSumitting to true', () => {
        expect(state.isSubmitting).toBe(true);
      });

      it('sets error to null', () => {
        expect(state.error).toEqual(null);
      });
    });

    describe('on ADD_COMMENTS_SUCCESS', () => {
      const comments = ['foo', 'bar'];
      const preState = { ...initialState, comments };
      const payload = 'baz';
      const state = commentsReducer(preState, { type: ADD_COMMENT_SUCCESS, payload });

      it('sets isSubmitting to false', () => {
        expect(state.isSubmitting).toEqual(false);
      });

      it('adds the payload to the comments', () => {
        expect(state.comments).toContain(payload);
      });

      it('increases the comments length by one', () => {
        expect(state.comments.length).toEqual(3);
      });

      it('keeps previous comments', () => {
        expect(state.comments).toContain(...comments);
      });
    });

    describe('on ADD_COMMENTS_ERROR', () => {
      const payload = 'ERROR! STOP THE ENGINES!!1111';
      const state = commentsReducer(initialState, { type: ADD_COMMENT_ERROR, payload });

      it('sets the error to the payload', () => {
        expect(state.error).toEqual(payload);
      });

      it('sets isFetching to false', () => {
        expect(state.isSubmitting).toBe(false);
      });
    });
  });

  describe('deleting', () => {
    describe('on DELETE_COMMENT_START', () => {
      const state = commentsReducer(initialState, { type: DELETE_COMMENT_START });

      it('sets to isSumitting to true', () => {
        expect(state.isSubmitting).toBe(true);
      });

      it('sets error to null', () => {
        expect(state.error).toEqual(null);
      });
    });

    describe('on DELETE_COMMENT_SUCCESS', () => {
      const comments = [{ id: 1, comment: 'foo' }, { id: 2, comment: 'bar' }];
      const preState = { ...initialState, comments };
      const payload = 1;
      const state = commentsReducer(preState, { type: DELETE_COMMENT_SUCCESS, payload });

      it('sets isSubmitting to false', () => {
        expect(state.isSubmitting).toEqual(false);
      });

      it('decreases the comments length by one', () => {
        expect(state.comments.length).toEqual(1);
      });

      describe('on DELETE_COMMENT_ERROR', () => {
        const payload = 'ERROR! STOP THE ENGINES!!1111';
        const state = commentsReducer(initialState, { type: DELETE_COMMENT_ERROR, payload });

        it('sets the error to the payload', () => {
          expect(state.error).toEqual(payload);
        });

        it('sets isFetching to false', () => {
          expect(state.isSubmitting).toBe(false);
        });
      });
    });
  });
});
