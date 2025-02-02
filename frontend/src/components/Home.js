import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import './styles.css';

const Home = () => {
  return (
    <div className="home-container py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1 className="display-4 text-primary">Welcome to the Quiz App</h1>
            <p className="lead text-muted mb-4">Test your knowledge with our fun quiz!</p>
            <Link to="/quiz">
              <Button className="btn-primary-custom btn-lg px-4 py-2 rounded-3">
                Start Quiz
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
