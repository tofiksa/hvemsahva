import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getImageUrlByNameFromLocalStorage } from '../services/retrieveFromStorage';
import { useNavigate } from 'react-router-dom';

export const RenderClueToEgg4 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const TRAKTORLEKEPLASSEN = getImageUrlByNameFromLocalStorage(
    'traktorlekeplass.jpg',
  );

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
    if (selectedOption === 'trekant') {
      navigate('/egg3');
    }
  };

  console.log('showfeedback: ', showFeedback);
  return (
    <>
      <img
        srcSet={`${TRAKTORLEKEPLASSEN} 320w, ${TRAKTORLEKEPLASSEN} 680w, ${TRAKTORLEKEPLASSEN}   960w, ${TRAKTORLEKEPLASSEN} 1980w`}
        src={TRAKTORLEKEPLASSEN}
        alt="traktorlekeplassen"
        height={800}
        width={400}
      />
      <p>
        Det fjerde egget finner dere på denne traktorlekeplassen. Når dere
        finner den så må dere legge inn riktig symbol før dere får ledetråd til
        hvor neste egg ligger.
      </p>
      <div className="flex items-center m-4">
        <Form onSubmit={handleOption} style={{ width: '100%' }}>
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
            <p>
              {selectedOption !== 'trekant' ? 'Feil svar!' : 'Riktig svar!'}
            </p>
          )}
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-full size-64"
          >
            Svar
          </button>
        </Form>
      </div>
    </>
  );
};
