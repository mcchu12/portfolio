import { createAsyncAction } from 'typesafe-actions';
import { IProject } from 'models';

enum actionTypes {
  fetchProjectsRequest = 'FETCH_PROJECTS_REQUEST',
  fetchProjectsSuccess = 'FETCH_PROJECTS_SUCCESS',
  fetchProjectsFailure = 'FETCH_PROJECTS_FAILURE',
  fetchProjectRequest = 'FETCH_PROJECT_REQUEST',
  fetchProjectSuccess = 'FETCH_PROJECT_SUCCESS',
  fetchProjectFailure = 'FETCH_PROJECT_FAILURE'
}

export const fetchProjectsAsync = createAsyncAction(
  actionTypes.fetchProjectsRequest,
  actionTypes.fetchProjectsSuccess,
  actionTypes.fetchProjectsFailure
)<undefined, IProject[], string>();

export const fetchProjectAsync = createAsyncAction(
  actionTypes.fetchProjectRequest,
  actionTypes.fetchProjectSuccess,
  actionTypes.fetchProjectFailure
)<string, IProject[], string>();