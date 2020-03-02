import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { RootAction, RootState, Services } from 'typesafe-actions';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';

export const history = createBrowserHistory();

export const epicMiddleWare = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services
});

const middlewares = [routerMiddleware(history), epicMiddleWare];

const initialState = {};

const store = createStore(
  rootReducer(history),
  initialState,
  applyMiddleware(...middlewares)
);

epicMiddleWare.run(rootEpic);

export default store;
