import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import schema from './schema/index';
import resolvers from './resolvers/index';
import models, { elephant } from './models/index';

const app = express();
app.use(cors());

//access  and verifies the user by requesting the token from the http header
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
};

//creates ApolloServer instance, plugs in Apollo into existing Express app
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    formatError: error => {
        // removes the internal sequelize error message
        //leaves only the import validation error
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
    app.listen({ port: 8000 }, () => {
        console.log('Apollo Server on http://localhost:8000/graphql');
    });
});
