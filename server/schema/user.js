import { gql } from 'apollo-server-express';

export default gql`
    extend type Quey {
        users: [User!]
        user(id: ID!): User
        person: User
    }
`;
