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
import { Container, Row } from 'reactstrap';

// core components
import DemoNavbar from '../components/Navbars/DemoNavbar';
import CardsFooter from '../components/Footers/CardsFooter';

// index page sections
import Hero from '../components/IndexSections/Hero.js';
import Buttons from '../components/IndexSections/Buttons.js';
import Inputs from '../components/IndexSections/Inputs.js';
import CustomControls from '../components/IndexSections/CustomControls.js';
import Menus from '../components/IndexSections/Menus.js';
import Navbars from '../components/IndexSections/Navbars.js';
import Tabs from '../components/IndexSections/Tabs.js';
import Progress from '../components/IndexSections/Progress.js';
import Pagination from '../components/IndexSections/Pagination.js';
import Pills from '../components/IndexSections/Pills.js';
import Labels from '../components/IndexSections/Labels.js';
import Alerts from '../components/IndexSections/Alerts.js';
import Typography from '../components/IndexSections/Typography.js';
import Modals from '../components/IndexSections/Modals.js';
import Datepicker from '../components/IndexSections/Datepicker.js';
import TooltipPopover from '../components/IndexSections/TooltipPopover.js';
import Carousel from '../components/IndexSections/Carousel.js';
import Icons from '../components/IndexSections/Icons.js';
import Login from '../components/IndexSections/Login.js';
import Download from '../components/IndexSections/Download.js';

class Index extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                <DemoNavbar />
                <main ref="main">
                    <Hero />
                    <Buttons />
                    <Inputs />
                    <section className="section">
                        <Container>
                            <CustomControls />
                            <Menus />
                        </Container>
                    </section>
                    <Navbars />
                    <section className="section section-components">
                        <Container>
                            <Tabs />
                            <Row className="row-grid justify-content-between align-items-center mt-lg">
                                <Progress />
                                <Pagination />
                            </Row>
                            <Row className="row-grid justify-content-between">
                                <Pills />
                                <Labels />
                            </Row>
                            <Alerts />
                            <Typography />
                            <Modals />
                            <Datepicker />
                            <TooltipPopover />
                        </Container>
                    </section>
                    <Carousel />
                    <Icons />
                    <Login />
                    <Download />
                </main>
                <CardsFooter />
            </>
        );
    }
}

export default Index;
