import React from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classnames from 'classnames';

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from 'reactstrap';

// core components
import HomeNav from './components/Navbars/HomeNav';
import SimpleFooter from './components/Footers/SimpleFooter';

// index page sections
import Download from './components/IndexSections/Download';

class Landing extends React.Component {
    state = {};

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                <HomeNav />
                <main ref="main">
                    <div className="position-relative">
                        {/* shapes Hero background */}
                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Build a GraphQL API fast
                                                <span>
                                                    and export the code for your
                                                    project or team
                                                </span>
                                            </h1>
                                            <p className="lead text-white">
                                                DrawQL allows you to prototype,
                                                visualize, and collaborate on a
                                                new or existing GraphQL API and
                                                then export it as usable code.
                                            </p>
                                            <div className="btn-wrapper">
                                                <Link to="/login">
                                                    <Button
                                                        className="btn-icon mb-3 mb-sm-0"
                                                        color="info"
                                                        href="https://drawql.app/login"
                                                    >
                                                        <span className="btn-inner--icon mr-1">
                                                            <i className="fa fa-code" />
                                                        </span>
                                                        <span className="btn-inner--text">
                                                            Get Started Now
                                                        </span>
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG Separator -- Provides slanted white border of hero section*/}
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                        {/* 1st Hero Variation */}
                    </div>
                    <section className="section section-lg pt-lg-0 mt--200">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="ni ni-check-bold" />
                                                    </div>
                                                    <h5 className="text-primary text-uppercase">
                                                        Map out your API
                                                    </h5>
                                                    {/* this formerly had a "description" as one of the class names, resulting in smaller text */}
                                                    <p className=" mt-3">
                                                        GraphQL APIs can easily
                                                        become hard-to-navigate
                                                        blobs of code. DrawQL
                                                        helps solve that by
                                                        creating clear visual
                                                        relationships so you can
                                                        see all the connections
                                                        within your API.
                                                    </p>
                                                    <div>
                                                        <Badge
                                                            color="primary"
                                                            pill
                                                            className="mr-1"
                                                        >
                                                            Visualize
                                                        </Badge>
                                                        <Badge
                                                            color="primary"
                                                            pill
                                                            className="mr-1"
                                                        />
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="ni ni-istanbul" />
                                                    </div>
                                                    <h5 className="text-success text-uppercase">
                                                        Export your prototype
                                                    </h5>
                                                    {/* this formerly had a "description" as one of the class names, resulting in smaller text */}
                                                    <p className=" mt-3">
                                                        Once you&apos;re
                                                        satisfied with your API
                                                        prototype, export it as
                                                        code that can be
                                                        implemented into an
                                                        Apollo Server project.
                                                        No need to get lost
                                                        navigating huge blocks
                                                        of code.
                                                    </p>
                                                    <div>
                                                        <Badge
                                                            color="success"
                                                            pill
                                                            className="mr-1"
                                                        >
                                                            download
                                                        </Badge>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="ni ni-planet" />
                                                    </div>
                                                    <h5 className="text-warning text-uppercase">
                                                        Collaborate
                                                    </h5>

                                                    <p className=" mt-3">
                                                        DrawQL makes it easy to
                                                        work on a single
                                                        prototype alongside
                                                        several other engineers.
                                                        Reduce merge conflicts
                                                        and duplicate work on
                                                        your team while you
                                                        focus on building your
                                                        application.
                                                    </p>
                                                    <div>
                                                        <Badge
                                                            color="warning"
                                                            pill
                                                            className="mr-1"
                                                        >
                                                            share
                                                        </Badge>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {/* Features section with floating images on right */}
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-md-2" md="6">
                                    <img
                                        alt="floating preview image"
                                        className="img-fluid floating"
                                        src={require('./assets/img/theme/promo-1.png')}
                                    />
                                </Col>
                                <Col className="order-md-1" md="6">
                                    <div className="pr-md-5">
                                        <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                            <i className="ni ni-settings-gear-65" />
                                        </div>
                                        <h3>Awesome features</h3>
                                        <p>
                                            DrawQL comes with everything you and
                                            your team need to design a great
                                            API. Our only goal is to make DrawQL
                                            10x better than writing GraphQL
                                            endpoints yourself.
                                        </p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-settings-gear-65" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Design queries
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-html5" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Create custom
                                                            resolvers and
                                                            mutations
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-satisfied" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Import your existing
                                                            API and make your
                                                            life easier
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg bg-gradient-default">
                        <Container className="pt-lg pb-300">
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3 text-white">
                                        This section shows a demo mp4/gif
                                    </h2>
                                    <p className="lead text-white">
                                        this text goes on the left hand side of
                                        the video/gif
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        {/* SVG separator */}
                        {/* <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div> */}
                    </section>
                    {/* THIS IS A REALLY GOOD SECTION -- COULD BE GREAT FOR ANOTHER SCREENSHOT OF THE APP OR A GIF/MP4? */}
                    <section className="section pb-40 bg-gradient-warning">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-lg-2 ml-lg-auto" md="6">
                                    <div className="position-relative pl-md-5">
                                        <img
                                            alt="..."
                                            className="img-center img-fluid"
                                            src={require('./assets/img/ill/ill-2.svg')}
                                        />
                                    </div>
                                </Col>
                                <Col className="order-lg-1" lg="6">
                                    <div className="d-flex px-3">
                                        <div>
                                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                                <i className="ni ni-building text-primary" />
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <h4 className="display-3 text-white">
                                                Talk about DrawQL some more here
                                            </h4>
                                            <p className="text-white">
                                                This is some subheading text.
                                                Look at that fellow standing at
                                                his desk to the right. BDE.
                                            </p>
                                        </div>
                                    </div>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-satisfied" />
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        This is a smiley icon
                                                    </h5>
                                                    <p>
                                                        Doggo ipsum he made many
                                                        woofs lotsa pats tungg
                                                        puggorino, noodle horse
                                                        puggo maximum borkdrive
                                                        long bois, most angery
                                                        pupper I have ever seen
                                                        floofs.
                                                    </p>
                                                    {/* <a
                                                        className="text-success"
                                                        href="#pablo"
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        Learn more
                                                    </a> */}
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-active-40" />
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-warning">
                                                        Modular Components
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes
                                                        every winter and much of
                                                        the sea-ice then thaws
                                                        every summer, and that
                                                        process will continue
                                                        whatever.
                                                    </p>
                                                    <a
                                                        className="text-warning"
                                                        href="#pablo"
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="section section-lg">
                        <Container>
                            <Row className="justify-content-center text-center mb-lg">
                                <Col lg="8">
                                    <h2 className="display-3">
                                        The Amazing Team
                                    </h2>
                                    <p className="lead text-muted">
                                        According to the National Oceanic and
                                        Atmospheric Administration, Ted,
                                        Scambos, NSIDClead scentist, puts the
                                        potentially record maximum.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                {/* each Col can be shrunk, so maybe we can put 5 images in? */}
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require('./assets/img/theme/lance-cropped.jpg')}
                                            style={{ width: '200px' }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">
                                                    Lance Jeffers
                                                </span>
                                                <small className="h6 text-muted">
                                                    The man with the plan
                                                </small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="warning"
                                                    href="https://twitter.com/6catsinacoat"
                                                    target="_blank"
                                                >
                                                    <i className="fa fa-twitter" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="warning"
                                                    href="https://github.com/lancej1022"
                                                    target="_blank"
                                                >
                                                    <i className="fa fa-github" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="warning"
                                                    href="https://www.linkedin.com/in/lance-jeffers/"
                                                    target="_blank"
                                                >
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require('./assets/img/theme/team-2-800x800.jpg')}
                                            style={{ width: '200px' }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">
                                                    Jessikeé Campbell
                                                </span>
                                                <small className="h6 text-muted">
                                                    Good vibes only
                                                </small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fa fa-twitter" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fa fa-github" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require('./assets/img/theme/team-3-800x800.jpg')}
                                            style={{ width: '200px' }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">
                                                    Parvana Aliyeva
                                                </span>
                                                <small className="h6 text-muted">
                                                    Silent but deadly
                                                </small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fa fa-twitter" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fa fa-github" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require('./assets/img/theme/team-4-800x800.jpg')}
                                            style={{ width: '200px' }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">
                                                    Anthony Flores
                                                </span>
                                                <small className="h6 text-muted">
                                                    The Peacekeeper
                                                </small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="warning"
                                                    href="https://github.com/floresa22"
                                                    target="_blank"
                                                >
                                                    <i className="fa fa-github" />
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="warning"
                                                    href="http://linkedin.com/in/anthony-flores-8669271a3"
                                                    target="_blank"
                                                >
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg pt-0">
                        <Container>
                            <Card className="bg-gradient-warning shadow-lg border-0">
                                <div className="p-5">
                                    <Row className="align-items-center">
                                        <Col lg="8">
                                            <h3 className="text-white">
                                                An Open Source Tool for GraphQL
                                            </h3>
                                            <p className="lead text-white mt-3">
                                                DrawQL is a completely free tool
                                                that we hope is useful to the
                                                GraphQL community. We know how
                                                hard it can be to deal with the
                                                monolithic APIs that are often
                                                involved with GraphQL, so we
                                                made DrawQL to help solve that
                                                for you.
                                            </p>
                                        </Col>
                                        <Col className="ml-lg-auto" lg="3">
                                            <Link to="/login">
                                                <Button
                                                    block
                                                    className="btn-white"
                                                    color="default"
                                                    href="https://drawql.app/login"
                                                    size="lg"
                                                >
                                                    Get Started
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Container>
                    </section>
                </main>
                <SimpleFooter />
            </>
        );
    }
}

export default Landing;
