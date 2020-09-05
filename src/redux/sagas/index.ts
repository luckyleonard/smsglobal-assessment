import { all } from 'redux-saga/effects';
import { messageSaga } from './message';

function* rootSaga() {
  yield all([...messageSaga]);
}
export default rootSaga;
