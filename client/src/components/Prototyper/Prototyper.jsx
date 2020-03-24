import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
// import HomeNav from '../Navbars/HomeNav';
import Navbar from './Nav';

export default props => (
    <Container
        fluid
        className={classNames('content', { 'is-open': props.isOpen })}
    >
        <Navbar toggle={props.toggle} />
    </Container>
);
