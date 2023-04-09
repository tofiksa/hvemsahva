import React, { useState } from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CluesPage: React.FC = () => {

const [text, setText] = useState('');
const [isValid, setIsValid] = useState(false);

const iframeWrapperStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%',
};

const iframeStyle: React.CSSProperties = {
position: 'absolute',
width: '100%',
height: '100%',
top: '0',
left: '0',
border: 'none',
padding: '0',
margin: '0',
};

const legendStyle: React.CSSProperties = {
marginTop: '1rem',
textAlign: 'left',
fontWeight: 'bold',
width: '50%'
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(checkText());
  };

  const checkText = () => {
    return text.toLowerCase() === 'mamma' || text.toLowerCase() === 'mor';
  };


return (
<>
<Header />
<div style={iframeWrapperStyle}>
<iframe
    src="https://share.synthesia.io/embeds/videos/88919f44-2193-4af8-b2a0-b91c98dbcf60"
    loading="lazy"
    title="Synthesia video player - Your AI video"
    allow="encrypted-media; fullscreen;"
    style={iframeStyle}
></iframe>
</div>
<div style={legendStyle}>
Hun gir de beste klemmene og alltid er nær,
Hun gir deg kjærlighet, omsorg og beskyttelse så kjær.
Hun hjelper deg når du faller og trøster deg når du gråter,
Hun lager de beste måltidene, og når du er syk, så passer hun på deg hele natten.

Hvem er denne personen så god og så varm,
Som alltid vil være der for deg, og som aldri vil forsvinne eller gjøre deg harm?
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
    <Form.Group controlId="formText">
        <Form.Label>Skriv inn koden</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter text"
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

    </>
  );
};


export default CluesPage;
