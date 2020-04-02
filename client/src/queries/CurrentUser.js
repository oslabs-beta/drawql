import { gql } from 'apollo-boost';

const currentUser = gql`
    {
        user {
            id
            email
            token
        }
    }
`;
export default { currentUser };
