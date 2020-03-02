import { all, spawn } from 'redux-saga/effects';
import rootSaga from '../components/root/redux/saga';

function* sagas() {
  yield all([
    spawn(rootSaga),
  ]);
}

export default sagas;
