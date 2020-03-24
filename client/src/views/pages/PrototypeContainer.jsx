import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PrototypeContainer.scss';
// import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Prototyper/Prototyper';

const Prototyper = () => {
    const [isOpen, setOpen] = useState(true);
    const toggle = () => setOpen(!isOpen);

    return (
        // This div was previously a <Router> but it seems fine as a div?
        <div>
            <div className="App wrapper">
                <SideBar toggle={toggle} isOpen={isOpen} />
                <Content toggle={toggle} isOpen={isOpen} />
            </div>
        </div>
    );
};

export default Prototyper;
