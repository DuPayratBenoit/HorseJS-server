import { combineReducers } from 'redux';
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from './actions';

const initialState = {
    isLoading: false,
    errors: [],
};

function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}

const register = combineReducers({
    registerReducer,
});

export default register;
