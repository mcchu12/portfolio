import { routerActions } from 'connected-react-router';
import * as logActions from '../features/log/actions';
import * as projectActions from '../features/projects/actions';

export default {
  router: routerActions,
  log: logActions,
  projects: projectActions
};
