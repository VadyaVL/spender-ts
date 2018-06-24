import { Action } from 'redux';

import { CategoryState } from './interfaces';
import * as ActionTypes from './action-types';

const INITIAL_STATE: CategoryState = {
  categories: [
    {
      id: 1,
      title: 'Проїзд',
    },
    {
      id: 2,
      title: 'Інше',
    },
  ],
};

export const category = (
  state: CategoryState = INITIAL_STATE,
  action: Action = { type: '' }
) => {
  switch (action.type) {
    case ActionTypes.DROP_STATE:
      return state;
    default:
      return state;
  }
}
