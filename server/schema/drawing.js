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

// the two properties inside of the query type allow for all of the drawings to be retrieved from the database, or for one single drawing based off the drawings specific ID

// the type mutation has two main properties which allow a drawing to be created and deleted as long as the user has been authenticated

// the type drawing displays the required structure of data needed in order to create a new drawing.
