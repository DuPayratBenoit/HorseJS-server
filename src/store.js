import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
// import queryString from 'query-string';

export const history = createHistory();

const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
        // queryString,
    },
});

const appRouterMiddleware = routerMiddleware(history);

const store = createStore(rootReducer, applyMiddleware(epicMiddleware), applyMiddleware(appRouterMiddleware));

export default store;
