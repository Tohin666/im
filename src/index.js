import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import dummyGraphqlServise from './servises/dummy-graphql-service';
import { GraphqlServiceProvider } from './components/graphql-service-context';

import store from './store';

const graphqlServise = new dummyGraphqlServise();

ReactDOM.render(
    <Provider store={store}>
        <GraphqlServiceProvider value={graphqlServise}>
            <Router>
                <App />
            </Router>
        </GraphqlServiceProvider>
    </Provider>,
    document.getElementById('root')
);

