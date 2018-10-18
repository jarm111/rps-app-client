import React from 'react';
import { Col, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { GameStatus } from '../model/enums';

const GameStatusText = props => {
  let color = '';
  let text = '';
  switch (props.status) {
    case GameStatus.Init:
      color = 'info';
      text = 'CHOOSE';
      break;
    case GameStatus.Win:
      color = 'success';
      text = 'WIN';
      break;
    case GameStatus.Loss:
      color = 'danger';
      text = 'LOSS';
      break;
    case GameStatus.Tie:
      color = 'warning';
      text = 'TIE';
      break;
    default:
      break;
  }

  return (
    <Col xs="6">
      <Alert color={color}>
        <h4>{text}</h4>
      </Alert>
    </Col>
  );
};

GameStatusText.propTypes = {
  status: PropTypes.object.isRequired
};

export default GameStatusText;
