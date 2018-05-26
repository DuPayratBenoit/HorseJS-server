import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import './index.css';

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
                <Header />
                <div className="wrap">{routes}</div>
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>
);

render(<App />, document.getElementById('root'));
registerServiceWorker();
