// API ACTION SUFFIXES
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createAction = (type, payload = {}) => {
    return { type, payload };
};

export const createUiActionType = type => {
    const uiActionType = `teamleader/UI/${type}`;
    return uiActionType;
};

export const createUiAction = (type, payload) => createAction(type, payload);

export const createApiActionTypes = type => {
    const apiActionType = `teamleader/API/${type}`;
    return {
        REQUEST: `${apiActionType}_${REQUEST}`,
        SUCCESS: `${apiActionType}_${SUCCESS}`,
        FAILURE: `${apiActionType}_${FAILURE}`,
    };
};

export const createApiActions = actionTypes => {
    const apiActions = {
        request: request => createAction(actionTypes.REQUEST, { request }),
        success: (request, response) =>
            createAction(actionTypes.SUCCESS, { request, response }),
        failure: (request, error) =>
            createAction(actionTypes.FAILURE, { request, error }),
    };
    return apiActions;
};
