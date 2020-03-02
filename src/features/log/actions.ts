import { createAsyncAction } from 'typesafe-actions';

export const logMessageAsync = createAsyncAction(
  'LOG_MESSAGE_REQUEST',
  'LOG_MESSAGE_SUCCESS',
  'LOG_MESSAGE_FAILURE'
)<string, undefined, string>();
