import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSheetData() {
  try {
    const response = yield call(axios.get, '/api/sheet');
    console.log('Fetched sheet data:', response.data); // Add this line to log the fetched data
    yield put({ type: 'SET_SHEET_DATA', payload: response.data });
  } catch (error) {
    console.error('Error fetching sheet data:', error);
  }
}


function* watchFetchSheetData() {
  yield takeLatest('FETCH_SHEET_DATA', fetchSheetData);
}

export default watchFetchSheetData;
