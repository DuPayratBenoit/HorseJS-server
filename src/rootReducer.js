import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login/reducer';
import register from './register/reducer';

const rootReducer = combineReducers({
    login,
    register,
    router: routerReducer,
});

export default rootReducer;
