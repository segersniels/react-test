import { createSelector } from 'reselect';
import find from 'lodash/find';

export const orderSelector = createSelector(
    state => state.order.orders,
    orders => orders,
);

export const submittedOrderSelector = createSelector(
    state => state.order.submit,
    submit => submit,
);

export const selectionSelector = createSelector(
    state => state.app.selection,
    selection => selection,
);

export const selectedOrderSelector = createSelector(
    selectionSelector,
    orderSelector,
    (selection, orders) =>
        find(orders, order => order.id === selection.orderId),
);
