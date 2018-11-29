import { fork, all } from 'redux-saga/effects';
import { bootstrapSaga } from './app';
import { orderSaga, submitSaga, updateSaga } from './order';
import { productSaga } from './product';

const rootSaga = function*() {
    yield all([
        fork(bootstrapSaga),
        fork(orderSaga),
        fork(submitSaga),
        fork(updateSaga),
        fork(productSaga),
    ]);
};

export default rootSaga;
