import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const GameStatusText = props => {
  let color = '';
  let text = '';
  switch (props.status) {
    case 'choose':
      color = 'info';
      text = 'CHOOSE';
      break;
    case 'win':
      color = 'success';
      text = 'WIN';
      break;
    case 'loss':
      color = 'danger';
      text = 'LOSS';
      break;
    case 'tie':
      color = 'warning';
      text = 'TIE';
      break;
    default:
      break;
  }

  return (
    <div className="row">
      <div className="col">
        <Alert color={color}>{text}</Alert>
      </div>
    </div>
  );
};

GameStatusText.propTypes = {
  status: PropTypes.string.isRequired
};

export default GameStatusText;
