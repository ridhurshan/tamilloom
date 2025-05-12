import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Load.css'; // Include this for CSS styling

function Load() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col>
          <div className="loader-box">
            <div className="custom-spinner"></div>
            <p className="loading-text">செய்திகள் ஏற்றப்படுகின்றன...</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Load;
