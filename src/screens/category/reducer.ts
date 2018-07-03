import { AnyAction } from 'redux';
import { set } from 'monolite';

import { CategoryState } from './interfaces';
import * as ActionTypes from './action-types';
import { ReducerMethods, Category } from '../../common/interfaces';

const INITIAL_STATE: CategoryState = {
  categories: [],
};

const categoryReducerMethods: ReducerMethods<CategoryState> = {
  [ActionTypes.DROP_STATE]: () => INITIAL_STATE,
  [ActionTypes.LOAD_REQUEST]: (state) => state,
  [ActionTypes.LOAD_SUCCESS]: (state, payload: Category[]) => {
    console.log('load succ');
    console.log(payload);
    return set(state, _ => _.categories)(payload);
  },
};

export const category = (
  state: CategoryState = INITIAL_STATE,
  action: AnyAction = { type: '', payload: null }
): CategoryState => {
  if (action.type in categoryReducerMethods) {
    return categoryReducerMethods[action.type](state, action.payload);
  } else {
    return state;
  }
}
