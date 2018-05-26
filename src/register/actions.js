export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export function register(payload) {
    return {
        type: REGISTER_START,
        payload,
    };
}

export function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload,
    };
}

export function registerFailure(payload) {
    return {
        type: REGISTER_FAILURE,
        payload,
    };
}
