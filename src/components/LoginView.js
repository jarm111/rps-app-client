import React from 'react';
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const LoginView = props => (
  <Container>
    <Row>
      <Col>
        <h2>Login</h2>
      </Col>
    </Row>
    <Form>
      <FormGroup row>
        <Label for="username" hidden>
          User
        </Label>
        <Col>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" hidden>
          Password
        </Label>
        <Col>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>
          <Button>Login</Button>
        </Col>
      </FormGroup>
    </Form>
  </Container>
);

export default LoginView;
