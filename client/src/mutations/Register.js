import gql from 'graphql-tag';

export default gql`
mutation Register($name: String, $email: String, $password: String) {
    register(name: $name, email: $email, password: $password) {
        id
        name
        username
    }
}
`;