import isUndefined from 'lodash/isUndefined';
import { takeEvery, put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import { fetchProducts } from './util';

const getProducts = function*(action) {
    const products = yield fetchProducts();
    if (isUndefined(products))
        yield put(
            actions.product.apiActions.getProducts.failure(
                {},
                new Error('failed to fetch products'),
            ),
        );
    else
        yield put(actions.product.apiActions.getProducts.success({}, products));
};

export const productSaga = function*() {
    yield takeEvery([actions.product.uiActionTypes.GET_PRODUCTS], getProducts);
};
