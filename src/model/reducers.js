import { combineReducers } from 'redux';
import { GameStatus } from './enums';
import {
  SET_BEST_SCORE,
  SET_CURRENT_SCORE,
  SET_PLAYER_SELECTION,
  SET_OPPONENT_SELECTION,
  SET_ROUND_RESULT
} from './actions';

const initialScore = {
  best: 0,
  current: 0
};

const initialRound = {
  playerSelection: null,
  opponentSelection: null,
  result: GameStatus.Init
};

const score = (state = initialScore, action) => {
  switch (action.type) {
    case SET_BEST_SCORE:
      return { ...state, best: action.score };
    case SET_CURRENT_SCORE:
      return { ...state, current: action.score };
    default:
      return state;
  }
};

const round = (state = initialRound, action) => {
  switch (action.type) {
    case SET_PLAYER_SELECTION:
      return { ...state, playerSelection: action.selection };
    case SET_OPPONENT_SELECTION:
      return { ...state, opponentSelection: action.selection };
    case SET_ROUND_RESULT:
      return { ...state, result: action.result };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ score, round });

export default rootReducer;
