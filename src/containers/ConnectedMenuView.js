import { connect } from 'react-redux';
import { fetchBestScore } from '../model/actions';
import MenuView from '../components/MenuView';

const mapStateToProps = state => {
  return {
    bestScore: state.score.best
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDidMount: () => {
      dispatch(fetchBestScore());
    }
  };
};

const ConnectedMenuView = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuView);

export default ConnectedMenuView;
