import { ActionTypes } from './enums';
import { combineReducers } from 'redux';

const initialScore = {
  bestScore: 0,
  currentScore: 0
};

const score = (state = initialScore, action) => {
  switch (action.type) {
    case ActionTypes.SET_BEST_SCORE:
      return { ...state, bestScore: action.score };
    case ActionTypes.SET_CURRENT_SCORE:
      return { ...state, currentScore: action.score };
    default:
      return state;
  }
};

export default combineReducers({ score });
