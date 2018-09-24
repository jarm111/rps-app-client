import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import ScoreBox from './ScoreBox';

const MenuView = props => (
  <Container>
    <Row>
      <h1>Rock-Paper-Scissors</h1>
    </Row>
    <Row>
      <h5>by Jarmo</h5>
    </Row>
    <Row>
      <Button>PLAY</Button>
    </Row>
    <Row>
      <Button>LOGIN</Button>
    </Row>
    <Row>
      <ScoreBox text="Best Streak" score={0} />
    </Row>
  </Container>
);

export default MenuView;
