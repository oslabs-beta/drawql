import gql from 'apollo-boost';

export default gql`
{
    user {
        id
        email
        token
    }
}
`;