import GameLogic from '../utils/GameLogic';
import ScoreLogic from '../utils/ScoreLogic';
import { GameStatus } from '../utils/enums';
import routes from '../utils/routes';
import { getTokenAndBestScore, sendBestScore } from '../utils/apiCalls';
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
      sendBestScore(getState().score.best, getState().user.accessToken).then(
        null,
        error => console.error(error)
      );
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
    const userName = response.profileObj.givenName;

    getTokenAndBestScore(response.accessToken)
      .then(res => {
        if (res.token) {
          history.push(routes.home);
          dispatch(setIsAuthenticated(true));
          dispatch(setAccessToken(res.token));
          dispatch(setBestScore(res.bestScore));
          userName && dispatch(setUserName(userName));
        }
      })
      .catch(error => console.error(error));
  };
};

export const responseGoogleFailure = response => {
  return (dispatch, getState) => {
    console.error(response.error);
  };
};

export const logout = history => {
  return (dispatch, getState) => {
    history.push(routes.home);
    dispatch(setIsAuthenticated(false));
    dispatch(setAccessToken(''));
    dispatch(setBestScore(0));
  };
};