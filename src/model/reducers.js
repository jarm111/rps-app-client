import { combineReducers } from 'redux';
import { SET_BEST_SCORE, SET_CURRENT_SCORE } from './actions';

const initialScore = {
  bestScore: 0,
  currentScore: 0
};

const score = (state = initialScore, action) => {
  switch (action.type) {
    case SET_BEST_SCORE:
      return { ...state, bestScore: action.score };
    case SET_CURRENT_SCORE:
      return { ...state, currentScore: action.score };
    default:
      return state;
  }
};

export default combineReducers({ score });
