import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import './index.css';
import * as actions from './actions';
import sagas from './sagas';
import App from './ui/App.container';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(...middleware),
)(createStore);
const store = createStoreWithMiddleware(rootReducer, {});

sagaMiddleware.run(sagas);
store.dispatch(actions.app.uiActions.startApp());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
