import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import projects from '../features/projects/reducer';
import isAnimationCompleted from '../features/animations/reducer';
import info from '../features/info/reducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    projects,
    isAnimationCompleted,
    info
  });

export default rootReducer;
