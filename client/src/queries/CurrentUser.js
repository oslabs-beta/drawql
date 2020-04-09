import gql from 'graphql-tag';

export default gql`
    {
        user {
            id
            username
            email
        }
    }
`;
