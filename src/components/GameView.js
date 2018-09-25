import React from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import ScoreBox from './ScoreBox';

const GameView = props => (
  <Container>
    <Row className="mb-4">
      <ScoreBox text="Best Streak" score={props.bestScore} />
      <ScoreBox text="Current Streak" score={props.currentScore} />
    </Row>
    <Row className="mb-4">
      <OpponentRpsIcons selected={props.opponentSelection} />
    </Row>
    <Row className="mb-4">
      <GameStatusText status={props.result} />
    </Row>
    <Row>
      <PlayerRpsButtons
        selected={props.playerSelection}
        onClick={props.handlePlayerRpsButtonClick}
      />
    </Row>
  </Container>
);

GameView.propTypes = {
  bestScore: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  opponentSelection: PropTypes.object,
  result: PropTypes.object.isRequired,
  playerSelection: PropTypes.object,
  handlePlayerRpsButtonClick: PropTypes.func.isRequired
};

export default GameView;
