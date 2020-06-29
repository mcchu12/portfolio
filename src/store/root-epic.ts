import { combineEpics } from 'redux-observable';

import * as projectEpics from '../features/projects/epics';
import * as infoEpics from '../features/info/epics';

export default combineEpics(...Object.values(projectEpics), ...Object.values(infoEpics));
