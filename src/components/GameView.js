import React from 'react';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import GameLogic from '../model/GameLogic';

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
      result: 'choose'
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
      <div className="container">
        <OpponentRpsIcons selected={this.state.opponentSelection} />
        <GameStatusText status={this.state.result} />
        <PlayerRpsButtons
          selected={this.state.playerSelection}
          onClick={this.handlePlayerRpsButtonClick}
        />
      </div>
    );
  }
}

export default GameView;
