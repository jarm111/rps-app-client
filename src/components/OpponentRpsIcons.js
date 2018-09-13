import React from 'react';
import { Row, Col, Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import Rps from '../constants/Rps';

const OpponentRpsIcons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';

  return (
    <Row>
      <Col>
        <Badge
          color={props.selected === Rps.Rock ? selectedColor : defaultColor}
        >
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
    </Row>
  );
};

OpponentRpsIcons.propTypes = {
  selected: PropTypes.object
};

export default OpponentRpsIcons;
