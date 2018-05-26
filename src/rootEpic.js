import { combineEpics } from 'redux-observable';

import login from './login/epics';
import register from './register/epics';

const rootEpic = combineEpics(login, register);

export default rootEpic;
