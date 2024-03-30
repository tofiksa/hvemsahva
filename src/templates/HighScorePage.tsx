import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { getHighscoreList } from '../services/retrieveFromSupabase';

const HighScorePage: React.FC = () => {
  const navigate = useNavigate();

  const [scoreList, setscoreList] = useState<any>('');

  useEffect(() => {
    if (getHighscoreList() != null) {
      getHighscoreList().then((response: any) => {
        setscoreList(response);
      });
    }
  }, []);

  return (
    <>
      <h1>Highscorelista</h1>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Navn</th>
              <th>Poeng</th>
              <th>Signature</th>
            </tr>
          </thead>
          <tbody>
            {scoreList
              ? scoreList.map((score: any, index: any) => {
                  return (
                    <tr key={index}>
                      <td>{score.id}</td>
                      <td>{score.username}</td>
                      <td>{score.score}</td>
                      <td>
                        <img src={score.signature} alt="signatur på arabisk" />
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default HighScorePage;
