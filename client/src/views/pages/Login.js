import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'apollo-boost';
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
import { Link } from 'react-router-dom';
import SimpleFooter from '../../components/Footers/SimpleFooter';
import HomeNav from '../../components/Navbars/HomeNav';
// import { graphql, Mutation } from 'react-apollo';

const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState([]);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        // refs.main.scrollTop = 0;
    });
    const handleSubmit = e => {
        e.preventDefault();
    };
    //mutation for login user method
    const [loginUser, { loading, error, data }] = useMutation(LOGIN, {
        variables: email,
        password
    });
    //wait for mutation, loading
    if (loading) return <p>Loading ...</p>;

    //shows an eror message if mutation fails
    if (error) return <p>Error:</p>
    // <Error message={error.message} />;

    //store token if registration is successful
    if (data) {
        window.localStorage.setItem('token', data[loginUser].token);
        return <Redirect to="/proto" />;
    }

    return (
        <>
            <HomeNav />
            <main ref="main">
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
                                    <CardHeader className="bg-white pb-5">
                                        <div className="text-muted text-center mb-3">
                                            <p>Sign in with</p>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            <Button
                                                className="btn-neutral btn-icon"
                                                color="default"
                                                href="#pablo"
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
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <p>Or sign in with credentials</p>
                                        </div>
                                        <Form
                                            role="form"
                                            onSubmit={handleSubmit}
                                        >
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email"
                                                        type="email"
                                                        value={email}
                                                        onChange={e =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
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
                                                        onChange={e =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    id=" customCheckLogin"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor=" customCheckLogin"
                                                >
                                                    <span>Remember me</span>
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <Button
                                                    className="my-4"
                                                    color="primary"
                                                    type="submit"
                                                    // onClick={e => e.preventDefault}
                                                    // type="submit"
                                                >
                                                    Sign in
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Row className="mt-3">
                                    {/* the below Col could be used as a forgot password link */}
                                    <Col xs="6">
                                        {/* <a
                                                className="text-light"
                                                href="#pablo"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <p>Forgot password?</p>
                                            </a> */}
                                    </Col>
                                    <Col className="text-right" xs="6">
                                        {/* <a
                                                className="text-light"
                                                href="#pablo"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <small>
                                                    Create new account
                                                </small>
                                            </a> */}
                                        <Link
                                            to="/register"
                                            className="text-light"
                                        >
                                            Create new account
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <SimpleFooter />
        </>
    );
};

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             errors: []
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         const { email, password } = this.state;
//         console.log(email, password);
//         //passing the mutation for login. console.log this.props.mutate to see what console logs
//         this.props
//             .mutate({
//                 mutation: Login,
//                 variables: { email, password },
//                 //refecth currentuser if needed
//                 refetchQueries: [{ query: '' }]
//             })
//             //if you want to see error in the source and check res in console by pressing esc button
//             .catch(res => {
//                 debugger;
//             })
//             .catch(res => {
//                 const errors = res.graphQLErrors.map(error => error.message);
//                 this.setState({ errors: errors });
//             });
//     }
//     componentWillUpdate(nextProps) {
//         //this might be this.data.user
//         // if (!this.props.data.user && nextProps.data.user) {
//         //     //redirect to dashboard
//         // }
//     }
//     componentDidMount() {
//         document.documentElement.scrollTop = 0;
//         document.scrollingElement.scrollTop = 0;
//         this.refs.main.scrollTop = 0;
//     }

export default Login;
