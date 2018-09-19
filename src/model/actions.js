export const SET_BEST_SCORE = 'SET_BEST_SCORE';
export const SET_CURRENT_SCORE = 'SET_CURRENT_SCORE';

export const setBestScore = score => ({
  type: SET_BEST_SCORE,
  score
});

export const setCurrentScore = score => ({
  type: SET_CURRENT_SCORE,
  score
});
