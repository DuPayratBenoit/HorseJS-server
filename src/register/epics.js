import { combineEpics, ofType } from 'redux-observable';
import { push } from 'react-router-redux';
import { ajax } from 'rxjs/ajax';
import { map, catchError, mergeMap, delay } from 'rxjs/operators';
import { REGISTER_START, registerSuccess, registerFailure } from './actions';
import config from '../config';

const registerEpic = action$ =>
    action$.pipe(
        ofType(REGISTER_START),
        delay(3000),
        mergeMap(action =>
            ajax.post(`${config.URL}api/register`, {
                username: action.payload.username,
                password: action.payload.password,
            })
        ),
        map(response => {
            push({ url: '/' });
            return registerSuccess(response);
        }),
        catchError(error => registerFailure(error))
    );

export default combineEpics(registerEpic);
