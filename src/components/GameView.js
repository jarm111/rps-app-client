import React from 'react';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.getInitialState = this.getInitialState.bind(this);
    this.state = this.getInitialState();
    this.handlePlayerRpsButtonClick = this.handlePlayerRpsButtonClick.bind(
      this
    );
    this.drawOpponentSelection = this.drawOpponentSelection.bind(this);
    this.calculateRoundResult = this.calculateRoundResult.bind(this);
  }

  getInitialState() {
    return {
      opponentSelection: null,
      playerSelection: null,
      result: 'choose'
    };
  }

  handlePlayerRpsButtonClick(selection) {
    const opponentSelection = this.drawOpponentSelection();
    const result = this.calculateRoundResult(selection, opponentSelection);
    this.setState({
      playerSelection: selection,
      opponentSelection: opponentSelection,
      result: result
    });
  }

  drawOpponentSelection() {
    const rps = ['rock', 'paper', 'scissors'];

    //The maximum is exclusive and the minimum is inclusive
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };

    return rps[getRandomInt(0, 3)];
  }

  calculateRoundResult(playerSelection, opponentSelection) {
    if (playerSelection === opponentSelection) {
      return 'tie';
    }
    if (
      (playerSelection === 'scissors' && opponentSelection === 'paper') ||
      (playerSelection === 'paper' && opponentSelection === 'rock') ||
      (playerSelection === 'rock' && opponentSelection === 'scissors')
    ) {
      return 'win';
    } else {
      return 'loss';
    }
  }

  render() {
    return (
      <div className="container">
        <OpponentRpsIcons selected={this.state.opponentSelection} />
        <GameStatusText status={this.state.result} />
        <PlayerRpsButtons onClick={this.handlePlayerRpsButtonClick} />
      </div>
    );
  }
}

export default GameView;
