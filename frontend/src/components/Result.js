import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import './styles.css';

const Result = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="result-container py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1 className="display-4 text-success mb-3">Your Result</h1>
            <p className="lead text-muted mb-4">
              You answered {score} out of {total} questions correctly.
            </p>
            <Button className="btn-primary-custom btn-lg px-4 py-2 rounded-3">
              Try Again
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Result;
