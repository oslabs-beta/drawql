import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        users: [User!]
        user(id: ID!): User
        person: User
    }

    extend type Mutation {
        signUp(username: String!, email: String!, password: String!): Token!

        login(email: String!, password: String!): Token!
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

// The properties of the type Query allow for multiple, single or a specific user to be searched for in the conected database

// the signup and login properties of the type mutation allow a user to create a profile, and later login to that profile

// the type token is produced on every sign up and every login so that the user can be authenticated for every newly created drawing, and for every deletion of a drawing

// the type user sets the strucuture of the required data to create a user.
