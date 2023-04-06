import React from 'react';
import Header from '../components/Header';
import { AnimationWidget } from '../components/AnimationWidget.js';
import { SporsmaalSkjema } from '../components/SporsmaalSkjema.js';
import { Personalia } from '../model/personaliaJson.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'survey-react/modern.min.css';
import { StylesManager } from 'survey-react';


  
export const FrontPage = () => {
    return(
        <div id="container">
            <div><Header/></div>
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
        
    );
}