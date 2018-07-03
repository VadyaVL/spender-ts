import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';

function* loadData(): any {
	try {
    //const data = yield call(Api.getProductFeed, action.payload);
    const loaded = [
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
    ];
		yield put(actions.loadCategoriesSuccess(loaded));
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
