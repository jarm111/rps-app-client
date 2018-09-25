import { connect } from 'react-redux';
import MenuView from '../components/MenuView';

const mapStateToProps = state => {
  return {
    bestScore: state.score.best
  };
};

const ConnectedMenuView = connect(mapStateToProps)(MenuView);

export default ConnectedMenuView;
