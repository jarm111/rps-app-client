import Enum from 'enum';

export const GameStatus = new Enum({ Init: 0, Win: 1, Loss: 2, Tie: 3 });

export const Rps = new Enum({ Rock: 0, Paper: 1, Scissors: 2 });

export const ActionTypes = new Enum({
  SET_BEST_SCORE: 0,
  SET_CURRENT_SCORE: 1
});
