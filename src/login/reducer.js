import { combineReducers } from 'redux';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
    isLoading: false,
    token: null,
    errors: [],
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
            };
        default:
            return state;
    }
}

const login = combineReducers({
    loginReducer,
});

export default login;
