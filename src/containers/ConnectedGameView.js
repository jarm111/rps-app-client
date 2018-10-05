import { connect } from 'react-redux';
import { processRound, resetGame, fetchBestScore } from '../model/actions';
import GameView from '../components/GameView';

const mapStateToProps = state => {
  return {
    bestScore: state.score.best,
    currentScore: state.score.current,
    playerSelection: state.round.playerSelection,
    opponentSelection: state.round.opponentSelection,
    result: state.round.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePlayerRpsButtonClick: playerSelection => {
      dispatch(processRound(playerSelection));
    },
    handleUnmount: () => {
      dispatch(resetGame());
    },
    handleDidMount: () => {
      dispatch(fetchBestScore());
    }
  };
};

const ConnectedGameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameView);

export default ConnectedGameView;
