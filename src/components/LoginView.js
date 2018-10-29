import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../utils/config';
import './LoginView.css';

const LoginView = props => {
  const loginButton = (
    <GoogleLogin
      className="LoginView-GoogleLogin"
      clientId={GOOGLE_CLIENT_ID}
      buttonText=""
      onSuccess={response =>
        props.handleGoogleLoginSuccess(response, props.history)
      }
      onFailure={props.handleGoogleLoginFailure}
    />
  );
  const logoutButton = (
    <GoogleLogout
      className="btn btn-info"
      buttonText="Log Out"
      onLogoutSuccess={() => props.handleLogout(props.history)}
    />
  );

  return (
    <Container className="mb-4">
      <Row>
        <Col xs="12" sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <CardTitle className="mb-4">
                {!props.isLoggedIn ? 'Log In' : 'Log Out'}
              </CardTitle>
              {props.isLoggedIn ? logoutButton : loginButton}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

LoginView.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleGoogleLoginSuccess: PropTypes.func.isRequired,
  handleGoogleLoginFailure: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default LoginView;
