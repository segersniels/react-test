import {
    isUndefined,
    findIndex,
    clone,
    compact,
    includes,
    map,
    toNumber,
    toString,
} from 'lodash';
import { takeEvery, put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { fetchOrders, cleanUpdatedOrder } from './util';

const updateOrder = function*(action) {
    const orders = clone(yield select(selectors.order.orderSelector));
    const order = yield select(selectors.order.selectedOrderSelector);
    const orderIndex = findIndex(orders, o => o.id === order.id);
    const adjustedOrder = clone(order);
    const product = action.payload.product;
    const itemsInOrder = map(adjustedOrder.items, item => item['product-id']);
    if (action.payload.type !== 'remove') {
        // If item already exists, adjust the quantity
        // If not just add it to the current order
        if (
            !includes(itemsInOrder, action.payload.product.id) &&
            !includes(itemsInOrder, action.payload.product['product-id'])
        ) {
            const adjustedItem = {
                ...product,
                'product-id': product.id,
                'unit-price': product.price,
                quantity: '1',
                total: product.price,
            };
            adjustedOrder.items.push(cleanUpdatedOrder(adjustedItem));
        } else {
            // If item count is changed through input field
            // If not, an item was added to the basket
            if (action.payload.type === 'quantity') {
                const index = findIndex(
                    adjustedOrder.items,
                    item => item['product-id'] === product['product-id'],
                );
                adjustedOrder.items[index].quantity = toString(
                    action.payload.value,
                );
                adjustedOrder.items[index].total = toString(
                    toNumber(adjustedOrder.items[index].quantity) *
                        toNumber(adjustedOrder.items[index]['unit-price']),
                );
            } else {
                const index = findIndex(
                    adjustedOrder.items,
                    item => item['product-id'] === product.id,
                );
                adjustedOrder.items[index].quantity = toString(
                    toNumber(adjustedOrder.items[index].quantity) + 1,
                );
                adjustedOrder.items[index].total = toString(
                    toNumber(adjustedOrder.items[index].quantity) *
                        toNumber(adjustedOrder.items[index]['unit-price']),
                );
            }
        }
    } else {
        // Remove the item from the current order
        const index = findIndex(
            adjustedOrder.items,
            item => item['product-id'] === product['product-id'],
        );
        delete adjustedOrder.items[index];
    }
    delete orders[orderIndex];
    const adjusted = [
        ...compact(orders),
        {
            ...adjustedOrder,
            items: compact(adjustedOrder.items),
        },
    ];
    console.log('updated order:', adjusted);
    yield put(actions.order.apiActions.updateOrder.success({}, adjusted));
};

export const updateSaga = function*() {
    yield takeEvery([actions.order.uiActionTypes.UPDATE_ORDER], updateOrder);
};

const submitOrder = function*(action) {
    const order = yield select(selectors.order.submittedOrderSelector);
    console.log('placing order:', order);
    yield put(actions.order.apiActions.submitOrder.success({}, order));
};

export const submitSaga = function*() {
    yield takeEvery([actions.order.uiActionTypes.SUBMIT_ORDER], submitOrder);
};

const getOrders = function*(action) {
    const orders = yield fetchOrders();
    if (isUndefined(orders))
        yield put(
            actions.order.apiActions.getOrders.failure(
                {},
                new Error('failed to fetch orders'),
            ),
        );
    else yield put(actions.order.apiActions.getOrders.success({}, orders));
};

export const orderSaga = function*() {
    yield takeEvery([actions.order.uiActionTypes.GET_ORDERS], getOrders);
};
