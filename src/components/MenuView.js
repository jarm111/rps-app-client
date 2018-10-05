import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import paths from '../model/paths';
import ScoreBox from './ScoreBox';

class MenuView extends React.Component {
  componentDidMount() {
    this.props.handleDidMount();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Rock-Paper-Scissors</h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h5>by Jarmo</h5>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Link className="btn btn-secondary" to={paths.play}>
              PLAY
            </Link>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Link className="btn btn-secondary" to={paths.login}>
              LOGIN
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <ScoreBox text="Best Streak" score={this.props.bestScore} />
        </Row>
      </Container>
    );
  }
}

MenuView.propTypes = {
  bestScore: PropTypes.number.isRequired,
  handleDidMount: PropTypes.func.isRequired
};

export default MenuView;
