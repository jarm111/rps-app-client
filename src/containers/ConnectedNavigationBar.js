import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isAuthenticated,
    userName: state.user.userName
  };
};

const ConnectedNavigationBar = withRouter(
  connect(mapStateToProps)(NavigationBar)
);

export default ConnectedNavigationBar;
