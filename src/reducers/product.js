import { combineReducers } from 'redux';
import * as actions from '../actions';

const initialProductState = [];
const products = (state = initialProductState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case actions.product.apiActionTypes.GET_PRODUCTS.SUCCESS:
            return payload.response || state;
        default:
            return state;
    }
};

const product = combineReducers({
    products,
});

export default product;
