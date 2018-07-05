import { fork, all } from 'redux-saga/effects';

import { categoryList } from '../screens/category-list/saga';

export default function* saga() {
  yield all([
    fork(categoryList)
  ]);
}
