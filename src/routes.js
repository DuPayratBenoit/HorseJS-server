import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AppLoader from './components/AppLoader';
import About from './about';
import PageNotFound from './components/PageNotFound';

const Main = Loadable({
    loader: () => import('./main'),
    loading: AppLoader,
});

const Login = Loadable({
    loader: () => import('./login'),
    loading: AppLoader,
});

const Register = Loadable({
    loader: () => import('./register'),
    loading: AppLoader,
});

export default (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="*" component={PageNotFound} />
    </Switch>
);
