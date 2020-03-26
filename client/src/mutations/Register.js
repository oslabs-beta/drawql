import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';

export default gql`
    mutation register($username: String, $email: String, $password: String) {
        signUp(username: $username, email: $email, password: $password) {
            id
            username
            email
            token
        }
    }
`;
function registerUser() {
    let input;
    const [Register, { loading }] = useMutation(register);
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    Register({
                        variables: {
                            username: input.value,
                            email: input.value,
                            password: input.value
                        }
                    });
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
            
            </form>
        </div>
    );
  
}
