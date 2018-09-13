import React from 'react';
import { Container, Row } from 'reactstrap';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import GameLogic from '../model/GameLogic';
import ScoreBox from './ScoreBox';
import GameStatus from '../constants/GameStatus';

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
      result: GameStatus.Init
    };
  }

  handlePlayerRpsButtonClick(selection) {
    const opponentSelection = GameLogic.drawOpponentSelection();
    const result = GameLogic.calculateRoundResult(selection, opponentSelection);
    this.setState({
      playerSelection: selection,
      opponentSelection: opponentSelection,
      result: result
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <ScoreBox text="Best Streak" score={10} />
          <ScoreBox text="Current Streak" score={0} />
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
