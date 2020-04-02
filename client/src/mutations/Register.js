// import React from 'react';
// import gql from 'apollo-boost';
// import { useMutation } from '@apollo/react-hooks';
// import Register from '../views/pages/Register';

// const REGISTER = gql`
//     mutation register($username: String, $email: String, $password: String) {
//         signUp(username: $username, email: $email, password: $password) {
//             token
//         }
//     }
// `;

// // on click this will execute the mutate function to register a user
// const registerUser=()=> {
   
//    const { loading, error, data } = useMutation(register);
//     if (loading) return <Loading/>;
//     if (error) return <Error message= {error.message}/>;

//     return (
//         // <Mutation mutation={REGISTER} variables={{username,email,password}}>
//             <div>
//                 <form
//                 onSubmit={ handleSubmit
//                     // e => {
//                     //     e.preventDefault();
//                     //     RegisterMutation({
//                     //         variables: {
//                     //             username: this.username.value,
//                     //             email: this.email.value,
//                     //             password: this.password.value
//                     //         }
//                     //     });
//                     //     this.username.value = '';
//                     //     this.email.value = '';
//                     //     this.password.value = '';
//                     // }
//                 }
//                 >
//                     <input
//                         className="ni ni-hat-3"
//                         type="text"
//                         required
//                         placeholder="Username"
//                         ref={node => {
//                             data.username = node;
//                         }}
//                     />
//                     <input
//                         className="ni ni-hat-3"
//                         type="email"
//                         required
//                         placeholder="Email"
//                         ref={node => {
//                             data.email = node;
//                         }}
//                     />
//                     <input
//                         className="ni ni-hat-3"
//                         type="password"
//                         required
//                         autoComplete="off"
//                         placeholder="Password"
//                         ref={node => {
//                             data.password = node;
//                         }}
//                     />
//                     <div className="text-center">
//                         <Button className="mt-4" color="primary" type="submit">
//                             Create account
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         // </Mutation>
//     );
// }

// //provides an Apollo Client instance to all of the components that use graphql()
// export default graphql(REGISTER)(registerUser);

// {/* <button type="submit">Create account</button> */}
