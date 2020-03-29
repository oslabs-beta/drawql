// import React from 'react';
// import gql from 'apollo-boost';
// import { useMutation } from '@apollo/react-hooks';

// export default gql`
//     mutation register($username: String, $email: String, $password: String) {
//         signUp(username: $username, email: $email, password: $password) {
//             token
//         }
//     }
// `;

// // on click this will execute the mutate function to register a user
// function registerUser() {
//     let input;
//     const [Register, { loading, error, data }] = useMutation(register);
//     if (loading) return 'Loading ...';
//     if (error) return `Error : ${error.message}`;
    
//     return (
//         <div>
//             <form
//                 onSubmit={e => {
//                     e.preventDefault();
//                     Register({
//                         variables: {
//                             username: this.username.value,
//                             email: this.email.value,
//                             password: this.password.value
//                         }
//                     });
//                     this.username.value = '';
//                     this.email.value = '';
//                     this.password.value = '';
//                 }}
//             >
//                 {/* <input
//                     ref={node => {
//                         input = node;
//                     }}
//                 /> */}
                
//             </form>
//         </div>
//     );
// }
// // export default graphql(registerMutation)(Register);
// {/* <button type="submit">Create account</button> */}