import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const LoginView = props => {
  let button;

  if (!props.isLoggedIn) {
    button = (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Google Login"
        onSuccess={props.handleGoogleLoginSuccess}
        onFailure={props.handleGoogleLoginFailure}
      />
    );
  } else {
    button = (
      <GoogleLogout
        buttonText="Google Logout"
        onLogoutSuccess={props.handleGoogleLogoutSuccess}
      />
    );
  }

  return (
    <Container>
      <Row>
        <Col>{button}</Col>
      </Row>
    </Container>
  );
};

LoginView.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleGoogleLoginSuccess: PropTypes.func.isRequired,
  handleGoogleLoginFailure: PropTypes.func.isRequired,
  handleGoogleLogoutSuccess: PropTypes.func.isRequired
};

export default LoginView;
