import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy
} from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink, Nav, NavbarBrand } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import './Sidebar.scss';

const SideBar = props => (
    <div className={classNames('sidebar', { 'is-open': props.isOpen })}>
        <div className="sidebar-header">
            <NavbarBrand
                className="mr-lg-5"
                to="/"
                tag={Link}
                // onClick={props.toggle}
            >
                <img
                    alt="drawql logo"
                    src={require('../../assets/img/brand/DrawQL-LOGO-A.png')}
                />
            </NavbarBrand>
        </div>
        <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3">
                <p>Dummy Heading</p>
                {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
                {/* <NavItem>
                    <NavLink tag={Link} to="/about">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        About
                    </NavLink>
                </NavItem>
                {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
                {/* <NavItem>
                    <NavLink tag={Link} to="/pages">
                        <FontAwesomeIcon icon={faImage} className="mr-2" />
                        Portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/faq">
                        <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                        FAQ
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/contact">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        Contact
                    </NavLink>
                </NavItem> */}
            </Nav>
        </div>
    </div>
);

// const submenus = [
//     [
//         {
//             title: 'Home 1',
//             target: 'Home-1'
//         },
//         {
//             title: 'Home 2',
//             target: 'Home-2'
//         },
//         {
//             itle: 'Home 3',
//             target: 'Home-3'
//         }
//     ],
//     [
//         {
//             title: 'Page 1',
//             target: 'Page-1'
//         },
//         {
//             title: 'Page 2',
//             target: 'Page-2'
//         }
//     ]
// ];

export default SideBar;
