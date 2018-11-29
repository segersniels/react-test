import { combineReducers } from 'redux';
import * as actions from '../actions';

const initialStatusState = { data: 'loading', submit: '' };
const status = (state = initialStatusState, action = {}) => {
    const { type } = action;
    switch (type) {
        case actions.order.apiActionTypes.GET_ORDERS.SUCCESS:
            return {
                ...state,
                data: 'success',
            };
        case actions.order.apiActionTypes.GET_ORDERS.FAILURE:
            return {
                ...state,
                data: 'failure',
            };
        case actions.order.apiActionTypes.SUBMIT_ORDER.SUCCESS:
            return {
                ...state,
                submit: 'success',
            };
        case actions.order.apiActionTypes.SUBMIT_ORDER.FAILURE:
            return {
                ...state,
                submit: 'failure',
            };
        case actions.order.uiActionTypes.SELECT_ORDER:
            return {
                ...state,
                submit: '',
            };
        default:
            return state;
    }
};

const initialSelectState = { orderId: '1', productId: 'A101', customerId: '1' };
const selection = (state = initialSelectState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case actions.order.uiActionTypes.SELECT_ORDER:
            const { orderId } = payload;
            return {
                ...state,
                orderId,
            };
        default:
            return state;
    }
};

const app = combineReducers({
    status,
    selection,
});

export default app;
