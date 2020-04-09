import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';

import * as reducers from './reducers';
import { StoreAction } from './actions';

const reducer = combineReducers(reducers);

export type StoreState = ReturnType<typeof reducer>;

const loggerMiddleware = createLogger();

const store = createStore<StoreState, StoreAction, unknown, unknown>(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

export default store;
