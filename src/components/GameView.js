import React from 'react';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';

const GameView = props => (
  <div className="container">
    <OpponentRpsIcons selected="paper" />
    <GameStatusText status="tie" />
    <PlayerRpsButtons />
  </div>
);

export default GameView;
