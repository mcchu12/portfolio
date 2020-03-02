import { filter, switchMap, catchError, map } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { RootEpic, isActionOf } from 'typesafe-actions';

import { logMessageAsync } from './actions';

export const logMessageEpic: RootEpic = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(logMessageAsync.request)),
    switchMap(action =>
      from(api.logger.log(action.payload)).pipe(
        map(logMessageAsync.success),
        catchError(err => of(logMessageAsync.failure(err)))
      )
    )
  );
};
