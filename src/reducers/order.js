import { clone, find } from 'lodash';
import { combineReducers } from 'redux';
import * as actions from '../actions';

const initialOrderState = [];
const orders = (state = initialOrderState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case actions.order.apiActionTypes.GET_ORDERS.SUCCESS:
            return payload.response || state;
        case actions.order.apiActionTypes.UPDATE_ORDER.SUCCESS:
            return payload.response || state;
        default:
            return state;
    }
};

const initialSubmitState = {};
const submit = (state = initialSubmitState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case actions.order.uiActionTypes.SUBMIT_ORDER:
            const { order } = payload;
            return {
                ...state,
                order,
            };
        default:
            return state;
    }
};

const order = combineReducers({
    orders,
    submit,
});

export default order;
