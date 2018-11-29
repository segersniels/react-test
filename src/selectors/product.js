import { createSelector } from 'reselect';

export const productSelector = createSelector(
    state => state.product.products,
    products => products,
);
