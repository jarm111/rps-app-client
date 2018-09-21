import React from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import ScoreBox from './ScoreBox';

const GameView = props => (
  <Container>
    <Row>
      <ScoreBox text="Best Streak" score={props.bestScore} />
      <ScoreBox text="Current Streak" score={props.currentScore} />
    </Row>
    <OpponentRpsIcons selected={props.opponentSelection} />
    <GameStatusText status={props.result} />
    <PlayerRpsButtons
      selected={props.playerSelection}
      onClick={props.handlePlayerRpsButtonClick}
    />
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
