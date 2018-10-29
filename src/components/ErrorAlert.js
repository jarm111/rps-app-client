import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default class ErrorAlert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.visible && prevProps.errorId !== this.props.errorId) {
      this.setState({ visible: true });
    }
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
        Error: {this.props.errorMessage}
      </Alert>
    );
  }
}

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string,
  errorId: PropTypes.number
};
