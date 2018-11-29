import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from './../selectors';
import * as actions from './../actions';
import App from './App.component';

const AppContainer = props => <App {...props} />;

const mapStateToProps = state => ({
    status: selectors.app.statusSelector(state),
    orders: selectors.order.orderSelector(state),
    products: selectors.product.productSelector(state),
    selectedOrder: selectors.order.selectedOrderSelector(state),
});

const mapDispatchToProps = dispatch => ({
    selectOrder: bindActionCreators(
        actions.order.uiActions.selectOrder,
        dispatch,
    ),
    submitOrder: bindActionCreators(
        actions.order.uiActions.submitOrder,
        dispatch,
    ),
});

AppContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppContainer);
