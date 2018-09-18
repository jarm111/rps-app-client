import React from 'react';
import { Container, Row } from 'reactstrap';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import GameLogic from '../model/GameLogic';
import ScoreBox from './ScoreBox';
import { GameStatus } from '../model/enums';
import ScoreLogic from '../model/ScoreLogic';

class GameView extends React.Component {
  constructor(props) {
    super(props);

    this.getInitialState = this.getInitialState.bind(this);
    this.handlePlayerRpsButtonClick = this.handlePlayerRpsButtonClick.bind(
      this
    );

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      opponentSelection: null,
      playerSelection: null,
      result: GameStatus.Init,
      currentScore: 0,
      bestScore: 0
    };
  }

  handlePlayerRpsButtonClick(playerSelection) {
    const opponentSelection = GameLogic.drawOpponentSelection();
    const result = GameLogic.calculateRoundResult(
      playerSelection,
      opponentSelection
    );
    const currentScore = ScoreLogic.calculateCurrentScore(
      this.state.currentScore,
      result
    );
    const bestScore = ScoreLogic.calculateBestScore(
      this.state.currentScore,
      this.state.bestScore
    );
    this.setState({
      playerSelection: playerSelection,
      opponentSelection: opponentSelection,
      result: result,
      currentScore: currentScore,
      bestScore: bestScore
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <ScoreBox text="Best Streak" score={this.state.bestScore} />
          <ScoreBox text="Current Streak" score={this.state.currentScore} />
        </Row>
        <OpponentRpsIcons selected={this.state.opponentSelection} />
        <GameStatusText status={this.state.result} />
        <PlayerRpsButtons
          selected={this.state.playerSelection}
          onClick={this.handlePlayerRpsButtonClick}
        />
      </Container>
    );
  }
}

export default GameView;
