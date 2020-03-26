import { gql } from 'apollo-boost';
import typeDefs from './typeDefs';

// extracts the sidebar status from the client to determine if its collapsed or not
const GET_SIDEBAR_STATUS = gql`
    {
        sidebarHidden @client
    }
`;

// our resolver is an object that defines what mutations, queries, and types in our clientside cache are available
const resolvers = {
    /**
     * the ToggleSidebar in our typeDefs was capitalized because it was a type definition, whereas this is just the name of a mutation...
     * ... this is similar to the capitalization of a function versus a function constructor
     * the args all have an underscore to indicate that they should not be modified
     * the args are what will be passed into our mutation or query cache comes from _context
     * sets a key on the Mutation object from gql so we can add various functions, ie Mutation.resolveSomeThing() in a sense
     */
    Mutation: {
        toggleSidebar: (_root, _args, { cache }) => {
            // destructures sidebarHidden from our data obj that we get back
            const { sidebarHidden } = cache.readQuery({
                query: GET_SIDEBAR_STATUS
            });

            cache.writeQuery({
                quer: GET_SIDEBAR_STATUS,
                // the below is like updating state, where data contains our state and we are inverting the value of our sidebarHidden key/prop
                data: { sidebarHidden: !sidebarHidden }
            });

            return !sidebarHidden;
        }
    }
};

export default resolvers;
