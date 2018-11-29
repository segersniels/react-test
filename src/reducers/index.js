import { combineReducers } from 'redux';
import app from './app';
import order from './order';
import product from './product';

const rootReducer = combineReducers({
    app,
    order,
    product,
});

export default rootReducer;
