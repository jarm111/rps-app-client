import React from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import ScoreBox from './ScoreBox';

class GameView extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <ScoreBox text="Best Streak" score={this.props.bestScore} />
          <ScoreBox text="Current Streak" score={this.props.currentScore} />
        </Row>
        <OpponentRpsIcons selected={this.props.opponentSelection} />
        <GameStatusText status={this.props.result} />
        <PlayerRpsButtons
          selected={this.props.playerSelection}
          onClick={this.props.handlePlayerRpsButtonClick}
        />
      </Container>
    );
  }
}

GameView.propTypes = {
  bestScore: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  opponentSelection: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  playerSelection: PropTypes.object.isRequired,
  handlePlayerRpsButtonClick: PropTypes.func.isRequired
};

export default GameView;
