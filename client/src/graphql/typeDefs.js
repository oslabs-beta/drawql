import { gql } from 'apollo-boost';

const typeDefs = gql`
    extend type Mutation {
        # creates a type of mutation called ToggleSidebar
        ToggleSidebar: Boolean!
    }
`;

export default typeDefs;
