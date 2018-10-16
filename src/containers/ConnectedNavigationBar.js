import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isAuthenticated
  };
};

const ConnectedNavigationBar = connect(mapStateToProps)(NavigationBar);

export default ConnectedNavigationBar;
