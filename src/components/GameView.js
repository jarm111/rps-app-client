import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import ScoreBox from './ScoreBox';

class GameView extends React.Component {
  componentDidMount() {
    this.props.handleDidMount();
  }

  componentWillUnmount() {
    this.props.handleUnmount();
  }

  render() {
    return (
      <Container>
        <Row className="mb-4">
          <ScoreBox text="Best Streak" score={this.props.bestScore} />
          <ScoreBox text="Current Streak" score={this.props.currentScore} />
        </Row>
        <Row>
          <Col>
            <h5 className="text-danger">OPPONENT</h5>
          </Col>
        </Row>
        <Row className="mb-4">
          <OpponentRpsIcons selected={this.props.opponentSelection} />
        </Row>
        <Row className="justify-content-center mb-4">
          <GameStatusText status={this.props.result} />
        </Row>
        <Row>
          <PlayerRpsButtons
            selected={this.props.playerSelection}
            onClick={this.props.handlePlayerRpsButtonClick}
          />
        </Row>
        <Row>
          <Col>
            <h4 className="text-success mb-4">PLAYER</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

GameView.propTypes = {
  bestScore: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  opponentSelection: PropTypes.object,
  result: PropTypes.object.isRequired,
  playerSelection: PropTypes.object,
  handlePlayerRpsButtonClick: PropTypes.func.isRequired,
  handleUnmount: PropTypes.func.isRequired,
  handleDidMount: PropTypes.func.isRequired
};

export default GameView;
