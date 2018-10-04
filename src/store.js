import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import commentsReducer from './reducers/comments-reducer';

export default createStore(commentsReducer, applyMiddleware(thunk, logger));
