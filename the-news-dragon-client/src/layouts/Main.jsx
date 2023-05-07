// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import Navigationbar from '../pages/shared/NavigationBar/Navigationbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigationbar></Navigationbar>
            <Container>
            <Row>
            <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;