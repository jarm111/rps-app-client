import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const LoginView = props => {
  const responseGoogle = response => {
    console.log(response);
  };

  const logout = () => {
    console.log('Logged out user');
  };

  return (
    <Container>
      <Row>
        <Col>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Google Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <GoogleLogout buttonText="Google Logout" onLogoutSuccess={logout} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginView;
