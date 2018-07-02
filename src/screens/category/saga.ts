import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';

function* loadData(): any {
	try {
    //const data = yield call(Api.getProductFeed, action.payload);
    console.log('saga-req');
		yield put(actions.loadCategoriesSuccess());
	} catch (e) {
		// console.error(e);
	}
} 

export function* category(): any {
	yield takeLatest(
		actionTypes.LOAD_REQUEST,
		loadData,
	);
}
