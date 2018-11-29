import { map, orderBy } from 'lodash';
import React, { Component } from 'react';
import Select from 'react-select';
import Order from './order';
import Product from './product';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.selectOrder = this.selectOrder.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }

    submitOrder(order) {
        this.props.submitOrder(order);
    }

    selectOrder(e) {
        if (e.value) {
            this.props.selectOrder(e.value);
        } else {
            this.props.selectOrder();
        }
    }

    generateOptions(selection) {
        return orderBy(
            map(selection, s => ({ value: s, label: s })),
            ['value'],
            ['asc'],
        );
    }

    componentDidMount() {
        document.title = `Teamleader React Test`;
    }

    render() {
        const { status, orders = [], selectedOrder, products } = this.props;
        const ids = map(orders, order => order.id);
        return (
            <div className="App">
                {status.submit === 'success' &&
                    alert(`Order ${selectedOrder.id} was submitted.`)}
                <h1>Order selection</h1>
                <Select
                    value={{ value: selectedOrder.id, label: selectedOrder.id }}
                    onChange={this.selectOrder}
                    options={this.generateOptions(ids)}
                />
                <Product order={selectedOrder} products={products} />
                <Order order={selectedOrder} />
                <div className="submit">
                    <div
                        className="button"
                        onClick={() => this.submitOrder(selectedOrder)}
                    >
                        Submit Order
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
