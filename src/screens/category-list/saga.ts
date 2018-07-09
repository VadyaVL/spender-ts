// tslint:disable-next-line:no-submodule-imports
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { Category, ReduxState } from '../../common/interfaces';
import { Actions, ActionTypes } from './actions';
import * as db from './db';

function* loadData(): any {
  try {
    const data: Category[] = yield call(db.getCategories);
    yield put(Actions.loadCategoriesSuccess(data ? data : []));
  } catch (e) {
    // console.error(e);
  }
}

function* createCategory(): any {
  try {
    const currentCategory: Category = yield select((state: ReduxState) => state.categoryEdit.currentCategory);
    const categoryCount: number = yield select((state: ReduxState) => state.categoryList.categories.length);

    // save to DB
    const newCategory = {...currentCategory, id: categoryCount + 1};
    yield call(db.saveCategory, newCategory);
    yield put(Actions.addCategory(newCategory));
  } catch (e) {
    // console.error(e);
  }
}

function* saveTestCategory(): any {
  try {
    yield call(db.saveTestCategory);
  } catch (e) {
    // console.error(e);
  }
}

export function* categoryList(): any {
  yield takeLatest(
    ActionTypes.LOAD_REQUEST,
    loadData,
  );
  yield takeLatest(
    ActionTypes.SAVE_TEST_CATEGORY,
    saveTestCategory,
  );
  yield takeLatest(
    ActionTypes.CREATE_CATEGORY,
    createCategory,
  );
}
