import React, { useState } from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BOWSERCASTLE from '../images/bowserscastle.jpeg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const BowserPage: React.FC = () => {

  const [text, setText] = useState('');
const [isValid, setIsValid] = useState(false);

const navigate = useNavigate();

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(checkText());

    if (checkText()) {
        navigate('/egg2');
      }
  };

  const checkText = () => {
    return text.toLowerCase() === 'bleier';
  };

  const imageStyle: React.CSSProperties = {
    marginBottom: "30px",
  }

  const rowStyle: React.CSSProperties = {
    marginBottom: "30px",
  };

    return (<>
    
    <Header />
    <h1>
        Første egget ligger i Bowser sitt slott!!
    </h1>
    <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row style={rowStyle}>
          <Col className="d-flex justify-content-center align-items-center">
          
            <img src={BOWSERCASTLE} alt="" width="400" height="400" style={imageStyle} />
            
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col className="d-flex justify-content-center align-items-center">
            <h2>
              Her kommer neste gåte.
            </h2>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h3 style={{width: "50%"}}>
              Jeg er myk og absorberende, og ganske så rund,
              Jeg brukes av babyer, og kan finnes i alle slags stiler og farger rundt.
              Jeg holder ting rent og tørt, og jeg hjelper babyer å sove godt om natten,
              Jeg kan være litt stinkende til tider, men jeg er alltid til nytte når jeg blir brukt på rett vis.

              Hva er jeg, kan du gjette det nå,
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <div style={{ display: 'flex', alignItems: 'center' }}>
    <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
    <Form.Group controlId="formText">
        
        <Form.Control
            type="text"
            placeholder="Skriv inn koden her"
            value={text}
            onChange={(e) => setText(e.target.value)}
            isInvalid={!isValid}
        />
        <Form.Control.Feedback type="invalid">
            Feil kode
        </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">Svar</Button>
    </Form>
    </div>
          
          </Col>
        </Row>
      </Container>
    </>);
};

export default BowserPage;