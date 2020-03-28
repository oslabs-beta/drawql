import React from 'react';
import gql from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

export default gql`
 mutation Login($email: String!, $password: String!) {
     login(email: $email, password: $password) {
         id
         email
         token
     }
 }
`;
function loginUser() {
    let input;
    const [LoginUser, { loading }] = useMutation(register);
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    LoginUser({
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