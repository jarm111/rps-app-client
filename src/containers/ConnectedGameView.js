import { connect } from 'react-redux';
import { setBestScore, setCurrentScore } from '../model/actions';
import GameView from '../components/GameView';

const mapStateToProps = state => {
  return {
    bestScore: state.score.bestScore,
    currentScore: state.score.currentScore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setScore: (bestScore, currentScore) => {
      dispatch(setBestScore(bestScore));
      dispatch(setCurrentScore(currentScore));
    }
  };
};

const ConnectedGameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameView);

export default ConnectedGameView;
