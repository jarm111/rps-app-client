import { connect } from 'react-redux';
import ErrorAlert from '../components/ErrorAlert';

const mapStateToProps = state => {
  return {
    errorMessage: state.error.message,
    errorId: state.error.id
  };
};

const ConnectedErrorAlert = connect(mapStateToProps)(ErrorAlert);

export default ConnectedErrorAlert;
