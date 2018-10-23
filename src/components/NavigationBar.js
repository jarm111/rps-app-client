import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import routes from '../utils/routes';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const displayGreetings = this.props.isLoggedIn && this.props.userName;
    const greetings = (
      <NavItem className="mr-5">
        <span className="navbar-text">{this.props.userName}</span>
      </NavItem>
    );

    return (
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <Link className="navbar-brand" to={routes.home}>
            RPS
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {displayGreetings && greetings}
              <NavItem>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to={routes.home}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.play}
                >
                  Play
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.login}
                >
                  {this.props.isLoggedIn ? 'Log Out' : 'Log In  '}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

NavigationBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};
