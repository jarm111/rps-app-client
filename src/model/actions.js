import GameLogic from './GameLogic';
import ScoreLogic from './ScoreLogic';
import { GameStatus } from './enums';

export const SET_BEST_SCORE = 'SET_BEST_SCORE';
export const SET_CURRENT_SCORE = 'SET_CURRENT_SCORE';
export const SET_PLAYER_SELECTION = 'SET_PLAYER_SELECTION';
export const SET_OPPONENT_SELECTION = 'SET_OPPONENT_SELECTION';
export const SET_ROUND_RESULT = 'SET_ROUND_RESULT';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const SET_TOKEN = 'SET_TOKEN';

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

export const processRound = playerSelection => {
  return (dispatch, getState) => {
    dispatch(setPlayerSelection(playerSelection));
    dispatch(setOpponentSelection(GameLogic.drawOpponentSelection()));
    dispatch(
      setRoundResult(
        GameLogic.calculateRoundResult(
          getState().round.playerSelection,
          getState().round.opponentSelection
        )
      )
    );
    dispatch(
      setCurrentScore(
        ScoreLogic.calculateCurrentScore(
          getState().score.current,
          getState().round.result
        )
      )
    );
    if (
      ScoreLogic.isNewBestScore(getState().score.current, getState().score.best)
    ) {
      dispatch(setBestScore(getState().score.current));
      sendBestScore(getState().score.best);
    }
  };
};

export const resetGame = () => {
  return (dispatch, getState) => {
    dispatch(setPlayerSelection(null));
    dispatch(setOpponentSelection(null));
    dispatch(setRoundResult(GameStatus.Init));
    dispatch(setCurrentScore(0));
  };
};

export const fetchBestScore = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:5000/users/testUser')
      .then(res => res.json())
      .then(
        res => dispatch(setBestScore(res.bestScore)),
        error => console.log(error)
      );
  };
};

export const responseGoogle = response => {
  return (dispatch, getState) => {
    const init = {
      method: 'POST',
      body: 'accessToken=' + response.hg.id_token,
      headers: new Headers({
        'content-type': 'application/x-www-form-urlencoded'
      })
    };
    console.log(response);
    fetch('http://localhost:5000/auth/google', init).then(res => {
      const token = res.headers.get('x-auth-token');
      if (token) {
        dispatch(setIsAuthenticated(true));
        dispatch(setAccessToken(token));
      }
    });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    console.log('Logged out user');
  };
};

const sendBestScore = score => {
  const init = {
    method: 'PUT',
    body: 'bestScore=' + score,
    headers: new Headers({
      'content-type': 'application/x-www-form-urlencoded'
    })
  };

  fetch('http://localhost:5000/users/testUser', init).then(null, error =>
    console.log(error)
  );
};
