import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

// Import components...
import Index from './views/Index';
import Login from './views/pages/Login';
import Register from './views/pages/Register';
import testProto from './views/pages/testProto';
import PrototypeContainer from './views/pages/PrototypeContainer';
import App from './App';

// import GQL stuff so we can create our initial state
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

// import css/sass
import './index.css';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/scss/argon-design-system-react.scss';

import * as serviceWorker from './serviceWorker';

const link = new HttpLink({
    uri: 'http://localhost:5000',
    credentials: 'include',
    headers: {
        authorization: localStorage.getItem('token')
    }
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link,
    typeDefs,
    resolvers
});

// creates an initial state
cache.writeData({
    data: {
        //  the double-bang returns the boolean true/false association of a value, so we use it to set a truthy value rather than evaluating the value of 'token'
        // isLoggedIn can be used to conditionally display login/signup areas of navbar
        isLoggedIn: !!localStorage.getItem('token'),
        sidebarOpen: true
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={props => <App {...props} />} />
                <Route
                    path="/dev-only"
                    exact
                    render={props => <Index {...props} />}
                />
                <Route
                    path="/login"
                    exact
                    render={props => <Login {...props} />}
                />
                <Route
                    path="/register"
                    exact
                    render={props => <Register {...props} />}
                />
                <Route path="/app" exact component={testProto} />
                <Route path="/proto" exact component={PrototypeContainer} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();