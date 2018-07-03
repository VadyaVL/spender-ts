import { fork, all } from 'redux-saga/effects';

import { category } from '../screens/category/saga';

export default function* saga() {
  yield all([
    fork(category)
  ]);
}
