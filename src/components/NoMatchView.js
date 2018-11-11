import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const NoMatchView = () => (
  <Container className="mb-4">
    <Row>
      <Col>
        <h1>404</h1>
        <h2>Oops! Page not found.</h2>
      </Col>
    </Row>
  </Container>
);

export default NoMatchView;
