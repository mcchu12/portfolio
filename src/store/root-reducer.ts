import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import logger from '../features/log/reducer';
import projects from '../features/projects/reducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    logger,
    projects
  });

export default rootReducer;
