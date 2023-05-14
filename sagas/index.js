import { all } from 'redux-saga/effects';
import sheetSaga from './sheetSaga';

export default function* rootSaga() {
  yield all([
    sheetSaga(),
  ]);
}
