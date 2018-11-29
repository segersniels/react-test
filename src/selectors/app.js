import { createSelector } from 'reselect';

export const statusSelector = createSelector(
    state => {
        return state.app.status;
    },
    status => status,
);
