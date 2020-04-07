import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import schema from './schema/index';
import resolvers from './resolvers/index';
import models, { elephant } from './models/index';

import { bodyParser } from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';

const app = express();

/*browser allows data to load from the other server,
the other server sets Access - Control headers to determine its policy regarding cross - origin resource access.*/

//accesses  and verifies the user by requesting the token from the http header
const getPerson = async req => {
    const token = req.headers['x-token'];

    if (token) {
        try {
            return await jwt.verify(token, process.env.SECRET);
        } catch (e) {
            throw new AuthenticationError(
                'Your session expired. Sign in again.'
            );
        }
    }
    return {
        email: token ? token.email : null,
        username: token ? token.username : null
    };
};

//creates ApolloServer instance, plugs in Apollo into existing Express app
const server = new ApolloServer({
    cors: {
        origin: 'http://localhost:3000/graphql',
        crenditials: true //required backend setting
    },
    typeDefs: schema,
    resolvers,
    formatError: error => {
        // removes the internal sequelize error message
        //leaves only the import validation error
        // doesn't give specifc errors to the client
        const message = error.message
            .replace('SequelizeValidationError: ', '')
            .replace('Validation error: ', '');

        return {
            ...error,
            message
        };
    },
    //all resolvers have access to this information through the contextresolver (i.e. access to the db and models)
    context: async ({ req }) => {
        const person = await getPerson(req);

        return {
            models,
            person,
            secret: process.env.SECRET
        };
    }
});

// route for server to  utilize graphql playground to test query
server.applyMiddleware({ app, path: '/graphql' });

//synchronizes sequelize functionality from db and runs the server
elephant.sync().then(async () => {
    app.listen({ port: 5000 }, () => {
        console.log('Apollo Server on http://localhost:5000/graphql');
    });
});
