import { all, fork } from 'redux-saga/effects';

//public
import HousesSaga from './houses/saga';

export default function* rootSaga() {
    yield all([
        //public
        fork(HousesSaga),
    ]);
}
