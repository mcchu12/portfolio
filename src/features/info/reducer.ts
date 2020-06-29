import { createReducer } from 'typesafe-actions';

import { fetchAboutAsync, fetchSocialAsync } from './actions';

import { IAbout, ISocial } from 'models';
import { combineReducers } from 'redux';

type InfoState = {
  about: IAbout
  social: ISocial
}

const inititalState: InfoState = {
  about: { intro: '', skills: [] },
  social: {}
}

const about = createReducer(inititalState.about).handleAction(fetchAboutAsync.success, (state, action) => action.payload ? { ...state, ...action.payload } : state)

const social = createReducer(inititalState.social).handleAction(fetchSocialAsync.success, (state, action) => action.payload ? { ...state, ...action.payload } : state)

export default combineReducers({
  about,
  social
});