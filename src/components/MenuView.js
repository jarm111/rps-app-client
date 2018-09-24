import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import paths from '../model/paths';
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
        <Link className="btn btn-secondary" to={paths.play}>
          PLAY
        </Link>
      </Col>
    </Row>
    <Row>
      <Col>
        <Link className="btn btn-secondary" to={paths.login}>
          LOGIN
        </Link>
      </Col>
    </Row>
    <Row>
      <ScoreBox text="Best Streak" score={0} />
    </Row>
  </Container>
);

export default MenuView;
