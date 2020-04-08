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
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from 'reactstrap';

class HomeNav extends React.Component {
    state = {
        collapseClasses: '',
        collapseOpen: false
    };

    componentDidMount() {
        const headroom = new Headroom(document.getElementById('navbar-main'));
        // initialise
        headroom.init();
    }

    onExiting = () => {
        this.setState({
            collapseClasses: 'collapsing-out'
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: ''
        });
    };

    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                <img
                                    alt="drawql logo"
                                    src={require('../../assets/img/brand/DrawQL-LOGO-A.png')}
                                />
                            </NavbarBrand>
                            <button
                                className="navbar-toggler"
                                id="navbar_global"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="drawql logo"
                                                    src={require('../../assets/img/brand/DrawQL-LOGO-A.png')}
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
                                        <NavLink
                                            className="nav-link-icon"
                                            href="/login"
                                            id="tooltip1846987010"
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
                                    </NavItem>

                                    <NavItem className="d-none d-lg-block ml-lg-4">
                                        <Button
                                            className="btn-neutral btn-icon"
                                            color="default"
                                            href="/register"
                                        >
                                            <span className="nav-link-inner--text ml-1">
                                                Sign Up
                                            </span>
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default HomeNav;
