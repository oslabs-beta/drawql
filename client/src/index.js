import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//Import components ...
import Index from './views/Index';
import Login from './views/pages/Login';
import registerPage from './views/pages/Register';
import testProto from './views/pages/testProto';
import PrototypeContainer from './views/pages/PrototypeContainer';
import App from './App';

// import css/sass
import './index.css';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/scss/argon-design-system-react.scss';

import * as serviceWorker from './serviceWorker';

//tells your network to send the cookie along with every request
const link = new HttpLink({
    uri: 'http://localhost:3000/graphql',
    //passes the credential option if the server has a different domain
    credentials: 'include'
});

const cache = new InMemoryCache({
    cacheRedirects: {
        Query: {
            user: (_, { id }, { getCacheKey }) =>
                getCacheKey({ __typename: 'User', id })
        }
    }
});



//passed through the fetch
const client = new ApolloClient({
     link,
    //passes the credential option if the server has a different domain
    // fetchOptions: {
    //     credentials: 'include'
    // },
    cache,
    // typeDefs,
    // resolvers,

    //access the token from the headers
    request: async operation => {
        const token = await window.localStorage.getItem('token');
        //passes token to the headers
        operation.setContext({
            headers: {
                Authorization: token ? `Bearer ${token}` : ''
            }
        });
        
    },
    onError: ({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) => {
                console.log(
                    `GraphQLerrors: message:${message},location:${locations},path:${path}`
                );
            });
        }
        if (networkError) {
            // logoutUser();
            //check if error is JSON
            // try {
            //     JSON.parse(networkError.bodyText);
            // } catch (e) {
            //     //if not replace parsing error with real one
            //     networkError.message = networkError.bodyText;
            // }
            console.log(`Networkerrors: ${networkError}`);
        }
    },
});

cache.writeData({
    data: {
        sidebarHidden: false
    }
});

//connects apollo client to react
//apolloprovider is similar to context.provider, it wraps the app andplaces the client on the context.Which gives the ability to access it anywhere in your component tree
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
                    // render={props => <Register {...props} />}
                    component={registerPage}
                />
                {/* I dont recall why this needs to be here? Presumably something that happens after login? */}
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
