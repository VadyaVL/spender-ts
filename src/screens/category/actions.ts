import { Action } from 'redux';

import * as ActionTypes from './action-types';
import { ExpandedAction, Category } from '../../common/interfaces';

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

export function loadCategoriesSuccess(
  categories: Category[],
): ExpandedAction<Category[]> {
  return {
    type: ActionTypes.LOAD_SUCCESS,
    payload: categories,
  }
}
