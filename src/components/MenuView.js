import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../utils/routes';
import ScoreBox from './ScoreBox';

const MenuView = props => (
  <Container className="mb-4">
    <Row>
      <Col>
        <h1>Rock-Paper-Scissors</h1>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col>
        <h5>by jarm111</h5>
      </Col>
    </Row>
    <Row className="mb-2">
      <Col>
        <Link className="btn btn-info" to={routes.play}>
          Play
        </Link>
      </Col>
    </Row>
    <Row className="mb-4">
      <Col>
        <Link className="btn btn-info" to={routes.login}>
          Login
        </Link>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <ScoreBox text="Best Streak" score={props.bestScore} />
    </Row>
  </Container>
);

MenuView.propTypes = {
  bestScore: PropTypes.number.isRequired
};

export default MenuView;
