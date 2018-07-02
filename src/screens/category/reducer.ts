import { Action } from 'redux';

import { CategoryState } from './interfaces';
import * as ActionTypes from './action-types';

const INITIAL_STATE: CategoryState = {
  categories: [
    {
      id: 1,
      title: 'Проїзд',
      icon: 0,
      value: 0,
    },
    {
      id: 2,
      title: 'Інше',
      icon: 0,
      value: 0,
    },
    {
      id: 3,
      title: 'Продукти',
      icon: 0,
      value: 0,
    },
    {
      id: 4,
      title: 'Зовнішність',
      icon: 0,
      value: 0,
    },
    {
      id: 5,
      title: 'TEST_01',
      icon: 0,
      value: 0,
    },
    {
      id: 6,
      title: 'MEDIUM_TEST_01',
      icon: 0,
      value: 0,
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
    case ActionTypes.LOAD_REQUEST:
    console.log('redu-req');
      return state;
    case ActionTypes.LOAD_SUCCESS:
    console.log('redu-suc');
      return state;
    default:
      return state;
  }
}
