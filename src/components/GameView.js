import React from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OpponentRpsIcons from './OpponentRpsIcons';
import GameStatusText from './GameStatusText';
import PlayerRpsButtons from './PlayerRpsButtons';
import GameLogic from '../model/GameLogic';
import ScoreBox from './ScoreBox';
import { GameStatus } from '../model/enums';
import ScoreLogic from '../model/ScoreLogic';
import { setBestScore, setCurrentScore } from '../model/actions';

const mapStateToProps = state => {
  return {
    bestScore: state.score.bestScore,
    currentScore: state.score.currentScore
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setScore: (bestScore, currentScore) => {
      dispatch(setBestScore(bestScore));
      dispatch(setCurrentScore(currentScore));
    }
  };
};

class ConnectedGameView extends React.Component {
  constructor(props) {
    super(props);

    this.getInitialState = this.getInitialState.bind(this);
    this.handlePlayerRpsButtonClick = this.handlePlayerRpsButtonClick.bind(
      this
    );

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      opponentSelection: null,
      playerSelection: null,
      result: GameStatus.Init
    };
  }

  handlePlayerRpsButtonClick(playerSelection) {
    const opponentSelection = GameLogic.drawOpponentSelection();
    const result = GameLogic.calculateRoundResult(
      playerSelection,
      opponentSelection
    );
    const currentScore = ScoreLogic.calculateCurrentScore(
      this.props.currentScore,
      result
    );
    const bestScore = ScoreLogic.calculateBestScore(
      this.props.currentScore,
      this.props.bestScore
    );
    this.setState({
      playerSelection: playerSelection,
      opponentSelection: opponentSelection,
      result: result,
      currentScore: currentScore,
      bestScore: bestScore
    });
    this.props.setScore(bestScore, currentScore);
  }

  render() {
    return (
      <Container>
        <Row>
          <ScoreBox text="Best Streak" score={this.props.bestScore} />
          <ScoreBox text="Current Streak" score={this.props.currentScore} />
        </Row>
        <OpponentRpsIcons selected={this.state.opponentSelection} />
        <GameStatusText status={this.state.result} />
        <PlayerRpsButtons
          selected={this.state.playerSelection}
          onClick={this.handlePlayerRpsButtonClick}
        />
      </Container>
    );
  }
}

ConnectedGameView.propTypes = {
  bestScore: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired
};

const GameView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedGameView);

export default GameView;
