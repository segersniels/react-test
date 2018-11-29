import { map } from 'lodash';
import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.updateOrder = this.updateOrder.bind(this);
    }

    updateOrder(product) {
        this.props.updateOrder(product, 'add', 1);
    }

    render() {
        const { products } = this.props;
        return (
            <div className="Product">
                <h1>Add new items to cart</h1>
                {map(products, product => {
                    return (
                        <div
                            className="Product-item"
                            onClick={() => this.updateOrder(product)}
                            key={`product-${product.id}`}
                        >
                            <div className="Product-category">
                                <h3>id:</h3>
                                {product.id}
                            </div>
                            <div className="Product-category">
                                <h3>description:</h3>
                                {product.description}
                            </div>
                            <div className="Product-category">
                                <h3>price:</h3>
                                {product.price}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Product;
