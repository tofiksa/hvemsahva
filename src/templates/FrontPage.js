import React from 'react';
import { Header } from '../components/Header.js';
import { AnimationWidget } from '../components/AnimationWidget.js';
import { SporsmaalSkjema } from '../components/SporsmaalSkjema.js';
import { Personalia } from '../model/personaliaJson.js';
import { Footer } from '../components/Footer.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'survey-react/modern.min.css';
import { StylesManager } from 'survey-react';


StylesManager.applyTheme("modern");

export const FrontPage = () => {

    return(
        <div id="container">
            <div><Header/></div>
            <div id="content">
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><Personalia/></Col>
                    <Col></Col>
                </Row>
            </Container>
                </div>
            <div><Footer/></div>
        </div>
    );
}