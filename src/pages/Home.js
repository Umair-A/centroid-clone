import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


function Home() {
    return(
        <Container fluid>
            <Row>
                <Col><Sidebar /></Col>   
            </Row>
        </Container>
    );
}

export default Home;