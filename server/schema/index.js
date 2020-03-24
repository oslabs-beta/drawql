import { gql } from 'apollo-server-express';

import userSchema from './user';
import drawingSchema from './drawing';
// import organizationSchema from './organization';

const linkSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    type Subscription {
        _: Boolean
    }
`;

export default [linkSchema, userSchema, drawingSchema /*organizationSchema*/];

// the purpose of this index file is to serve a schema directory, which will then be sent to the server file. The linkschema allows the imported schemas to have joint access to the funcitonality of the 3 diff types, query , mutation and subscription
