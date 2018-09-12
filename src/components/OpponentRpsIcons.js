import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import Rps from '../constants/Rps';

const OpponentRpsIcons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';

  return (
    <div className="row">
      <div className="col">
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
      </div>
    </div>
  );
};

OpponentRpsIcons.propTypes = {
  selected: PropTypes.object
};

export default OpponentRpsIcons;
