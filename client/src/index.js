import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHTTPLink } from 'apollo-link-http';
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
    uri: '/graphql',
    // passes the credential option if the server has the same domain
    credentials: 'same-origin'

    //passes the credential option if the server has a different domain
    // credentials: 'include'
});

//passed through the fetch
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    
});

//You can uncomment part below and test it

// //network interface is in charge of making actual network requests to the backend server
// //by creating the custom network interface just making sure cookies are send whenever request to backend is made
// const networkInterface = createNetworkInterface({
//     //endpoint hosted
//     uri: '/graphql',
//     opts: {
//         //safe attempt to send along the cookies with the outgoing request
//         //this means you are making request to the same origin that browser is currently in
//         credentials: 'same-origin'
//     }
// })

// const client = new ApolloClient({
//     //now Apollo client uses custom networkInterface instead of default one
//     networkInterface,
//     //in order to identify every record that comes back from the server
//     //rather than refetching data for every single query that is used, Apollo will have the ability
//     //to identify the information that is already been pulled down from the server and store it inside of some local cache

//     //be sure that schema file user_type includes id
//     //this version might be outdated, see docs
//     dataIdFromObject: o => o.id
// })

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
