import { combineEpics } from 'redux-observable';

import * as logEpics from '../features/log/epics';

export default combineEpics(...Object.values(logEpics));
