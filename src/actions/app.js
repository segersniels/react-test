import { createUiActionType, createUiAction } from './util';

export const uiActionTypes = {
    START_APP: createUiActionType('APP/START_APP'),
};

export const uiActions = {
    startApp: () => createUiAction(uiActionTypes.START_APP),
};

export const apiActionTypes = {};

export const apiActions = {};
