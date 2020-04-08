import React, { useState } from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { graphql } from 'react-apollo';

import { gql } from 'apollo-boost';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PrototypeContainer.scss';
// import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Prototyper/Prototyper';

const TOGGLE_SIDEBAR = gql`
    # calls the mutation we defined in our typeDefs
    mutation ToggleSidebar {
        # returns the toggleCart that we wrote in our graphql/resolver, which is basically the function that changes the cartHidden property
        # we also tell graphql to search the client cache, rather than requesting from the backend
        toggleSidebar @client
    }
`;

const IS_SIDEBAR_OPEN = gql`
    query IsSidebarOpen {
        sidebarOpen @client
    }
`;

const Prototyper = () => {
    // apolloClient hook that allows us to modify state
    const client = useApolloClient();

    // const [isOpen, setOpen] = useState(true);
    // const toggle = () => setOpen(!isOpen);
    const { data, loading, error } = useQuery(IS_SIDEBAR_OPEN);
    const toggle = () =>
        client.writeData({
            data: { sidebarOpen: !data.sidebarOpen }
        });

    return (
        // This div was previously a <Router> but it seems fine as a div?
        <>
            <div className="prototyper wrapper">
                <SideBar toggle={toggle} sidebarOpen={data.sidebarOpen} />
                <Content toggle={toggle} sidebarOpen={data.sidebarOpen} />
            </div>
        </>
    );
};

// export default graphql(TOGGLE_SIDEBAR, { name: 'toggleSidebar' })(Prototyper);
export default Prototyper;
