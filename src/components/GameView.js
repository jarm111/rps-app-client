import React from 'react';

const GameView = props => (
  <div>
    <p>BEST STREAK: 10</p>
    <p>CURRENT STREAK: 5</p>
    <div>
      <h1>ROCK-PAPER-SCISSORS</h1>
      <h3>by jarm111</h3>
    </div>
    <div>
      <div>
        <button>ROCK</button>
        <button>PAPER</button>
        <button>SCISSORS</button>
      </div>
      <h2>WIN</h2>
      <div>
        <button>ROCK</button>
        <button>PAPER</button>
        <button>SCISSORS</button>
      </div>
    </div>
    <div>
      <button>RESTART</button>
      <button>BACK TO MENU</button>
    </div>
  </div>
);

export default GameView;
