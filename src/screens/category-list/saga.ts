import { call, put, select, takeLatest } from 'redux-saga/effects';

import { Actions, ActionTypes } from './actions';
import * as db from './db';
import { Category } from '../../common/interfaces';

function* loadData(): any {
	try {
		const data: Category[] = yield call(db.getCategories);
		yield put(Actions.loadCategoriesSuccess(data ? data : []));
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
}
