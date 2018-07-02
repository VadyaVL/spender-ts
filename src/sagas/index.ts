import { fork } from 'redux-saga/effects';

import { category } from '../screens/category/saga';

export default function* saga() {
  yield [
    fork(category)
  ];
}
