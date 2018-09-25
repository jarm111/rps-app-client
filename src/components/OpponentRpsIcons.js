import React from 'react';
import { Col, Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import { Rps } from '../model/enums';

const OpponentRpsIcons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';

  return (
    <Col>
      <Badge color={props.selected === Rps.Rock ? selectedColor : defaultColor}>
        ROCK
      </Badge>
      <Badge
        color={props.selected === Rps.Paper ? selectedColor : defaultColor}
      >
        PAPER
      </Badge>
      <Badge
        color={props.selected === Rps.Scissors ? selectedColor : defaultColor}
      >
        SCISSORS
      </Badge>
    </Col>
  );
};

OpponentRpsIcons.propTypes = {
  selected: PropTypes.object
};

export default OpponentRpsIcons;
