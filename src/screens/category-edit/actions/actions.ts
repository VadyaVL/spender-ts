import { Action } from 'redux';

import { Category, ExpandedAction } from '../../../common/interfaces';
import * as ActionTypes from './types';

export function dropState(): Action {
  return {
    type: ActionTypes.DROP_STATE,
  };
}

export function setCurrent(
  current: Category,
): ExpandedAction<Category> {
  return {
    type: ActionTypes.SET_CURRENT,
    payload: current,
  };
}

export function setTitle(
  title: string,
): ExpandedAction<string> {
  return {
    type: ActionTypes.SET_TITLE,
    payload: title,
  };
}
