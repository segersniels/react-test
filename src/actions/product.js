import {
    createUiActionType,
    createUiAction,
    createApiActionTypes,
    createApiActions,
} from './util';

export const uiActionTypes = {
    GET_PRODUCTS: createUiActionType('PRODUCT/GET_PRODUCTS'),
};

export const uiActions = {
    getProducts: () => createUiAction(uiActionTypes.GET_PRODUCTS),
};

export const apiActionTypes = {
    GET_PRODUCTS: createApiActionTypes('PRODUCT/GET_PRODUCTS'),
};

export const apiActions = {
    getProducts: createApiActions(apiActionTypes.GET_PRODUCTS),
};
