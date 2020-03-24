import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import {
    Button,
    Collapse,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from 'reactstrap';
// import {
//     Navbar,
//     Button,
//     NavbarToggler,
//     Collapse,
//     Nav,
//     NavItem,
//     NavLink
// } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default props => {
    const [isOpen, setOpen] = useState(true);
    const toggle = () => setOpen(!isOpen);

    return (
        <>
            <header className="header-global">
                <Navbar
                    // color="primary"
                    className="navbar navbar-main shadow-sm navbar-light  protyper__nav "
                    expand="lg"
                    id="navbar-main"
                >
                    {/* <Navbar
                    color="light"
                    light
                    className="navbar shadow-sm p-3 mb-5 bg-white rounded"
                    expand="md"
                > */}
                    <Button color="info" onClick={props.toggle}>
                        <FontAwesomeIcon icon={faAlignLeft} />
                    </Button>
                    <NavbarToggler onClick={toggle} />
                    <Container>
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                            <img
                                alt="drawql logo"
                                src={require('../../assets/img/brand/DrawQL-LOGO-A.png')}
                            />
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse
                            toggler="#navbar_global"
                            navbar
                            // className={this.state.collapseClasses}
                            // onExiting={this.onExiting}
                            // onExited={this.onExited}
                        >
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/">
                                            <img
                                                alt="drawql logo"
                                                src={require('../../assets/img/brand/argon-react.png')}
                                            />
                                        </Link>
                                    </Col>
                                    <Col className="collapse-close" xs="6">
                                        <button
                                            className="navbar-toggler"
                                            id="navbar_global"
                                            type="button"
                                        >
                                            <span />
                                            <span />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav
                                className="navbar-nav-hover align-items-lg-center"
                                navbar
                            >
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://twitter.com/drawql"
                                        id="tooltip184698705"
                                        target="_blank"
                                    >
                                        <i className="fa fa-twitter-square" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Twitter
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip
                                        delay={0}
                                        target="tooltip184698705"
                                    >
                                        Follow us on Twitter
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://github.com/oslabs-beta/drawql"
                                        id="tooltip112445449"
                                        target="_blank"
                                    >
                                        <i className="fa fa-github" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Github
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip
                                        delay={0}
                                        target="tooltip112445449"
                                    >
                                        Star us on Github
                                    </UncontrolledTooltip>
                                </NavItem>
                            </Nav>
                            <Nav
                                className="align-items-lg-center ml-lg-auto"
                                navbar
                            >
                                <NavItem>
                                    <Link to="/login">
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://drawql.app/login"
                                            id="tooltip1846987010"
                                            target="_blank"
                                        >
                                            <i className="fa fa-user" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Log in
                                            </span>
                                            <span className="nav-link-inner--text">
                                                Log in
                                            </span>
                                        </NavLink>
                                        {/* <UncontrolledTooltip
                                            delay={0}
                                            target="tooltip184698705"
                                        >
                                            Log in to an existing account
                                        </UncontrolledTooltip> */}
                                    </Link>
                                </NavItem>

                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <Link to="/register">
                                        <Button
                                            className="btn-neutral btn-icon"
                                            color="default"
                                            href="https://drawql.app/register"
                                        >
                                            <span className="nav-link-inner--text ml-1">
                                                Sign Up
                                            </span>
                                        </Button>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                    {/* <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/page-1">
                                    page 1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/page-2">
                                    page 2
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/page-3">
                                    page 3
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/page-4">
                                    page 4
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse> */}
                </Navbar>
            </header>
        </>
    );
};