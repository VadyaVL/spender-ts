import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as actionTypes from './action-types';
import * as actions from './actions';
import * as db from './db';
import { Category } from '../../common/interfaces';

function* loadData(): any {
	try {
		const data: Category[] = yield call(db.getCategories);
		yield put(actions.loadCategoriesSuccess(data));
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

export function* category(): any {
	yield takeLatest(
		actionTypes.LOAD_REQUEST,
		loadData,
	);
	yield takeLatest(
		actionTypes.SAVE_TEST_CATEGORY,
		saveTestCategory,
	);
}
