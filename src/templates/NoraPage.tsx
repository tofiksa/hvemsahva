import React, { useState } from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LEKEKASSE from '../images/lekekasse.jpeg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const NoraPage: React.FC = () => {

  const [text, setText] = useState('');
const [isValid, setIsValid] = useState(false);

const navigate = useNavigate();

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(checkText());

    if (checkText()) {
        navigate('/egg4');
      }
  };

  const checkText = () => {
    return text.toLowerCase() === 'potet';
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
        Tredje egget ligger i lekekassa til Nora.
    </h1>
    <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row style={rowStyle}>
          <Col className="d-flex justify-content-center align-items-center">
          
            <img src={LEKEKASSE} alt="" width="400" height="400" style={imageStyle} />
            
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
            Jeg er en grønnsak, og jeg vokser under jorden,
            Med en brun skorpe utenpå og inni er jeg rund og hul, og det er ikke en luring.
            Jeg er allsidig, og du kan tilberede meg på mange forskjellige måter,
            Enten det er stekt, kokt eller bakt, så vil jeg alltid smake godt, ingen tvil om det.

            Noen ganger er jeg til og med laget til pommes frites,
            Eller chips, som du kan spise mens du ser på filmer og har en god tid.

            Hva er jeg, denne grønnsaken så kul og så god,
            Som vokser i jorden og gir smak til maten som du liker i ditt blod?
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

export default NoraPage;