import { AnyAction } from 'redux';
import { set } from 'monolite';

import { CategoryListState } from './interfaces';
import { ActionTypes } from './actions';
import { ReducerMethods, Category } from '../../common/interfaces';

const INITIAL_STATE: CategoryListState = {
  categories: [],
};

const categoryReducerMethods: ReducerMethods<CategoryListState> = {
  [ActionTypes.DROP_STATE]: () => INITIAL_STATE,
  [ActionTypes.LOAD_REQUEST]: (state) => state,
  [ActionTypes.LOAD_SUCCESS]: (state, payload: Category[]) => {
    return {...state, categories: payload};
    // not worked
    // return set(state, _ => _.categories)(payload);
  },
};

export const categoryList = (
  state: CategoryListState = INITIAL_STATE,
  action: AnyAction = { type: '', payload: null }
): CategoryListState => {
  if (action.type in categoryReducerMethods) {
    return categoryReducerMethods[action.type](state, action.payload);
  } else {
    return state;
  }
}
