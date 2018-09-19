import React from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import GameLogic from '../model/GameLogic';
import ScoreBox from './ScoreBox';
import ScoreLogic from '../model/ScoreLogic';

class GameView extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayerRpsButtonClick = this.handlePlayerRpsButtonClick.bind(
      this
    );
  }

  handlePlayerRpsButtonClick(playerSelection) {
    const opponentSelection = GameLogic.drawOpponentSelection();
    const result = GameLogic.calculateRoundResult(
      playerSelection,
      opponentSelection
    );
    const currentScore = ScoreLogic.calculateCurrentScore(
      this.props.currentScore,
      result
    );
    const bestScore = ScoreLogic.calculateBestScore(
      this.props.currentScore,
      this.props.bestScore
    );
    this.props.setScore(bestScore, currentScore);
    this.props.setRound(playerSelection, opponentSelection, result);
  }

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
          onClick={this.handlePlayerRpsButtonClick}
        />
      </Container>
    );
  }
}

GameView.propTypes = {
  bestScore: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  setRound: PropTypes.func.isRequired,
  opponentSelection: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  playerSelection: PropTypes.object.isRequired
};

export default GameView;
