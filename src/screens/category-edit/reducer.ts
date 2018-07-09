import { set } from 'monolite';
import { AnyAction } from 'redux';

import { Category, ReducerMethods } from '../../common/interfaces';
import { ActionTypes } from './actions';
import { CategoryEditState } from './interfaces';

const INITIAL_STATE: CategoryEditState = {
  currentCategory: null,
};

const reducerMethods: ReducerMethods<CategoryEditState> = {
  [ActionTypes.DROP_STATE]: () => INITIAL_STATE,
  [ActionTypes.SET_CURRENT]: (state, payload: Category) => {
    return {...state, currentCategory: payload};
  },
  [ActionTypes.SET_TITLE]: (state, payload: string) => {
    if (state.currentCategory) {
      return {...state, currentCategory: {...state.currentCategory, title: payload}};
    }
    return state;
  },
};

export const categoryEdit = (
  state: CategoryEditState = INITIAL_STATE,
  action: AnyAction = { type: '', payload: null },
): CategoryEditState => {
  if (action.type in reducerMethods) {
    return reducerMethods[action.type](state, action.payload);
  } else {
    return state;
  }
};
