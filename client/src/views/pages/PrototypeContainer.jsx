import React from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PrototypeContainer.scss';
import SideBar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Prototyper/Prototyper';

// define a GQL query to retrieve our sidebar status from state
const IS_SIDEBAR_OPEN = gql`
    query IsSidebarOpen {
        sidebarOpen @client
    }
`;

const Prototyper = () => {
    // apolloClient hook that allows us to modify state
    const client = useApolloClient();

    // extract the data from our cache and any error messages (loading could be used to conditionally render a loading spinner)
    const { data, error } = useQuery(IS_SIDEBAR_OPEN);
    if (error) return <p>ERROR: {error.message}</p>;

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
