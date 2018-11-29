import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../actions';
import * as selectors from './../../selectors';
import Product from './Product.component';

const ProductContainer = props => <Product {...props} />;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    updateOrder: bindActionCreators(
        actions.order.uiActions.updateOrder,
        dispatch,
    ),
});

ProductContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductContainer);
