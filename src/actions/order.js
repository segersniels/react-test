import {
    createUiActionType,
    createUiAction,
    createApiActionTypes,
    createApiActions,
} from './util';

export const uiActionTypes = {
    GET_ORDERS: createUiActionType('ORDER/GET_ORDERS'),
    SELECT_ORDER: createUiActionType('ORDER/SELECT_ORDER'),
    SUBMIT_ORDER: createUiActionType('ORDER/SUBMIT_ORDER'),
    UPDATE_ORDER: createUiActionType('ORDER/UPDATE_ORDER'),
};

export const uiActions = {
    getOrders: () => createUiAction(uiActionTypes.GET_ORDERS),
    selectOrder: orderId =>
        createUiAction(uiActionTypes.SELECT_ORDER, { orderId }),
    submitOrder: order => createUiAction(uiActionTypes.SUBMIT_ORDER, { order }),
    updateOrder: (product, type, value) =>
        createUiAction(uiActionTypes.UPDATE_ORDER, { product, type, value }),
};

export const apiActionTypes = {
    GET_ORDERS: createApiActionTypes('ORDER/GET_ORDERS'),
    GET_ORDER: createApiActionTypes('ORDER/GET_ORDER'),
    SUBMIT_ORDER: createApiActionTypes('ORDER/SUBMIT_ORDER'),
    UPDATE_ORDER: createApiActionTypes('ORDER/UPDATE_ORDER'),
};

export const apiActions = {
    getOrders: createApiActions(apiActionTypes.GET_ORDERS),
    getOrder: createApiActions(apiActionTypes.GET_ORDER),
    submitOrder: createApiActions(apiActionTypes.SUBMIT_ORDER),
    updateOrder: createApiActions(apiActionTypes.UPDATE_ORDER),
};
