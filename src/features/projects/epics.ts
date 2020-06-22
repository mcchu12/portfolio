import { filter, switchMap, catchError, map } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { RootEpic, isActionOf } from 'typesafe-actions';
import { IProject } from 'models';

import { fetchProjectsAsync, fetchProjectAsync } from './actions';

export const fetchProjectsEpic: RootEpic = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(fetchProjectsAsync.request)),
    switchMap(() => from(api.projects.fetchProjects()).pipe(
      map(query => {
        const data: IProject[] = query.docs.map(doc => doc.data() as IProject);
        return fetchProjectsAsync.success(data);
      }),
      catchError(err => of(fetchProjectsAsync.failure(err)))
    ))
  )
}

export const fetchProjectEpic: RootEpic = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(fetchProjectAsync.request)),
    switchMap((action) => from(api.projects.fetchProject(action.payload)).pipe(
      map(query => {
        const data: IProject[] = query.docs.map(doc => doc.data() as IProject);
        return fetchProjectAsync.success(data);
      }),
      catchError(err => of(fetchProjectAsync.failure(err)))
    ))
  )
}