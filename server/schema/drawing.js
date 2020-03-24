import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        drawings: [Drawing!]
        drawing(id: ID!): Drawing
    }

    extend type Mutation {
        createDrawing(
            project_name: String!
            project_code: String
            user_id: Int!
        ): Drawing!
        deleteDrawing(id: ID!): Boolean!
    }

    type Drawing {
        id: ID!
        project_name: String!
        project_code: String
        user_id: User!
    }
`;

// Belongs to type Mutation
// organization_id: Int

// Belongs to type Drawing
// organization_id: Organization
