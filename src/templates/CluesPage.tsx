import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { RenderClueToEgg2 } from '../components/ClueToEgg2';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(checkText());
  };

  const checkText = () => {
    return (
      text.toLowerCase() === 'hanan' || text.toLowerCase() === 'tante hanan'
    );
  };

  return (
    <>
      <div className="container">
        {!isValid && (
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
                  <Button variant="primary" type="submit">
                    Svar
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </>
        )}
        {isValid && <RenderClueToEgg2 />}
      </div>
    </>
  );
};

export default CluesPage;
