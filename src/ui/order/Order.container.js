import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../actions';
import * as selectors from './../../selectors';
import Order from './Order.component';

const OrderContainer = props => <Order {...props} />;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    updateOrder: bindActionCreators(
        actions.order.uiActions.updateOrder,
        dispatch,
    ),
});

OrderContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(OrderContainer);
