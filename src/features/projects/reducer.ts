import { createReducer } from 'typesafe-actions';
import _ from 'lodash';

import { fetchProjectsAsync, fetchProjectAsync } from './actions';


import { IProject } from 'models';

type ProjectState = {
  projects: { [key: string]: IProject }
}

const initialState: ProjectState = {
  projects: {}
}

const projects = createReducer(initialState.projects)
  .handleAction([fetchProjectsAsync.success, fetchProjectAsync.success], (state, action) => ({ ...state, ..._.mapKeys(action.payload, 'index') }))

export default projects;