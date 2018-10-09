import { connect } from 'react-redux';
import { responseGoogle, logout } from '../model/actions';
import LoginView from '../components/LoginView';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGoogleLoginSuccess: response => {
      dispatch(responseGoogle(response));
    },
    handleGoogleLoginFailure: response => {
      dispatch(responseGoogle(response));
    },
    handleGoogleLogoutSuccess: response => {
      dispatch(logout());
    }
  };
};

const ConnectedLoginView = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

export default ConnectedLoginView;
