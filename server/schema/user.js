import { gql } from 'apollo-server-express';

export default gql`
    extend type Quey {
        users: [User!]
        user(id: ID!): User
        person: User
    }

    extend type Mutation {
        signUp(username: String!, email: String!, password: String!): Token!

        login(login: String!, password: String!): Token!
    }

    type Token {
        token: String!
    }

    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
    }
`;

// Belongs to type User
// organizaiton_name: String
