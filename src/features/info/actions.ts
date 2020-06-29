import { createAsyncAction } from 'typesafe-actions';
import { IAbout, ISocial } from 'models';

enum actionTypes {
  fetchAboutRequest = 'FETCH_ABOUT_REQUEST',
  fetchAboutSuccess = 'FETCH_ABOUT_Success',
  fetchAboutFailure = 'FETCH_ABOUT_Failure',
  fetchSocialRequest = 'FETCH_SOCIAL_REQUEST',
  fetchSocialSuccess = 'FETCH_SOCIAL_Success',
  fetchSocialFailure = 'FETCH_SOCIAL_Failure',
}

export const fetchAboutAsync = createAsyncAction(
  actionTypes.fetchAboutRequest,
  actionTypes.fetchAboutSuccess,
  actionTypes.fetchAboutFailure
)<undefined, IAbout | null, string>();

export const fetchSocialAsync = createAsyncAction(
  actionTypes.fetchSocialRequest,
  actionTypes.fetchSocialSuccess,
  actionTypes.fetchSocialFailure
)<undefined, ISocial | null, string>();