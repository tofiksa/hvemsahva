import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getImageUrlByNameFromLocalStorage } from '../services/retrieveFromStorage';
import { useNavigate } from 'react-router-dom';

export const RenderClueToEgg3 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const SKOLEN = getImageUrlByNameFromLocalStorage('skolen.jpg');

  const navigate = useNavigate();
  const handleOption = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (selectedOption !== '') {
      // Correct answer
      setShowFeedback(true);
    } else {
      // Incorrect answer
      setShowFeedback(false);
    }
    if (selectedOption === 'firkant') {
      navigate('/egg2');
    }
  };

  console.log('showfeedback: ', showFeedback);
  return (
    <>
      <img
        srcSet={`${SKOLEN} 320w, ${SKOLEN} 680w, ${SKOLEN}   960w, ${SKOLEN} 1980w`}
        src={SKOLEN}
        alt="SKOLEN"
        height={800}
        width={400}
      />
      <p>
        Det tredje egget finner dere på denne skolen. Når dere finner den så må
        dere legge inn riktig symbol før dere får ledetråd til hvor neste egg
        ligger.
      </p>
      <Form onSubmit={handleOption} style={{ width: '50%' }}>
        <Form.Group controlId="formSelect">
          <Form.Control
            as="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Velg en mulighet</option>
            <option value="sirkel">Sirkel</option>
            <option value="firkant">Firkant</option>
            <option value="kryss">Kryss</option>
            <option value="trekant">Trekant</option>
          </Form.Control>
        </Form.Group>
        {showFeedback && (
          <p>{selectedOption !== 'firkant' ? 'Feil svar!' : 'Riktig svar!'}</p>
        )}
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </>
  );
};
