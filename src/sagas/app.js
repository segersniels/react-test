import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as actions from '../actions';

const bootstrap = function*(action) {
    yield put(actions.order.uiActions.getOrders());
    yield put(actions.product.uiActions.getProducts());
};

export const bootstrapSaga = function*() {
    yield takeEvery([actions.app.uiActionTypes.START_APP], bootstrap);
};
