export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(payload) {
    return {
        type: LOGIN_START,
        payload,
    };
}

export function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
}

export function loginFailure(payload) {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
}
