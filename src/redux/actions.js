export const SET_BEST_SCORE = 'SET_BEST_SCORE';
export const SET_CURRENT_SCORE = 'SET_CURRENT_SCORE';
export const SET_PLAYER_SELECTION = 'SET_PLAYER_SELECTION';
export const SET_OPPONENT_SELECTION = 'SET_OPPONENT_SELECTION';
export const SET_ROUND_RESULT = 'SET_ROUND_RESULT';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USERNAME = 'SET_USERNAME';

export const setBestScore = score => ({
  type: SET_BEST_SCORE,
  score
});

export const setCurrentScore = score => ({
  type: SET_CURRENT_SCORE,
  score
});

export const setPlayerSelection = selection => ({
  type: SET_PLAYER_SELECTION,
  selection
});

export const setOpponentSelection = selection => ({
  type: SET_OPPONENT_SELECTION,
  selection
});

export const setRoundResult = result => ({
  type: SET_ROUND_RESULT,
  result
});

export const setIsAuthenticated = state => ({
  type: SET_IS_AUTHENTICATED,
  state
});

export const setAccessToken = token => ({
  type: SET_TOKEN,
  token
});

export const setUserName = name => ({
  type: SET_USERNAME,
  name
});
