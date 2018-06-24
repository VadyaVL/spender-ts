import { Action } from 'redux';

import * as ActionTypes from './action-types';

export function getHomeText(): Action {
  return {
    type: ActionTypes.DROP_STATE,
  }
}
