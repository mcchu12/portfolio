import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';

import { logMessageAsync } from './actions';

type LogState = {
  logMess: string;
};

const initialState = {
  logMess: ''
};

const logMess = createReducer(initialState.logMess).handleAction(
  logMessageAsync.success,
  () => 'Success'
);

export default combineReducers({
  logMess
});
