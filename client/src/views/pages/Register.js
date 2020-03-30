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
import React from 'react';

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
import HomeNav from '../../components/Navbars/HomeNav';
import SimpleFooter from '../../components/Footers/SimpleFooter';
// import { graphql, Mutation } from 'react-apollo';
// import { useMutation } from '@apollo/react-hooks';
// import gql from 'apollo-boost';
// import { register } from '../../serviceWorker';
import REGISTER from '../../mutations/Register';

// const REGISTER = gql`
//     mutation register($username: String, $email: String, $password: String) {
//         signUp(username: $username, email: $email, password: $password) {
//             token
//         }
//     }
// `;

// function registerUser() {
//     const [Register, { loading, error, data }] = useMutation(REGISTER);
//     if (loading) return 'Loading ...';
//     if (error) return `Error : ${error.message}`;
//     return Register;
// }

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, email, password } = this.state;
        console.log(name, email, password)
        console.log(this.props)

        this.props
            .mutate({
                mutation:register,
                variables: { username, email, password },
                //refetch query(currentuser)
                // refetchQueries: [{ query }]
            })
            .catch(res => {
                const errors = res.graphQLErrors.map(error => error.message);
                //this.setState({errors: errors})
                this.setState({ errors });
            });
    }
    render() {
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
                                        <CardBody className="px-lg-5 py-lg-3">
                                            <div className="text-center text-muted mb-4">
                                                <p>
                                                    Or sign up with credentials
                                                </p>
                                            </div>
                                                <Form
                                                    role="form"
                                                    onSubmit={this.handleSubmit}
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
                                                                value={
                                                                    this.state
                                                                        .username
                                                                }
                                                                onChange={e => {
                                                                    this.setState(
                                                                            {
                                                                                username:
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                            }

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
                                                                value={
                                                                    this.state
                                                                        .email
                                                                }
                                                                onChange={e =>
                                                                    this.setState(
                                                                            {
                                                                                email:
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                            }
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
                                                                value={
                                                                    this.state
                                                                        .password
                                                                }
                                                                onChange={e =>
                                                                    this.setState(
                                                                            {
                                                                                password:
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                            }

                                                                    )
                                                                }
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
                                                                        I agree
                                                                        with the{' '}
                                                                        <a
                                                                            href="#pablo"
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
    }
}
// graphql(REGISTER)(Register);
export default Register;
