import { call, put, takeEvery } from 'redux-saga/effects';
import { getHousesApi } from '../../ApiBackendHelpers';
import { getHousesFail, getHousesSuccess } from './actions';

import { GET_HOUSES } from './actionTypes';

function* getHousesAsync() {
    try {
        const response = yield call(getHousesApi);
        console.log(response);
        yield put(getHousesSuccess(response.results));
    } catch (error) {
        yield put(getHousesFail(error));
    }
}

function* housesSaga() {
    yield takeEvery(GET_HOUSES, getHousesAsync);
}

export default housesSaga;
