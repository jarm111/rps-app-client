import { ActionTypes } from './enums';

export const setBestScore = score => ({
  type: ActionTypes.SET_BEST_SCORE,
  score
});

export const setCurrentScore = score => ({
  type: ActionTypes.SET_CURRENT_SCORE,
  score
});
