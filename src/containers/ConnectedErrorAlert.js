import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';

const mapStateToProps = state => {
  return {
    errorMessage: state.error.message,
    errorId: state.error.id
  };
};

const ConnectedErrorAlert = withRouter(connect(mapStateToProps)(ErrorAlert));

export default ConnectedErrorAlert;
