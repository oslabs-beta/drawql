import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost';
import { createHTTPLink } from 'apollo-boost';
import Index from './views/Index';
import Login from './views/pages/Login';
import Register from './views/pages/Register';
import testProto from './views/pages/testProto';
import PrototypeContainer from './views/pages/PrototypeContainer';

import App from './App';

import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/scss/argon-design-system-react.scss';

import * as serviceWorker from './serviceWorker';

//tells your network to send the cookie along with every request
const link = createHTTPLink({
    uri: 'http://localhost:5000/graphql',
    // passes the credential option if the server has the same domain
    credentials: 'same-origin'

    //passes the credential option if the server has a different domain
    // credentials: 'include'
});

//passed through the fetch
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

  

ReactDOM.render(
    // <ApolloProvider client={client}>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <App {...props} />} />
            <Route
                path="/dev-only"
                exact
                render={props => <Index {...props} />}
            />
            <Route path="/login" exact render={props => <Login {...props} />} />
            <Route
                path="/register"
                exact
                render={props => <Register {...props} />}
            />
            {/* I dont recall why this needs to be here? Presumably something that happens after login? */}
            <Route path="/app" exact component={testProto} />
            <Route path="/proto" exact component={PrototypeContainer} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    // </ApolloProvider>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
