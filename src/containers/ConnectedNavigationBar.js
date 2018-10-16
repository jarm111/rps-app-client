import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isAuthenticated,
    userName: state.user.userName
  };
};

const ConnectedNavigationBar = connect(mapStateToProps)(NavigationBar);

export default ConnectedNavigationBar;
