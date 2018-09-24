import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import ScoreBox from './ScoreBox';

const MenuView = props => (
  <Container>
    <Row>
      <Col>
        <h1>Rock-Paper-Scissors</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>by Jarmo</h5>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button>PLAY</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button>LOGIN</Button>
      </Col>
    </Row>
    <Row>
      <ScoreBox text="Best Streak" score={0} />
    </Row>
  </Container>
);

export default MenuView;
