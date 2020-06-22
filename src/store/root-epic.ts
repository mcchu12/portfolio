import { combineEpics } from 'redux-observable';

import * as logEpics from '../features/log/epics';
import * as projectEpics from '../features/projects/epics';

export default combineEpics(...Object.values(logEpics), ...Object.values(projectEpics));
