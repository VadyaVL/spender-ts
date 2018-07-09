import { set } from 'monolite';
import { AnyAction } from 'redux';

import { Category, ReducerMethods } from '../../common/interfaces';
import { ActionTypes } from './actions';
import { CategoryListState } from './interfaces';

const INITIAL_STATE: CategoryListState = {
  categories: [],
};

const categoryReducerMethods: ReducerMethods<CategoryListState> = {
  [ActionTypes.DROP_STATE]: () => INITIAL_STATE,
  [ActionTypes.LOAD_REQUEST]: (state) => state,
  [ActionTypes.LOAD_SUCCESS]: (state, payload: Category[]) => {
    return {...state, categories: payload};
  },
  [ActionTypes.ADD_CATEGORY]: (state, payload: Category) => {
    return {...state, categories: [...state.categories, payload]};
  },
};

export const categoryList = (
  state: CategoryListState = INITIAL_STATE,
  action: AnyAction = { type: '', payload: null },
): CategoryListState => {
  if (action.type in categoryReducerMethods) {
    return categoryReducerMethods[action.type](state, action.payload);
  } else {
    return state;
  }
};
