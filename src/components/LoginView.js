import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../utils/config';

const LoginView = props => {
  const loginButton = (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Google Sign-in"
      onSuccess={response =>
        props.handleGoogleLoginSuccess(response, props.history)
      }
      onFailure={props.handleGoogleLoginFailure}
    />
  );
  const logoutButton = (
    <GoogleLogout
      buttonText="Log Out"
      onLogoutSuccess={() => props.handleGoogleLogoutSuccess(props.history)}
    />
  );

  return (
    <Container>
      <Row>
        <Col>{props.isLoggedIn ? logoutButton : loginButton}</Col>
      </Row>
    </Container>
  );
};

LoginView.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleGoogleLoginSuccess: PropTypes.func.isRequired,
  handleGoogleLoginFailure: PropTypes.func.isRequired,
  handleGoogleLogoutSuccess: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default LoginView;
