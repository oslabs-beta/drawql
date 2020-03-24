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
