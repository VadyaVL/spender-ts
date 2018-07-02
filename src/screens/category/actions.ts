import { Action } from 'redux';

import * as ActionTypes from './action-types';

export function getHomeText(): Action {
  return {
    type: ActionTypes.DROP_STATE,
  }
}

export function loadCategoriesRequest(): Action {
  return {
    type: ActionTypes.LOAD_REQUEST,
  }
}

export function loadCategoriesSuccess(/**/): Action {
  return {
    type: ActionTypes.LOAD_SUCCESS,
  }
}
