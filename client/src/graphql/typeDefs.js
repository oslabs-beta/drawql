import { gql } from 'apollo-boost';

const typeDefs = gql`
    # custom query that can be used to query the current state of our sidebar
    extend type Query {
        sidebarOpen: Boolean!
        isLoggedIn: Boolean!
    }

    # used to toggle whether the sidebar is shown or not
    extend type Mutation {
        # creates a type of mutation called ToggleSidebar
        ToggleSidebar: Boolean!
    }
`;

export default typeDefs;
