import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const LoginView = props => (
  <Container>
    <Row>
      <Col>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Google Login"
          onSuccess={props.handleGoogleLoginSuccess}
          onFailure={props.handleGoogleLoginFailure}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <GoogleLogout
          buttonText="Google Logout"
          onLogoutSuccess={props.handleGoogleLogoutSuccess}
        />
      </Col>
    </Row>
  </Container>
);

LoginView.propTypes = {
  handleGoogleLoginSuccess: PropTypes.func.isRequired,
  handleGoogleLoginFailure: PropTypes.func.isRequired,
  handleGoogleLogoutSuccess: PropTypes.func.isRequired
};

export default LoginView;
