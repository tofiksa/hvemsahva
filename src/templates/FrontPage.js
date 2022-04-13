import React from 'react';
import { Header } from '../components/Header.js';
import { AnimationWidget } from '../components/AnimationWidget.js';
import { SporsmaalSkjema } from '../components/SporsmaalSkjema.js';
import { Footer } from '../components/Footer.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export const FrontPage = () => {
    return(
        <div id="container">
            <div><Header/></div>
            <div id="content">
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col><SporsmaalSkjema/></Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
                </div>
            <div><Footer/></div>
        </div>
    );
}