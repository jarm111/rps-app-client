import GameLogic from './GameLogic';
import ScoreLogic from './ScoreLogic';
import { GameStatus } from './enums';

export const SET_BEST_SCORE = 'SET_BEST_SCORE';
export const SET_CURRENT_SCORE = 'SET_CURRENT_SCORE';
export const SET_PLAYER_SELECTION = 'SET_PLAYER_SELECTION';
export const SET_OPPONENT_SELECTION = 'SET_OPPONENT_SELECTION';
export const SET_ROUND_RESULT = 'SET_ROUND_RESULT';

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
    dispatch(
      setBestScore(
        ScoreLogic.calculateBestScore(
          getState().score.current,
          getState().score.best
        )
      )
    );
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
      .then(res => dispatch(setBestScore(res.bestScore)));
  };
};
