import * as types from './types';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { BaseAction } from './actions';
import { getPetsAPIRequest, getServicesAPIRequest } from '../../../api';

function* getPets(action: BaseAction) {
  try {
    const response = yield call(getPetsAPIRequest, action.payload);
    yield put(actions.getPetsSuccess(response));
  } catch (error) {
    yield put(actions.getPetsFailed(error));
  }
}


function* getServices() {
  try {
    const response = yield call(getServicesAPIRequest);
    yield put(actions.getServicesSuccess(response));
  } catch (error) {
    yield put(actions.getServicesFailed(error));
  }
}

function* tripSaga() {
  yield all([
    yield takeLatest(types.GET_PETS_REQUEST, getPets),
    yield takeLatest(types.GET_SERVICES_REQUEST, getServices),
  ]);
}

export default tripSaga;
