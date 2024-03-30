import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

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
    width: '50%',
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(checkText());

    if (checkText()) {
      navigate('/egg1');
    }
  };

  const checkText = () => {
    return (
      text.toLowerCase() === 'hanan' || text.toLowerCase() === 'tante hanan'
    );
  };

  return (
    <>
      <div style={iframeWrapperStyle}>
        <iframe
          src="https://share.synthesia.io/embeds/videos/5b83a441-7de4-4238-8ca0-63ffb50eb72a"
          loading="lazy"
          title="Synthesia video player - Your AI video"
          allow="encrypted-media; fullscreen;"
          style={iframeStyle}
        ></iframe>
      </div>
      <div style={legendStyle}>
        Hun gir de beste klemmene og alltid er nær, Hun gir deg kjærlighet,
        omsorg og beskyttelse så kjær. Hun hjelper deg når du faller og trøster
        deg når du gråter, Hun lager de beste måltidene, og når du er syk, så
        passer hun på deg hele natten. Hvem er denne personen så god og så varm,
        Som alltid vil være der for deg, og som aldri vil forsvinne eller gjøre
        deg harm?
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
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
    </>
  );
};

export default CluesPage;
