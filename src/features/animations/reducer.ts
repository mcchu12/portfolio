import { createReducer } from 'typesafe-actions';

import { setAnimationAction } from './actions'

const isAnimationCompleted = createReducer(false).handleAction(setAnimationAction, () => true)

export default isAnimationCompleted;