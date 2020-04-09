import { createStore, combineReducers } from "redux";

import * as reducers from './reducers';
import { StoreAction } from './actions';

const reducer = combineReducers(reducers);

type StoreState = ReturnType<typeof reducer>;

const store = createStore<StoreState, StoreAction, unknown, unknown>(reducer);

export default store;
