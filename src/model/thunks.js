import GameLogic from './GameLogic';
import ScoreLogic from './ScoreLogic';
import { GameStatus } from './enums';
import paths from './paths';
import {
  setBestScore,
  setCurrentScore,
  setPlayerSelection,
  setAccessToken,
  setIsAuthenticated,
  setOpponentSelection,
  setRoundResult,
  setUserName
} from './actions';

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
      sendBestScore(getState().score.best, getState().user.accessToken);
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

export const responseGoogleSuccess = (response, history) => {
  return (dispatch, getState) => {
    const init = {
      method: 'GET',
      headers: new Headers({
        access_token: response.accessToken
      })
    };
    let userName = response.profileObj.givenName;

    fetch('http://localhost:5000/user/auth/google', init)
      .then(res => res.json())
      .then(res => {
        const token = res.token;
        if (token) {
          dispatch(setIsAuthenticated(true));
          dispatch(setAccessToken(token));
          dispatch(setBestScore(res.bestScore));
          userName && dispatch(setUserName(userName));
        }
      })
      .then(history.push(paths.home));
  };
};

export const responseGoogleFailure = response => {
  return (dispatch, getState) => {
    console.log(response.error);
  };
};

export const logout = history => {
  return (dispatch, getState) => {
    dispatch(setIsAuthenticated(false));
    dispatch(setAccessToken(''));
    dispatch(setBestScore(0));
    history.push(paths.home);
  };
};

const sendBestScore = (score, token) => {
  const init = {
    method: 'PUT',
    body: JSON.stringify({ bestScore: score }),
    headers: new Headers({
      Authorization: 'Bearer ' + token,
      'content-type': 'application/json'
    })
  };

  fetch('http://localhost:5000/user/score/', init).then(null, error =>
    console.log(error)
  );
};
