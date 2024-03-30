import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ClueToTreasure } from '../components/ClueToTreasure';

const VeggiePage: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(checkText());
  };

  const checkText = () => {
    return (
      text.toLowerCase() === 'samarbeid' || text.toLowerCase() === 'Samarbeid'
    );
  };

  return (
    <>
      <div className="container">
        {!isValid && (
          <>
            <div style={iframeWrapperStyle}>
              <iframe
                src="https://share.synthesia.io/embeds/videos/dca7ff9d-2722-47b1-915f-43d7d55d9f2c"
                loading="lazy"
                title="Synthesia video player - Your AI video"
                allow="encrypted-media; fullscreen;"
                style={iframeStyle}
              ></iframe>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
                <Form.Group controlId="formText">
                  <Form.Control
                    type="text"
                    placeholder="Skriv inn ordet her"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    isInvalid={!isValid}
                  />
                  <Form.Control.Feedback type="invalid">
                    Feil kode
                  </Form.Control.Feedback>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-full size-64"
                  >
                    Svar
                  </button>
                </Form.Group>
              </Form>
            </div>
          </>
        )}
        {isValid && <ClueToTreasure />}
      </div>
    </>
  );
};

export default VeggiePage;
