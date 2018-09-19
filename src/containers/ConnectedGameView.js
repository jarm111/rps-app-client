import { connect } from 'react-redux';
import {
  setBestScore,
  setCurrentScore,
  setPlayerSelection,
  setOpponentSelection,
  setRoundResult
} from '../model/actions';
import GameView from '../components/GameView';

const mapStateToProps = state => {
  return {
    bestScore: state.score.bestScore,
    currentScore: state.score.currentScore,
    playerSelection: state.round.playerSelection,
    opponentSelection: state.round.opponentSelection,
    result: state.round.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setScore: (bestScore, currentScore) => {
      dispatch(setBestScore(bestScore));
      dispatch(setCurrentScore(currentScore));
    },
    setRound: (playerSelection, opponentSelection, result) => {
      dispatch(setPlayerSelection(playerSelection));
      dispatch(setOpponentSelection(opponentSelection));
      dispatch(setRoundResult(result));
    }
  };
};

const ConnectedGameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameView);

export default ConnectedGameView;
