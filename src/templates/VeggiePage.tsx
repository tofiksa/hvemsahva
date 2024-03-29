import React from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SKAP from '../images/skap.avif'




const VeggiePage: React.FC = () => {

  const imageStyle: React.CSSProperties = {
    marginBottom: "30px",
  }

  const rowStyle: React.CSSProperties = {
    marginBottom: "30px",
  };

    return (<>
    
    <Header />
    <h1>
        Siste egget ligger der vi pleier å ha poteter.
    </h1>
    <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row style={rowStyle}>
          <Col className="d-flex justify-content-center align-items-center">
          
            <img src={SKAP} alt="" width="400" height="400" style={imageStyle} />
            
          </Col>
        </Row>
        
      </Container>
    </>);
};

export default VeggiePage;