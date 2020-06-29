import { filter, switchMap, catchError, map } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { RootEpic, isActionOf } from 'typesafe-actions';
import { IAbout, ISocial } from 'models';

import { fetchAboutAsync, fetchSocialAsync } from './actions';

export const fetchAboutEpic: RootEpic = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(fetchAboutAsync.request)),
    switchMap(() => from(api.info.fetchAbout()).pipe(
      map(doc => {
        const data = doc.exists ? doc.data() as IAbout : null;
        return fetchAboutAsync.success(data);
      }),
      catchError(err => of(fetchAboutAsync.failure(err)))
    ))
  )
}

export const fetchSocialEpic: RootEpic = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(fetchSocialAsync.request)),
    switchMap(() => from(api.info.fetchSocial()).pipe(
      map(doc => {
        const data = doc.exists ? doc.data() as ISocial : null;
        return fetchSocialAsync.success(data);
      }),
      catchError(err => of(fetchSocialAsync.failure(err)))
    ))
  )
}