/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Redirect } from 'react-router';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from 'reactstrap';

// core components
import { graphql } from 'react-apollo';
import HomeNav from '../../components/Navbars/HomeNav';
import SimpleFooter from '../../components/Footers/SimpleFooter';

const REGISTER = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) {
        signUp(username: $username, email: $email, password: $password) {
            token
        }
    }
`;

const Register = () => {
    let input;
    //use state lets you add React state to function components
    // example: const [username,setUsername]=useState('') is similar to this.state.username and this.setState
    //returns a pair of values: the current state and a fuunction that updates it
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState([]);

    // includes the functionality of componentdidmount, componentdidupdate, and componentwillunmount
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        // refs.main.scrollTop = 0;
    });

    //event handler for submitting
    const handleSubmit = async e => {
        e.preventDefault();
        await registerUser({
            variables: {
                username: username,
                email: email,
                password: password
            }
        });
        // const event = validate(values);
        // setErrors({
        //     ...errors,
        //     ...e
        // });
        // onSubmit({ values, e });
    };

    //apollo boost functionality
    //mutation for registering user method
    const [registerUser, { loading, error, data }] = useMutation(REGISTER, {
        //updates the cache with current data
        update: (
            cache,
            {
                data: {
                    signUp: { token }
                }
            }
        ) => {
            // reads the users value from cache
            const { users } = cache.readQuery({
                query: gql`
                    {
                        user {
                            id
                            email
                            token
                        }
                    }
                `
            });
            // writes to the cache adding a user
            cache.writeQuery({
                query: gql`
                    {
                        user {
                            id
                            email
                            token
                        }
                    }
                `,
                data: {
                    // users: users.concat({
                    signUp: { token }
                    // })
                }
            });
        }
        // once it's complete it will reset the state
        // onCompleted: () => {
        //     setUsername('');
        //     setEmail('');
        //     setPassword('');
        // }
    });

    //wait for mutation, loading
    if (loading) return <p>Loading...</p>;

    //shows an eror message if mutation fails
    if (error) {
        return <p>Error:{error.message}</p>;
    }

    //store token if registration is successful
    if (data) {
        console.log('thisssss', data);
        localStorage.setItem('token', data.signUp.token);
        return <Redirect to="/proto" />;
    }

    return (
        <>
            <HomeNav />
            <main>
                <section className="section section-shaped section-lg">
                    <div className="shape shape-style-1 bg-gradient-default">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <Container className="pt-lg-7">
                        <Row className="justify-content-center">
                            <Col lg="5">
                                <Card className="bg-secondary shadow border-0">
                                    <CardHeader className="bg-white pb-4">
                                        <div className="text-muted text-center mb-2">
                                            <p>Sign up with</p>
                                        </div>
                                        <div className="text-center">
                                            <Button
                                                className="btn-neutral btn-icon"
                                                // the below className includes mr-4, which is only necessary if Google button is included
                                                // className="btn-neutral btn-icon mr-4"
                                                color="default"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <span className="btn-inner--icon mr-1">
                                                    <img
                                                        alt="..."
                                                        src={require('../../assets/img/icons/common/github.svg')}
                                                    />
                                                </span>
                                                <span className="btn-inner--text">
                                                    Github
                                                </span>
                                            </Button>
                                            {/* <Button
                                                className="btn-neutral btn-icon ml-1"
                                                color="default"
                                                href="#pablo"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <span className="btn-inner--icon mr-1">
                                                    <img
                                                        alt="..."
                                                        src={require('../../assets/img/icons/common/google.svg')}
                                                    />
                                                </span>
                                                <span className="btn-inner--text">
                                                    Google
                                                </span>
                                            </Button> */}
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-lg-5 py-lg-3">
                                        <div className="text-center text-muted mb-4">
                                            <p>Or sign up with credentials</p>
                                        </div>
                                        <Form
                                            role="form"
                                            onSubmit={handleSubmit}
                                        >
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Username"
                                                        type="text"
                                                        value={username}
                                                        onChange={e => {
                                                            // e.persist();
                                                            setUsername(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email"
                                                        type="email"
                                                        value={email}
                                                        onChange={e => {
                                                            // e.persist();
                                                            setEmail(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Password"
                                                        type="password"
                                                        autoComplete="off"
                                                        value={password}
                                                        onChange={e => {
                                                            // e.persist();
                                                            setPassword(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            {/* the below commented code is if we want to show password strength during creation */}
                                            {/* <div className="text-muted font-italic">
                                                <small>
                                                    password strength:{' '}
                                                    <span className="text-success font-weight-700">
                                                        strong
                                                    </span>
                                                </small>
                                            </div> */}
                                            <Row className="my-4">
                                                <Col xs="12">
                                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                                        <input
                                                            className="custom-control-input"
                                                            id="customCheckRegister"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckRegister"
                                                        >
                                                            <span>
                                                                I agree with the{' '}
                                                                <a
                                                                    onClick={e =>
                                                                        e.preventDefault()
                                                                    }
                                                                >
                                                                    Privacy
                                                                    Policy
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="text-center">
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Create account
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <SimpleFooter />
        </>
    );
};

const registerPage = graphql(REGISTER)(Register);
export default registerPage;
