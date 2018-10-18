import { connect } from 'react-redux';
import {
  responseGoogleSuccess,
  responseGoogleFailure,
  logout
} from '../model/thunks';
import LoginView from '../components/LoginView';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGoogleLoginSuccess: (response, history) => {
      dispatch(responseGoogleSuccess(response, history));
    },
    handleGoogleLoginFailure: response => {
      dispatch(responseGoogleFailure(response));
    },
    handleLogout: history => {
      dispatch(logout(history));
    }
  };
};

const ConnectedLoginView = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

export default ConnectedLoginView;
