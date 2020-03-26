import React from 'react';
import { Mutation, Query, graphql } from 'react-apollo';
import flowRight from 'lodash.flowright';
import { gql } from 'apollo-boost';

import Sidebar from './Sidebar';

const TOGGLE_SIDEBAR = gql`
    # calls the mutation we defined in our typeDefs
    mutation ToggleSidebar {
        # returns the toggleSidebar that we wrote in our graphql/resolver, which is basically the function that changes the sidebarHidden property
        # we also tell graphql to search the client cache, rather than requesting from the backend
        toggleSidebar @client
    }
`;

const SidebarContainer = ({ sidebarHidden }) => (
    <Sidebar sidebarHidden={sidebarHidden} />
);

export default flowRight(graphql(TOGGLE_SIDEBAR, { name: 'toggleSidebar' }))(
    SidebarContainer
);
