import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getImageUrlByNameFromLocalStorage } from '../services/retrieveFromStorage';

const BleierPage: React.FC = () => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(false);
  const BLEIER = getImageUrlByNameFromLocalStorage('bleier.png');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(checkText());

    if (checkText()) {
      navigate('/egg3');
    }
  };

  const checkText = () => {
    return text.toLowerCase() === 'lekekasse';
  };

  const imageStyle: React.CSSProperties = {
    marginBottom: '30px',
  };

  const rowStyle: React.CSSProperties = {
    marginBottom: '30px',
  };

  return (
    <>
      <h1>Andre egget ligger der Nora har bleiene sine.</h1>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row style={rowStyle}>
          <Col className="d-flex justify-content-center align-items-center">
            <img
              src={BLEIER}
              alt=""
              width="400"
              height="400"
              style={imageStyle}
            />
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col className="d-flex justify-content-center align-items-center">
            <h2>Her kommer neste gåte.</h2>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h3 style={{ width: '50%' }}>
              Jeg er en stor kasse fylt med moro og lek, Med dukker, biler og
              brettspill som du kan spille med en venn eller en bekjent. Inni
              meg finner du et univers av fantasi og eventyr, Der du kan bygge
              tårn, leke doktor, eller utforske et fremmed sted uten fare. Jeg
              tilhører en liten jente som heter Nora, Hun elsker å leke med meg
              og bruke fantasien sin til å utforske alt det hun kan nå. Hva er
              jeg, denne kassen som er full av glede og lek, En verden der alt
              er mulig, og det å ha det gøy er ikke en lek?
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
                <Button variant="primary" type="submit">
                  Svar
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BleierPage;
