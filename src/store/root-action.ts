import { routerActions } from 'connected-react-router';
import * as projectActions from '../features/projects/actions';
import * as animationActions from '../features/animations/actions';
import * as infoActions from '../features/info/actions';

export default {
  router: routerActions,
  projects: projectActions,
  animation: animationActions,
  info: infoActions
};
