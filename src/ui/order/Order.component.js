import { map, toInteger } from 'lodash';
import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import './Order.css';

class Order extends Component {
    constructor(props) {
        super(props);
        this.updateOrder = this.updateOrder.bind(this);
    }

    updateOrder(product, e) {
        this.props.updateOrder(product, 'quantity', e.target.value);
    }

    deleteOrder(product) {
        this.props.updateOrder(product, 'remove', 0);
    }

    render() {
        const { order } = this.props;
        return (
            <div className="Order">
                <h1>Items in cart</h1>
                <div className="Order-details">
                    {map(order.items, item => {
                        return (
                            <div
                                className="Order-product"
                                key={`order-${item['product-id']}`}
                            >
                                <div className="Order-remove">
                                    <button
                                        onClick={() => this.deleteOrder(item)}
                                    >
                                        x
                                    </button>
                                </div>
                                <div className="Order-category">
                                    <h3>id:</h3>
                                    {item['product-id']}
                                </div>
                                <div className="Order-category">
                                    <h3>quantity:</h3>
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={item.quantity}
                                        onChange={e =>
                                            this.updateOrder(item, e)
                                        }
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Order;
