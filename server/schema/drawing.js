import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        drawings: [Drawing!]
        drawing(id: ID!): Drawing
    }
`;
