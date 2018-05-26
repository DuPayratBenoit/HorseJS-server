import { combineEpics, ofType } from 'redux-observable';
import { push } from 'react-router-redux';
import { ajax } from 'rxjs/ajax';
import { map, catchError, mergeMap, delay } from 'rxjs/operators';
import { LOGIN_START, loginSuccess, loginFailure } from './actions';
import config from '../config';

const loginEpic = action$ =>
    action$.pipe(
        ofType(LOGIN_START),
        delay(3000),
        mergeMap(action =>
            ajax.post(`${config.URL}api/login`, {
                username: action.payload.username,
                password: action.payload.password,
            })
        ),
        map(response => {
            push({ url: '/' });
            return loginSuccess(response);
        }),
        catchError(error => loginFailure(error))
    );

export default combineEpics(loginEpic);
